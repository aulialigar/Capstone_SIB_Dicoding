$(document).ready(function(){

  
  function generateDate(data){
    const arrDay = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    const arrMon = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let d = new Date(data);
    return {
      "ori-date" : data,
      "dd" : d.getDate(),
      "mm" : d.getMonth(),
      "day" : arrDay[d.getDay()],
      "month" : arrMon[d.getMonth()],
      "year" : d.getFullYear(),
    }
  }

  function generateEmoji(data){
    let emoticon;
    let emocolor;
    let message;
    
    if (data == "BAIK") {
      emoticon = "sentiment_very_satisfied";
      emocolor = "text-success";
      message = "Kualitas udara hari ini baik. Anda dapat bebas beraktifitas di luar ruangan. Namun tetap hindari kerumunan dan selalu pakai masker untuk mencegah penularan COVID-19."
    }else if(data == "SEDANG") {
      emoticon = "sentiment_neutral";
      emocolor = "text-light";
      message = "Kualitas udara hari ini dalam kategori sedang. Anda dapat beraktifitas di luar ruangan seperlunya saja. Kurangi aktifitas yang mengakibatkan polusi udara dan selalu pakai masker."
    }else if(data == "TIDAK SEHAT") {
      emoticon = "sentiment_dissatisfied";
      emocolor = "text-warning";
      message = "Kualitas udara sedang tidak sehat. Kurangi aktifitas di luar ruangan dan kurangi kegiatan yang menimbulkan polusi udara. Selalu pakai masker jika terpaksa berada di luar ruangan dan utamakan untuk berada di rumah saja."
    }else if(data == "SANGAT TIDAK SEHAT") {
      emoticon = "sentiment_very_dissatisfied";
      emocolor = "xwarn";
      message = "Kualitas udara sangat tidak sehat. Jangan melakukan aktifitas di luar rumah. Jika ditemukan gejala gangguan pada pernafasan harap segera menghubungi dokter atau rumah sakit terdekat."
    }else if(data == "BERBAHAYA") {
      emoticon = "warning";
      emocolor = "text-danger";
      message = "Kualitas udara dalam kategori berbahaya. Jangan melakukan aktifitas di luar rumah. Jika ditemukan gejala gangguan pada pernafasan harap segera menghubungi dokter atau rumah sakit terdekat."
    }

    return {
      "emoticon" : emoticon,
      "emocolor" : emocolor,
      "message" : message,
    }
  }

  function renderHeader(data){
    let newtgl = generateDate(data.tanggal);
    let emo = generateEmoji(data.categori);
    const jumbo = `<div class="container-fluid">
        <div class="row">
          <div class="col-md-9">
            <h1>Jakarta, Indonesia</h1>
            <p class="date">${newtgl.day}, ${newtgl.dd} ${newtgl.month} ${newtgl.year}</p>
          </div>
          <div class="col-md-3 text-center">
            <p class="status">${data.categori}</p>
            <span class="${emo.emocolor} material-icons md-120"> ${emo.emoticon} </span>
          </div>
        </div>
        <p>${emo.message}</p>
        <div class="row text-center justify-content-left">
          <div class="col-md-2">
            <p class="particle">PM10 <span class="badge badge-light">${data.pm10}</span></p>
          </div>
          <div class="col-md-2">
            <p class="particle">SO<sub>2</sub> <span class="badge badge-light">${data.so2}</span></p>
          </div>
          <div class="col-md-2">
            <p class="particle">CO <span class="badge badge-light">${data.co}</span></p>
          </div>
          <div class="col-md-2">
            <p class="particle">O<sub>3</sub> <span class="badge badge-light">${data.o3}</span></p>
          </div>
          <div class="col-md-2">
            <p class="particle">NO<sub>2</sub> <span class="badge badge-light">${data.no2}</span></p>
          </div>
        </div>
      </div>`;

      document.getElementById('jumbotron-head').innerHTML = jumbo;

  }

  function renderMain(data){
    let content = "";
    for (var i = 1; i <= data.length - 1; i++) {
      let newtgl = generateDate(data[i].tanggal);
      let emo = generateEmoji(data[i].categori);
      let contentItem = `<div class="card day">
            <p class="card-title">${newtgl.day}</p>
            <p class="card-text">${newtgl.dd}/${newtgl.mm+1}/${newtgl.year}</p>
            <span class="${emo.emocolor} material-icons md-52"> ${emo.emoticon} </span>
            <small class="mb-2 mt-4">${data[i].categori}</small>
          </div>
        </div>`;
      content += contentItem;
    }
    document.getElementById('main-forecast').innerHTML = content;
  }

  const url = 'https://air-quality-forecasting-api.herokuapp.com/';

  fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      if(responseJson.data){
        return Promise.resolve(responseJson.data);
      }else{
        return Promise.reject("Failed to fetch data!")
      }
    })
    .then(result => {
      renderHeader(result[0]);
      renderMain(result);
    })
    .catch(err => console.log(err))
});

