import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import LiaShowcase from "@/components/LiaShowcase";
import FinancialSecurity from "@/components/FinancialSecurity";
import Comparison from "@/components/Comparison";
import MarketData from "@/components/MarketData";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <LiaShowcase />
      <FinancialSecurity />
      <Comparison />
      <MarketData />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
