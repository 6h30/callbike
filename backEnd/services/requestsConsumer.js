'use strict';

const models = require('../models');
const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
  if (err) {
    throw err;
  }
  conn.createChannel((err, ch) => {
    if (err) {
      throw err;
    }
    const q = 'ride_requests';
    ch.assertQueue(q, { durable: true });
    ch.consume(q, async (msg) => {
      const newRequest = JSON.parse(msg.content.toString());
      console.log(' [x] Received %s', msg.content.toString());

      // Tìm tài xế gần nhất đang sẵn sàng
      const availableDriver = await models.Driver.findOne({
        where: { status: 'available' },
        order: [
          [sequelize.fn('ST_Distance_Sphere', sequelize.literal('point(currentLocation)'), sequelize.literal(`point(${newRequest.pickupLocation})`)), 'ASC']
        ],
      });

      if (availableDriver) {
        // Cập nhật trạng thái tài xế và yêu cầu
        availableDriver.status = 'busy';
        await availableDriver.save();

        newRequest.driverId = availableDriver.driverId;
        newRequest.status = 'accepted';
        await models.RideRequest.update(newRequest, { where: { requestId: newRequest.requestId } });
      } else {
        // Không có tài xế nào có sẵn, cập nhật trạng thái yêu cầu
        newRequest.status = 'no_driver_available';
        await models.RideRequest.update(newRequest, { where: { requestId: newRequest.requestId } });
      }

      // Xác nhận đã xử lý xong thông điệp
      ch.ack(msg);
    }, { noAck: false });
  });
});
