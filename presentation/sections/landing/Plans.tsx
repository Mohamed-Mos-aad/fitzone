"use client"
// ** Hooks && Tools
import { useState } from "react";
// ** Components
import Badge from "@/presentation/components/ui/Badge";
import Button from "@/presentation/components/ui/Button";
// ** Constants
const plansData = {
    monthly: [
        {
            id: "basic",
            tier: "TIER 01",
            tierLabel: "FOUNDATION",
            name: "BASIC CORE",
            description: "Unrestricted facility access for self-directed athletes focused on heavy iron progression.",
            price: "$49",
            period: "/ month",
            featured: false,
            buttonTitle: "SELECT BASIC",
            buttonType: "secondary",
            features: [
                { text: "24/7 Access to Main Iron Floor", active: true },
                { text: "Calibrated Olympic Weightlifting Platforms", active: true },
                { text: "Locker Room & Rainfall Showers", active: true },
                { text: "FitZone Biometric App Telemetry", active: true },
                { text: "Unlimited High-Intensity Group Classes", active: false },
                { text: "Cold Plunge & Infrared Sauna Recovery", active: false },
            ]
        },
        {
            id: "pro",
            tier: "TIER 02",
            tierLabel: "HIGH VELOCITY",
            name: "PRO ATHLETE",
            description: "Full-scale conditioning classes, weekly telemetry scans, and priority facility scheduling.",
            price: "$89",
            period: "/ month",
            featured: true,
            buttonTitle: "GET PRO ACCESS NOW",
            buttonType: "primary",
            features: [
                { text: "All Basic Core Privileges Included", active: true },
                { text: "Unlimited Weekly HYROX, HIIT & Barbell Classes", active: true },
                { text: "Monthly InBody 770 Biometric Body Composition", active: true },
                { text: "2 Free Athlete Guest Passes Monthly", active: true },
                { text: "Priority Class Booking & Locker Access", active: false },
                { text: "Private 1-on-1 Master Coach Mentorship", active: false },
            ]
        },
        {
            id: "elite",
            tier: "TIER 03",
            tierLabel: "VIP BLACK",
            name: "ELITE OLYMPIC",
            description: "The definitive pinnacle. Dedicated private coaching, hyper-recovery, and nutrition protocol.",
            price: "$149",
            period: "/ month",
            featured: false,
            buttonTitle: "APPLY FOR ELITE",
            buttonType: "secondary",
            features: [
                { text: "Complete Pro Tier Privileges", active: true },
                { text: "4x 1-on-1 Master Coach Sessions / Month", active: true },
                { text: "Unlimited Infrared Sauna & Cold Plunge Access", active: true },
                { text: "Free Performance Shake Bar Access", active: true },
                { text: "Personal Reserved Locker + Laundry Service", active: false },
            ]
        },
    ],
    annual: [
        {
            id: "basic",
            tier: "TIER 01",
            tierLabel: "FOUNDATION",
            name: "BASIC CORE",
            description: "Unrestricted facility access for self-directed athletes focused on heavy iron progression.",
            price: "$39",
            period: "/ month, billed annually",
            featured: false,
            buttonTitle: "SELECT BASIC",
            buttonType: "secondary",
            features: [
                { text: "24/7 Access to Main Iron Floor", active: true },
                { text: "Calibrated Olympic Weightlifting Platforms", active: true },
                { text: "Locker Room & Rainfall Showers", active: true },
                { text: "FitZone Biometric App Telemetry", active: true },
                { text: "Unlimited High-Intensity Group Classes", active: false },
                { text: "Cold Plunge & Infrared Sauna Recovery", active: false },
            ]
        },
        {
            id: "pro",
            tier: "TIER 02",
            tierLabel: "HIGH VELOCITY",
            name: "PRO ATHLETE",
            description: "Full-scale conditioning classes, weekly telemetry scans, and priority facility scheduling.",
            price: "$71",
            period: "/ month, billed annually",
            featured: true,
            buttonTitle: "GET PRO ACCESS NOW",
            buttonType: "primary",
            features: [
                { text: "All Basic Core Privileges Included", active: true },
                { text: "Unlimited Weekly HYROX, HIIT & Barbell Classes", active: true },
                { text: "Monthly InBody 770 Biometric Body Composition", active: true },
                { text: "2 Free Athlete Guest Passes Monthly", active: true },
                { text: "Priority Class Booking & Locker Access", active: false },
                { text: "Private 1-on-1 Master Coach Mentorship", active: false },
            ]
        },
        {
            id: "elite",
            tier: "TIER 03",
            tierLabel: "VIP BLACK",
            name: "ELITE OLYMPIC",
            description: "The definitive pinnacle. Dedicated private coaching, hyper-recovery, and nutrition protocol.",
            price: "$119",
            period: "/ month, billed annually",
            featured: false,
            buttonTitle: "APPLY FOR ELITE",
            buttonType: "secondary",
            features: [
                { text: "Complete Pro Tier Privileges", active: true },
                { text: "4x 1-on-1 Master Coach Sessions / Month", active: true },
                { text: "Unlimited Infrared Sauna & Cold Plunge Access", active: true },
                { text: "Free Performance Shake Bar Access", active: true },
                { text: "Personal Reserved Locker + Laundry Service", active: false },
            ]
        },
    ],
} as const


