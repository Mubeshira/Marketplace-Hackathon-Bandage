// src\app\page.tsx
import EditorsPick from "@/components/EditorsPick";
import GreenDiv from "@/components/GreenDiv";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NeutralDiv from "@/components/NeutralDiv";
import ProductCard from "@/components/ProductCard";
import FeaturedPost from "@/components/FeatuedPost";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <EditorsPick/>
    <GreenDiv/>
    <ProductCard/>
    <NeutralDiv/>
    <FeaturedPost/>
    <br />
    <Footer/>
    </>
 
  );
}
