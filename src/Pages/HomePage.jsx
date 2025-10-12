import HeroSection from "../Components/HeroSection"
import CategoriesCarousel from "../Components/Category"
import ItemCard from '../Components/ItemCards'
import data from '../MockDataAPI/products.json'
export default function HomePage(){

    return(
        <>
         <section id="hero"><HeroSection /></section>
         <section id="categories"> <CategoriesCarousel  /></section>
         <section id="listing"> <ItemCard data={data[0]}/> </section>
              
        </> 
    )
}