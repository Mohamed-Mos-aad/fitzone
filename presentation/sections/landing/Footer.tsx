// ** Hooks && Tools
import Image from 'next/image'
import Link from 'next/link'
// ** Assets
import logo from '@/public/icons/logo.svg'



export default function Footer() {
    return (
        <footer className="w-full bg-[#07090B] text-white border-t border-[#1C221A] pt-16 pb-8 px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
                <div className="flex flex-col gap-4">
                    <Image src={logo} alt='logo'/>

                    <p className="text-[12px] font-bold text-[#CCFF00] tracking-wider uppercase">
                        BUILD // EVOLVE // PERFORM
                    </p>

                    <p className="text-[13px] text-[#9CA3AF] leading-relaxed max-w-xs">
                        Human optimization through aggressive physiological conditioning and continuous biometric telemetry.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-[14px] font-bold tracking-widest uppercase text-white">
                        ARCHITECTURE
                    </h3>
                    <ul className="flex flex-col gap-2.5 text-[13px] text-[#9CA3AF]">
                        <li>
                            <Link href="#" className="hover:text-[#CCFF00] transition-colors">Performance Vectors</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-[#CCFF00] transition-colors">Olympic Compound Rig</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-[#CCFF00] transition-colors">Cryo Recovery Suites</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-[#CCFF00] transition-colors">Facility Blueprints</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-[14px] font-bold tracking-widest uppercase text-white">
                        OPERATIONS
                    </h3>
                    <div className="flex flex-col gap-2 text-[13px] text-[#9CA3AF]">
                        <p className="font-semibold text-white">Flagship Iron Vault: 24/7 Access</p>
                        <p>Master Coaches: 05:00 - 23:00</p>
                        <p>704 Ironclad Way, Sector 4</p>
                        <p>Austin, TX 78701</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-[14px] font-bold tracking-widest uppercase text-white">
                        ATHLETE DISPATCH
                    </h3>
                    <p className="text-[13px] text-[#9CA3AF] leading-relaxed">
                        Weekly training briefs, metabolic data releases, and programming.
                    </p>
                    <form className="flex items-center gap-0 w-full mt-1">
                        <input
                            type="email"
                            placeholder="ATHLETE EMAIL"
                            className="w-full bg-[#0C0F13] border border-[#1E232D] px-3.5 py-2.5 text-[12px] text-white placeholder-[#4B5563] focus:outline-none font-mono tracking-wider uppercase"
                        />
                        <button
                            type="submit"
                            className="bg-[#CCFF00] text-black font-bold text-[12px] px-5 py-2.5 hover:bg-[#b3e600] transition-colors font-mono tracking-wider uppercase"
                        >
                            SYNC
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-[#1C221A] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[12px] text-[#6B7280] font-mono">
                <p>
                    © 2025 FitZone Athletic Performance Labs. Standard of ruthless discipline.
                </p>
                <div className="flex flex-wrap items-center gap-6 uppercase tracking-wider text-[11px]">
                    <span className="flex items-center gap-2 text-[#CCFF00]">
                        <span className="w-2 h-2 rounded-full bg-[#CCFF00]"></span>
                        SYS ONLINE
                    </span>
                    <span>CALIBRATED IRON V4</span>
                    <span>LATENCY: 0.8MS</span>
                </div>
            </div>
        </footer>
    )
}