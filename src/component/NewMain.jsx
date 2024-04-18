import React, { useState, useEffect } from 'react';
import Logo from '../assets/LogoSquare.svg'
import HamBurger from './HamBurger';
import EditorSection from './EditorSection';
import { css, html, js } from './DefaultCode';

export default function EditVer02() {
  const [activeTextarea, setActiveTextarea] = useState('html');
  const [htmlCode, setHtmlCode] = useState(html);
  const [cssCode, setCssCode] = useState(css);
  const [jsCode, setJsCode] = useState(js);
  const [outputCode, setOutputCode] = useState('');

  const handleToggle = (type) => setActiveTextarea(type === activeTextarea ? null : type)

  const updateOutput = () => {
    const tailwindCDN = `<script src="https://cdn.tailwindcss.com"></script>`;
    const tailwindCheckbox = document.querySelector('input[id="check"]');
    const isTailwindChecked = tailwindCheckbox.checked;

    let combinedCode = `
            <!doctype html>
            <html>
            <head>
              <title>Code Lekhan</title>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              ${isTailwindChecked ? tailwindCDN : ''}
              <style>${cssCode}</style>
            </head>
            <body>
               ${htmlCode}
               <script>${jsCode}</script>
            </body>
            </html>
        `;
    return setOutputCode(combinedCode);
  };

  useEffect(() => {
    updateOutput();
  }, [htmlCode, cssCode, jsCode]);

  const TabBtn = ({ bgStyle, text, type }) => {
    return (
      <button
        className={`font-semibold tracking-wide  px-3 ${activeTextarea === type ? `${bgStyle} py-4 ` : ''}`}
        onClick={() => handleToggle(type)}
        disabled={activeTextarea === type}>
        {text}
      </button>
    )
  }


  return (
    <div className='h-screen'>
      <nav className='w-full px-5 py-2 bg-slate-800 h-14' >
        <div className='flex justify-between items-center h-full'>
          <div className='relative flex items-center gap-1 w-[33.33%] '>
            <TabBtn
              text={'HTML'}
              bgStyle={`bg-[#FF5733] relative ${activeTextarea === "html" && 'pr-10'}`} type={'html'} >
            </TabBtn>
            <TabBtn text='CSS' bgStyle={`bg-[#2965f1] `} type={'css'} />
            <TabBtn text='JavaScript' bgStyle={`bg-[#F0DB4F] text-[#323330]`} type={'javascript'} />

            <div className={`absolute left-16 ${activeTextarea === "html" ? '' : 'hidden'}`}>
              <input id='check' type="checkbox" value="" className="peer hidden" />
              <label htmlFor='check' className="hidden cursor-pointer peer-checked:block bg-green-200 p-0.5 rounded-full">
                <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                    style={{ fill: '#44a8b3' }} />
                </svg>
              </label>
              <label htmlFor='check' className="block peer-checked:hidden bg-gray-500 p-0.5 rounded-full  cursor-pointer ">
                <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                    style={{ fill: '#ffffff' }} />
                </svg>
              </label>
            </div>

          </div>
          <div className='flex items-center  justify-center h-10 w-[33.33%]'>
            <img src={Logo} alt='logo' className='w-24 aspect-video bg-cover' />
          </div>
          <div className='w-[33.33%]  flex justify-end'>
            <HamBurger html={htmlCode} css={cssCode} js={jsCode} setHtml={setHtmlCode} setCss={setCssCode} setJs={setJsCode} output={outputCode} />
          </div>
        </div>
      </nav>
      <div className='h-[87%] flex border border-gray-600'>
        <div className='h-full w-1/2 relative' id='editor'>

          <EditorSection code={htmlCode} setCode={setHtmlCode} activeEditor={activeTextarea} type={'html'} />

          <EditorSection code={cssCode} setCode={setCssCode} activeEditor={activeTextarea} type={'css'} />

          <EditorSection code={jsCode} setCode={setJsCode} activeEditor={activeTextarea} type={'javascript'} />

        </div>
        <div className=' w-1/2 h-full ' id='output'>
          <iframe title="output-frame" srcDoc={outputCode} className={`w-full h-full border-l bg-white dark:bg-slate-700 `} ></iframe>
        </div>
      </div>
      <footer className="w-full text-gray-300 text-center flex items-center justify-center h-[6%]">
        Made with ❤️ by &nbsp; <a href="https://github.com/AzadNishad" target='_blank' className='text-[#ff9933] [text-shadow:0_0_10px_#ff9933] hover:underline'>@AzadNishad</a>
    </footer>
    </div>
  );
}
