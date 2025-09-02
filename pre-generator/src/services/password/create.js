import handle from "./hendle.js";

async function createPassword() {
    // Call the handle function from the password service
   const pass = await handle();
   console.log(pass);
}

export default createPassword;