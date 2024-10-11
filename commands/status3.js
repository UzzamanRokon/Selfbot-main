const Discord = require('discord.js-selfbot-v13');

module.exports = {
    name: 'status3',
    description: 'Change the status automatically with different images in a loop.',
    execute(channel, message, client, args) {
        // Function to set the status
        const setStatus = (statusIndex) => {
            // Clear the console
            console.clear();

            // Log a message indicating that the status changer started
            console.log(`${client.user.tag} - status changer started!`);

            // Array of status objects with different details and images
            const statuses = [
                {
                    name: 'Self Respect',
                    details: 'Self respect',
                    largeImageURL: 'https://cdn.discordapp.com/attachments/1293319346487169054/1294332809133031466/The-Dark-Side-of-Self-Improvement.png?ex=670aa0dd&is=67094f5d&hm=a0df1d426a56c0c49b8100a83522df6d73fb5fbdbd2e2cd8639cf6fb4da3fe2e&'
                },
                {
                    name: 'Autistic',
                    details: 'autistxc',
                    largeImageURL: 'https://media.discordapp.net/attachments/1284783750324031499/1294354229934424085/eb2efa7eddbb52b1132cdcd153cc86e0.png?ex=670ab4d0&is=67096350&hm=645d3a62a1ba8ff4be589c04b0398b404ad20db47e4218a4ef1c8492f2464e47&'
                },
                {
                    name: 'Broken Heart',
                    details: 'My Heart Broken by my Love ',
                    largeImageURL: 'https://media.discordapp.net/attachments/1284783750324031499/1294354054150885387/badmash-boy-alone-boy-badmash-boy-broken-heart-broken-love-sad_968529-95325.png?ex=670ab4a6&is=67096326&hm=51fa6f65dd076ed230f19ff5132eb9329956f3fbd345a51701271324051c4fad&'
                }
            ];

            // Get the current status object
            const status = statuses[statusIndex];

            const r = new Discord.RichPresence()
                .setType('STREAMING')
                .setURL('https://www.twitch.tv/zenithsenpai') // Change if needed
                .setState(status.name)
                .setName(status.name)
                .setDetails(status.details)
                .setAssetsLargeImage(status.largeImageURL) // Change to status.largeImageURL
                .setAssetsLargeText('autistxc') // Set as needed
                .addButton('Youtube', 'https://www.youtube.com/@RokonUzzaman-kz3pb') // Add button name and URL
                .addButton('Discord', 'https://discord.gg/8DWWpzwXg9'); // Add button name and URL

            client.user.setActivity(r);

            // Log a message indicating that the status is changed
            console.log(`Status ${statusIndex + 1} set!`);

            // Increment status index and loop back to the start if it exceeds the array length
            const nextIndex = (statusIndex + 1) % statuses.length;

            // Call setStatus recursively after 10 seconds (adjustable)
            setTimeout(() => {
                setStatus(nextIndex);
            }, 10000); // Change 10000 to the interval you desire in milliseconds (e.g., 10000 for 10 seconds)
        };

        // Call setStatus to start the status changer loop
        setStatus(0);

        // Send a message indicating that the status changer is started
        channel.send('Status changer started.').catch(err => console.error('Failed to send message:', err));
    }
};
