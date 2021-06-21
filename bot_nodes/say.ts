import { BotkitConversation } from "botkit";
import { translate } from "../helpers";

export default function bkSay(
  dialogue: BotkitConversation,
  tx: string,
  key: string,
  attachment?: any,
  txVars?: any
): BotkitConversation {
  return dialogue.addMessage(
    {
      text: () => translate(tx, txVars),
      attachments: [
        {
          title: key,
          ...attachment,
        },
      ],
    },
    `t_${key}`
  );
}
