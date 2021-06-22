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

export interface QuickReplay {
  title: string;
  payload: string;
  onChoose: BotkitConvoHandler;
}

export default function bkQRAsk(
  dialogue: BotkitConversation,
  tx: string,
  replies: QuickReplay[],
  key:
    | {
        key: string;
      }
    | string,
  attachment?: any,
  txFn?: (template: any, vars: any) => string
): BotkitConversation {
  return dialogue.addQuestion(
    {
      text: txFn ? txFn : () => translate(tx),
      quick_replies: () =>
        replies.map((el) => ({
          ...el,
          title: translate(el.title),
        })),
      attachments: [
        {
          title: key,
          ...attachment,
        },
      ],
    },
    async (answer, convo, bot, msg) => {
      replies
        .filter((el) => el.payload === answer)[0]
        .onChoose(answer, convo, bot, msg);
    },
    key,
    `t_${key}`
  );
}
