// Logic để lấy bản đồ dựa trên vị trí người dùng, độ phân giải thiết bị và loại bản đồ
exports.getMap = (req, res) => {
    const { userLocation, deviceResolution, mapType } = req.query;
    // Logic để lấy bản đồ từ dịch vụ bản đồ (ví dụ: Google Maps API)
    // Return bản đồ hoặc URL bản đồ
    res.send(`Map for location ${userLocation}, resolution ${deviceResolution}, map type ${mapType}`);
};
// getLocationController.js
const locationService = require('./LocationService');

class GetLocationController {
    async getLocation(req, res) {
        const { address } = req.query;

        try {
            const location = await locationService.getLocation(address);
            res.json(location);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new GetLocationController();

exports.getTravelPathETA = (req, res) => {
    const { startLocation, destinationLocation } = req.query;
    // Logic để lấy thời gian ước lượng từ dịch vụ bản đồ (ví dụ: Google Maps API)
    // Return thời gian ước lượng (ví dụ: số phút hoặc đối tượng thời gian)
    res.send(`ETA from ${startLocation} to ${destinationLocation}`);
};
