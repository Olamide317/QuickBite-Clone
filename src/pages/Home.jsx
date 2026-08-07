import Hero from "../components/Hero";
import Categories from "../components/Categories";
import PopularRestaurants from "../components/PopularRestaurants";
import PromoSection from "../components/PromoSection";
import How from "../components/How";
import AllRestaurants from "../components/AllRestaurants";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <PopularRestaurants />
      <PromoSection />
      <AllRestaurants />
      <How />
    </div>
  );
}