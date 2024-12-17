"use client";

import { useRouter } from "next/navigation";
import FeaturedProducts from "@/components/ui/featuredProducts";
import Hero from "@/components/ui/hero";
import LatestBlog from "@/components/ui/latestBlog";
import LatestProducts from "@/components/ui/latestProducts";
import MiddleOne from "@/components/ui/middleOne";
import MiddleTwo from "@/components/ui/middleTwo";
import TopCategories from "@/components/ui/topCategories";
import TrendingProducts from "@/components/ui/trendingProducts";
import TrendingProductsTwo from "@/components/ui/trendingProductsTwo";
import MiddleFour from "@/components/ui/middleFour";
import MiddleThree from "@/components/ui/middleThree";
import DiscountItem from "@/components/ui/discountItem";


export default function Home() {
  const router = useRouter();
  return (
    <div className="max-w-[1920] mx-auto">
     <Hero />
     <FeaturedProducts />
     <LatestProducts />
     <MiddleOne />
     <MiddleTwo />
     <TrendingProducts />
     <TrendingProductsTwo />
     <DiscountItem />
     <TopCategories />
     <MiddleThree />
     <MiddleFour />
     <LatestBlog />
    </div>
  );
}
