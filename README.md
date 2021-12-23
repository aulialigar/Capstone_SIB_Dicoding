# Prediksi Kualitas Udara berdasarkan Indeks Standar Pencemar Udara di DKI Jakarta

Merupakan Capstone Project dalam Program Studi Independen Bersertifikat Dicoding Indonesia, Paket Pengembang Machine Learning dan Front-End Web.

Dibuat oleh: Tim CSD-052
- M258V6242 - Aulia Ligar Salma Hanani
- M332R6346 - Yusuf Sugiono

## Backgrounder
Berdasarkan hasil riset oleh Hannah Ritchie dan Max Roser menyebutkan bahwa polusi udara menjadi salah satu penyebab utama kematian di dunia [[1](https://ourworldindata.org/air-pollution)]. Hal ini diperkuat dengan data dari Institute for Health Metrics and Evaluation (IHME) dalam studinya Global Burden of Disease yang menyatakan bahwa polusi udara menyebabkan kematian yang terus meningkat setiap tahun dan sepanjang 2017 menimbulkan 4,9 juta kematian secara global [[2](http://dx.doi.org/10.1016/S0140-6736(18)32225-6)]. Untuk itu pada proyek ini akan dibuat prediksi kualitas udara sehingga dapat dilakukan tindakan pencegahan untuk mengurangi risiko kesehatan yang mungkin dialami masyarakat, khususnya untuk lingkup wilayah DKI Jakarta.

Aspek yang diterapkan dalam pengerjaan capstone project ini yaitu meliputi machine learning, back-end, serta front-end Pada aspek machine learning dilakukan pembuatan model untuk melakukan forecasting variabel indeks standar pencemar udara dan model klasifikasi kategori kualitas udara berdasarkan data yang ada. Model untuk melakukan forecasting menggunakan Neural Network, sedangkan model klasifikasi menggunakan Random Forest. Hasil peramalan indeks standar pencemar udara kemudian menjadi input untuk diklasifikan kategori kualitas udaranya.

Hasil peramalan dan klasifikasi kemudian di-deploy menjadi sebuah API. Pembuatan API menggunakan NodeJs dengan Hapi Framework. Backend ini dapat menerima permintaan untuk semua data peramalan kualitas udara atau data peramalan kualitas udara pada tanggal tertentu saja.

Pada sisi front-end menerapkan website sederhana menggunakan HTML, CSS, JS dan dibantu dengan Bootstrap. Website ini berguna untuk menampilkan data hasil peramalan yang telah di-deploy pada API. Permintaan data dilakukan menggunakan Javascript. Dengan dibuatnya keluaran berupa front-end web diharapkan dapat menyampaikan hasil forecasting yang lebih informatif kepada publik.

Aplikasi yang telah dibuat saat ini telah dapat digunakan dan diakses. Namun karena adanya keterbatasan data, maka peramalan kualitas udara yang dapat kami lakukan juga terbatas pada bulan Agustus 2021. Jika dimungkinkan untuk pengembangan lebih lanjut akan menunggu data terbaru yang disediakan oleh Dinas Lingkungan Hidup DKI Jakarta melalui Open Data Jakarta.

## Deployed Link
- [API](https://air-quality-forecasting-api.herokuapp.com)
- [Website](https://udarajakarta.herokuapp.com)

## Datasets
1. [Open Data Jakarta - Indeks Standar Pencemaran Udara (ISPU) Tahun 2010](https://data.jakarta.go.id/dataset/indeks-standar-pencemaran-udara-ispu-tahun-2010)
2. [Open Data Jakarta - Indeks Standar Pencemaran Udara (ISPU) Tahun 2011](https://data.jakarta.go.id/dataset/indeks-standar-pencemaran-udara-ispu-tahun-2011)
3. [Open Data Jakarta - Indeks Standar Pencemaran Udara (ISPU) Tahun 2012](https://data.jakarta.go.id/dataset/indeks-standar-pencemaran-udara-ispu-tahun-2012)
4. [Open Data Jakarta - Indeks Standar Pencemaran Udara (ISPU) Tahun 2013](https://data.jakarta.go.id/dataset/indeks-standar-pencemaran-udara-ispu-tahun-2013)
5. [Open Data Jakarta - Indeks Standar Pencemaran Udara (ISPU) Tahun 2014](https://data.jakarta.go.id/dataset/indeks-standar-pencemaran-udara-ispu-tahun-2014)
6. [Open Data Jakarta - Indeks Standar Pencemaran Udara (ISPU) Tahun 2015](https://data.jakarta.go.id/dataset/indeks-standar-pencemaran-udara-ispu-tahun-2015)
7. [Open Data Jakarta - Indeks Standar Pencemaran Udara (ISPU) Tahun 2016](https://data.jakarta.go.id/dataset/indeks-standar-pencemaran-udara-ispu-tahun-2016)
8. [Open Data Jakarta - Indeks Standar Pencemaran Udara (ISPU) Tahun 2017](https://data.jakarta.go.id/dataset/indeks-standar-pencemaran-udara-ispu-tahun-2017)
9. [Open Data Jakarta - Data Indeks Standar Pencemar Udara (ISPU) di Provinsi DKI Jakarta Tahun 2018](https://data.jakarta.go.id/dataset/indeks-standar-pencemar-udara-di-provinsi-dki-jakarta-tahun-2018)
10. [Open Data Jakarta - Indeks Standar Pencemaran Udara (ISPU) Tahun 2019](https://data.jakarta.go.id/dataset/data-indeks-standar-pencemar-udara-ispu-di-provinsi-dki-jakarta-tahun-2019)
11. [Open Data Jakarta - Indeks Standar Pencemaran Udara (ISPU) Tahun 2020](https://data.jakarta.go.id/dataset/indeks-standar-pencemaran-udara-ispu-tahun-2020)
12. [Open Data Jakarta - Indeks Standar Pencemaran Udara (ISPU) Tahun 2021](https://data.jakarta.go.id/dataset/indeks-standar-pencemaran-udara-ispu-tahun-2021)


## Library dan Framework
Pada pengerjaan capstone project ini menggunakan beberapa library maupun framework diantaranya:
- [TensorFlow](https://tensorflow.org)
- [Pandas](https://pandas.pydata.org/)
- [NumPy](https://numpy.org/)
- [Matplotlib](https://matplotlib.org/)
- [Seaborn](https://seaborn.pydata.org/)
- [Scikit-learn](https://scikit-learn.org/)
- [Hapi Framework](https://hapi.dev/)
- [Bootstrap Framework](https://getbootstrap.com/)
- [Material Icons](https://developers.google.com/fonts/docs/material_icons)

## Referensi

[[1](https://ourworldindata.org/air-pollution)] Hannah Ritchie and Max Roser (2017) - "Air Pollution". *Published online at OurWorldInData.org*. Retrieved from: 'https://ourworldindata.org/air-pollution' [Online Resource]

[[2](http://dx.doi.org/10.1016/S0140-6736(18)32225-6)] GBD 2017 Risk Factor Collaborators. **Global, regional, and national comparative risk assessment of 84 behavioural, environmental and occupational, and metabolic risks or clusters of risks for 195 countries and territories, 1990–2017: a systematic analysis for the Global Burden of Disease Study 2017**. The Lancet. 8 Nov 2018;392:1923-94. doi: http://dx.doi.org/10.1016/S0140-6736(18)32225-6.
