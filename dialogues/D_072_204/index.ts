import { BotkitConversation, Botkit } from "botkit";
import { convertVarToCurrencySym } from "../../helpers";
import { getGoldPrices } from "../../helpers/apis";

import {
  NODE_072,
  NODE_074,
  NODE_075,
  NODE_076,
  NODE_078,
  NODE_080,
  NODE_082,
  NODE_083,
  NODE_084,
  NODE_085,
  NODE_086,
  NODE_090,
  NODE_092,
  NODE_093,
  NODE_094,
  NODE_095,
  NODE_097,
  NODE_098,
  NODE_098_1,
  NODE_098_1_1,
  NODE_098_2,
  NODE_098_2_1,
  NODE_098_2_2,
  NODE_101,
  NODE_103,
  NODE_104,
  NODE_106,
  NODE_109,
  NODE_110,
  NODE_111,
  NODE_112,
  NODE_114,
  NODE_115,
  NODE_116,
  NODE_116_1,
  NODE_117,
  NODE_118,
  NODE_119,
  NODE_120,
  NODE_121,
  NODE_122,
  NODE_124,
  NODE_126,
  NODE_127,
  NODE_127_1,
  NODE_128,
  NODE_130,
  NODE_131,
  NODE_132,
  NODE_133,
  NODE_136,
  NODE_137,
  NODE_138,
  NODE_138_1,
  NODE_139,
  NODE_140,
  NODE_141,
  NODE_142,
  NODE_143,
  NODE_144,
  NODE_145,
  NODE_148,
  NODE_149,
  NODE_149_1,
  NODE_154,
  NODE_157,
  NODE_159,
  NODE_160,
  NODE_161,
  NODE_162,
  NODE_163,
  NODE_164,
  NODE_167,
  NODE_169,
  NODE_170,
  NODE_171,
  NODE_173,
  NODE_176,
  NODE_181,
  NODE_186,
  NODE_187,
  NODE_192,
  NODE_193,
  NODE_196,
  NODE_199,
  NODE_205,
  NODE_207,
  NODE_208,
  NODE_209,
  NODE_210,
  NODE_211,
  NODE_217,
  NODE_219,
  NODE_222,
  NODE_223,
  NODE_225,
  NODE_225_1,
  NODE_227,
  NODE_231,
  NODE_232,
  NODE_233,
  NODE_234,
  NODE_240,
  NODE_241,
  NODE_242,
  NODE_243,
  NODE_244,
  NODE_245,
  NODE_246,
  NODE_247,
  NODE_248,
  NODE_249,
  NODE_250,
  NODE_251,
  NODE_254,
  NODE_256,
  NODE_257,
  NODE_258,
  NODE_259,
  NODE_261,
  NODE_262,
  NODE_266,
  NODE_267,
  NODE_268,
  NODE_270,
  NODE_271,
  NODE_273,
  NODE_274,
  NODE_277,
  NODE_280,
  NODE_285,
  NODE_286,
  NODE_287,
  NODE_293,
  NODE_293_1,
  NODE_294,
  NODE_295,
  NODE_296,
  NODE_298,
  NODE_301,
  NODE_302,
  NODE_306,
  NODE_307,
  NODE_308,
  NODE_314,
  NODE_315,
  NODE_316,
  NODE_318,
  NODE_321,
  NODE_322,
  NODE_326,
  NODE_327,
  NODE_328,
  NODE_329,
  NODE_331,
  NODE_333,
  NODE_336,
  NODE_341,
  NODE_342,
  NODE_343,
  NODE_349,
  NODE_350,
  NODE_350_1,
  NODE_351,
  NODE_352,
  NODE_354,
  NODE_357,
  NODE_358,
  NODE_998,
  NODE_999,
} from "../../nodes";
import NODE_077 from "../../nodes/N_077";
import { NODE_078_1 } from "../../nodes/N_078_1";
import { NODE_078_2 } from "../../nodes/N_078_2";
import { NODE_078_3 } from "../../nodes/N_078_3";
import NODE_096 from "../../nodes/N_096";
import NODE_113 from "../../nodes/N_113";
import NODE_135 from "../../nodes/N_135";
import NODE_166 from "../../nodes/N_166";
import { NODE_182 } from "../../nodes/N_182";
import NODE_189 from "../../nodes/N_189";
import NODE_213 from "../../nodes/N_213";
import { NODE_217_1 } from "../../nodes/N_217_1";
import NODE_221 from "../../nodes/N_221";
import NODE_236 from "../../nodes/N_236";
import NODE_272 from "../../nodes/N_272";
import NODE_289 from "../../nodes/N_289";
import NODE_310 from "../../nodes/N_310";
import NODE_330 from "../../nodes/N_330";
import { NODE_331_1 } from "../../nodes/N_331_1";
import NODE_345 from "../../nodes/N_345";

