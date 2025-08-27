async function connectToDatabase(dataName) {
    // Simulate a database connection
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Connected to the database: ${dataName}`);
        }, 1000);
    });
}

async function closeDatabaseConnection() {
    // Simulate closing the database connection
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Database connection closed");
        }, 1000);
    });
}

export { connectToDatabase, closeDatabaseConnection };