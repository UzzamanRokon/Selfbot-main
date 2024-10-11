module.exports = {
    name: 'payment',
    description: '💳 Pay Here (BKASH/NAGAD) NUM along with an image in a styled message with emojis.',
    /**
     * Executes the payment command.
     * 
     * @param {Channel} channel The channel where the command was executed.
     * @param {Message} message The message object for the command.
     * @param {Client} client The client or bot instance.
     * @param {String[]} args The arguments passed with the command.
     */
    async execute(channel, message, client, args) {
        // Replace 'YOUR_NUM' with your actual UPI ID
        const upiID = '01797214452';

        try {
            // Send the BKASH/NAGAD NUM as a message
            await message.channel.send(`💳 **Your BKASH/NAGAD NUM (Unified Payments Interface) ID:**\n\n||${upiID}||`);
            
            // Send the image as a separate message
            await message.channel.send({
                files: [{
                    attachment: './images/payment_qr_code.png', // Example: './images/payment_qr_code.png'
                    name: 'payment_qr_code.png'
                }]
            });
        } catch (error) {
            console.error('Error sending BKASH/NAGAD message:', error);
            message.channel.send('Error sending BKASH/NAGAD message. Please try again later.');
        }
    }
};
