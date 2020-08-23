import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/212
// import { srcery } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = ({ value, language, inline }) => {
  const codeTagProps = {
    display: inline,
  };

  return inline ? (
    <SyntaxHighlighter
      language={language}
      PreTag="span"
      customStyle={codeTagProps}
      // style={srcery}
    >
      {value}
    </SyntaxHighlighter>
  ) : (
    <SyntaxHighlighter
      language={language}
      showLineNumbers
      // style={srcery}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default Code;
