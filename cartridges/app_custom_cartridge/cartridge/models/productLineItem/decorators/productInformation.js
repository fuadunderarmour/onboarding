'use strict';

module.exports = function (object, information) {
    Object.defineProperty(object, 'information', {
        enumerable: true,
        value: information
    });
};
