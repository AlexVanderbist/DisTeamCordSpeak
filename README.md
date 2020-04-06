# DisTeamCordSpeak

This Discord bot will play TeamSpeak's beloved connect and disconnect messages when a user enters or leaves a voice channel.

Video and more info here: [https://alexvanderbist.com/2020/teamspeak-voice-notifications-for-discord/](https://alexvanderbist.com/2020/teamspeak-voice-notifications-for-discord/).

## Installation

Clone this repository and install it's dependencies using Yarn (or NPM):

```bash
git clone git@github.com:AlexVanderbist/DisTeamCordSpeak.git
cd DisTeamCordSpeak
yarn install
```

Go to Discord's developer portal and create a new application: https://discordapp.com/developers/applications. In your new application, go to the bot section and generate a bot token.

Rename the `.env.example` file to `.env` and edit its contents to include your Discord bot token. Finally execute the `index.js` file:

```bash
node index.js
```
