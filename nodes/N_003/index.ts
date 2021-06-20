import { BotkitConversation } from "botkit";
import bkSay from "../../bot_nodes/say";


const NODE_ID = "NODE_003"
export default function NODE_003(convo: BotkitConversation): void {
  bkSay(convo, `${NODE_ID}.hello`);
}
