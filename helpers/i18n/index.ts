import i18n, { TranslateOptions } from "i18n-js";

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export function translate(key: string, options?: object) {
  const opts: TranslateOptions = {
    ...options,
    defaultValue: key,
    defaults: [{ message: key }],
  };
  console.log("Currnet", i18n.t(key), i18n.currentLocale());
  return key ? i18n.t(key, opts) : "";
}
