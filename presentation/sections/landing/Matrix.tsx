// ** Hooks && Tools
import Image from "next/image";
// ** Assets
import image1 from '@/public/images/landing/Athlete deadlift grip chalk setup.png'
import image2 from '@/public/images/landing/Athlete performing explosive box jump.png'
import image3 from '@/public/images/landing/Vascular muscular athlete gripping knurled steel.png'
import image4 from '@/public/images/landing/Brutalist gym hall with neon lime laser strip accents.png'




export default function Matrix() {
    return (
        <section className="p-6 sm:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#1F241A] py-6">
                <div>
                    <p className="flex items-center text-[12px] font-bold text-[#CCFF00]"><span className="flex w-8 h-2 bg-[#CCFF00] mr-2"></span>METHODOLOGY & VECTORS</p>
                    <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold italic">DISCIPLINE <span className="text-[#CCFF00]">MATRIX</span></h1>
                </div>
                <p className="w-full md:w-[40%] text-[14px] text-[#9CA3AF]">
                    Four synchronized physiological vectors designed to dismantle
                    plateaus and induce ruthless neurological and muscular adaptation.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6.25 py-12">
                <div className="bg-[#0C0F13] border border-[#1E232D] shadow shadow-[#1C2219]">
                    <div className="flex justify-between items-center border-b border-[#1E232D] p-3.5">
                        <h2 className="text-[12px] font-bold text-[#CCFF00]">01 // STRENGTH</h2>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.816667 8.75L0 7.93333L6.76667 1.16667H2.91667V0H8.75V5.83333H7.58333V1.98333L0.816667 8.75Z" fill="#9CA3AF"/>
                        </svg>
                    </div>
                    <div className="relative">
                        <Image src={image1} className="w-full" alt="Athlete deadlift grip chalk setup"/>
                        <div className="absolute inset-0 bg-linear-to-t from-[#0A0C0E] via-[#0A0C0E]/40 to-[#0A0C0E]/0"></div>
                        <div className="flex flex-col gap-1 absolute bottom-0 p-4">
                            <h3 className="text-[10px] text-[#CCFF00]">MAXIMAL EFFORT</h3>
                            <h4 className="text-[20px] font-bold text-white">HEAVY BARBELL POWER</h4>
                            <p className="text-[12px] text-[#9CA3AF]">
                                Calibrated Olympic platforms, velocity
                                barbell sensors, and absolute compound…
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#0C0F13] border border-[#1E232D] shadow shadow-[#1C2219]">
                    <div className="flex justify-between items-center border-b border-[#1E232D] p-3.5">
                        <h2 className="text-[12px] font-bold text-[#CCFF00]">02 // MOVEMENT</h2>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.816667 8.75L0 7.93333L6.76667 1.16667H2.91667V0H8.75V5.83333H7.58333V1.98333L0.816667 8.75Z" fill="#9CA3AF"/>
                        </svg>
                    </div>
                    <div className="relative">
                        <Image src={image2} className="w-full" alt="Athlete deadlift grip chalk setup"/>
                        <div className="absolute inset-0 bg-linear-to-t from-[#0A0C0E] via-[#0A0C0E]/40 to-[#0A0C0E]/0"></div>
                        <div className="flex flex-col gap-1 absolute bottom-0 p-4">
                            <h3 className="text-[10px] text-[#CCFF00]">EXPLOSIVE RATE</h3>
                            <h4 className="text-[20px] font-bold text-white">AGILITY & SPRINT TURF</h4>
                            <p className="text-[12px] text-[#9CA3AF]">
                                60m high-traction indoor track, plyometric
                                acceleration, and multidirectional agility.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#0C0F13] border border-[#1E232D] shadow shadow-[#1C2219]">
                    <div className="flex justify-between items-center border-b border-[#1E232D] p-3.5">
                        <h2 className="text-[12px] font-bold text-[#CCFF00]">03 // DETAIL</h2>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.816667 8.75L0 7.93333L6.76667 1.16667H2.91667V0H8.75V5.83333H7.58333V1.98333L0.816667 8.75Z" fill="#9CA3AF"/>
                        </svg>
                    </div>
                    <div className="relative">
                        <Image src={image3} className="w-full" alt="Athlete deadlift grip chalk setup"/>
                        <div className="absolute inset-0 bg-linear-to-t from-[#0A0C0E] via-[#0A0C0E]/40 to-[#0A0C0E]/0"></div>
                        <div className="flex flex-col gap-1 absolute bottom-0 p-4">
                            <h3 className="text-[10px] text-[#CCFF00]">STRUCTURAL DENSITY</h3>
                            <h4 className="text-[20px] font-bold text-white">BIOMECHANICAL ISOLATION</h4>
                            <p className="text-[12px] text-[#9CA3AF]">
                                Custom converging resistance machinery
                                with millimetric muscle group targeting.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#0C0F13] border border-[#1E232D] shadow shadow-[#1C2219]">
                    <div className="flex justify-between items-center border-b border-[#1E232D] p-3.5">
                        <h2 className="text-[12px] font-bold text-[#CCFF00]">04 // ENVIRONMENT</h2>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.816667 8.75L0 7.93333L6.76667 1.16667H2.91667V0H8.75V5.83333H7.58333V1.98333L0.816667 8.75Z" fill="#9CA3AF"/>
                        </svg>
                    </div>
                    <div className="relative">
                        <Image src={image4} className="w-full" alt="Athlete deadlift grip chalk setup"/>
                        <div className="absolute inset-0 bg-linear-to-t from-[#0A0C0E] via-[#0A0C0E]/40 to-[#0A0C0E]/0"></div>
                        <div className="flex flex-col gap-1 absolute bottom-0 p-4">
                            <h3 className="text-[10px] text-[#CCFF00]">ATMOSPHERIC FOCUS</h3>
                            <h4 className="text-[20px] font-bold text-white">THE OBSIDIAN VAULT</h4>
                            <p className="text-[12px] text-[#9CA3AF]">
                                Acoustically tuned rubber, anti-glare neon
                                illumination, and zero distractions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}