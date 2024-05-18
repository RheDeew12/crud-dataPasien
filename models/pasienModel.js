const connection = require('../db');

const Pasien = function(data_pasien) {
    this.nama_pasien = data_pasien.nama_pasien;
    this.umur = data_pasien.umur;
    this.jenis_kelamin = data_pasien.jenis_kelamin;
    this.no_telp_pasien = data_pasien.no_telp_pasien;
    this.keluhan = data_pasien.keluhan;
    this.konsultasi_dokter = data_pasien.konsultasi_dokter;
    this.jam_konsultasi = data_pasien.jam_konsultasi;
};

Pasien.create = (newPasien, result) => {
    connection.query("INSERT INTO data_pasien SET ?", newPasien, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res.insertId);
        }
    });
};

Pasien.findById = (id_pasien, result) => {
    connection.query("SELECT * FROM data_pasien WHERE id_pasien = ?", [id_pasien], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res[0]);
        }
    });
};

Pasien.findAll = (result) => {
    connection.query("SELECT * FROM data_pasien", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Pasien.update = (id_pasien, data_pasien, result) => {
    connection.query("UPDATE data_pasien SET nama_pasien = ?, umur = ?, jenis_kelamin = ?, no_telp_pasien = ?, keluhan = ?, konsultasi_dokter = ?, jam_konsultasi = ? WHERE id_pasien = ?", 
    [data_pasien.nama_pasien, data_pasien.umur, data_pasien.jenis_kelamin, data_pasien.no_telp_pasien, data_pasien.keluhan, data_pasien.konsultasi_dokter,data_pasien.jam_konsultasi, id_pasien], 
    (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Pasien.delete = (id_pasien, result) => {
    connection.query("DELETE FROM data_pasien WHERE id_pasien = ?", [id_pasien], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

module.exports = Pasien;
