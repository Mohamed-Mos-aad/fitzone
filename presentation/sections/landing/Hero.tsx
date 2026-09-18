// ** Hooks && Tools
import Image from 'next/image'
// ** Assets
import background from '@/public/images/herobackground.png'
import manPhoto from '@/public/images/man.jpg'


export default function Hero() {
    return (
        <div className='w-full h-screen flex items-center justify-center relative'>
            <Image 
                src={background} 
                alt='background' 
                fill 
                className='object-cover -z-10'
                priority 
            />
            <div className='w-[90%] grid grid-cols-[65%_35%] gap-8 mx-auto py-4'>
                <div className='flex flex-col gap-6'>
                    <div className='flex gap-2.5'>
                        <h2 className='w-fit flex items-center gap-2 border border-[#CCFF00]/40 px-3.5 py-1.5 rounded-full shadow-sm shadow-[#CCFF00] text-[12px] font-bold text-[#CCFF00]'>
                            <span className='w-2 h-2 flex bg-[#CCFF00] rounded-full'></span>
                            SYSTEM 04 // PROTOCOL ENGAGED
                        </h2>
                        <h2 className='w-fit flex items-center gap-2 bg-[#12151A] border border-[#242933] px-3.5 py-1.5 rounded-full text-[12px] font-bold text-[#D1D5DB]'>
                            4.98 RATING // 2,400+ ATHLETES
                        </h2>
                    </div>
                    <h1 className='text-8xl font-bold leading-28 italic text-nowrap'>
                        FORGE YOUR
                        <br />
                        <span className='text-[#BAFF29]'>ELITE EDGE</span>
                        <br />
                        <span className='text-[#9CA3AF]'>WITHOUT LIMITS.</span>
                    </h1>
                    <p>
                        Uncompromising high-performance conditioning, Olympic-
                        calibrated iron platforms, and real-time biometric telemetry
                        engineered for profound physical transformation.
                    </p>
                </div>
                <div className='rounded-2xl'>
                    <Image src={manPhoto} alt='manPhoto' className='w-fit rounded-xl'/>
                </div>
            </div>
        </div>
    )
}   


