import { MongoDbStorage } from "@botbuildercommunity/storage-mongodb";
import { WebAdapter } from "botbuilder-adapter-web";
import { Botkit } from "botkit";
import I18n from "i18n-js";
import moment from "moment";
import {
  D_000_009,
  D_014_023,
  D_055_056,
  D_072_204,
  D_386_406,
  D_393_406,
  D_408_439,
} from "./dialogues";
import { D_023_071 } from "./dialogues/D_023_071";
import "./helpers/i18n/i18n";
import { D_362_385 } from "./dialogues/D_362_385";

// if (process.env.MONGO_URI) {
console.log("MONGO_URI", process.env.MONGO_URI);

let mongoDbStorage: MongoDbStorage | undefined = undefined;
let botCtrl;
// Grab a collection handle off the connected client
if (process.env.MONGO_URI) {
  mongoDbStorage = new MongoDbStorage(
    process.env.MONGO_URI || "",
    "botkitdb",
    "testCollection"
  );
  let adapter = new WebAdapter({});

  botCtrl = new Botkit({
    webhook_uri: "/api/messages",
    adapter: adapter,
    storage: mongoDbStorage,
  });
} else {
  const adapter = new WebAdapter({});

  // unComment adapter and storage before uploading

  botCtrl = new Botkit({
    webhook_uri: "/api/messages",
    // adapter,
    // storage: mongoDbStorage,
  });
}

I18n.locale = "ar";
moment.locale("ar");

botCtrl; // botCtrl.publicFolder("/", path.join(__dirname, "..", "public"));

const d_000_009 = D_000_009(botCtrl);
D_014_023(botCtrl, d_000_009);
D_055_056(botCtrl);
D_023_071(botCtrl);
D_072_204(botCtrl);
D_362_385(botCtrl);
D_386_406(botCtrl);
D_393_406(botCtrl);
D_408_439(botCtrl);

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
