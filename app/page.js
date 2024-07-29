import Image from "next/image";
import Header from './component/Header'
import Card from "./component/Card";
import { GiFruitTree, GiHealthPotion, GiStripedSun } from "react-icons/gi";
import Form from "./component/Form";
import Footer from "./component/Footer";
import HeroInput from "./component/HeroInput";

export default function Home() {
  return (
    <main className="">
    <Header></Header>
      <section id='1' className="h-screen w-full section-1 md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center items-center gap-8 mt-8 md:mt-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-20 md:mt-0 italic font-bold text-justify">From Our Garden to Yours</h2>
          <p className="w-5/6  md:w-3/4 px-2 text-justify text-xs sm:text-base">
            Apricot seeds are nutrient-rich, offering vitamin B17, 
            antioxidants, and essential fatty acids. Known for their potential health benefits, 
            they’re perfect for adding a natural boost to your diet and wellness.
          </p>
          <HeroInput />
        </div>
        <div className="flex items-center justify-center mt-4 sm:mt-0 sm:justify-left">
        <div className="w-5/6 sm:w-1/2 md:w-full">
            <Image 
            className="image-must"
              src='/product.png'
              fill
              alt="apricot seed"
            ></Image>          
        </div>
        </div>
      </section>
      <section id='2' className="h-auto section-2 px-4 mb-32">
        <h2 className="mt-24 text-2xl sm:text-3xl md:text-4xl text-center font-bold italic">The Seeds</h2>
        <div className="grid grid-col-1 md:grid-cols-3 mt-24 gap-8">
          <div>
            <Card Icon={GiFruitTree} title={'Fast Grow'} text={'Apricot trees are relatively fast-growing, reaching maturity in 3 to 4 years. With proper care and optimal conditions, they can grow about 24 inches per year, rewarding you with delicious fruit and beautiful blossoms quickly'} />
          </div>
          <div>
            <Card Icon={GiHealthPotion} title={'Super Healthy'} text={'Apricots are a nutritional powerhouse, packed with vitamins A and C, fiber, and antioxidants. They promote eye health, boost the immune system, aid digestion, and support heart health. Enjoy these sweet and juicy fruits for a delicious and healthy treat!'} />
          </div>
          <div>
            <Card Icon={GiStripedSun} title={'Versatile'} text={'Dried apricots are a versatile and nutritious snack. They can be enjoyed on their own, added to trail mixes, cereals, and salads, or used in baking and cooking. Rich in fiber and essential nutrients, dried apricots are perfect for a healthy, energy-boosting treat anytime.'} />
          </div>
        </div>
      </section>
      <section id='3' className="h-auto section-3 flex flex-row items-center justify-center text-2xl sm:text-3xl md:text-4xl text-white  italic">
        <h1>Nutritious and Healthy</h1>
      </section>
      <section id='4' className="section-4 h-screen">
      <h1 className="pt-32 text-2xl sm:text-3xl md:text-4xl text-center font-bold italic">JOIN WAITLIST</h1>
       <Form  />
      </section>
      <Footer />
    </main>
  );
}
