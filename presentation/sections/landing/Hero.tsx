// ** Hooks && Tools
import Image from 'next/image'
// ** Assets
import background from '@/public/images/herobackground.png'
import heroman from '@/public/images/landing/heroman.png'
import Button from '@/presentation/components/ui/Button'
// ** Components
import Badge from '@/presentation/components/ui/Badge'



export default function Hero() {
    return (
        <section className='w-full min-h-screen h-full lg:h-screen flex items-center justify-center relative py-24 lg:py-0'>
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
                        <Badge title={
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 flex bg-[#CCFF00] rounded-full"></span>
                                SYSTEM 04 // PROTOCOL ENGAGED
                            </span>
                        } type='primary'/>
                        <Badge title='4.98 RATING // 2,400+ ATHLETES' type='secondary'/>
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
                <div className='flex justify-center items-center'>
                    <div className='w-fit h-fit relative rounded-xl border border-[#1E232D] bg-[#0C0F13] group shadow-2xl'>
                        <Image src={heroman} alt='heroman' className='w-auto h-auto max-h-100 sm:max-h-120 lg:h-140 rounded-xl'/>
                        <div className='absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#1E232D] flex items-center gap-2 text-[10px] font-mono text-white tracking-wider'>
                            <span className='w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse'></span>
                            REC // LIVE CAM 01
                        </div>

                        <div className='absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#1E232D] flex flex-col items-end text-right font-mono'>
                            <span className='text-[9px] text-[#9CA3AF] tracking-wider'>BIOMETRIC HRV</span>
                            <span className='text-[12px] font-bold text-white flex items-center gap-1.5'>
                                <span className='w-2 h-2 rounded-full bg-[#CCFF00]'></span>
                                168 BPM <span className='text-[#9CA3AF] font-normal'>/ ZONE 4.2</span>
                            </span>
                        </div>

                        <div className='absolute bottom-16 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#1E232D] font-mono text-[10px] text-white flex items-center gap-2'>
                            <span className='text-[#9CA3AF]'>FORCE OUTPUT</span>
                            <span className='text-[#CCFF00] font-bold'>462 WATTS</span>
                        </div>

                        <div className='absolute bottom-0 inset-x-0 p-4 bg-linear-to-t from-black via-black/80 to-transparent flex justify-between items-end'>
                            <div className='font-mono'>
                                <span className='text-[10px] text-[#9CA3AF] block'>01 // HYPERTROPHY & VELOCITY</span>
                                <h4 className='text-sm font-bold text-white tracking-wider'>DYNAMIC CORE</h4>
                            </div>
                            <button className='w-8 h-8 rounded-md bg-[#CCFF00] text-black flex items-center justify-center font-bold text-xs'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.41667 16.5L8.25 15.3333L11.2083 12.375L4.125 5.29167L1.16667 8.25L0 7.08333L1.16667 5.875L0 4.70833L1.75 2.95833L0.583333 1.75L1.75 0.583333L2.95833 1.75L4.70833 0L5.875 1.16667L7.08333 0L8.25 1.16667L5.29167 4.125L12.375 11.2083L15.3333 8.25L16.5 9.41667L15.3333 10.625L16.5 11.7917L14.75 13.5417L15.9167 14.75L14.75 15.9167L13.5417 14.75L11.7917 16.5L10.625 15.3333L9.41667 16.5Z" fill="black"/>
                                </svg>
                            </button>
                        </div>
                        <div className='absolute -bottom-20 -left-16 bg-[#0C0F13]/95 backdrop-blur-md border border-[#1E232D] p-3 rounded-lg shadow-2xl z-20 font-mono hidden sm:block w-52'>
                            <div className='flex justify-between items-center mb-1'>
                                <span className='text-[9px] text-[#9CA3AF]'>VO2 MAX EFFICIENCY</span>
                                <span className='text-[10px] text-[#CCFF00] font-bold'>+21.4% PEAK</span>
                            </div>
                            <div className='w-full h-8 flex items-end gap-1 py-1'>
                                <svg className='w-full h-full text-[#CCFF00]' viewBox='0 0 100 30' fill='none'>
                                    <path d='M0 25 L25 20 L50 22 L75 8 L100 12' stroke='currentColor' strokeWidth='2' fill='none' />
                                    <circle cx='75' cy='8' r='3' fill='currentColor' />
                                </svg>
                            </div>
                            <span className='text-[8px] text-[#6B7280] block mt-1 uppercase'>ADAPTIVE LOAD TELEMETRY V4.2</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}