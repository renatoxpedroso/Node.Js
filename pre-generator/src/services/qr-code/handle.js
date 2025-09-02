import qr from 'qrcode-terminal';
import chalk from 'chalk';

async function handle(err, result) {
    if (err) {
        console.error(err);
        return;
    }

    const isSmall = result.type === 2;
    const qrCode = qr.generate(result.link, { type: 'terminal', small: isSmall });
    console.log(chalk.green('QR Code gerado com sucesso!'));
    console.log(qrCode);
}

export default handle;