import { Button } from "@/components/ui/button"
import HomeSlider from "../../components/HomeSlider"
import { TbTruckDelivery } from "react-icons/tb";
import HomeCatSlider from "../../components/CatSlider"
import AdsBanner from "../../components/AdsBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductsSlider from "../../components/ProductsSlider";

const  HomePage = () => {
  return (
    <div className="">
      <HomeSlider/>
      <HomeCatSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p>Do not miss the current offers until the end of March.</p>
            </div>
            <div className="rightSec w-[75%]">
              <Tabs defaultValue="account" className="w-full">
                <TabsList>
                  <TabsTrigger className="w-[350px] uppercase" value="fashion">Fashion</TabsTrigger>
                  <TabsTrigger value="electronics">Electronics</TabsTrigger>
                  <TabsTrigger value="bags">Bags</TabsTrigger>
                  <TabsTrigger value="groceries">Groceries</TabsTrigger>
                  <TabsTrigger value="beauty">Beauty</TabsTrigger>
                  <TabsTrigger value="wellness">Wellness</TabsTrigger>
                  <TabsTrigger value="jewellery">Jewellery</TabsTrigger>
                </TabsList>
                <TabsContent value="fashion">Make changes to your account here.</TabsContent>
                <TabsContent value="electronics">Change your password here.</TabsContent>
              </Tabs>
            </div>
          </div>
          <ProductsSlider />
        </div>
      </section>

      <section className="bg-white py-5 w-full">
        <div className="container mx-auto border-2 border-red-800 p-8 md:p-10  shadow-xl rounded-md bg-gradient-to-r from-red-50 to-white">
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
        <AdsBanner />
      </section>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    </div>
  )
}

export default HomePage