// import orm object
var orm = require('../config/orm.js');

const burger = {
    // the callback parameter renders the results to the index.handlebars template
    all: function (callback) {
        orm.all('burgers', function (res) {
            callback(res);
        });
    },
    create: (newBurger, callback) => {
        orm.create(newBurger, (response) => {
            callback(response);
        });
    },
    update: (selectedID, callback) => {
        orm.update(selectedID, (response) => {
            callback(response);
        });
    },
    delete: (selectedID, callback) => {
        orm.devoured(selectedID, (response) => {
            callback(response);
        });
    },
};
module.exports = burger;


