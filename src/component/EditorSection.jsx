import React from 'react'
import Editor from '@monaco-editor/react';

export default function EditorSection({ code, setCode, activeEditor, type}) {
    return (
        <div className={`w-full h-full absolute ${activeEditor === type ? '' : 'hidden'}`}>
            <Editor
                width="100%"
                height="100%"
                language={type}
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value)}
                className={` w-1/2 h-full `}
                loading={<div className='w-10 h-10 border-4 border-gray-500 animate-spin rounded-full border-b-gray-700'/>}
                options={{
                    minimap: {
                        enabled: false
                    },
                    wordWrap: 'on'
                }}
            />
        </div>
    )
}
