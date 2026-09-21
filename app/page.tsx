// ** Sections
import Hero from "@/presentation/sections/landing/Hero";
import Numbers from "@/presentation/sections/landing/Numbers";
import Matrix from "@/presentation/sections/landing/Matrix";
import Plans from "@/presentation/sections/landing/Plans";



export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Numbers />
        <Matrix />
        <Plans />
      </main>
    </>
  );
}