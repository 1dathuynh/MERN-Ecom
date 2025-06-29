import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator} from "@/components/ui/breadcrumb"
import ProductZoom from "../../components/ProductZoom"
const ProductDetails = () => {
	return (
		<>
			<div className='py-6'>
				<div className='container'>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink className='link transition' href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink className='link transition'  href="/">Fashion</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</div>
			

			<section className="bg-white py-5">
					<div className="container flex gap-4">
							<div className="productZoomContainer w-[40%] h-[60vh]">
								<ProductZoom />
							</div>
					</div>
			</section>

		</>
	)
}

export default ProductDetails
