import { BotkitConversation, Botkit } from "botkit";

export function D_055_056(botCtrl: Botkit) {
  // init dialogue
  const thisDialogue = new BotkitConversation("d_055_056", botCtrl);

  thisDialogue.say("Hello i`m d_055_056");

  botCtrl.addDialog(thisDialogue);
}
