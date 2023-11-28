import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import hljs from "highlight.js";

marked.setOptions({
  baseUrl: process.env.BASE_URL ? process.env.BASE_URL + "/" : "/",
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-",
});

const ContentComponent = () => {
  const { section, title } = useParams();
  const [content, setContent] = useState("");

  const url = `${window.location.origin}/lessons/${section}/${title}.md`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((markdown) => setContent(marked(markdown)))
      .catch((err) => console.error("Error fetching markdown:", err));
  }, [section, title, url]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default ContentComponent;
