
import Header from "@/components/Header"
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Slug from "@/components/Slug";
import Feature from "@/components/Feature";
import Slider from "@/components/Slider";
import Chatgpt from "@/components/Chatgpt";










export default function Home() {
  return (
    
<main className="flex min-h-screen flex-col bg-indigo-200">
      <Header />
      <Slider />
      <Section />
      <Slider />
      <Slug />
     
<Chatgpt />
      <Slider />
      <Feature /> 



      <Footer />

    
    </main>
  );
}
