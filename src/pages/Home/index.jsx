
import HomeSlider from "../../components/HomeSlider"
import { TbTruckDelivery } from "react-icons/tb";
import HomeCatSlider from "../../components/CatSlider"
import AdsBanner from "../../components/AdsBanner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductsSlider from "../../components/ProductsSlider";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious,CarouselNext } from "@/components/ui/carousel"
import BlogItem from "../../components/BlogItem";
import Footer from "../../components/Footer";
import HomeSliderV2 from "../../components/HomeSliderV2";
import BannerBox from "../../components/BannerBox";

const HomePage = () => {
  return (
    <div className="">
      {/* <HomeSlider /> */}
      <section className="py-6">
			<div className='container flex gap-5'>
				<div className='part1 w-[70%]'>
					<HomeSliderV2 />
				</div>
        <div className='part2 w-[30%] flex-col gap-5 pl-5 flex items-center justify-between'>
					<BannerBox info='left' image={'/bannnerBox.jpg'}/>
          <BannerBox info='right' image={'/BannerBox2.jpg'}/>
				</div>
			</div>
		</section>
      <HomeCatSlider />

      <section className="bg-white py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[15px] truncate">Do not miss the current offers until the end of March.</p>
            </div>
            <div className="rightSec w-[62%]">
              <Tabs defaultValue="account" className="w-full">
                <TabsList>
                  <TabsTrigger className="uppercase hover:text-[#ff5353]" value="fashion">Fashion</TabsTrigger>
                  <TabsTrigger className='uppercase hover:text-[#ff5353]' value="electronics">Electronics</TabsTrigger>
                  <TabsTrigger className='uppercase hover:text-[#ff5353]' value="bags">Bags</TabsTrigger>
                  <TabsTrigger className='uppercase hover:text-[#ff5353]' value="groceries">Groceries</TabsTrigger>
                  <TabsTrigger className='uppercase hover:text-[#ff5353]' value="beauty">Beauty</TabsTrigger>
                  <TabsTrigger className='uppercase hover:text-[#ff5353]' value="wellness">Wellness</TabsTrigger>
                  <TabsTrigger className='uppercase hover:text-[#ff5353]' value="jewellery">Jewellery</TabsTrigger>
                </TabsList>
                {/* <TabsContent value="fashion">Make changes to your account here.</TabsContent>
                <TabsContent value="electronics">Change your password here.</TabsContent> */}
              </Tabs>
            </div>
          </div>
          <ProductsSlider props={6} />
        </div>
      </section>

      <section className="bg-white py-4 pt-0 w-full">
        <div className="w-[80%] mb-4 mx-auto border-2 border-red-800 p-8 md:p-10  shadow-xl rounded-md bg-gradient-to-r from-red-50 to-white">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-red-800 p-3 rounded-full flex items-center justify-center md:ml-0 ml-20 sm:max-md:ml-40">
                <TbTruckDelivery className="text-[32px] text-white" />
              </div>
              <div className="">
                <p className="text-[25px] md:text-[20px] uppercase font-semibold text-gray-800 mb-0 leading-tight">
                  Free Shipping
                </p>
                <p className="text-[18px] text-gray-500 mb-0 md:text-[17px]">Fast & Reliable</p>
              </div>
            </div>

            <div className="text-center flex justify-center">
              <p className="text-[17px] lg:text-[17px] text-gray-600 sm:max-md:text-[20px]">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="font-bold text-xl md:text-3xl text-red-800 mb-1">- Only $200*</p>
            </div>
          </div>
        </div>
        <AdsBanner item={4} />
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider props={6} />
        </div>
        <AdsBanner item={3} />
      </section>


      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]"> Featured Products</h2>
          <ProductsSlider props={6} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white blogSection">
        <div className="container pb-8">
          <h2 className="text-[20px] font-[600]">From The Blog</h2>
          <Carousel className="w-full py-5">
            <CarouselContent className="h-[100%] -ml-10">
              <CarouselItem className="basis-1/4 pl-10">
                <BlogItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4 pl-10">
                <BlogItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4 pl-10">
                <BlogItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4 pl-10">
                <BlogItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4 pl-10">
                <BlogItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4 pl-10">
                <BlogItem />
              </CarouselItem>
              <CarouselItem className="basis-1/4 pl-10">
                <BlogItem />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
      
      <Footer />

    </div>
  )
}

export default HomePage