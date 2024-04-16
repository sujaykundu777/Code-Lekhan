import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function EditVer02() {
    const [activeTextarea, setActiveTextarea] = useState('html');
    const [htmlCode, setHtmlCode] = useState(`<!-- Example of Increment Number -->
    <h1>Increment Counter</h1>
    <p>Count: <span id="count">0</span></p>
    <button onclick="increment()">Increment</button>`);
    const [cssCode, setCssCode] = useState(` 
    body {
        font-family: Arial, sans-serif;
        text-align: center;
        background-color: #202125; 
        color: white; 
      }
      
      h1 {
        color: #FF9933; 
        margin-top: 50px;
      }
      
      button {
        background-color: #FF9933; 
        color: #202125; 
        letter-spacing: 2px;
        font-weight: 600;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 20px #FF9933;
        transition: box-shadow 0.3s ease-in-out;
      }
    
      button::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300%;
        height: 300%;
        background-color: rgba(255, 153, 51, 0.2); 
        border-radius: 50%;
        z-index: 0;
        transition: all 0.6s ease-in-out;
        transform: translate(-50%, -50%);
      }
    
      button:hover {
        box-shadow: 0 0 40px #FF9933; 
      }
    
      button:hover::before {
        width: 100%;
        height: 100%;
      }`);
    const [jsCode, setJsCode] = useState(`let count = 0;

    function increment() {
      count++;
      document.getElementById("count").innerText = count;
    }`);
    const [outputCode, setOutputCode] = useState('');


    const handleToggle = (type) => setActiveTextarea(type === activeTextarea ? null : type)

    const updateOutput = () => {
        const combinedCode = `
      <html>
        <head>
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

    const handleDownload = () => {

        const indexHtmlContent = `
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="styles.css">
            </head>
            <body>
                ${htmlCode}
                <script src="script.js"></script>
            </body>
        </html>
    `;

        const zip = new JSZip();
        zip.file('index.html', indexHtmlContent);
        zip.file('styles.css', cssCode);
        zip.file('script.js', jsCode);

        zip.generateAsync({ type: 'blob' })
            .then(function (content) {
                saveAs(content, 'code_files.zip');
            });
    };

    const Btn = ({ bgHover, type, value, color, borderColor }) => {
        return (
            <button
                className={`py-1 px-3 font-semibold text-${color} tracking-wide hover:bg-${bgHover} border rounded-xl border-b-4 active:border-b-2 active:mt-0.5 ${activeTextarea === type ? ` border-b-2 mt-0.5 border-${borderColor}` : ''}`}
                onClick={() => handleToggle(type)}
                disabled={activeTextarea === type}>
                {value}
            </button>
        )
    }


    return (
        <div className='h-screen'>
            <div className='w-full p-2 bg-slate-800 flex justify-between items-center text-[#ebebeb]'>

                <div className='flex gap-2  w-[33.33%]'>
                    <Btn color={'[#ebebeb]'} borderColor={'[#e34c26]'} bgHover={'[#f06529]'} type='html' value='HTML' />
                    <Btn color={'[#ebebeb]'} borderColor={'[#264de4]'} bgHover={'[#2965f1]'} type='css' value='CSS' />
                    <Btn color={'[#ebebeb]'} borderColor={'[#d8c549]'} bgHover={'[#f0db4f] hover:text-[#323330]'} type='js' value='JavaScript' />
                </div>

                <h1 className='text-2xl w-[33.33%] font-["Comfortaa"] font-normal text-center  tracking-wider'>&lt;/CodeLekhan&gt;</h1>

                <div className='flex justify-end w-[33.33%]'>
                    <button onClick={handleDownload} className="py-1 px-3 font-semibold tracking-wide border rounded-xl border-b-4 active:border-b-2 active:mt-0.5">Download Files</button>
                </div>
            </div>
            <div className='h-[90%] flex'>
                <div className='h-full w-1/2 relative' id='editor'>

                    <div className={`w-full h-full absolute ${activeTextarea === 'html' ? '' : 'hidden'}`}>
                        <Editor
                            width="100%"
                            height="100%"
                            language="html"
                            theme="vs-dark"
                            value={htmlCode}
                            onChange={(value) => setHtmlCode(value)}
                            className={` w-1/2 h-full `}
                            options={{
                                minimap: {
                                    enabled: false
                                }
                            }}
                        />
                    </div>
                    <div className={`w-full h-full absolute ${activeTextarea === 'css' ? '' : 'hidden'}`}>
                        <Editor
                            width="100%"
                            height="100%"
                            language="css"
                            theme="vs-dark"
                            value={cssCode}
                            onChange={(value) => setCssCode(value)}
                            className={` w-1/2 h-full `}
                            options={{
                                minimap: {
                                    enabled: false
                                }
                            }}
                        />
                    </div>
                    <div className={`w-full h-full absolute ${activeTextarea === 'js' ? '' : 'hidden'}`}>
                        <Editor
                            width="100%"
                            height="100%"
                            language="javascript"
                            theme="vs-dark"
                            value={jsCode}
                            onChange={(value) => setJsCode(value)}
                            className={` w-1/2 h-full `}
                            options={{
                                minimap: {
                                    enabled: false
                                }
                            }}
                        />
                    </div>
                </div>
                <div className=' w-1/2 h-full ' id='output'>
                    <iframe title="output-frame" srcDoc={outputCode} className={`w-full h-full border border-gray-300 rounded-md`} ></iframe>
                </div>
            </div>
        </div>
    );
}
