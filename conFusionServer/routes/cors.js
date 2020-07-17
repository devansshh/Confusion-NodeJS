const express = require('express');
const cors = require('cors');
const app = express();

const whiteList = [
        'http://localhost:3421',
        'https://localhost:3864',
        'http://Devansh:3001'
];

var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    if (whiteList.indexOf(req.header('origin')) !== -1) {
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);