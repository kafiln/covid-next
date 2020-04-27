import React, { useContext, useState } from 'react';
import { MdLanguage } from 'react-icons/md';
import { FormattedMessage } from 'react-intl';
import styled, { useTheme } from 'styled-components';
import { AppContext, Types } from '../context';
import { KEYS, Languages as LOCALES } from '../i18n';

const Dropdown = styled.div`
  font: 400 16px system-ui;
  color: ${(props) => props.backgroundColor};
  background-color: ${(props) => props.color};

  .menu {
    color: ${(props) => props.backgroundColor};
    background-color: ${(props) => props.color};
  }
`;

function LanguageToggle() {
  const { lang, dispatch } = useContext(AppContext);
  const { color, backgroundColor } = useTheme();
  const [hidden, setHidden] = useState(true);
  const languages = Object.values(LOCALES);

  const toggle = () => {
    setHidden(!hidden);
  };

  const handleChange = (langId) => {
    toggle();
    dispatch({
      type: Types.CHANGE_LANGUAGE,
      payload: langId,
    });
  };
  return (
    <Dropdown
      color={color}
      backgroundColor={backgroundColor}
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
      className="dropdown rounded flex flex-col cursor-pointer rounded-b-none"
    >
      <div className="wrapper">
        <div className="font-semibold py-1 px-2 inline-flex items-center focus:outline-none">
          <span className="mr-1">
            <FormattedMessage id={KEYS.LANGUAGES}></FormattedMessage>
          </span>
          <MdLanguage size="1.5em" />
        </div>
      </div>

      <div className="relative">
        <ul
          className={`menu pt-1 focus:outline-none absolute top-0 left-0 w-full ${
            hidden && 'hidden'
          } `}
        >
          {languages &&
            languages
              .filter((e) => e.id !== lang)
              .map((language) => (
                <li
                  onClick={() => handleChange(language.id)}
                  key={language.id}
                  className={`hover:font-bold py-2 px-4 whitespace-no-wrap`}
                >
                  {language.displayName}
                </li>
              ))}
        </ul>
      </div>
    </Dropdown>
  );
}

export default LanguageToggle;
