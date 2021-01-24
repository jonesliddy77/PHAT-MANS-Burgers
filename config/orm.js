// ORM object made by myself
var connection = require('./connection.js');

let orm = {
    // selectAll method
    all: function (tableInput, callback) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    // insertOne method
    create: (newBurger, callback) => {
        const queryStr = 'INSERT INTO burgers (burger_name) VALUES (?)';
        connection.query(queryStr, newBurger, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    // updateOne method
    update: (id, callback) => {
        const queryStr = 'UPDATE burgers SET devoured = NOT devoured WHERE id = ?';
        connection.query(queryStr, id, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    devoured: (selectedID, callback) => {
        const queryStr =
            'UPDATE burgers SET devoured = NOT devoured WHERE id = ?';
        connection.query(queryStr, selectedID, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
};

// export orm object
module.exports = orm;
