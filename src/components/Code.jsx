import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { srcery } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const Code = ({ value, language, inline }) => {
  const codeTagProps = {
    display: 'inline',
    border: '1px solid red',
    lineHeight: '1',
    padding: '0.25rem 0.5rem 0.4rem 0.5rem',
    borderRadius: '0.5rem',
    border: '0.1rem dotted gray',
  };

  const preTagProps = {
    border: '1px solid red',
    lineHeight: '1',
    padding: '1.25rem 1.5rem',
    borderRadius: '0.5rem',
    border: '0.1rem dotted gray',
    scrollbarWidth: 'thin',
    scrollbarColor: 'black gray',
    overflow: 'auto',
  };

  return inline ? (
    <SyntaxHighlighter
      language={language}
      style={srcery}
      customStyle={codeTagProps}
      PreTag="span"
    >
      {value}
    </SyntaxHighlighter>
  ) : (
    <SyntaxHighlighter
      language={language}
      style={srcery}
      customStyle={preTagProps}
      showLineNumbers
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default Code;
