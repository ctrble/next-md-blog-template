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

  return inline ? (
    <SyntaxHighlighter
      language={language}
      PreTag="span"
      customStyle={codeTagProps}
      style={srcery}
    >
      {value}
    </SyntaxHighlighter>
  ) : (
    <SyntaxHighlighter language={language} showLineNumbers style={srcery}>
      {value}
    </SyntaxHighlighter>
  );
};

export default Code;
