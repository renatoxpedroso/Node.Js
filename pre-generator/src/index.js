import prompt from 'prompt';
import myPrompt from './prompts-schema/prompt-schema-main.js';
import createQRCode from './services/qr-code/create.js';    
import createPassword from './services/password/create.js';

async function main() {
    prompt.start();
    const answers = prompt.get(myPrompt, async function (err, result) {
        if (result.select == 1) {
            console.log('Escolheu QRCode');
            await createQRCode();
        } else if (result.select == 2) {
            console.log('Escolheu Password');
            await createPassword();
        } else {
            console.error(err);
            return;
        }
    });

}

main();