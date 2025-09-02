import chalk from "chalk";

const qrCodePrompt = [
    {
        name: 'link',
        description: chalk.yellow('Digite o link para gerar o QR Code:'),
    },
    {
        name: 'type',
        description: chalk.yellow('Escolha o tipo (1 - Normal ou 2 - Terminal):'),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha uma opção válida (1 ou 2)"),
        required: true
    }
];

export default qrCodePrompt;