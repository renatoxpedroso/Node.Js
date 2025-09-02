async function connectToDatabase(user, password) {
    if(user === process.env.DB_USER && password === process.env.DB_PASS) {
        return "Conexão com o banco de dados estabelecida.";
    } else {
        throw new Error("Falha na conexão com o banco de dados.");
    }
}

export default connectToDatabase;