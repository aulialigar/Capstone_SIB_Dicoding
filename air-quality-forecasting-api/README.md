# Web-API Data Peramalan Kualitas Udara di DKI Jakarta

## Intro
API ini dibuat untuk melayani permintaan data peramalan data yang telah dibuat sebelumnya menggunakan model machine learning. API ini dibangun menggunakan NodeJS dengan [Hapi Framework](https://hapi.dev/).

## Instalasi
Jika ingin menjalankan API ini secara lokal, maka terlebih dahulu dapat diinstal menggunakan `npm`

```sh
npm install
```

Untuk menjalankan dalam mode development:

```sh
npm run dev
```

Untuk menjalankan dalam mode production:

```sh
npm run start
```

> Note:
> 
> Sourcecode repo ini dibuat untuk dihost pada platform Heroku. Jika tidak dapat berjalan di lokal, maka kemungkinan perlu mengganti host pada code `src/server.js` dari `'0.0.0.0'` menjadi `'localhost'` atau `'127.0.0.1'`
> 
> Alamat akses untuk di lokal adalah `localhost:5000` atau `127.0.0.1:5000`

## Demo
API ini juga telah online dan dapat diakses dengan endpoint :

https://air-quality-forecasting-api.herokuapp.com/

## Route
API ini dapat melayani permintaan semua data dan data di tanggal tertentu.

### Mengambil Semua Data

Request:
> `GET` https://air-quality-forecasting-api.herokuapp.com/

Response:

```js
{
    "status" : string,
    "data" : [{
        "tanggal" : date(YYYY-MM-DD),
        "pm10" : number,
        "so2" : number,
        "co" : number,
        "o3" : number,
        "no2" : number,
        "categori" : string,
    },{
        ...
    }],
}
```

### Mengambil Data pada Tanggal Tertentu

Request:
> `GET` https://air-quality-forecasting-api.herokuapp.com/?date=YYYY-MM-DD

Response if success:

```js
{
    "status" : string, // success
    "data" : [{
        "tanggal" : date(YYYY-MM-DD),
        "pm10" : number,
        "so2" : number,
        "co" : number,
        "o3" : number,
        "no2" : number,
        "categori" : string,
    }],
}
```

Response if fail:
```js
{
    "status" : string, // fail
    "message" : string,
}
```
