import FeaturedProducts from "@/components/ui/featuredProducts";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import LeatestBlog from "@/components/ui/latestBlog";
import LatestProducts from "@/components/ui/latestProducts";
import MiddleOne from "@/components/ui/middleOne";
import TrendingProducts from "@/components/ui/trendingProducts";
import TrendingProductsTwo from "@/components/ui/trendingProductsTwo";


export default function Home() {
  return (
    <div className="max-w-[1920] mx-auto">
     <Hero />
     <FeaturedProducts />
     <LatestProducts />
     <MiddleOne />
     <TrendingProducts />
     <TrendingProductsTwo />
     <LeatestBlog />
     <Footer />
    </div>
  );
}
