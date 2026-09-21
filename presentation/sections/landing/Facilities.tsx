// ** Hooks && Tools
import Image from "next/image";
// ** Assets
import image1 from '@/public/images/landing/Cold Plunge and infrared spa suite.png'
import image2 from '@/public/images/landing/Heavy dumbbell racks aligned with precision.png'
import image3 from '@/public/images/landing/Vo2 Max metabolic gas analysis room.png'



export default function Facilities() {
    return (
        <section className="p-6 sm:p-12 bg-[#0A0C0E] text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#1F241A] pb-6">
                <div>
                    <p className="flex items-center text-[12px] font-bold text-[#CCFF00] tracking-wider uppercase">
                        <span className="flex w-8 h-2 bg-[#CCFF00] mr-2"></span>
                        INFRASTRUCTURE BLUEPRINT
                    </p>
                    <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold italic uppercase tracking-tight">
                        THE IRON VAULT <span className="text-[#CCFF00]">FACILITIES</span>
                    </h1>
                </div>
                <p className="w-full md:w-[40%] text-[14px] text-[#9CA3AF] leading-relaxed">
                    Industrial-grade steel, contrast cryotherapy suites, and Olympic platform setups engineered to eliminate every bottleneck in athletic progression.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
                <div className="bg-[#0C0F13] border border-[#1E232D] shadow-md shadow-[#1C2219] overflow-hidden group">
                    <div className="relative aspect-4/3 w-full overflow-hidden">
                        <Image 
                            src={image1} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            alt="Sub-Zero Plunge & Cedar Sauna"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#0A0C0E] via-[#0A0C0E]/40 to-transparent"></div>
                        <div className="flex flex-col gap-1.5 absolute bottom-0 p-6 w-full">
                            <h2 className="text-[11px] font-bold text-[#CCFF00] tracking-widest uppercase">
                                RECOVERY SUITE
                            </h2>
                            <h3 className="text-[20px] font-bold text-white uppercase leading-tight">
                                SUB-ZERO PLUNGE & CEDAR SAUNA
                            </h3>
                            <p className="text-[12px] text-[#9CA3AF] line-clamp-2 leading-relaxed">
                                Medical-grade contrast therapy down-regulating systemic inflammation and speeding muscular rebuild.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#0C0F13] border border-[#1E232D] shadow-md shadow-[#1C2219] overflow-hidden group">
                    <div className="relative aspect-4/3 w-full overflow-hidden">
                        <Image 
                            src={image2} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            alt="Urethane Calibrated Up To 80 KG"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#0A0C0E] via-[#0A0C0E]/40 to-transparent"></div>
                        <div className="flex flex-col gap-1.5 absolute bottom-0 p-6 w-full">
                            <h2 className="text-[11px] font-bold text-[#CCFF00] tracking-widest uppercase">
                                FREE WEIGHT DECK
                            </h2>
                            <h3 className="text-[20px] font-bold text-white uppercase leading-tight">
                                URETHANE CALIBRATED UP TO 80 KG
                            </h3>
                            <p className="text-[12px] text-[#9CA3AF] line-clamp-2 leading-relaxed">
                                Solid stainless handles with 1.2mm volcanic diamond knurling for no-slip heavy presses and pulls.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#0C0F13] border border-[#1E232D] shadow-md shadow-[#1C2219] overflow-hidden group">
                    <div className="relative aspect-4/3 w-full overflow-hidden">
                        <Image 
                            src={image3} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            alt="VO2 Max & DEXA Telemetry"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#0A0C0E] via-[#0A0C0E]/40 to-transparent"></div>
                        <div className="flex flex-col gap-1.5 absolute bottom-0 p-6 w-full">
                            <h2 className="text-[11px] font-bold text-[#CCFF00] tracking-widest uppercase">
                                DIAGNOSTICS LAB
                            </h2>
                            <h3 className="text-[20px] font-bold text-white uppercase leading-tight">
                                VO2 MAX & DEXA TELEMETRY
                            </h3>
                            <p className="text-[12px] text-[#9CA3AF] line-clamp-2 leading-relaxed">
                                Direct breath-by-breath gas exchange to establish individual ventilatory thresholds and lactate turnpoints.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}