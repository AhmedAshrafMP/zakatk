import {
  BotkitConversation,
  BotkitDialogWrapper,
  BotkitMessage,
  BotWorker,
} from "botkit";
import { translate } from "../helpers";

interface BotkitConvoHandler {
  (
    answer: string,
    convo: BotkitDialogWrapper,
    bot: BotWorker,
    message: BotkitMessage
  ): Promise<any>;
}

export default function bkStrAsk(
  dialogue: BotkitConversation,
  tx: string,
  handler: BotkitConvoHandler,
  key:
    | {
        key: string;
      }
    | string,
  attachment?: any
): BotkitConversation {
  return dialogue.addQuestion(
    {
      text: () => translate(tx),
      attachment: [
        {
          title: key,
          ...attachment,
        },
      ],
    },
    handler,
    key,
    `t_${key}`
  );
}
