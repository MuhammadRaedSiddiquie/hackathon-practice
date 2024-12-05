import Header from "./components/Header/Header";
import Footer from "./components/Foooter/Footer";
import Hero from "./components/Hero/Hero";
import Flash from "./components/Flash/Flash";
import Category from "./components/Category/Category";
import Selling from "./components/Selling/Selling";
import Image from "next/image";
import Explore from "./components/Explore/Explore";
import Arrival from "./components/Arrival/Arrival";

export default function Home() {
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <Flash></Flash>
    <Category></Category>
    <Selling></Selling>
    <section className='w-full h-[90vh] flex items-center justify-center'>
      <div className="h-full w-[80%]  relative">
      <Image className="absolute" src={'/images/slide2.svg'} alt="slide 2" layout="fill"></Image>
      </div>
    </section>
    <Explore></Explore>
    <Arrival></Arrival>
    <Footer></Footer>
    </>
  );
}
