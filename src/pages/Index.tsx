import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Roadmap from "@/components/Roadmap";
import InteractiveDemo from "@/components/InteractiveDemo";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Hero />
      <Features />
      <InteractiveDemo />
      <Team />
      <Roadmap />
      <SignupForm />
      <Footer />
    </div>
  );
};

export default Index;
