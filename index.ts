import { WebAdapter } from "botbuilder-adapter-web";
import { Botkit } from "botkit";
import I18n from "i18n-js";
import moment from "moment";
import { D_000_009, D_014_023, D_055_056 } from "./dialogues";
import { D_023_071 } from "./dialogues/D_023_071";
import "./helpers/i18n/i18n";

let storage = undefined;

// if (process.env.MONGO_URI) {
//   console.log("MONGO_URI", process.env.MONGO_URI);
//   const { MongoDbStorage } = require("botbuilder-storage-mongodb");
//   storage = new MongoDbStorage({
//     url: process.env.MONGO_URI,
//   });
// }
const adapter = new WebAdapter({});
//
export const botCtrl = new Botkit({
  webhook_uri: "/api/messages",
  adapter: adapter,
  // storage: storage,
});

botCtrl; // botCtrl.publicFolder("/", path.join(__dirname, "..", "public"));

const d_000_009 = D_000_009(botCtrl);
D_014_023(botCtrl, d_000_009);
D_055_056(botCtrl);
D_023_071(botCtrl);

botCtrl.hears(
  ["hello", "bot_start_action"],
  "message",
  async (bot, message) => {
    I18n.locale = "ar";
    moment.locale("ar");
    await bot.cancelAllDialogs();
    console.log(process.env.MONGO_URI);

    return bot.beginDialog("d_000_009");
  }
);

botCtrl.interrupts("NO_ZAKAT", "message", (bot, message) => {
  return bot.beginDialog("d_055_056");
});
