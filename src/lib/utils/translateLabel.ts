import { each, isFunction, isPlainObject, get } from "lodash";

const replacePlaceholder = (text: string, replacements = {}) => {
  each(replacements, (value, key) => {
    text = text.replace(`%{${key}}`, value);
  });

  return text;
};

const translateLabel = (translations: any, key: string, replacements = {}) => {
  if (isFunction(translations)) {
    return translations(key, replacements);
  } else if (isPlainObject(translations)) {
    return replacePlaceholder(
      get(translations, key, `[translation missing '${key}']`),
      replacements
    );
  }

  return null;
};

export default translateLabel;
