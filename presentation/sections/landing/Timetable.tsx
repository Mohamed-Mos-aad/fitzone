"use client";

// ** Hooks && Tools
import { useState } from "react";
// ** Components
import Button from "@/presentation/components/ui/Button";

// ** Types
type Session = {
    id: string;
    time: string;
    duration: string;
    title: string;
    badge: { text: string; type: string };
    coach: string;
    metric: string;
    location: string;
    slots: string;
    urgent: boolean;
};

type DaysData = {
    [key: string]: Session[];
};

// ** Constants
const daysData: DaysData = {
    monday: [
        {
            id: "hyrox",
            time: "06:30 AM",
            duration: "60 MIN DURATION",
            title: "HYROX POWER CONDITIONING",
            badge: { text: "FILLING FAST", type: "danger" },
            coach: "Coach Elena Rostova",
            metric: "85% MHR Output",
            location: "Turf Zone A",
            slots: "4 SLOTS LEFT",
            urgent: true,
        },
        {
            id: "barbell",
            time: "09:00 AM",
            duration: "60 MIN DURATION",
            title: "HEAVY COMPOUND BARBELL CLUB",
            badge: { text: "OPEN", type: "success" },
            coach: "Coach Marcus Vance",
            metric: "Maximal Load",
            location: "Olympic Sector",
            slots: "12 SLOTS OPEN",
            urgent: false,
        },
        {
            id: "sprint",
            time: "12:30 PM",
            duration: "45 MIN DURATION",
            title: "SPRINT & AGILITY VELOCITY PEAK",
            badge: { text: "2 LEFT", type: "danger" },
            coach: "Coach David Chen",
            metric: "Lactate Spike",
            location: "Sprint Deck",
            slots: "LAST 2 SLOTS",
            urgent: true,
        },
        {
            id: "kinetic",
            time: "05:30 PM",
            duration: "60 MIN DURATION",
            title: "KINETIC FLOW & JOINT LONGEVITY",
            badge: { text: "OPEN", type: "success" },
            coach: "Coach Maya Sterling",
            metric: "Active Regen",
            location: "Regen Suite",
            slots: "8 SLOTS OPEN",
            urgent: false,
        },
    ],
    tuesday: [
        {
            id: "hiit",
            time: "07:00 AM",
            duration: "45 MIN DURATION",
            title: "HIIT METABOLIC IGNITION",
            badge: { text: "OPEN", type: "success" },
            coach: "Coach Marcus Vance",
            metric: "VO2 Surge",
            location: "Turf Zone A",
            slots: "10 SLOTS OPEN",
            urgent: false,
        },
        {
            id: "olympic",
            time: "10:00 AM",
            duration: "60 MIN DURATION",
            title: "OLYMPIC LIFT TECHNIQUE LAB",
            badge: { text: "FILLING FAST", type: "danger" },
            coach: "Coach David Chen",
            metric: "Bar Speed Focus",
            location: "Olympic Sector",
            slots: "3 SLOTS LEFT",
            urgent: true,
        },
    ],
    wednesday: [
        {
            id: "recovery",
            time: "08:00 AM",
            duration: "50 MIN DURATION",
            title: "ACTIVE RECOVERY & MOBILITY FLOW",
            badge: { text: "OPEN", type: "success" },
            coach: "Coach Maya Sterling",
            metric: "Range of Motion",
            location: "Regen Suite",
            slots: "9 SLOTS OPEN",
            urgent: false,
        },
    ],
    thursday: [
        {
            id: "powerbuild",
            time: "06:00 AM",
            duration: "60 MIN DURATION",
            title: "POWERBUILDING HYPERTROPHY BLOCK",
            badge: { text: "1 LEFT", type: "danger" },
            coach: "Coach Elena Rostova",
            metric: "Volume Peak",
            location: "Olympic Sector",
            slots: "LAST 1 SLOT",
            urgent: true,
        },
    ],
    friday: [
        {
            id: "agility",
            time: "11:00 AM",
            duration: "45 MIN DURATION",
            title: "MULTIDIRECTIONAL AGILITY CIRCUIT",
            badge: { text: "OPEN", type: "success" },
            coach: "Coach David Chen",
            metric: "Reaction Speed",
            location: "Sprint Deck",
            slots: "6 SLOTS OPEN",
            urgent: false,
        },
    ],
    saturday: [
        {
            id: "hyrox-sat",
            time: "09:30 AM",
            duration: "60 MIN DURATION",
            title: "HYROX SIMULATION RACE DAY",
            badge: { text: "FILLING FAST", type: "danger" },
            coach: "Coach Elena Rostova",
            metric: "Race Pace",
            location: "Turf Zone A",
            slots: "5 SLOTS LEFT",
            urgent: true,
        },
    ],
    sunday: [
        {
            id: "restore",
            time: "10:00 AM",
            duration: "50 MIN DURATION",
            title: "SUNDAY RESTORATION & BREATHWORK",
            badge: { text: "OPEN", type: "success" },
            coach: "Coach Maya Sterling",
            metric: "Parasympathetic Reset",
            location: "Regen Suite",
            slots: "14 SLOTS OPEN",
            urgent: false,
        },
    ],
};
const daysList = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];



