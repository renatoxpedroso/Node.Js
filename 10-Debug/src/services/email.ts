async function sendEmail(senderName: string): Promise<string> {
  let base = `Olá ${senderName},\n\nEste é um email de teste.`;

  return base;
}

export { sendEmail };
