// var mysql = require('mysql2');
// const axios = require('axios')
// const dbConfig = require('./app/config/db.config.js');

// var con = mysql.createConnection({
//     host: dbConfig.HOST,
//     user: dbConfig.USER,
//     database: dbConfig.DB,
//     password: dbConfig.PASSWORD
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!"); 
// });

// con.query('CREATE TABLE cart (id int NOT NULL PRIMARY KEY auto_increment, cart_id BINARY(16), product_id int(10) unsigned, quantity int(10), created_on datetime DEFAULT CURRENT_TIMESTAMP);', (err, res) => {
//     if(err) {
//         console.log("error: ", err);
//         return;
//     }
//     console.log('cart table created successfully')
// });

// axios.get('http://dummyjson.com/products')
// .then((res) => {
//     const products = res.data.products;
//     try {
//         products.forEach((prd) => {
//             const images = prd.images;
//             const productId = prd.id + 1;
//             images.forEach(imgSrc => {
//                 con.query("INSERT INTO product_images (" + "product_id, " + "img_src"+") VALUES (?, ?)", [productId, imgSrc]);
//             });
//            });
//         console.log('successfully inserted');
//     } catch(error) {
//         console.log(error);
//     }
// })
// .catch(err => {console.log(err)})

