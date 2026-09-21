// ** Hooks && Tools
import Image from 'next/image'
// ** Assets
import background from '@/public/images/herobackground.png'
// ** Components
import Badge from '@/presentation/components/ui/Badge'
import Button from '@/presentation/components/ui/Button'



export default function CTASection() {
    return (
        <section className="w-full relative py-20 px-4 sm:px-8 flex items-center justify-center bg-[#0D1015] border-t border-[#CCFF00] text-white overflow-hidden">
            <Image
                src={background}
                alt="background"
                fill
                className="object-cover -z-10 opacity-40"
            />

            <div className="w-full p-8 sm:p-12 md:p-16 flex flex-col items-center text-center relative bg-[#0C0F13]/80 backdrop-blur-sm">
                <span className="w-[84%] aspect-square bg-[#CCFF00]/12 rounded-full absolute blur-3xl left-1/2 top-full -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></span>
                <div className="mb-6">
                    <Badge 
                        title={
                            <span className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-[#CCFF00]">
                                <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse"></span>
                                LIMITED VIP COHORT PASS
                            </span>
                        } 
                        type="primary" 
                    />
                </div>

                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold italic tracking-tight uppercase leading-tight mb-4">
                    READY TO FORGE <br />
                    <span className="text-[#CCFF00] drop-shadow-[0_0_10px_rgba(204,255,0,0.75)]">
                        YOUR ELITE FORM?
                    </span>
                </h2>

                <p className="text-sm sm:text-base text-[#9CA3AF] max-w-2xl mx-auto mb-8 leading-relaxed">
                    Your first all-access training session, biometric scan, and 1-on-1 performance consultation are completely on us. Claim your athlete spot instantly.
                </p>

                <form 
                    className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3 bg-[#0A0C0E] p-2 border border-[#1E232D] rounded-lg mb-8 shadow-lg"
                >
                    <input
                        type="email"
                        placeholder="ENTER ATHLETE EMAIL ADDRESS"
                        className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-[#4B5563] border border-[#4B5563] focus:outline-none tracking-wider uppercase font-mono"
                    />
                    <div className="w-full sm:w-auto shrink-0">
                        <Button 
                            title="CLAIM VIP PASS" 
                            type="primary"
                            className="w-full sm:w-auto font-bold tracking-wider uppercase bg-[#CCFF00] text-black"
                        />
                    </div>
                </form>

                <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] sm:text-[11px] text-[#9CA3AF] font-mono uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.05417 7.90417L7.35 4.60833L6.51875 3.77708L4.05417 6.24167L2.82917 5.01667L1.99792 5.84792L4.05417 7.90417ZM4.66667 11.6667C3.31528 11.3264 2.19965 10.551 1.31979 9.34062C0.439931 8.13021 0 6.78611 0 5.30833V1.75L4.66667 0L9.33333 1.75V5.30833C9.33333 6.78611 8.8934 8.13021 8.01354 9.34062C7.13368 10.551 6.01806 11.3264 4.66667 11.6667ZM4.66667 10.4417C5.67778 10.1208 6.51389 9.47917 7.175 8.51667C7.83611 7.55417 8.16667 6.48472 8.16667 5.30833V2.55208L4.66667 1.23958L1.16667 2.55208V5.30833C1.16667 6.48472 1.49722 7.55417 2.15833 8.51667C2.81944 9.47917 3.65556 10.1208 4.66667 10.4417Z" fill="#CCFF00"/>
                        </svg>
                        ZERO PAYMENT INFO REQUIRED
                    </div>
                    <div className="flex items-center gap-1.5">
                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.16667 9.33333V5.25H0V4.08333H3.5V5.25H2.33333V9.33333H1.16667ZM1.16667 2.91667V0H2.33333V2.91667H1.16667ZM3.5 2.91667V1.75H4.66667V0H5.83333V1.75H7V2.91667H3.5ZM4.66667 9.33333V4.08333H5.83333V9.33333H4.66667ZM8.16667 9.33333V7.58333H7V6.41667H10.5V7.58333H9.33333V9.33333H8.16667ZM8.16667 5.25V0H9.33333V5.25H8.16667Z" fill="#CCFF00"/>
                        </svg>
                        INSTANT QR DIGITAL PASS
                    </div>
                    <div className="flex items-center gap-1.5">
                        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 1.16667V0H7V1.16667H3.5ZM4.66667 7.58333H5.83333V4.08333H4.66667V7.58333ZM5.25 12.25C4.53056 12.25 3.85243 12.1115 3.21563 11.8344C2.57882 11.5573 2.02222 11.1806 1.54583 10.7042C1.06944 10.2278 0.692708 9.67118 0.415625 9.03438C0.138542 8.39757 0 7.71944 0 7C0 6.28056 0.138542 5.60243 0.415625 4.96562C0.692708 4.32882 1.06944 3.77222 1.54583 3.29583C2.02222 2.81944 2.57882 2.44271 3.21563 2.16563C3.85243 1.88854 4.53056 1.75 5.25 1.75C5.85278 1.75 6.43125 1.84722 6.98542 2.04167C7.53958 2.23611 8.05972 2.51806 8.54583 2.8875L9.3625 2.07083L10.1792 2.8875L9.3625 3.70417C9.73195 4.19028 10.0139 4.71042 10.2083 5.26458C10.4028 5.81875 10.5 6.39722 10.5 7C10.5 7.71944 10.3615 8.39757 10.0844 9.03438C9.80729 9.67118 9.43056 10.2278 8.95417 10.7042C8.47778 11.1806 7.92118 11.5573 7.28438 11.8344C6.64757 12.1115 5.96944 12.25 5.25 12.25ZM5.25 11.0833C6.37778 11.0833 7.34028 10.6847 8.1375 9.8875C8.93472 9.09028 9.33333 8.12778 9.33333 7C9.33333 5.87222 8.93472 4.90972 8.1375 4.1125C7.34028 3.31528 6.37778 2.91667 5.25 2.91667C4.12222 2.91667 3.15972 3.31528 2.3625 4.1125C1.56528 4.90972 1.16667 5.87222 1.16667 7C1.16667 8.12778 1.56528 9.09028 2.3625 9.8875C3.15972 10.6847 4.12222 11.0833 5.25 11.0833Z" fill="#CCFF00"/>
                        </svg>
                        24-HOUR ACTIVATION WINDOW
                    </div>
                </div>
            </div>
        </section>
    )
}