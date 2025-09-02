import connectToDatabase from "./database/data.js";

async function main(params) {
    try {
        const result = await connectToDatabase(process.env.DB_USER, process.env.DB_PASS);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

main();