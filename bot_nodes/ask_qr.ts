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

type QuickReplayTranslated =
  | QuickReplay[]
  | ((template: any, vars: any) => QuickReplay[]);

export const BlackListedBack = [
  "NODE_001",
  "NODE_023",
  "NODE_009",
  "NODE_408",
  "NODE_386",
  "NODE_072",
  "NODE_154",
];

export default function bkQRAsk(
  dialogue: BotkitConversation,
  tx: string,
  replies: QuickReplayTranslated,
  key:
    | {
        key: string;
      }
    | string,
  attachment?: any,
  txFn?: (template: any, vars: any) => string
): BotkitConversation {
  const stringKey = typeof key === "string" ? key : key.key;
  const IsBlackListed = BlackListedBack.indexOf(stringKey) >= 0;

  const goBack = (convo) => {
    const oldNodeTree = convo.vars.last_visited_node;

    // remove this item
    var index = oldNodeTree.indexOf(stringKey);
    if (index > -1) {
      oldNodeTree.splice(index, 1);
    }

    // go back one step
    const prevNode = oldNodeTree[oldNodeTree.length - 1];

    // remove previous item too
    var index = oldNodeTree.indexOf(prevNode);
    if (index > -1) {
      oldNodeTree.splice(index, 1);
    }

    convo.setVar("last_visited_node", oldNodeTree);

    convo.gotoThread(`t_${prevNode}`);
  };

  const goBackQROption = {
    title: "on_go_back",
    payload: "on_go_back",
    onChoose: async (_, convo) => {
      goBack(convo);
    },
  };

  // add go back functionality
  const quick_replies: QuickReplayTranslated =
    typeof replies === "function"
      ? (tmp, vars) => {
          const defaultReplies = replies(tmp, vars);
          if (!IsBlackListed) {
            defaultReplies.push(goBackQROption);
          }
          return defaultReplies;
        }
      : () => {
          const defaultReplies = replies.map((el) => ({
            ...el,
            title: translate(el.title),
          }));
          if (!IsBlackListed) {
            defaultReplies.push(goBackQROption);
          }
          return defaultReplies;
        };

  return dialogue.addQuestion(
    {
      text: txFn ? txFn : () => translate(tx),
      quick_replies,
      attachments: [
        {
          title: key,
          ...attachment,
        },
      ],
    },
    async (answer, convo, bot, msg) => {
      const oldSteps = convo.vars.last_visited_node || [];
      convo.setVar("last_visited_node", [...oldSteps, key]);
      quick_replies(msg, convo.vars)
        ?.filter((el) => el.payload === answer)[0]
        ?.onChoose(answer, convo, bot, msg);
    },
    key,
    `t_${key}`
  );
}
