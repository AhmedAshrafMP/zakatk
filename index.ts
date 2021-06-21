import { Botkit } from "botkit";
import I18n from "i18n-js";
import moment from "moment";

import { D_000_009, D_014_023, D_055_056 } from "./dialogues";
import { D_023_071 } from "./dialogues/D_023_071";
import { translate } from "./helpers";
import "./helpers/i18n/i18n";

export const botCtrl = new Botkit({
  webhook_uri: "/api/messages",
});

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

    return bot.beginDialog("d_000_009");
  }
);

botCtrl.interrupts("NO_ZAKAT", "message", (bot, message) => {
  return bot.beginDialog("d_055_056");
});
