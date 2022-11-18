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

export default function bkStrAsk(
  dialogue: BotkitConversation,
  tx: string,
  handler: BotkitConvoHandler,
  key:
    | {
        key: string;
      }
    | string,
  attachment?: any,
  txFn?: (template: any, vars: any) => string
): BotkitConversation {
  const thread_name: string = `t_${typeof key === "object" ? key.key : key}`;

  // if (process.env.NODE_ENV === "development") {
  //   handler(
  //     "10",
  //     {
  //       setVar: (key, value) => {},
  //       vars: {
  //         gold_prices: {
  //           gold: 1,
  //           silver: 1,
  //         },
  //       },
  //       gotoThread: async (goToThreadId) => {
  //         if (
  //           goToThreadId === "t_on_go_back" ||
  //           !goToThreadId ||
  //           goToThreadId === "t_" ||
  //           goToThreadId === "t_undefined"
  //         ) {
  //           return;
  //         }
  //         if (cy.$id(goToThreadId).length === 0) {
  //           cy.add({
  //             group: "nodes",
  //             data: { id: goToThreadId, name: goToThreadId },
  //           });
  //         }

  //         if (cy.$id(thread_name).length === 0) {
  //           cy.add({
  //             group: "nodes",
  //             data: {
  //               id: thread_name,
  //               name: thread_name,
  //             },
  //           });
  //         }
  //         if (cy.$id(`${thread_name}_${goToThreadId}`).length === 0) {
  //           cy.add({
  //             data: {
  //               id: `${thread_name}_${goToThreadId}`,
  //               target: goToThreadId,
  //               source: thread_name,
  //             },
  //           });
  //         }
  //       },
  //       repeat: async () => {},
  //       stop: async () => {},
  //     },
  //     undefined,
  //     undefined
  //   );
  // }

  return dialogue.addQuestion(
    {
      text: txFn ? txFn : () => translate(tx),
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
