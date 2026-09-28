import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero, Services, Clients, Work } from "@/components/PrimarySections";
import { Company, Capabilities, Technology, Process, Industries, Insights, FAQ } from "@/components/SecondarySections";

export default function Home() {
  return <><div id="top" /><Header /><main><Hero /><Services /><Clients /><Work /><Company /><Capabilities /><Technology /><Process /><Industries /><Insights /><FAQ /></main><Footer /></>;
}
