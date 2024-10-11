// Define the conversion rate from USD to INR
const C2B_Rate = 119.57; // Example: 1 USD = 119.57 BDT

module.exports = {
    name: 'c2b',
    description: 'Converts an amount from USD to BDT.',
    cooldown: 3,
    /**
     * Executes the c2b command.
     * 
     * @param {Channel} channel The channel where the command was executed.
     * @param {Message} message The message object for the command.
     * @param {Client} client The client or bot instance.
     * @param {String[]} args The arguments passed with the command.
     */
    async execute(channel, message, client, args) {
        const amountStr = args[0]; // Assuming the amount is passed as the first argument

        // Check if amount is provided
        if (!amountStr) {
            return message.channel.send('Please provide an amount in Ltc to convert to BDT.');
        }

        // Convert the amount to float and remove the '$' symbol if present
        const amount = parseFloat(amountStr.replace('$', ''));

        // Check if the amount is a valid number
        if (isNaN(amount)) {
            return message.channel.send('Invalid amount provided.');
        }

        // Calculate the amount in BDT using the conversion rate
        const usdAmount = amount * C2B_Rate;

        // Send the result to the channel
        message.channel.send(`Amount in Ltc: $${amount.toFixed(2)}\nAmount in BDT: ৳${usdAmount.toFixed(2)}`);
    }
};
