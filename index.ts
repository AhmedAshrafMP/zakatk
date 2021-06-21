import { Botkit } from "botkit";
import I18n from "i18n-js";
import { D_000_009, D_014_023 } from "./dialogues";
import "./helpers/i18n/i18n";
export const botCtrl = new Botkit({
  webhook_uri: "/api/messages",
});

D_000_009(botCtrl);
D_014_023(botCtrl);

botCtrl.hears(
  ["hello", "bot_start_action"],
  "message",
  async (bot, message) => {
    I18n.locale = "ar";
    return bot.beginDialog("d_000_009");
  }
);
