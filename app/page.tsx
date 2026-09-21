// ** Sections
import Hero from "@/presentation/sections/landing/Hero";
import Numbers from "@/presentation/sections/landing/Numbers";
import Matrix from "@/presentation/sections/landing/Matrix";
import Plans from "@/presentation/sections/landing/Plans";
import Coaches from "@/presentation/sections/landing/Coaches";
import Timetable from "@/presentation/sections/landing/Timetable";
import Facilities from "@/presentation/sections/landing/Facilities";



export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Numbers />
        <Matrix />
        <Plans />
        <Coaches />
        <Timetable />
        <Facilities />
      </main>
    </>
  );
}