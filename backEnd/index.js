// index.js
const express = require('express');
const port = process.env.PORT || 4000;
const app = express();

const indexRoutes = require('./routes/indexRouter');
const usersRoutes = require('./routes/usersRouter');
const tripsRoutes = require('./routes/tripsRouter');

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Sử dụng route cho các yêu cầu tới /api
app.use('/api', indexRoutes);
app.use('/api', tripsRoutes);
app.use('/api', usersRoutes);


// Thêm middleware để xử lý lỗi 404
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});


// Khởi động máy chủ
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})

