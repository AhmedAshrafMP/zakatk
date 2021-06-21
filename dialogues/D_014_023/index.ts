import { BotkitConversation, Botkit } from "botkit";

export function D_014_023(botCtrl: Botkit) {
  // init dialogue
  const thisDialogue = new BotkitConversation("d_014_023", botCtrl);

  thisDialogue.say("Hello i`m d_014_023 {{vars.NODE_004}}");

  botCtrl.addDialog(thisDialogue);
}