export function D_072_204(botCtrl: Botkit) {
  // init dialogue
  const thisDialogue = new BotkitConversation("d_072_204", botCtrl);

  const begin = NODE_072(thisDialogue);
  thisDialogue.addAction(begin);

  thisDialogue.before("t_NODE_072", async (convo, bot) => {
    try {
      if (!convo.vars.gold_prices) {
        const prices = await getGoldPrices(
          convertVarToCurrencySym(convo.vars.NODE_004)
        );
        console.log("gold_prices", prices);
        convo.setVar("gold_prices", prices);
      }
    } catch (err) {
      await bot.cancelAllDialogs();
      return bot.say("Wrong gold prices");
    }
  });

  thisDialogue.after((v, bot) => {
    // restart the dialogue after finishing
    return bot.beginDialog("d_014_023", {
      gold_prices: v.gold_prices,
    });
  });

  NODE_072(thisDialogue);
  NODE_074(thisDialogue);
  NODE_075(thisDialogue);
  NODE_076(thisDialogue);
  NODE_077(thisDialogue);
  NODE_078(thisDialogue);
  NODE_078_1(thisDialogue);
  NODE_078_2(thisDialogue);
  NODE_078_3(thisDialogue);
  NODE_080(thisDialogue);
  NODE_082(thisDialogue);
  NODE_083(thisDialogue);
  NODE_084(thisDialogue);
  NODE_085(thisDialogue);
  NODE_086(thisDialogue);
  NODE_090(thisDialogue);
  NODE_092(thisDialogue);
  NODE_093(thisDialogue);
  NODE_094(thisDialogue);
  NODE_095(thisDialogue);
  NODE_096(thisDialogue);
  NODE_097(thisDialogue);
  NODE_098(thisDialogue);
  NODE_098_1(thisDialogue);
  NODE_098_1_1(thisDialogue);
  NODE_098_2(thisDialogue);
  NODE_098_2_1(thisDialogue);
  NODE_098_2_2(thisDialogue);
  NODE_101(thisDialogue);
  NODE_103(thisDialogue);
  NODE_104(thisDialogue);
  NODE_106(thisDialogue);
  NODE_109(thisDialogue);
  NODE_110(thisDialogue);
  NODE_111(thisDialogue);
  NODE_112(thisDialogue);
  NODE_113(thisDialogue);
  NODE_114(thisDialogue);
  NODE_115(thisDialogue);
  NODE_116(thisDialogue);
  NODE_117(thisDialogue);
  NODE_118(thisDialogue);
  NODE_120(thisDialogue);
  NODE_119(thisDialogue);
  NODE_121(thisDialogue);
  NODE_122(thisDialogue);
  NODE_124(thisDialogue);
  NODE_127(thisDialogue);
  NODE_128(thisDialogue);
  NODE_130(thisDialogue);
  NODE_131(thisDialogue);
  NODE_132(thisDialogue);
  NODE_133(thisDialogue);
  NODE_135(thisDialogue);
  NODE_136(thisDialogue);
  NODE_137(thisDialogue);
  NODE_138(thisDialogue);
  NODE_138_1(thisDialogue);
  NODE_139(thisDialogue);
  NODE_140(thisDialogue);
  NODE_141(thisDialogue);
  NODE_142(thisDialogue);
  NODE_143(thisDialogue);
  NODE_144(thisDialogue);
  NODE_145(thisDialogue);
  NODE_148(thisDialogue);
  NODE_149(thisDialogue);
  NODE_149_1(thisDialogue);
  NODE_154(thisDialogue);
  NODE_157(thisDialogue);
  NODE_159(thisDialogue);
  NODE_160(thisDialogue);
  NODE_161(thisDialogue);
  NODE_162(thisDialogue);
  NODE_163(thisDialogue);
  NODE_167(thisDialogue);
  NODE_164(thisDialogue);
  NODE_166(thisDialogue);
  NODE_169(thisDialogue);
  NODE_170(thisDialogue);
  NODE_171(thisDialogue);
  NODE_173(thisDialogue);
  NODE_176(thisDialogue);
  NODE_181(thisDialogue);
  NODE_182(thisDialogue);
  NODE_205(thisDialogue);
  NODE_207(thisDialogue);
  NODE_208(thisDialogue);
  NODE_210(thisDialogue);
  NODE_209(thisDialogue);
  NODE_211(thisDialogue);
  NODE_213(thisDialogue);
  NODE_217(thisDialogue);
  NODE_217_1(thisDialogue);
  NODE_999(thisDialogue);
  NODE_998(thisDialogue);
  NODE_219(thisDialogue);
  NODE_221(thisDialogue);
  NODE_222(thisDialogue);
  NODE_223(thisDialogue);
  NODE_225(thisDialogue);
  NODE_225_1(thisDialogue);
  NODE_227(thisDialogue);
  NODE_231(thisDialogue);
  NODE_232(thisDialogue);
  NODE_233(thisDialogue);
  NODE_234(thisDialogue);
  NODE_236(thisDialogue);
  NODE_240(thisDialogue);
  NODE_241(thisDialogue);
  NODE_242(thisDialogue);
  NODE_243(thisDialogue);
  NODE_244(thisDialogue);
  NODE_245(thisDialogue);
  NODE_246(thisDialogue);
  NODE_247(thisDialogue);
  NODE_248(thisDialogue);
  NODE_249(thisDialogue);
  NODE_250(thisDialogue);
  NODE_251(thisDialogue);
  NODE_254(thisDialogue);
  NODE_116_1(thisDialogue);
  NODE_127_1(thisDialogue);
  NODE_126(thisDialogue);
  NODE_187(thisDialogue);
  NODE_186(thisDialogue);
  NODE_189(thisDialogue);
  NODE_192(thisDialogue);
  NODE_193(thisDialogue);
  NODE_196(thisDialogue);
  NODE_199(thisDialogue);
  NODE_256(thisDialogue);
  NODE_257(thisDialogue);
  NODE_258(thisDialogue);
  NODE_259(thisDialogue);
  NODE_261(thisDialogue);
  NODE_262(thisDialogue);
  NODE_266(thisDialogue);
  NODE_267(thisDialogue);
  NODE_268(thisDialogue);
  NODE_271(thisDialogue);
  NODE_270(thisDialogue);
  NODE_272(thisDialogue);
  NODE_273(thisDialogue);
  NODE_274(thisDialogue);
  NODE_277(thisDialogue);
  NODE_280(thisDialogue);
  NODE_285(thisDialogue);
  NODE_286(thisDialogue);
  NODE_287(thisDialogue);
  NODE_289(thisDialogue);
  NODE_293(thisDialogue);
  NODE_293_1(thisDialogue);
  NODE_294(thisDialogue);
  NODE_295(thisDialogue);
  NODE_296(thisDialogue);
  NODE_298(thisDialogue);
  NODE_301(thisDialogue);
  NODE_302(thisDialogue);
  NODE_306(thisDialogue);
  NODE_307(thisDialogue);
  NODE_308(thisDialogue);
  NODE_310(thisDialogue);
  NODE_314(thisDialogue);
  NODE_315(thisDialogue);
  NODE_316(thisDialogue);
  NODE_318(thisDialogue);
  NODE_322(thisDialogue);
  NODE_321(thisDialogue);
  NODE_326(thisDialogue);
  NODE_327(thisDialogue);
  NODE_329(thisDialogue);
  NODE_328(thisDialogue);
  NODE_330(thisDialogue);
  NODE_331(thisDialogue);
  NODE_331_1(thisDialogue);
  NODE_333(thisDialogue);
  NODE_336(thisDialogue);
  NODE_341(thisDialogue);
  NODE_342(thisDialogue);
  NODE_343(thisDialogue);
  NODE_345(thisDialogue);
  NODE_349(thisDialogue);
  NODE_350(thisDialogue);
  NODE_350_1(thisDialogue);
  NODE_351(thisDialogue);
  NODE_352(thisDialogue);
  NODE_354(thisDialogue);
  NODE_357(thisDialogue);
  NODE_358(thisDialogue);

  thisDialogue.addChildDialog("d_014_023", "d_014_023", "t_d_014_023");
  thisDialogue.addChildDialog("d_393_406", "d_393_406", "t_d_393_406");
  thisDialogue.addChildDialog("d_000_009", "d_000_009", "t_d_000_009");

  botCtrl.addDialog(thisDialogue);
}
