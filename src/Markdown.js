import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = function () {
  const [markdown, setMarkdown] = useState('# Markdown');
  return (
    <section className='section-flex'>
      <textarea
        className='textarea'
        value={markdown}
        onChange={(e) => {
          setMarkdown(e.target.value);
        }}
      ></textarea>
      <article className='result'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </section>
  );
};

export default Markdown;
