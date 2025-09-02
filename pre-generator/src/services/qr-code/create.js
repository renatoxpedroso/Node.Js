import prompt from "prompt";
import qrCodePrompt from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
    prompt.start();
    prompt.get(qrCodePrompt, handle);
}

export default createQRCode;
