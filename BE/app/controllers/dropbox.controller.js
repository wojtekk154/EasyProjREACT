require('isomorphic-fetch');
const Dropbox = require('dropbox').Dropbox;
const fs = require('fs');
const path = require('path');


exports.uploadToDropbox = (req, res) => {
    fs.readFile(req.file.path, (err, contents) => {
        dbx.filesUpload({ path: '/EasyPro/' + req.file.filename + req.file.originalname, contents: contents })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (err) {
                // console.log(err);
            });
    });










    console.log(req.file);
    var dbx = new Dropbox({accessToken: 'mqKF-kscA4AAAAAAAAAACUwbdaZqSHG50X9Mnld9KhvK744mYDbRN48a8S72dUzW'});
    dbx.filesUpload({path: '/' + req.file.originalname, contents: req.file.destination + req.file.filename})
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.error(error);
        });
    return res.json({success: true});
};

