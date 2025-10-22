import HeroSection from "../Components/Home/HeroSection"
import CategoriesCarousel from "../Components/Home/Category"
import ProductListing from "./ProductListing"
export default function HomePage(){

    return(
        <>
         <section id="hero"><HeroSection /></section>
         <section id="categories"> <CategoriesCarousel  /></section>
         <section id="listing"> <ProductListing/> </section>
              
        </> 
    )
}