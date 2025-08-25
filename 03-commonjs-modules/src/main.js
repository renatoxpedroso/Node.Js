const { getFullName, productType } = require("./services/products");

const config = require("./services/config");
const database = require("./services/database");

(async function main() {
    getFullName("1", "teclado");

    console.log(productType);

    database.connectToDatabase("my-data");
})();