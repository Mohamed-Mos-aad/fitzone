'use client'
// ** Hooks && Tools
import Image from "next/image";
import { useState } from "react";
// ** Assets
import logo from '@/public/icons/logo.svg'



export default function NavBar() {
    // ** States
    const [isOpen, setIsOpen] = useState(false);



    return (
        <nav className="bg-[#0A0C0E]/90 border-b border-[#222720] py-4 px-6 md:px-12 flex items-center justify-between relative">
            <Image src={logo} alt="fitzone logo icon" height={32}/>
            <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                <li className="hover:text-[#C3F400] cursor-pointer transition-colors"> home </li>
                <li className="hover:text-[#C3F400] cursor-pointer transition-colors"> Memberships </li>
                <li className="hover:text-[#C3F400] cursor-pointer transition-colors"> Elite Trainers </li>
                <li className="hover:text-[#C3F400] cursor-pointer transition-colors"> Schedule </li>
                <li className="hover:text-[#C3F400] cursor-pointer transition-colors"> Facilities </li>
            </ul>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-[#222720]/50 transition-colors z-50"
                aria-label="Toggle Menu"
            >
                {isOpen ? (
                    <svg className="w-6 h-6 text-[#C3F400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>
            <div className={`absolute top-full left-0 w-full bg-[#0A0C0E] border-b border-[#222720] flex flex-col items-center gap-6 py-6 transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <ul className="flex flex-col items-center gap-4 text-center">
                    <li onClick={() => setIsOpen(false)} className="hover:text-[#C3F400] cursor-pointer transition-colors"> home </li>
                    <li onClick={() => setIsOpen(false)} className="hover:text-[#C3F400] cursor-pointer transition-colors"> Memberships </li>
                    <li onClick={() => setIsOpen(false)} className="hover:text-[#C3F400] cursor-pointer transition-colors"> Elite Trainers </li>
                    <li onClick={() => setIsOpen(false)} className="hover:text-[#C3F400] cursor-pointer transition-colors"> Schedule </li>
                    <li onClick={() => setIsOpen(false)} className="hover:text-[#C3F400] cursor-pointer transition-colors"> Facilities </li>
                </ul>
            </div>
        </nav>
    )
}