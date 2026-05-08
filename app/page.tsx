import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { MenuPreview } from "@/components/menu-preview";
import { TruckSchedule } from "@/components/truck-schedule";
import { Reviews } from "@/components/reviews";
import { Social } from "@/components/social";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MenuPreview />
        <TruckSchedule />
        <Reviews />
        <Social />
      </main>
      <Footer />
    </>
  );
}
