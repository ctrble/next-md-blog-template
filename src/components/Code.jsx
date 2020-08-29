import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useDarkMode from 'use-dark-mode';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  gruvboxLight,
  gruvboxDark,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const Code = ({ value, language, inline }) => {
  const initialState = false;
  const darkMode = useDarkMode(initialState);
  const [isMounted, setIsMounted] = useState(initialState);
  const [isDarkMode, setIsDarkMode] = useState(initialState);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsDarkMode(isMounted && darkMode.value);
  }, [isMounted, darkMode]);

  const codeTagProps = {
    display: 'inline',
    lineHeight: '1',
    padding: '0.25rem 0.75rem 0.4rem 0.75rem',
    borderRadius: '0.5rem',
    border: '0.1rem dotted gray',
  };

  const preTagProps = {
    lineHeight: '1',
    padding: '1.25rem 1.5rem',
    overflow: 'auto',
    borderRadius: '0.5rem',
    border: `0.1rem dotted ${
      isDarkMode ? gruvboxDark.hljs.color : gruvboxLight.hljs.color
    }`,
    scrollbarWidth: 'thin',
    scrollbarColor: `${
      isDarkMode
        ? gruvboxDark['hljs-comment'].color
        : gruvboxLight['hljs-comment'].color
    } ${isDarkMode ? gruvboxDark.hljs.color : gruvboxLight.hljs.color}`,
  };

  return inline ? (
    <SyntaxHighlighter
      language={language}
      style={isDarkMode ? gruvboxDark : gruvboxLight}
      customStyle={codeTagProps}
      PreTag="span"
    >
      {value}
    </SyntaxHighlighter>
  ) : (
    <SyntaxHighlighter
      language={language}
      style={isDarkMode ? gruvboxDark : gruvboxLight}
      customStyle={preTagProps}
      showLineNumbers
    >
      {value}
    </SyntaxHighlighter>
  );
};

Code.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
  inline: PropTypes.bool,
};

Code.defaultProps = {
  language: null,
  inline: false,
};

export default Code;
