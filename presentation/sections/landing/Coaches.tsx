// ** Hooks && Tools
import Image from "next/image";
// ** Assets
import coach1 from '@/public/images/landing/Strength Coach Marcus Vance.png'
import coach3 from '@/public/images/landing/Mobility Coach David Chen.png'
// ** Components
import Button from "@/presentation/components/ui/Button";
// ** Constants
const coachesData = [
    {
        id: "marcus",
        image: coach1,
        experience: "10+ YRS EXP",
        name: "MARCUS VANCE",
        role: "STRENGTH & CONDITIONING LEAD",
        description: "Olympic weightlifting specialist with expertise in velocity compounds and powerbuilding.",
        tags: ["CSCS MASTER", "USAW L2"],
    },
    {
        id: "david",
        image: coach3,
        experience: "7+ YRS EXP",
        name: "DAVID CHEN",
        role: "MOBILITY & KINETIC CHAIN",
        description: "Doctorate physical therapy researcher specializing in joint durability and rapid movement restoration.",
        tags: ["FRC SPECIALIST", "DPT CADRE"],
    },
    {
        id: "marcus-2",
        image: coach1,
        experience: "12+ YRS EXP",
        name: "JASON KOVAC",
        role: "POWERLIFTING & HYPERTROPHY",
        description: "Former national powerlifting champion coaching raw strength progression and dense muscular development.",
        tags: ["NASM CPT", "IPF ELITE"],
    },
    {
        id: "david-2",
        image: coach3,
        experience: "6+ YRS EXP",
        name: "RYAN ODUYA",
        role: "RECOVERY & PERFORMANCE",
        description: "Sports rehabilitation specialist focused on injury prevention and high-velocity return-to-play protocols.",
        tags: ["ATC CERTIFIED", "NASM PES"],
    },
]



export default function Coaches() {
    return (
        <section className="p-6 sm:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#1F241A] py-6">
                <div>
                    <p className="flex items-center text-[12px] font-bold text-[#CCFF00]"><span className="flex w-8 h-2 bg-[#CCFF00] mr-2"></span>WORLD-CLASS PEDIGREE</p>
                    <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold italic">MASTER <span className="text-[#CCFF00]">COACHING CADRE</span></h1>
                </div>
                <p className="w-full md:w-[40%] text-[14px] text-[#9CA3AF]">
                    Former national team athletes, biomechanical scientists, and
                    HYROX champions demanding your highest athletic ceiling.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6.25 py-12">
                {coachesData.map((coach) => (
                    <div key={coach.id} className="flex flex-col bg-[#0F1217] border border-[#222833] shadow shadow-[#1C2219]">
                        <div className="relative">
                            <Image src={coach.image} className="w-full" alt={coach.name}/>
                            <div className="absolute inset-0 bg-linear-to-t from-[#0F1217] via-[#0F1217]/0 to-[#0F1217]/0"></div>
                            <span className="absolute top-3 left-3 bg-[#0A0C0E]/80 border border-[#CCFF00]/30 px-2.5 py-1 text-[10px] text-[#CCFF00]">
                                {coach.experience}
                            </span>
                        </div>
                        <div className="flex flex-col gap-2 p-4">
                            <h2 className="text-[24px] font-bold text-white">{coach.name}</h2>
                            <h3 className="text-[12px] font-bold text-[#CCFF00]">{coach.role}</h3>
                            <p className="text-[12px] text-[#9CA3AF]">
                                {coach.description}
                            </p>
                            <div className="flex flex-wrap gap-2 py-1">
                                {coach.tags.map((tag, index) => (
                                    <span key={index} className="bg-[#181D24] border border-[#2A313D] px-2.5 py-1 text-[10px] text-[#D1D5DB]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Button className="text-[12px] w-full" title="BOOK PRIVATE ASSESSMENT" type="secondary"/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}