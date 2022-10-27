import { BotkitConversation } from "botkit";
import bkStrAsk from "../../bot_nodes/ask_str";

const NODE_ID = "NODE_095";
export function NODE_095(convo: BotkitConversation): string {
  bkStrAsk(
    convo,
    NODE_ID + ".hello",
    async (answer, convo, bot, message) => {
      if (convo.vars.NODE_104 && convo.vars.NODE_104 === "NODE_104.choice2") {
        convo.gotoThread("t_NODE_098");
      } else {
        convo.gotoThread("t_NODE_096");
      }
    },
    //   if (
    //     convo.vars.numberOfSingleCompany &&
    //     convo.vars.numberOfSingleCompany > 0
    //   ) {
    //     console.log(convo.vars.numberOfSingleCompany);
    //     convo.gotoThread("t_NODE_098");
    //   } else {
    //     console.log(convo.vars.numberOfSingleCompany);
    //     convo.gotoThread("t_NODE_096");
    //   }
    // },
    NODE_ID,
    {
      contentType: "application/vnd.microsoft.input",
      content: {
        validation: "*",
        type: "string",
      },
    }
  );
  return `t_${NODE_ID}`;
}
