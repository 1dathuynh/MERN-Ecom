import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
const categories = [
  {
    id: 1,
    name: "Fashion",
    image: '/public/fashion.jpg',
  },
  {
    id: 2,
    name: "Electronics",
    image: "/Electronics.png",
  },
  {
    id: 3,
    name: "Bags",
    image: "/Bags.png",
  },
  {
    id: 4,
    name: "Footwear",
    image: "/Footwear.png",
  },
  {
    id: 5,
    name: "Groceries",
    image: "/Groceries.png",
  },
  {
    id: 6,
    name: "Beauty",
    image: "/Beauty.png",
  },
  {
    id: 7,
    name: "Wellness",
    image: "/Wellness.png",
  },
  {
    id: 8,
    name: "Jewellery",
    image: "/Jewellery.png",
  },
  {
    id: 9,
    name: "Travel",
    image: "/Travel.png",
  },
  {
    id: 10,
    name: "Toys",
    image: "/Toys.png",
  },
]

export default function HomeCatSlider() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
         <CarouselContent className="-ml-2 md:-ml-4">
            {categories.map((category) => (
              <CarouselItem key={category.id} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/7">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="group cursor-pointer">
                      <div className="item h-32 py-4 px-3 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-100 hover:border-blue-200 hover:-translate-y-1">
                        <div className="mb-2 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                          <img
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            className="w-[45px] h-[45px] object-contain transition-all duration-300 group-hover:brightness-110"
                          />
                        </div>
                        <h3 className="text-[12px] md:text-[14px] font-semibold text-gray-800 text-center transition-colors duration-300 group-hover:text-blue-600 line-clamp-2 leading-tight px-1">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{category.name}</p>
                  </TooltipContent>
                </Tooltip>
              </CarouselItem>
            ))}
          </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  )
}
