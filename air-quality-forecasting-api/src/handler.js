const data = require('./data.json');

const getAllDataHandler = (request, h) => {
  // Mengambil query date
  const {date} = request.query;

  // Jika ada query date yang dikirim
  if (date) {
    // Filter data berdasarkan date
    const filteredData = data.filter(
        (d) => d.tanggal.indexOf(date) !== -1);

    // Jika data yang terfilter tidak ada
    // return 404 , data not found
    if (filteredData.length == 0) {
      const response = h.response({
        status: 'fail',
        message: 'data not found',
      });
      response.code(404);
      return response;
    }

    // Jika data yang terfilter ada
    // return 200 and kembalikan data yang ditemukan
    const response = h.response({
      status: 'success',
      data: filteredData,
    });
    response.code(200);
    return response;
  }

  // Jika tidak ada query date
  // return semua data yang ada
  const response = h.response({
    status: 'success',
    data: data,
  });
  response.code(200);
  return response;
};

module.exports = {getAllDataHandler};
