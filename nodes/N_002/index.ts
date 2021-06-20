import { BotkitConversation } from "botkit";
import bkSay from "../../bot_nodes/say";


const NODE_ID = "NODE_002"
export default function NODE_002(convo: BotkitConversation): void {
  bkSay(convo, `${NODE_ID}.hello`);
}
