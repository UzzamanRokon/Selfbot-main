// Define the conversion rate from INR to USD
const BDT_TO_USD_RATE = 1 / 94; // Example: 1 BDT = 0.0084 USD

module.exports = {
    name: 'b2c',
    description: 'Converts an amount from BDT to USD.',
    cooldown: 3,
    /**
     * Executes the bdt2usd command.
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
            return message.channel.send('Please provide an amount in BDT to convert to Ltc.');
        }

        // Convert the amount to float
        const amount = parseFloat(amountStr);

        // Check if the amount is a valid number
        if (isNaN(amount)) {
            return message.channel.send('Invalid amount provided.');
        }

        // Calculate the amount in USD using the conversion rate
        const usdAmount = amount * BDT_TO_USD_RATE;

        // Send the result to the channel
        message.channel.send(`Amount in BDT: ৳${amount.toFixed(2)}\nAmount in Ltc: $${usdAmount.toFixed(2)}`);
    }
};
