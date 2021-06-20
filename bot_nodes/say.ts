import { BotkitConversation } from "botkit";
import { translate } from "../helpers";

export default function bkSay(
  dialogue: BotkitConversation,
  tx: string
): BotkitConversation {
  return dialogue.say({
    text: () => translate(tx),
  });
}
