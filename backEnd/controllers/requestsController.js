'use strict';

const controller = {};
const models = require('../models');
const amqp = require('amqplib/callback_api');

controller.createRequest = async (req, res) => {
  const { customerId, pickupLocation, dropoffLocation } = req.body;

  try {
    const newRequest = await models.RideRequest.create({
      customerId,
      requestTime: new Date(),
      pickupLocation,
      dropoffLocation,
      status: 'pending',
    });

    // Gửi thông điệp đến hàng đợi RabbitMQ
    amqp.connect('amqp://localhost', (err, conn) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Could not connect to RabbitMQ');
      }
      conn.createChannel((err, ch) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Could not create channel');
        }
        const q = 'ride_requests';
        ch.assertQueue(q, { durable: true });
        ch.sendToQueue(q, Buffer.from(JSON.stringify(newRequest)));
        console.log(' [x] Sent %s', JSON.stringify(newRequest));
      });
      setTimeout(() => { conn.close(); }, 500);
    });

    res.status(201).json(newRequest);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = controller;
