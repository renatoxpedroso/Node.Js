import permitterCharacters from "./utils/permitted-charanteres.js";

async function handle() {
    let characters = [];
    let password = '';
    const passwordLength = process.env.PASSWORD_LENGTH;
    characters = await permitterCharacters();

    for (let i = 0; i < passwordLength; i++) {
         password += characters[Math.floor(Math.random() * characters.length)];
    }

    return password;
}

export default handle;