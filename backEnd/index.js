// index.js

const express = require('express');
const app = express();
const bookingRoutes = require('./routes/bookingRouter');

// Sử dụng route cho các yêu cầu tới /api/bookings
app.use('/api', bookingRoutes);


// Thêm middleware để xử lý lỗi 404
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});


// Khởi động máy chủ
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
