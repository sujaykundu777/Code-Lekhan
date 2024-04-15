import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

function DemoEditor() {
    const [htmlCode, setHtmlCode] = useState('');
    const [cssCode, setCssCode] = useState('');
    const [jsCode, setJsCode] = useState('');
    const [darkMode, setDarkMode] = useState(false);

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
        return combinedCode;
    };

    const handleDownload = () => {
        const zip = new JSZip();
        zip.file('index.html', htmlCode);
        zip.file('styles.css', cssCode);
        zip.file('script.js', jsCode);

        zip.generateAsync({ type: 'blob' })
            .then(function (content) {
                saveAs(content, 'code_files.zip');
            });
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`min-h-screen flex flex-col ${darkMode ? 'dark:bg-gray-800 dark:text-white' : ''} bg-gray-100 text-gray-900 `}>
            <div className="flex-grow flex flex-row">
                <div className="flex-1 p-4">
                    <div className="mb-4">
                        <textarea
                            value={htmlCode}
                            onChange={(e) => setHtmlCode(e.target.value)}
                            placeholder="Enter HTML code"
                            className={`w-full h-32 p-2 border border-gray-300 rounded-md resize-none ${darkMode ? 'dark:bg-gray-800 dark:text-white' : ''}`}
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <textarea
                            value={cssCode}
                            onChange={(e) => setCssCode(e.target.value)}
                            placeholder="Enter CSS code"
                            className={`w-full h-32 p-2 border border-gray-300 rounded-md resize-none ${darkMode ? 'dark:bg-gray-800 dark:text-white' : ''}`}
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <textarea
                            value={jsCode}
                            onChange={(e) => setJsCode(e.target.value)}
                            placeholder="Enter JavaScript code"
                            className={`w-full h-32 p-2 border border-gray-300 rounded-md resize-none ${darkMode ? 'dark:bg-gray-800 dark:text-white' : ''}`}
                        ></textarea>
                    </div>
                </div>
                <div className="flex-1 p-4">
                    <iframe title="output-frame" srcDoc={updateOutput()} className={`w-full h-full border border-gray-300 rounded-md  ${darkMode ? 'bg-gray-200 ' : 'bg-white'}`}></iframe>
                </div>
            </div>
            
            <div className="p-4 flex gap-5">
                <button onClick={toggleDarkMode} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    {darkMode ? 'Light' : 'Dark'}
                </button>
                <button onClick={handleDownload} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Download Files</button>
            </div>
        </div>
    );
}

export default DemoEditor;





 {/* <div className=''>
                    <button className='py-1 px-3 font-semibold bg-green-500 tracking-wide hover:bg-green-400 border rounded-xl border-green-700 border-b-4 active:border-b-2 active:mt-0.5 ' onClick={handleRunCode}>Run</button>
                </div> */}

                // const handleRunCode = () => {
                //     // Evaluate the code (replace with secure evaluation method)
                //     // const result = eval(code);
                //     setOutput(updateOutput); // Handle different output types
                // };