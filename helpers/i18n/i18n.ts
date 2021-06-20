import i18n from "i18n-js";

const en = require("./en");
const ar = require("./ar");

i18n.fallbacks = false;
export const availableTrans = { ar, en };
i18n.translations = availableTrans;

const fallback = { languageTag: "ar", isRTL: false };
