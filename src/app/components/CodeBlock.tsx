
import SyntaxHighlighter from 'react-syntax-highlighter';
import { googlecode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import customTheme from '../utils/customTheme';

type props={
    language:string,
    code:string,
    title?:string
}

const CodeBlock = ({ language, code,title }:props) => {
  return (
    <div className='overflow-hidden rounded-lg border border-gray-100 mt-4 w-full'>
      {title && <div className='flex justify-between border-b border-gray-100 p-4 bg-gray-50'><span className='font-bold'>{title}</span></div>}
      <div className='p-4'>
      <SyntaxHighlighter language={language} style={googlecode}>
      {code}
    </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
