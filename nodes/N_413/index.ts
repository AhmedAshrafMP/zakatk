import { BotkitConversation } from 'botkit';
import bkQRAsk from '../../bot_nodes/ask_qr';

const NODE_ID = 'NODE_413';
export function NODE_413(convo: BotkitConversation): string {
	bkQRAsk(
		convo,
		NODE_ID + '.title',
		[
			{
				title: NODE_ID + '.opt1',
				payload: NODE_ID + '.choice0',
				onChoose: async (answer, convo, bot, msg) => {}
			},
			{
				title: NODE_ID + '.opt2',
				payload: NODE_ID + '.choice1',
				onChoose: async (answer, convo, bot, msg) => {}
			}
		],
		NODE_ID
	);

	return `t_${NODE_ID}`;
}
