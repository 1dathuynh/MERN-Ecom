import { Button } from "@/components/ui/button"
import HomeSlider from "../../components/HomeSlider"
import HomeCatSlider from "../../components/CatSlider"

const  HomePage = () => {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center">
      <HomeSlider  className="" />
      <HomeCatSlider />
    </div>
  )
}

export default HomePage