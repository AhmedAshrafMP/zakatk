import i18n from "i18n-js";

const en = require("./en.json");
const ar = require("./ar.json");

i18n.fallbacks = true;
export const availableTrans = { ar, en };
i18n.translations = availableTrans;

const fallback = { languageTag: "ar", isRTL: false };
