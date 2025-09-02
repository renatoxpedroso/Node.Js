import chalk from "chalk";

const myPrompt = [
    {
        name: 'select',
        description: chalk.yellow('Escolha a ferramenta (1 - QRCode ou 2 - Password)'),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha uma opção válida (1 ou 2)"),
        required: true
    }
];

export default myPrompt;