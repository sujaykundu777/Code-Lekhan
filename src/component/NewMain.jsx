import React, { useState, useEffect } from 'react';
import Logo from '../assets/LogoSquare.svg';
import HamBurger from './HamBurger';
import EditorSection from './EditorSection';
import { css, html, js } from './DefaultCode';
import { reactHTML, reactCSS, reactJS } from './ReactCode';
import IconReact from './ReactIcon';

export default function EditVer02() {
  const [activeTextarea, setActiveTextarea] = useState('html');
  const [htmlCode, setHtmlCode] = useState(html);
  const [cssCode, setCssCode] = useState(css);
  const [jsCode, setJsCode] = useState(js);
  const [reactHTMLCode, setReactHTMLCode] = useState(reactHTML);
  const [reactCSSCode, setReactCSSCode] = useState(reactCSS);
  const [reactJSCode, setReactJSCode] = useState(reactJS);
  const [outputCode, setOutputCode] = useState('');
  const [isTailwindChecked, setIsTailwindChecked] = useState(false);
  const [isReactChecked, setIsReactChecked] = useState(false);

  const handleToggle = (type) => setActiveTextarea(type === activeTextarea ? null : type);

  const updateOutput = () => {
    const tailwindCDN = `<script src="https://cdn.tailwindcss.com"></script>`;
    const reactCDN = `<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
                      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
                      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>`;

    const combinedCode = `
      <!doctype html>
      <html>
      <head>
        <title>Code Lekhan</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${isTailwindChecked ? tailwindCDN : ''}
        ${isReactChecked ? reactCDN : ''}
        <style>${isReactChecked ? reactCSSCode : cssCode}</style>
      </head>
      <body>
        ${isReactChecked ? reactHTMLCode : htmlCode}
        ${isReactChecked ?
          `<script type="text/babel" data-presets="react,es2015">` + reactJSCode + `</script>`
          :
          `<script type="text/javascript">` + jsCode + `</script>`
        }
      </body>
      </html>
    `;
    setOutputCode(combinedCode);
  };

  useEffect(() => {
    const timeoutId = setTimeout(updateOutput, 500); // Debounce the updateOutput function
    return () => clearTimeout(timeoutId); // Cleanup the timeout
  }, [htmlCode, cssCode, jsCode, reactHTMLCode, reactCSSCode, reactJSCode, isTailwindChecked, isReactChecked]);

  const handleTailwindChange = (event) => setIsTailwindChecked(event.target.checked);
  const handleReactChange = (event) => setIsReactChecked(event.target.checked);

  const TabBtn = ({ bgStyle, text, type }) => (
    <button
      className={`font-semibold tracking-wide px-3 ${activeTextarea === type ? `${bgStyle} py-4` : ''}`}
      onClick={() => handleToggle(type)}
      disabled={activeTextarea === type}
    >
      {text}
    </button>
  );

  return (
    <div className="h-screen">
      <nav className="w-full px-5 py-2 bg-slate-800 h-14">
        <div className="flex justify-between items-center h-full">
          <div className="relative flex items-center gap-1 w-[33.33%]">
            <TabBtn text="HTML" bgStyle="bg-[#FF5733]" type="html" />
            <TabBtn text="CSS" bgStyle="bg-[#2965f1]" type="css" />
            <TabBtn text="JavaScript" bgStyle="bg-[#F0DB4F] text-[#323330]" type="javascript" />
            <div className='ml-5'>
              <input id="tailwind" type="checkbox" checked={isTailwindChecked} onChange={handleTailwindChange} className="peer hidden" />
              <label htmlFor='tailwind' className="hidden cursor-pointer peer-checked:block bg-green-200 p-0.5 rounded-full">
                <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                    style={{ fill: '#44a8b3' }} />
                </svg>
              </label>
              <label htmlFor='tailwind' className="block peer-checked:hidden bg-gray-500 p-0.5 rounded-full  cursor-pointer ">
                <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                    style={{ fill: '#ffffff' }} />
                </svg>
              </label>
            </div>
            &nbsp;|&nbsp;
            <div>
              <input id="react" type="checkbox" checked={isReactChecked} onChange={handleReactChange} className="peer hidden" />
              <label htmlFor='react' className="hidden cursor-pointer peer-checked:block bg-gray-700 p-0.5 rounded-full">
                <IconReact fillcolor={'#61DBFB'} height={'20px'} width={'20px'} />
              </label>
              <label htmlFor='react' className="block peer-checked:hidden bg-blue-800/50 p-0.5 rounded-full  cursor-pointer ">
                <IconReact fillcolor={'#ffffff'} height={'20px'} width={'20px'} />
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center h-10 w-[33.33%]">
            <img src={Logo} alt="logo" className="w-24 aspect-video bg-cover" />
          </div>
          <div className="w-[33.33%] flex justify-end">
            <HamBurger
              html={htmlCode}
              css={cssCode}
              js={jsCode}
              setHtml={setHtmlCode}
              setCss={setCssCode}
              setJs={setJsCode}
              output={outputCode}
            />
          </div>
        </div>
      </nav>
      <div className="h-[87%] flex border border-gray-600">
        <div className="h-full w-1/2 relative" id="editor">
          <EditorSection
            code={isReactChecked ? reactHTMLCode : htmlCode}
            setCode={isReactChecked ? setReactHTMLCode : setHtmlCode}
            activeEditor={activeTextarea}
            type="html"
          />
          <EditorSection
            code={isReactChecked ? reactCSSCode : cssCode}
            setCode={isReactChecked ? setReactCSSCode : setCssCode}
            activeEditor={activeTextarea}
            type="css"
          />
          <EditorSection
            code={isReactChecked ? reactJSCode : jsCode}
            setCode={isReactChecked ? setReactJSCode : setJsCode}
            activeEditor={activeTextarea}
            type="javascript"
          />
        </div>

        <div className="w-1/2 h-full" id="output">
          <iframe title="output-frame" srcDoc={outputCode} className="w-full h-full border-l bg-white dark:bg-slate-700"></iframe>
        </div>
      </div>
      <footer className="w-full text-gray-300 text-center flex items-center justify-center h-[6%]">
        Made with ❤️ by &nbsp; <a href="https://github.com/AzadNishad" target="_blank" rel="noopener noreferrer" className="text-[#ff9933] hover:underline"> @AzadNishad </a>
      </footer>
    </div>
  );
}
