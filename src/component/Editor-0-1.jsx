import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function EditVer01() {
    const [activeTextarea, setActiveTextarea] = useState('html');
    const [htmlCode, setHtmlCode] = useState('ye wala HTML hai');
    const [cssCode, setCssCode] = useState('ye wala CSS hai');
    const [jsCode, setJsCode] = useState('ye wala JavaScript hai');
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
            <div className='w-full p-2 bg-slate-800 flex justify-between text-[#ebebeb]'>

                <div className='flex gap-2'>
                    <Btn color={'[#ebebeb]'} borderColor={'[#e34c26]'} bgHover={'[#f06529]'} type='html' value='HTML' />
                    <Btn color={'[#ebebeb]'} borderColor={'[#264de4]'} bgHover={'[#2965f1]'} type='css' value='CSS' />
                    <Btn color={'[#ebebeb]'} borderColor={'[#d8c549]'} bgHover={'[#f0db4f] hover:text-[#323330]'} type='js' value='JavaScript' />
                </div>

                <button onClick={handleDownload} className="py-1 px-3 font-semibold tracking-wide border rounded-xl border-b-4 active:border-b-2 active:mt-0.5">Download Files</button>
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
