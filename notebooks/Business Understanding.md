## Business Understanding
Bagian ini menjelaskan proses klarifikasi masalah dan mengajukan solusi untuk menyelesaikan permasalahan. Bagian laporan ini mencakup:

### Problem Statements
1. Bagaimana membuat sistem prediksi polusi udara di daerah Jakarta dengan model Neural Network?
2. Bagaimana membuat sistem klasifikasi kategori kualitas udara di daerah Jakarta berdasarkan hasil prediksi polusi udara menggunakan Random Forest?

### Goals
1. Menghasilkan prediksi polusi udara di daerah Jakarta dengan model Neural Network.
2. Menghasilkan klasifikasi kategori kualitas udara di daerah Jakarta berdasarkan hasil prediksi polusi udara menggunakan Random Forest.

### Solution statements
Dalam menyelesaikan permasalahan memprediksi polusi daerah Jakarta akan digunakan model Neural Network dan untuk mengklasifikasikan kategori kualitas udara di daerah Jakarta berdasarkan hasil prediksi polusi udara akan digunakan model Random Forest.
- **Neural Network**. Neural network merupakan model yang terinspirasi dari neuron di dalam otak manusia bekerja. Setiap neuron di otak manusia saling berhubungan dan mengalirkan informasi dari tiap neuron tersebut. Setiap neuron menerima input dan melakukan operasi dot dengan sebuah weight, menjumlahkannya (weighted sum) dan menambahkan bias. Hasil dari operasi ini nantinya akan dijadikan parameter dari activation function yang akan dijadikan output dari neuron tersebut.
![image](https://user-images.githubusercontent.com/22268453/147344597-05da1c81-4fd6-45b8-81c6-eaade5b0014f.png)
- **Random Forest**. Algoritma random forest adalah salah satu algoritma supervised learning. Ia dapat digunakan untuk menyelesaikan masalah klasifikasi dan regresi. Random forest memiliki kelebihan menghasilkan eror yang lebih rendah, memberikan hasil yang bagus dalam klasifikasi, dan dapat mengatasi data training dalam jumlah sangat besar secara efisien. Kekurangan random forest yakni waktu pemrosesan yang lama karena menggunakan data yang banyak dan membangun model tree yang banyak pula untuk membentuk random trees karena menggunakan single processor. Model ini akan digunakan untuk menyelesaikan permasalahan karena dapat melakukan klasifikasi data dalam jumlah yang besar.