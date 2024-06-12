////t.me/testbotforwebappbot.
const { Telegraf } = require("telegraf");
// const { message } = require("telegraf/filters");
const token = "token from created TG bot in BotFather";
const bot = new Telegraf(token);
const webLink = "https://aslanovrustam.github.io/tg-web-app/";
bot.start((ctx) =>
  ctx.reply("Welcome!!!!", {
    reply_markup: {
      keyboard: [[{ text: "my super web app", web_app: { url: webLink } }]],
    },
  })
);
bot.help((ctx) =>
  ctx.reply(
    "Send me a sticker"
    // {
    // reply_markup: {
    //   keyboard: [[{ text: "help" }]],
    // },
    // }
  )
);
// bot.on(message("sticker"), (ctx) => ctx.reply("👍"));
// bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();
