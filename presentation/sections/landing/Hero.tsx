// ** Hooks && Tools
import Image from 'next/image'
// ** Assets
import background from '@/public/images/herobackground.png'
import manPhoto from '@/public/images/man.jpg'
import Button from '@/presentation/components/ui/Button'


export default function Hero() {
    return (
        <div className='w-full min-h-screen h-full lg:h-screen flex items-center justify-center relative py-24 lg:py-0'>
            <span className='w-[30%] aspect-square bg-[#CCFF00]/10 rounded-full absolute blur-3xl left-[35%] -top-50'></span>
            <Image 
                src={background} 
                alt='background' 
                fill 
                className='object-cover -z-10'
                priority 
            />
            <div className='w-[90%] grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 mx-auto py-4 '>
                <div className='flex flex-col gap-6 relative'>
                    <span className='w-[50%] aspect-square bg-[#CCFF00]/10 rounded-full absolute blur-3xl left-0 bottom-0'></span>
                    <div className='flex flex-wrap gap-2.5'>
                        <h2 className='w-fit flex items-center gap-2 border border-[#CCFF00]/40 px-3.5 py-1.5 rounded-full shadow-sm shadow-[#CCFF00] text-[12px] font-bold text-[#CCFF00]'>
                            <span className='w-2 h-2 flex bg-[#CCFF00] rounded-full'></span>
                            SYSTEM 04 // PROTOCOL ENGAGED
                        </h2>
                        <h2 className='w-fit flex items-center gap-2 bg-[#12151A] border border-[#242933] px-3.5 py-1.5 rounded-full text-[12px] font-bold text-[#D1D5DB]'>
                            4.98 RATING // 2,400+ ATHLETES
                        </h2>
                    </div>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight lg:leading-28 italic lg:text-nowrap'>
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
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
                        <Button title='START TRAINING NOW' type='primary'/>
                        <Button title='VIEW MEMBERSHIPS' type='secondary'/>
                    </div>
                    <div className='w-full grid grid-cols-2 sm:flex sm:justify-between gap-4 border-t border-[#1C221A] pt-4'>
                        <div>
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>50K<span className='text-2xl sm:text-3xl text-[#CCFF00]'>+</span></h2>
                            <h3 className='text-[11px] text-[#9CA3AF]'>ACTIVE ATHLETES</h3>
                        </div>
                        <div>
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>98<span className='text-2xl sm:text-3xl text-[#CCFF00]'>%</span></h2>
                            <h3 className='text-[11px] text-[#9CA3AF]'>GOAL METRIC MET</h3>
                        </div>
                        <div>
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>24<span className='text-2xl sm:text-3xl text-[#CCFF00]'>/7</span></h2>
                            <h3 className='text-[11px] text-[#9CA3AF]'>BIOMETRIC ACCESS</h3>
                        </div>
                        <div>
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>120<span className='text-2xl sm:text-3xl text-[#CCFF00]'>+</span></h2>
                            <h3 className='text-[11px] text-[#9CA3AF]'>WEEKLY MODULES</h3>
                        </div>                        
                    </div>
                </div>
                <div className='flex justify-center items-center rounded-2xl'>
                    <Image src={manPhoto} alt='manPhoto' className='w-fit rounded-xl'/>
                </div>
            </div>
        </div>
    )
}