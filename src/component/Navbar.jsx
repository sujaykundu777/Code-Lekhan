import React from 'react'
import Logo from '../assets/LogoSquare.svg'
import HamBurger from './HamBurger';

export default function Navbar({toggle, activeEditor, type}) {
    const TabBtn = ({ bgStyle, text, type }) => {
        return (
            <button
                className={`font-semibold tracking-wide  px-3 py-1 hover:bg-slate-600 hover:${bgStyle} hover:py-4 transition-all duration-500 ${activeEditor === type ? bgStyle +'py-4' : ''}`}
                onClick={() => toggle(type)}
                disabled={activeEditor === type}>
                {text}
            </button>
        )
    }
    return (
        <nav className='w-full px-5 py-2 bg-slate-800 h-14' >
            <div className='flex justify-between items-center h-full'>
                <div className='relative flex items-center gap-1 w-[33.33%] '>
                    <TabBtn text='HTML' bgStyle={`bg-[#FF5733]`} type={'html'} />
                    <TabBtn text='CSS' bgStyle={`bg-[#2965f1]`} type={'css'} />
                    <TabBtn text='JavaScript' bgStyle={`bg-[#F0DB4F] `} type={'js'}/>
                </div>
                <div className='flex items-center  justify-center h-10 w-[33.33%]'>
                    <img src={Logo} alt='logo' className='w-24 aspect-video bg-cover' />
                </div>
                <div className='w-[33.33%]  flex justify-end'>
                    <HamBurger />
                </div>
            </div>
        </nav>

    )
}
