import {
  BotkitConversation,
  BotkitDialogWrapper,
  BotkitMessage,
  BotWorker,
} from "botkit";
import { translate } from "../helpers";
import { cy, botCtrlInstance } from "../index";
interface BotkitConvoHandler {
  (
    answer: string,
    convo: BotkitDialogWrapper | any,
    bot?: BotWorker,
    message?: BotkitMessage
  ): Promise<any>;
}

export interface QuickReplay {
  title: string;
  payload: string;
  onChoose: BotkitConvoHandler;
}

interface BotkitMessageTemplate {
  text: ((template: any, vars: any) => string) | string[];
  action?: string;
  execute?: {
    script: string;
    thread?: string;
  };
  quick_replies?: ((template: any, vars: any) => any[]) | any[];
  attachments?: ((template: any, vars: any) => any[]) | any[];
  blocks?: ((template: any, vars: any) => any[]) | any[];
  attachment?: ((template: any, vars: any) => any) | any;
  attachmentLayout?: string;
  channelData?: any;
  collect: {
    key?: string;
    options?: any[];
  };
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
  "NODE_362",
  "NODE_262",
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
    const oldNodeTree = convo.vars?.last_visited_node || [];

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

  const message: Partial<BotkitMessageTemplate> | string = {
    text: txFn ? txFn : () => translate(tx),
    quick_replies,
    attachments: [
      {
        title: key,
        ...attachment,
      },
    ],
  };

  const handlers: BotkitConvoHandler | any[] = async (
    answer,
    convo,
    bot,
    msg
  ) => {
    const oldSteps = convo.vars.last_visited_node || [];
    convo.setVar("last_visited_node", [...oldSteps, key]);
    quick_replies(msg, convo.vars)
      ?.filter((el) => el.payload === answer)[0]
      ?.onChoose(answer, convo, bot, msg);
  };

  const _key:
    | {
        key: string;
      }
    | string
    | null = key;

  const thread_name: string = `t_${typeof key === "object" ? key.key : key}`;

  if (cy.$id(thread_name).length === 0) {
    cy.add({
      group: "nodes",
      data: {
        id: thread_name,
        name: thread_name,
      },
    });
  }
  if (cy.$id("t_NODE_009").length === 0) {
    cy.add({
      group: "nodes",
      data: {
        id: "t_NODE_009",
        name: "t_NODE_009",
      },
    });
  }

  /// if dev env draw graph
  // if (process.env.NODE_ENV === "development") {
  //   quick_replies(null, {}).forEach((el) => {
  //     el.onChoose(
  //       el.payload,
  //       {
  //         setVar: (key, value) => {},
  //         vars: {
  //           gold_prices: {
  //             gold: 1,
  //             silver: 1,
  //           },
  //         },
  //         gotoThread: async (goToThreadId) => {
  //           if (
  //             goToThreadId === "t_on_go_back" ||
  //             !goToThreadId ||
  //             goToThreadId === "t_" ||
  //             goToThreadId === "t_undefined"
  //           ) {
  //             return;
  //           }
  //           if (cy.$id(goToThreadId).length === 0) {
  //             cy.add({
  //               group: "nodes",
  //               data: { id: goToThreadId, name: goToThreadId },
  //             });
  //           }

  //           if (cy.$id(`${thread_name}_${goToThreadId}`).length === 0) {
  //             cy.add({
  //               data: {
  //                 id: `${thread_name}_${goToThreadId}`,
  //                 target: goToThreadId,
  //                 source: thread_name,
  //               },
  //             });
  //           }
  //         },
  //         repeat: async () => {},
  //         stop: async () => {
  //           if (cy.$id(`${thread_name}_t_NODE_009`).length === 0) {
  //             cy.add({
  //               data: {
  //                 id: `${thread_name}_t_NODE_009`,
  //                 target: "t_NODE_009",
  //                 source: thread_name,
  //               },
  //             });
  //           }
  //         },
  //       },
  //       botCtrlInstance,
  //       undefined
  //     );
  //   });
  // }

  return dialogue.addQuestion(message, handlers, _key, thread_name);
}
