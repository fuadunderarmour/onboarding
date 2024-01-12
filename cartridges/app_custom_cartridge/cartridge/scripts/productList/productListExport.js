'use strict';


'use strict';

/**
 * To find the products having the productInfo attribute and
 * sorting it inside a file through a job
 * @param {string} jobParameter job parameters
 */
'use strict';

/**
* To find the products having the productInfo attribute and
* sorting it inside a file through a job
* @param {string} jobParameter job parameters
*/
function process(jobParameter) {
    var ProductMgr = require('dw/catalog/ProductMgr');
    var FileWriter = require('dw/io/FileWriter');
    var File = require('dw/io/File');

    var fileName = jobParameter.exportFile || 'default_product3';
    var xmlFilePath = File.IMPEX + '/' + fileName + '.xml';
    var xmlFile = new File(xmlFilePath);
    var fileWriter = new FileWriter(xmlFile, 'UTF-8', true);

    // Start the XML document
    fileWriter.writeLine('<?xml version="1.0" encoding="UTF-8"?>');
    fileWriter.writeLine('<products>');

    var allProducts = ProductMgr.queryAllSiteProducts();
    while (allProducts.hasNext()) {
        var product = allProducts.next();
        if (product.custom.productinfo && product.custom.productinfo !== null) {
            
            // Start product element
            fileWriter.writeLine('    <product>');

            // Write product ID
            fileWriter.writeLine('        <id>' + product.ID + '</id>');

            // Write product name
            fileWriter.writeLine('        <name>' + product.productName + '</name>');

            // Add other product information here if needed

            // End product element
            fileWriter.writeLine('    </product>');
        }
    }

    // End the XML document
    fileWriter.writeLine('</products>');

    // Close the FileWriter
    fileWriter.close();
}

module.exports.Process = process;
