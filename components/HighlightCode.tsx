import React, { FC, createRef, useEffect } from "react";
import { findDOMNode } from "react-dom";
import highlight from "highlight.js";

const HighlightCode = ({ children, language }) => {
  const code = createRef<any>();

  useEffect(() => {
    highlight.highlightBlock(findDOMNode(code.current));
  }, []);

  return (
    <>
      <pre>
        <code className={language} ref={code}>
          {children}
        </code>
      </pre>
    </>
  );
};

export default HighlightCode;
