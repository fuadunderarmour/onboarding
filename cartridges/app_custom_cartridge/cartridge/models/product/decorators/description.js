/* eslint-disable linebreak-style */
'use strict';

module.exports = function (object, product) {
    Object.defineProperty(object, 'longDescription', {
        enumerable: true,
        value: product.longDescription ? product.longDescription.markup : null
    });
    Object.defineProperty(object, 'shortDescription', {
        enumerable: true,
        value: product.shortDescription ? product.shortDescription.markup : null
    });
    Object.defineProperty(object, 'information', {
        enumerable: true,
        value: product.custom.productinfo ? product.custom.productinfo : null
    });
};
