// controllers/tripController.js
exports.getTripRequests = (req, res) => {
    // Logic để lấy danh sách yêu cầu chuyến đi cho tài xế
    res.send("List of trip requests for driver.");
};

exports.acceptTrip = (req, res) => {
    const { tripId } = req.params;
    // Logic để chấp nhận chuyến đi
    res.send(`Trip ${tripId} accepted successfully.`);
};

exports.completeTrip = (req, res) => {
    const { tripId } = req.params;
    // Logic để hoàn thành chuyến đi
    res.send(`Trip ${tripId} completed successfully.`);
};
