import { sendEmail } from "./services/email";

async function main() {
  const emailContent = await sendEmail("Renato");
  console.log(emailContent);
}

main();
