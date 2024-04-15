import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function CodeEditor() {
    const [code, setCode] = useState('function hello() {\n  console.log("Hello, world!");\n}');
    const [output, setOutput] = useState(''); // New state variable for output

    const handleEditorChange = (newValue) => {
        setCode(newValue);
    };

    const handleRunCode = () => {
        // Evaluate the code (replace with secure evaluation method)
        const result = eval(code);
        setOutput(result ? result.toString() : ''); // Handle different output types
    };

    return (
        <div className='flex gap-5'>
            <Editor
                width="800px"
                height="600px"
                language="javascript"
                theme="vs-dark"
                value={code}
                onChange={handleEditorChange}
            />

            <div className='border w-full relative '>
                <h2 className='bg-gray-800 w-full p-1 px-2 text-white'>Output
                    <button className='ml-5 rounded text-white bg-green-500 px-2' onClick={handleRunCode}>Run Code</button>
                </h2>
                <iframe>{output}</iframe>
            </div>

        </div>
    );
}

export default CodeEditor;
