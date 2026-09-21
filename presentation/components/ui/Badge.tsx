// ** Hooks && Tools
import { ReactNode } from "react";



// ** Interfaces
interface BadgeProps{
    title: string | ReactNode;
    type: 'primary' | 'secondary';
}



export default function Badge({title, type} : BadgeProps) {
    // ** Contants
    const types = {
        primary: 'border-[#CCFF00]/40 shadow-[#CCFF00] text-[#CCFF00]',
        secondary: 'bg-[#12151A] border-[#242933] text-[#D1D5DB]'
    }



    return (
        <h2 className={`w-fit flex items-center gap-2 border px-3.5 py-1.5 rounded-full shadow-sm  text-[12px] font-bold ${types[type]}`}>
            {title}
        </h2>
    )
}
