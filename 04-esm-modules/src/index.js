import {connectToDatabase, closeDatabaseConnection} from "./utils/database.js";
import { getDataFromApi } from "./utils/api.js";

async function main() {
    const dbConnection = await connectToDatabase("myDatabase");
    console.log(dbConnection);

    const apiData = await getDataFromApi("/users");
    console.log(apiData);

    const closeConnection = await closeDatabaseConnection();
    console.log(closeConnection);


}

main();
