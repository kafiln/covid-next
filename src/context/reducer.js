import {
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  DARK,
  INITIAL_INIT,
  LANG,
  LIGHT,
  THEME,
} from './types';

const THEMES = [DARK, LIGHT];

// Overkill 😌
const toggleValue = (value, choices) => {
  const index = choices.indexOf(value);
  return choices[Number(!index)];
};

export default (state, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      const lang = action.payload;
      localStorage.setItem(LANG, lang);
      return {
        ...state,
        lang,
      };

    case INITIAL_INIT:
      return {
        ...state,
        theme: action.payload.theme || state.theme,
        lang: action.payload.lang || state.lang,
      };

    case CHANGE_THEME:
      const theme = toggleValue(state.theme, THEMES);
      localStorage.setItem(THEME, theme);
      return {
        ...state,
        theme,
      };

    default:
      return state;
  }
};