export default function Plans() {
    // ** States
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
    const currentPlans = plansData[billingCycle];

    return (
        <section className="flex flex-col gap-4 items-center bg-[#0D1014] border border-[#1A1F26] px-6 sm:px-12 py-16 sm:py-24">
            <Badge title={                            
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 flex bg-[#CCFF00] rounded-full"></span>
                    TRANSPARENT COMMITMENT
                </span>} 
                type="primary"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold italic text-center">CHOOSE YOUR <span className="text-[#CCFF00]">LEVEL</span></h1>
            <p className="text-[#9CA3AF] text-center">
                Precision memberships forged for unyielding performance. Zero lock-in contracts. 100%
                cancellation freedom anytime.
            </p>
            <div className="flex gap-2 bg-[#07090B] border border-[#222833] px-1.5 py-2.25 my-12">
                <div 
                    onClick={() => setBillingCycle("monthly")}
                    className={`px-5 py-2 text-[12px] font-bold cursor-pointer rounded-xs ${billingCycle === "monthly" ? "bg-[#CCFF00] text-black" : "text-[#9CA3AF]"}`}
                >
                    MONTHLY
                </div>
                <div 
                    onClick={() => setBillingCycle("annual")}
                    className={`px-5 py-2 text-[12px] font-bold cursor-pointer rounded-xs ${billingCycle === "annual" ? "bg-[#CCFF00] text-black" : "text-[#9CA3AF]"}`}
                >
                    ANNUAL <span className="bg-[#1E251A] border border-[#CCFF00]/30 px-5 py-2 ml-2 text-[12px] font-bold text-[#CCFF00]">SAVE 20%</span>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
                {currentPlans.map((plan) => (
                    plan.featured ? (
                        <div key={plan.id} className="w-full flex flex-col gap-8 bg-[#101318] border border-[#CCFF00] drop-shadow-2xl drop-shadow-[#CCFF00]/25 p-8 rounded-lg">
                            <h2 className="flex justify-between text-[12px] font-bold text-[#9CA3AF]">{plan.tier}<span>{plan.tierLabel}</span></h2>
                            <h3 className="text-[24px] font-bold text-white">{plan.name}</h3>
                            <p className="text-[12px] text-[#9CA3AF]">
                                {plan.description}
                            </p>
                            <h4 className="text-[48px] sm:text-[60px] font-bold text-[#CCFF00]">{plan.price} <span className="text-[12px] text-[#9CA3AF]">{plan.period}</span></h4>
                            <ul className="flex flex-col gap-3.5">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className={`flex items-center gap-3 text-[12px] ${feature.active ? "text-[#E5E7EB]" : "text-[#6B7280]"}`}>
                                        {feature.active ? (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.73333 9.73333L10.4333 5.03333L9.5 4.1L5.73333 7.86667L3.83333 5.96667L2.9 6.9L5.73333 9.73333ZM6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45555 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C7.58889 0 8.45555 0.175 9.26667 0.525C10.0778 0.875 10.7833 1.35 11.3833 1.95C11.9833 2.55 12.4583 3.25556 12.8083 4.06667C13.1583 4.87778 13.3333 5.74444 13.3333 6.66667C13.3333 7.58889 13.1583 8.45555 12.8083 9.26667C12.4583 10.0778 11.9833 10.7833 11.3833 11.3833C10.7833 11.9833 10.0778 12.4583 9.26667 12.8083C8.45555 13.1583 7.58889 13.3333 6.66667 13.3333ZM6.66667 12C8.15556 12 9.41667 11.4833 10.45 10.45C11.4833 9.41667 12 8.15556 12 6.66667C12 5.17778 11.4833 3.91667 10.45 2.88333C9.41667 1.85 8.15556 1.33333 6.66667 1.33333C5.17778 1.33333 3.91667 1.85 2.88333 2.88333C1.85 3.91667 1.33333 5.17778 1.33333 6.66667C1.33333 8.15556 1.85 9.41667 2.88333 10.45C3.91667 11.4833 5.17778 12 6.66667 12Z" fill="#CCFF00"/>
                                            </svg>
                                        ) : (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.73333 9.73333L10.4333 5.03333L9.5 4.1L5.73333 7.86667L3.83333 5.96667L2.9 6.9L5.73333 9.73333ZM6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45555 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C7.58889 0 8.45555 0.175 9.26667 0.525C10.0778 0.875 10.7833 1.35 11.3833 1.95C11.9833 2.55 12.4583 3.25556 12.8083 4.06667C13.1583 4.87778 13.3333 5.74444 13.3333 6.66667C13.3333 7.58889 13.1583 8.45555 12.8083 9.26667C12.4583 10.0778 11.9833 10.7833 11.3833 11.3833C10.7833 11.9833 10.0778 12.4583 9.26667 12.8083C8.45555 13.1583 7.58889 13.3333 6.66667 13.3333ZM6.66667 12C8.15556 12 9.41667 11.4833 10.45 10.45C11.4833 9.41667 12 8.15556 12 6.66667C12 5.17778 11.4833 3.91667 10.45 2.88333C9.41667 1.85 8.15556 1.33333 6.66667 1.33333C5.17778 1.33333 3.91667 1.85 2.88333 2.88333C1.85 3.91667 1.33333 5.17778 1.33333 6.66667C1.33333 8.15556 1.85 9.41667 2.88333 10.45C3.91667 11.4833 5.17778 12 6.66667 12Z" fill="#CCFF00"/>
                                            </svg>
                                        )}
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                            <Button className="text-[14px]" title={plan.buttonTitle} type={plan.buttonType}/>
                        </div>
                    ) : (
                        <div key={plan.id} className="w-full max-h-fit flex flex-col gap-4 bg-[#101318] border border-[#222733] p-8 rounded-lg">
                            <h2 className="flex justify-between text-[12px] font-bold text-[#9CA3AF]">{plan.tier} <span>{plan.tierLabel}</span></h2>
                            <h3 className="text-[24px] font-bold text-white">{plan.name}</h3>
                            <p className="text-[12px] text-[#9CA3AF]">
                                {plan.description}
                            </p>
                            <h4 className="text-[48px] font-bold text-white">{plan.price} <span className="text-[12px] text-[#9CA3AF]">{plan.period}</span></h4>
                            <ul className="flex flex-col gap-3.5">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className={`flex items-center gap-3 text-[12px] ${feature.active ? "text-[#E5E7EB]" : "text-[#6B7280]"}`}>
                                        {feature.active ? (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.73333 9.73333L10.4333 5.03333L9.5 4.1L5.73333 7.86667L3.83333 5.96667L2.9 6.9L5.73333 9.73333ZM6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45555 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C7.58889 0 8.45555 0.175 9.26667 0.525C10.0778 0.875 10.7833 1.35 11.3833 1.95C11.9833 2.55 12.4583 3.25556 12.8083 4.06667C13.1583 4.87778 13.3333 5.74444 13.3333 6.66667C13.3333 7.58889 13.1583 8.45555 12.8083 9.26667C12.4583 10.0778 11.9833 10.7833 11.3833 11.3833C10.7833 11.9833 10.0778 12.4583 9.26667 12.8083C8.45555 13.1583 7.58889 13.3333 6.66667 13.3333ZM6.66667 12C8.15556 12 9.41667 11.4833 10.45 10.45C11.4833 9.41667 12 8.15556 12 6.66667C12 5.17778 11.4833 3.91667 10.45 2.88333C9.41667 1.85 8.15556 1.33333 6.66667 1.33333C5.17778 1.33333 3.91667 1.85 2.88333 2.88333C1.85 3.91667 1.33333 5.17778 1.33333 6.66667C1.33333 8.15556 1.85 9.41667 2.88333 10.45C3.91667 11.4833 5.17778 12 6.66667 12Z" fill="#CCFF00"/>
                                            </svg>
                                        ) : (
                                            <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.33333V0H9.33333V1.33333H0Z" fill="#6B7280"/>
                                            </svg>
                                        )}
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                            <Button className="text-[14px]" title={plan.buttonTitle} type={plan.buttonType}/>
                        </div>
                    )
                ))}
            </div>
        </section>
    )
}