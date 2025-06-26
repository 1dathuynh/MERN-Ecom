import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"
import { Link } from "react-router-dom"


const AdsBannerV3 = ({
  item = 1,
  autoPlay = true,
  autoPlayInterval = 4000,
  showIndicators = true,
  showNavigation = true,
  showContent = true,
}) => {
  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  const banner = [
    {
      id: 1,
      name: "Phone",
      image: "/public/banner2.png",
      title: "iPhone 15 Pro Max",
      subtitle: "Titanium. So strong. So light. So Pro.",
      description: "Experience the most advanced iPhone ever with titanium design and A17 Pro chip.",
      cta: "Shop Now",
      link: "#",
      badge: "New",
    },
    {
      id: 2,
      name: "Phone2",
      image: "/public/banner3.png",
      title: "Samsung Galaxy S24",
      subtitle: "AI for All. Galaxy AI is here.",
      description: "Discover the power of Galaxy AI with advanced photography and productivity features.",
      cta: "Learn More",
      link: "#",
      badge: "AI Powered",
    },
    {
      id: 3,
      name: "Phone3",
      image: "/placeholder.svg?height=400&width=800",
      title: "Google Pixel 8 Pro",
      subtitle: "The most helpful Pixel yet.",
      description: "Powered by Google AI for the most helpful experience across photos, calls, and everyday tasks.",
      cta: "Explore",
      link: "#",
      badge: "Best Camera",
    },
    {
      id: 4,
      name: "Phone4",
      image: "/placeholder.svg?height=400&width=800",
      title: "OnePlus 12",
      subtitle: "Never Settle for Less.",
      description: "Experience flagship performance with Snapdragon 8 Gen 3 and ultra-fast charging.",
      cta: "Buy Now",
      link: "#",
      badge: "Fast Charge",
    },
    {
      id: 5,
      name: "Phone4",
      image: "/placeholder.svg?height=400&width=800",
      title: "OnePlus 12",
      subtitle: "Never Settle for Less.",
      description: "Experience flagship performance with Snapdragon 8 Gen 3 and ultra-fast charging.",
      cta: "Buy Now",
      link: "#",
      badge: "Fast Charge",
    },
    {
      id: 6,
      name: "Phone",
      image: "/public/banner2.png",
      title: "iPhone 15 Pro Max",
      subtitle: "Titanium. So strong. So light. So Pro.",
      description: "Experience the most advanced iPhone ever with titanium design and A17 Pro chip.",
      cta: "Shop Now",
      link: "#",
      badge: "New",
    },
    {
      id: 7,
      name: "Phone",
      image: "/public/banner2.png",
      title: "iPhone 15 Pro Max",
      subtitle: "Titanium. So strong. So light. So Pro.",
      description: "Experience the most advanced iPhone ever with titanium design and A17 Pro chip.",
      cta: "Shop Now",
      link: "#",
      badge: "New",
    },
  ]

  const basis = `basis-1/${item}`

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    if (!api || !isPlaying) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [api, isPlaying, autoPlayInterval])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const goToSlide = (index) => {
    api?.scrollTo(index)
  }

  return (
    <div className="container mx-auto py-6">
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="-ml-2 flex">
            {banner.map((bannerItem, index) => (
              <CarouselItem key={bannerItem.id} className={`pl-2 ${basis}`}>
                <div className="relative overflow-hidden rounded-xl group shadow-2xl">
                  {/* Background Image with Parallax Effect */}
                  <div className="relative h-[400px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{ backgroundImage: `url(${bannerItem.image})` }}
                    />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Animated Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-colors duration-300 rounded-xl" />

                    {/* Badge */}
                    {bannerItem.badge && (
                      <Badge
                        variant="secondary"
                        className="absolute top-4 left-4 bg-white/90 text-black font-semibold animate-pulse"
                      >
                        {bannerItem.badge}
                      </Badge>
                    )}

                    {/* Content Overlay */}
                    {showContent && (
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                          {bannerItem.title && (
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">{bannerItem.title}</h3>
                          )}
                          {bannerItem.subtitle && (
                            <p className="text-lg md:text-xl font-medium mb-3 text-gray-200 drop-shadow">
                              {bannerItem.subtitle}
                            </p>
                          )}
                          {bannerItem.description && (
                            <p className="text-sm md:text-base mb-4 text-gray-300 line-clamp-2 drop-shadow">
                              {bannerItem.description}
                            </p>
                          )}
                          {bannerItem.cta && (
                            <Link to={bannerItem.link || "#"}>
                              <Button
                                size="lg"
                                className="bg-white text-black hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 shadow-lg"
                              >
                                {bannerItem.cta}
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shine" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          {showNavigation && (
            <>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm" />
            </>
          )}
        </Carousel>

        {/* Controls */}
        <div className="flex items-center justify-between mt-4">
          {/* Indicators */}
          {showIndicators && (
            <div className="flex space-x-2">
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current - 1 ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Play/Pause Button */}
          <Button variant="outline" size="sm" onClick={togglePlayPause} className="ml-auto">
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>

        {/* Progress Bar */}
        {isPlaying && (
          <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-100 ease-linear"
              style={{
                width: `${((current - 1) / count) * 100}%`,
                animation: `progress ${autoPlayInterval}ms linear infinite`,
              }}
            />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-shine {
          animation: shine 2s ease-in-out;
        }
      `}</style>
    </div>
  )
}


export default AdsBannerV3
