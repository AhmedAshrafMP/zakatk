import { BotkitConversation } from 'botkit';
import bkStrAsk from '../../bot_nodes/ask_str';

const NODE_ID = 'NODE_429';
export function NODE_429(convo: BotkitConversation): string {
	bkStrAsk(
		convo,
		NODE_ID + '.hello',
		async (answer, convo, bot, message) => {
			const inputValue = parseFloat(answer);
			convo.gotoThread('t_NODE_430');
		},
		NODE_ID,
		{
			contentType: 'application/vnd.microsoft.input',
			content: {
				validation: '',
				type: 'money'
			}
		}
	);
	return `t_${NODE_ID}`;
}
