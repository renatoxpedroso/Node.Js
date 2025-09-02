async function permitterCharacters() {
    const permittedCharacters = [];

    if (process.env.Uppercase_Letters === 'true') {
        permittedCharacters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (process.env.Lowercase_Letters === 'true') {
        permittedCharacters.push(...'abcdefghijklmnopqrstuvwxyz');
    }
    if (process.env.Numbers === 'true') {
        permittedCharacters.push(...'0123456789');
    }
    if (process.env.Special_Characters === 'true') {
        permittedCharacters.push(...'!@#$%^&*()_+[]{}|;:,.<>?');
    }
    return permittedCharacters;
}


export default permitterCharacters;