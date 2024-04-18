import React from 'react'
import { ClearText, Download, Play, Github } from './MyIcons'
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function HamBurger({ setHtml, setCss, setJs, html, css, js, output }) {

    const Btn = ({ text, icon, click }) => {
        return (
            <button type="button" className="relative inline-flex items-center w-full px-4 py-2 gap-2 hover:bg-gray-300 font-medium text-black"
                onClick={click} >
                {icon}
                {text}
            </button>
        )
    }

    const handleDownload = () => {
        const indexHtmlContent = `
<!doctype html>
<html>
    <head>
        <title>Code Lekhan by AzadNishad</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" type="text/css" href="styles.css">
    </head>
    <body>
        ${html}
        <script src="script.js"></script>
    </body>
</html>
        `;

        const zip = new JSZip();
        zip.file('index.html', indexHtmlContent);
        zip.file('styles.css', css);
        zip.file('script.js', js);

        zip.generateAsync({ type: 'blob' })
            .then(function (content) {
                saveAs(content, 'code_files.zip');
            });
    };

    return (
        <div className='relative group'>

            <div className="w-10 h-12  cursor-pointer flex flex-col items-center justify-center">
                <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 delay-300 origin-left translate-y-[0.5rem] group-hover:rotate-[-45deg]"></div>
                <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 delay-300 origin-center group-hover:hidden"></div>
                <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 delay-300 origin-left -translate-y-[0.5rem] group-hover:rotate-[45deg]"></div>
            </div>

            <div className='py-3 absolute w-52 hidden shadow-2xl transition-all duration-300 delay-300 shadow-white/50 rounded bg-white right-0  group-hover:block'>
                <Btn text='Clear Code' icon={<ClearText size={{ width: "18px", height: "18px" }} />}
                    click={() => { setHtml(''); setCss(''); setJs('') }}
                />
                <Btn text='Preview' icon={<Play size={{ width: "15px", height: "15px" }} />}
                    click={() => {
                        const previewWindow = window.open();
                        if (previewWindow) {
                            previewWindow.document.open();
                            previewWindow.document.write(output);
                            previewWindow.document.close();
                        } else {
                            alert('Popup blocked! Please allow popups for this website.');
                        }
                    }}
                />
                <Btn text='Download Files' icon={<Download size={{ width: "18px", height: "18px" }} />}
                    click={handleDownload}
                />
                <Btn text='Dev. Github' icon={<Github size={{ width: "18px", height: "18px" }} />} 
                    click={() => window.open('https://github.com/AzadNishad', '_blank')}
                />
            </div>


        </div>
    )
}
