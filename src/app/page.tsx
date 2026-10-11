import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero, Services, Work } from "@/components/PrimarySections";
import {
  Technology,
  Process,
  FAQ,
  Problems,
  Pricing,
  FinalCTA,
} from "@/components/SecondarySections";

export default function Home() {
  return (
    <>
      <div id="top" />
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <Technology />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
