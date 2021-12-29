import { MongoDbStorage } from "@botbuildercommunity/storage-mongodb";
import { WebAdapter } from "botbuilder-adapter-web";
import { Botkit } from "botkit";
import I18n from "i18n-js";
import moment from "moment";
import { D_000_009, D_014_023, D_055_056 } from "./dialogues";
import { D_023_071 } from "./dialogues/D_023_071";
import "./helpers/i18n/i18n";

// if (process.env.MONGO_URI) {
console.log("MONGO_URI", process.env.MONGO_URI);

let mongoDbStorage: MongoDbStorage | undefined = undefined;

// Grab a collection handle off the connected client
if (process.env.MONGO_URI) {
  mongoDbStorage = new MongoDbStorage(
    process.env.MONGO_URI || "",
    "botkitdb",
    "testCollection"
  );
}
const adapter = new WebAdapter({});
//
export const botCtrl = new Botkit({
  webhook_uri: "/api/messages",
  adapter: adapter,
  // storage: mongoDbStorage,
});
I18n.locale = "ar";
moment.locale("ar");

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

    return bot.beginDialog("d_000_009");
  }
);

botCtrl.interrupts("NO_ZAKAT", "message", (bot, message) => {
  return bot.beginDialog("d_055_056");
});
