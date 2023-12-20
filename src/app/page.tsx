
import Header from "@/Components/Header"
import Section from "@/Components/Section";
import Footer from "@/Components/Footer";
import Slug from "@/Components/Slug";
import Feature from "@/Components/Feature";
import Slider from "@/Components/Slider";
import Gemini from "@/Components/Gemini";










export default function Home() {
  return (
  <>
<main className="flex min-h-screen flex-col bg-indigo-200">
      <Header />
      <Slider />
      <Section />
      <Slider />
      <Slug />
     
<Gemini />
      <Slider />
      <Feature /> 
    


      <Footer />

    
    </main>
    </>
  );
}
