import { BotkitConversation, Botkit } from "botkit";
import moment from "moment";

export function D_023_071(botCtrl: Botkit) {
  // init dialogue
  const thisDialogue = new BotkitConversation("d_023_071", botCtrl);

  thisDialogue.say("HELLO FROM NODE START");
  thisDialogue
    .addQuestion(
      "welcomemesage",
      async (answer, convo) => {
        convo.gotoThread("hq");
      },
      "welc",
      "welc"
    )
    .addAction("welc");

  thisDialogue.addQuestion(
    "Hello i`m d_023_071 {{vars.NO_OF_YEARS}}",
    async (answer, convo, bot) => {
      convo.setVar("NO_OF_YEARS", parseInt(convo.vars.NO_OF_YEARS) - 1);
      // console.log("resp", convo.vars);
      convo.gotoThread("welc");
    },
    "HELLO",
    "hq"
  );

  // thisDialogue.before("default", async (convo, bot) => {
  //   const NoOfDays = moment()
  //     .startOf("D")
  //     .diff(moment(convo.vars.LAST_ZAKAT_DAY), "days");
  //   const NoOfYears = Math.floor(NoOfDays / 365);
  //   for (let index = 0; index < NoOfYears; index++) {
  //     await convo.gotoThread("hq");
  //     // await convo.repeat();
  //   }
  // });
  // // thisDialogue.onChange("NO_OF_YEARS", async (resp, convo, bot) => {
  // //   console.log("resp", resp, convo);
  // //   // if (resp > 0) {
  // //   convo.repeat()
  // //   // }
  // // });
  botCtrl.addDialog(thisDialogue);
}
