'use strict';
var ProductMgr = require('dw/catalog/ProductMgr');
var allProducts = ProductMgr.queryAllSiteProducts();
var FileWriter = require('dw/io/FileWriter');
var File = require('dw/io/File');

var impexFilePath = File.IMPEX + '/product_names_with_custom_value.impex';
var impexFile = new File(impexFilePath);
var fileWriter = new FileWriter(impexFile, 'UTF-8', true);
/**
 * To find the products having the productInfo attribute and
 * sorting it inside a file  through job
 */
function process() {
    while (allProducts.hasNext()) {
        var product = allProducts.next();
        if (product.custom.productinfo && product.custom.productinfo != null) {
            var impexLine = 'UPDATE Product;id[unique=true];\n';
            impexLine += ';"' + product.ID + '";\n';

            fileWriter.writeLine(impexLine);
        }
    }
    fileWriter.close();
}
module.exports.Process = process;
