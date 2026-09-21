// ** Interfaces
interface ButtonProps{
    title: string;
    type: 'primary' | 'secondary';
}



export default function Button({title, type} : ButtonProps) {
    // ** Constants
    const types = {
        primary: 'bg-[#CCFF00] border-[#CCFF00] text-black',
        secondary: 'bg-[#13161C]/80 border-[#2B313D] text-white'
    }



    return (
        <button className={`${types[type]} border px-8 py-4 font-bold [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] cursor-pointer hover:shadow shadow-[#CCFF00]`}>
            {title}
        </button>
    )
}