import Header from "@/app/components/Header";
import BalanceWithdrawal from "@/app/components/BalanceWithdrawal";
import FAQSection from "@/app/components/Faq";
import TestimonialsSection from "@/app/components/Testimony";
import Footer from "@/app/components/Footer";

export default function Withdrawal() {
  return (
    <>
      <Header /> 
      <BalanceWithdrawal />
      <FAQSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}