export default function Timetable() {
    // ** States
    const [selectedDay, setSelectedDay] = useState<string>("monday");
    const currentSessions: Session[] = daysData[selectedDay] || [];


    
    return (
        <section className="min-h-screen p-6 sm:p-12 bg-[#0D1014]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <p className="flex items-center text-[12px] font-bold text-[#CCFF00]">
                        <span className="flex w-8 h-2 bg-[#CCFF00] mr-2"></span>REAL-TIME OCCUPANCY
                    </p>
                    <h1 className="text-[32px] sm:text-[40px] font-bold italic">
                        LIVE <span className="text-[#CCFF00]">TIMETABLE</span>
                    </h1>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-[#14181F] border border-[#262E3B] px-4 py-2 text-[11px] font-bold text-[#D1D5DB]">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.09534 9.33333C3.93007 9.33333 3.79152 9.27743 3.67972 9.16562C3.56791 9.05382 3.51201 8.91528 3.51201 8.75V5.25L0.128676 0.933333C-0.0171569 0.738889 -0.0390319 0.534722 0.0630515 0.320833C0.165135 0.106944 0.342565 0 0.595343 0H8.76201C9.01479 0 9.19222 0.106944 9.2943 0.320833C9.39638 0.534722 9.37451 0.738889 9.22868 0.933333L5.84534 5.25V8.75C5.84534 8.91528 5.78944 9.05382 5.67763 9.16562C5.56583 9.27743 5.42729 9.33333 5.26201 9.33333H4.09534ZM4.67868 4.84167L7.56618 1.16667H1.79118L4.67868 4.84167Z" fill="#CCFF00"/>
                        </svg>
                        ALL MODULES
                    </button>
                    <button className="flex items-center gap-2 bg-[#14181F] border border-[#262E3B] px-4 py-2 text-[11px] font-bold text-[#D1D5DB]">
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.82083 9.45L6.83958 5.83333H4.50625L4.92917 2.52292L2.23125 6.41667H4.25833L3.82083 9.45ZM2.33333 11.6667L2.91667 7.58333H0L5.25 0H6.41667L5.83333 4.66667H9.33333L3.5 11.6667H2.33333Z" fill="#CCFF00"/>
                        </svg>
                        MAX INTENSITY
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 py-6">
                {daysList.map((day) => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`px-5 py-2 text-[11px] font-bold uppercase cursor-pointer ${selectedDay === day ? "bg-[#CCFF00] text-black" : "bg-[#14181F] border border-[#262E3B] text-[#9CA3AF]"}`}
                    >
                        {day}
                    </button>
                ))}
            </div>
            <div className="flex flex-col gap-3">
                {currentSessions.map((session: Session) => (
                    <div key={session.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#10141A] border border-[#202733] p-5">
                        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                            <div className="flex flex-col min-w-27.5">
                                <h2 className="text-[18px] font-bold text-white">{session.time}</h2>
                                <h3 className="text-[10px] text-[#9CA3AF]">{session.duration}</h3>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div className="flex flex-wrap items-center gap-2.5">
                                    <h4 className="text-[14px] font-bold text-white">{session.title}</h4>
                                    <span className={`px-2 py-0.5 text-[10px] font-bold border ${session.badge.type === "danger" ? "bg-[#42171A] border-[#FF4D4D]/30 text-[#FF7373]" : "bg-[#172214] border-[#CCFF00]/30 text-[#CCFF00]"}`}>
                                        {session.badge.text}
                                    </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#9CA3AF]">
                                    <span className="flex items-center gap-1.5">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.66667 4.66667C4.025 4.66667 3.47569 4.43819 3.01875 3.98125C2.56181 3.52431 2.33333 2.975 2.33333 2.33333C2.33333 1.69167 2.56181 1.14236 3.01875 0.685417C3.47569 0.228472 4.025 0 4.66667 0C5.30833 0 5.85764 0.228472 6.31458 0.685417C6.77153 1.14236 7 1.69167 7 2.33333C7 2.975 6.77153 3.52431 6.31458 3.98125C5.85764 4.43819 5.30833 4.66667 4.66667 4.66667ZM0 9.33333V7.7C0 7.36944 0.0850694 7.06563 0.255208 6.78854C0.425347 6.51146 0.651389 6.3 0.933333 6.15417C1.53611 5.85278 2.14861 5.62674 2.77083 5.47604C3.39306 5.32535 4.025 5.25 4.66667 5.25C5.30833 5.25 5.94028 5.32535 6.5625 5.47604C7.18472 5.62674 7.79722 5.85278 8.4 6.15417C8.68194 6.3 8.90799 6.51146 9.07812 6.78854C9.24826 7.06563 9.33333 7.36944 9.33333 7.7V9.33333H0ZM1.16667 8.16667H8.16667V7.7C8.16667 7.59306 8.13993 7.49583 8.08646 7.40833C8.03299 7.32083 7.9625 7.25278 7.875 7.20417C7.35 6.94167 6.82014 6.74479 6.28542 6.61354C5.75069 6.48229 5.21111 6.41667 4.66667 6.41667C4.12222 6.41667 3.58264 6.48229 3.04792 6.61354C2.51319 6.74479 1.98333 6.94167 1.45833 7.20417C1.37083 7.25278 1.30035 7.32083 1.24688 7.40833C1.1934 7.49583 1.16667 7.59306 1.16667 7.7V8.16667ZM4.66667 3.5C4.9875 3.5 5.26215 3.38576 5.49062 3.15729C5.7191 2.92882 5.83333 2.65417 5.83333 2.33333C5.83333 2.0125 5.7191 1.73785 5.49062 1.50937C5.26215 1.2809 4.9875 1.16667 4.66667 1.16667C4.34583 1.16667 4.07118 1.2809 3.84271 1.50937C3.61424 1.73785 3.5 2.0125 3.5 2.33333C3.5 2.65417 3.61424 2.92882 3.84271 3.15729C4.07118 3.38576 4.34583 3.5 4.66667 3.5Z" fill="#CCFF00"/>
                                        </svg>
                                        {session.coach}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.16667 6.41667C1.16667 6.92222 1.26875 7.40104 1.47292 7.85313C1.67708 8.30521 1.96875 8.70139 2.34792 9.04167C2.33819 8.99306 2.33333 8.94931 2.33333 8.91042C2.33333 8.87153 2.33333 8.82778 2.33333 8.77917C2.33333 8.46805 2.39167 8.17639 2.50833 7.90417C2.625 7.63194 2.79514 7.38403 3.01875 7.16042L4.66667 5.54167L6.31458 7.16042C6.53819 7.38403 6.70833 7.63194 6.825 7.90417C6.94167 8.17639 7 8.46805 7 8.77917C7 8.82778 7 8.87153 7 8.91042C7 8.94931 6.99514 8.99306 6.98542 9.04167C7.36458 8.70139 7.65625 8.30521 7.86042 7.85313C8.06458 7.40104 8.16667 6.92222 8.16667 6.41667C8.16667 5.93056 8.07674 5.47118 7.89687 5.03854C7.71701 4.6059 7.45694 4.21944 7.11667 3.87917C6.92222 4.00556 6.71806 4.10035 6.50417 4.16354C6.29028 4.22674 6.07153 4.25833 5.84792 4.25833C5.24514 4.25833 4.72257 4.05903 4.28021 3.66042C3.83785 3.26181 3.58264 2.77083 3.51458 2.1875C3.13542 2.50833 2.8 2.84132 2.50833 3.18646C2.21667 3.5316 1.97118 3.8816 1.77188 4.23646C1.57257 4.59132 1.42188 4.95347 1.31979 5.32292C1.21771 5.69236 1.16667 6.05694 1.16667 6.41667ZM4.66667 7.175L3.83542 7.99167C3.72847 8.09861 3.64583 8.22014 3.5875 8.35625C3.52917 8.49236 3.5 8.63333 3.5 8.77917C3.5 9.09028 3.61424 9.35764 3.84271 9.58125C4.07118 9.80486 4.34583 9.91667 4.66667 9.91667C4.9875 9.91667 5.26215 9.80486 5.49062 9.58125C5.7191 9.35764 5.83333 9.09028 5.83333 8.77917C5.83333 8.62361 5.80417 8.48021 5.74583 8.34896C5.6875 8.21771 5.60486 8.09861 5.49792 7.99167L4.66667 7.175ZM4.66667 0V1.925C4.66667 2.25556 4.7809 2.53264 5.00938 2.75625C5.23785 2.97986 5.51736 3.09167 5.84792 3.09167C6.02292 3.09167 6.18576 3.05521 6.33646 2.98229C6.48715 2.90937 6.62083 2.8 6.7375 2.65417L7 2.33333C7.71944 2.74167 8.28819 3.31042 8.70625 4.03958C9.12431 4.76875 9.33333 5.56111 9.33333 6.41667C9.33333 7.71944 8.88125 8.82292 7.97708 9.72708C7.07292 10.6312 5.96944 11.0833 4.66667 11.0833C3.36389 11.0833 2.26042 10.6312 1.35625 9.72708C0.452083 8.82292 0 7.71944 0 6.41667C0 5.1625 0.420486 3.97153 1.26146 2.84375C2.10243 1.71597 3.2375 0.768056 4.66667 0Z" fill="#CCFF00"/>
                                        </svg>
                                        {session.metric}
                                    </span>
                                    <span>{session.location}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <h5 className={`text-[11px] font-bold whitespace-nowrap ${session.urgent ? "text-[#CCFF00]" : "text-[#9CA3AF]"}`}>
                                {session.slots}
                            </h5>
                            <Button className="text-[11px] whitespace-nowrap" title="RESERVE SPOT" type={session.urgent ? "primary" : "secondary"}/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}