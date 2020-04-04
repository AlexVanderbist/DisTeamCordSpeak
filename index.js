const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('voiceStateUpdate', async (oldState, newState) => {
  if (oldState.channel !== newState.channel) {
    if (oldState.channel && oldState.channel.name === 'General') {
      play(oldState.channel, './sounds/disconnected.wav');
    }

    if (newState.channel && newState.channel.name === 'General') {
      const havingAGoodTime = Math.random() <= 0.05;
      const file = havingAGoodTime ? './sounds/connected-but-its-loud-af.mp3' : './sounds/connected.wav';
      play(newState.channel, file);
    }
  }

  if (oldState.selfDeaf && !newState.selfDeaf) {
    play(oldState.channel, './sounds/talkpower_granted.wav');
  }
})

client.login('TOKEN');

async function play(channel, file)
{
  const connection = await channel.join();

  connection.play(file);
}