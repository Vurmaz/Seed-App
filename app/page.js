
import Header from './component/Header'
import Form from "./component/Form";
import Footer from "./component/Footer";
import CardSection from "./component/CardSection";
import HeroSection from "./component/HeroSection";
import HeroImage from "./component/HeroImage";

export default function Home() {
  return (
    <main className="">
    <Header></Header>
      <section id='1' className="h-screen w-full section-1 md:grid md:grid-cols-2">
        <HeroSection />
        <div className="flex items-center justify-center mt-4 sm:mt-0 sm:justify-left ">
        <HeroImage />
        </div>
      </section>
      <section id='2' className="h-auto section-2 px-4 mb-32">
        <CardSection />
      </section>
      <section id='3' className="h-auto section-3 flex flex-row items-center justify-center text-2xl sm:text-3xl md:text-4xl text-white  italic">
        <h1>Nutritious and Healthy</h1>
      </section>
      <section id='4' className="section-4 h-screen">      
       <Form  />
      </section>
      <Footer />
    </main>
  );
}
