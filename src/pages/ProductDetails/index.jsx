import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator} from "@/components/ui/breadcrumb"
import ProductZoom from "../../components/ProductZoom"
import Rating from "@/components/ui/rating"
import {Button} from "@/components/ui/button.jsx"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import ProductsSlider from "../../components/ProductsSlider"
import ProductDetailsComponent from "../../components/ProductDetailComponent"
const ProductDetails = () => {
	const [activeTab, setActiveTab] = useState(0);
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
								<BreadcrumbItem>
								<BreadcrumbLink className='link transition'  href="/">Swimwear & Beachwear</BreadcrumbLink>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</div>
			

			<section className="bg-white py-6">
					<div className="container flex gap-6 items-center">
							<div className="productZoomContainer w-[40%] h-[60vh]">
								<ProductZoom />
							</div>
							<div className="productContent w-[60%]">
								<ProductDetailsComponent />
							</div>
					</div>
					
					
					<div className="container pt-30">
						<div className="flex items-center gap-8 mb-5">
							<span onClick={() => setActiveTab(0)} className={`link text-[17px] cursor-pointer font-semibold ${activeTab===0 && 'text-[#ff5252]'}`}>Description</span>
							<span onClick={() => setActiveTab(1)} className={`link text-[17px] cursor-pointer font-semibold ${activeTab===1 && 'text-[#ff5252]'}`}>Product Details</span>
							<span onClick={() => setActiveTab(2)} className={`link text-[17px] cursor-pointer font-semibold ${activeTab===2 && 'text-[#ff5252]'}`}>Peviews (5)</span>
						</div>
						{activeTab === 0 && (
						<div className="shadow-md w-full py-5 px-8 rounded-md">
							<p className="font-[14px] leading-6 mb-3">Soft, non-wired bra designed with the minimum number of seams for a seamless, comfortable feel against the skin. Adjustable shoulder 
							straps and lined cups with removable inserts that shape the bust and provide good support. No fasteners.</p>
							<h4>Light beige, Solid colour</h4>
							<p>We accept card payments via MasterCard and Visa. You can also pay by Klarna, PayPal, Apple Pay or use your H&M giftcard. For external brands a shipping fee might be applied. 
							The shipping cost for each parcel will be shown at checkout. Find out more on our customer service pages.</p>
							<h4>Free Shipping & Return</h4>

							<p>We accept card payments via MasterCard and Visa. You can also pay by Klarna, PayPal, Apple Pay or use your H&M giftcard. For external brands a shipping fee might be applied. 
							The shipping cost for each parcel will be shown at checkout. Find out more on our customer service pages.</p>
							<h4>Money Back Guarantee</h4>
							<p>a promise from a seller to a buyer that the buyer will receive a full refund if they are </p>
							<h4>Online support</h4>
							<p>You will get 24 hour support with purchase products</p>
						</div>	
						)}
						{
							activeTab === 1 && (
								<div className="shadow-md w-full py-5 px-8 rounded-md">
									<div class="relative overflow-x-auto">
											<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
													<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
															<tr>
																	<th scope="col" class="px-6 py-3">
																			Stand Up
																	</th>
																	<th scope="col" class="px-6 py-3">
																			Folded (w/o wheels)
																	</th>
																	<th scope="col" class="px-6 py-3">
																			Folded (w/ wheels)
																	</th>
																	<th scope="col" class="px-6 py-3">
																			Door Pass Through
																	</th>
															</tr>
													</thead>
													<tbody>
															<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
																	<td class="px-6 py-4 font-semibold">
																			35″L x 24″W x 37-45″H(front to back wheel)
																	</td>
																	<td class="px-6 py-4 font-semibold">
																			32.5″L x 18.5″W x 16.5″H
																	</td>
																	<td class="px-6 py-4 font-semibold">
																			32.5″L x 24″W x 18.5″H
																	</td>
																	<td class="px-6 py-4 font-semibold">
																			$24
																	</td>
															</tr>
													</tbody>
											</table>
									</div>
								</div>

							)}
							{
							activeTab == 2 &&  (
								<div className="shadow-md w-[90%] py-5 px-8 rounded-md">
								<div className="w-full productReviewContainer">
									<h2 className="text-[18px]">Customer question & answers</h2>

									<div className="reviewScroll pr-5 w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5" >
										<div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
											<div className="info w-[80%] flex items-center gap-2 mt-5">
												
												<div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
													<img src="https://ui.shadcn.com/avatars/04.png" className="w-full flex items-center" />
												</div>
												<div className="w-[70%]">
													<h4 className="text-[16px]">John Doe</h4>
													<h4 className="text-[15px] mt-0.5">2/7/2025</h4>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
												</div>
											</div>
												<Rating max={5} value={5} />
											
										</div>
										<div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
											<div className="info w-[80%] flex items-center gap-2 mt-5">
												
												<div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
													<img src="https://ui.shadcn.com/avatars/04.png" className="w-full flex items-center" />
												</div>
												<div className="w-[70%]">
													<h4 className="text-[16px]">John Doe</h4>
													<h4 className="text-[15px] mt-0.5">2/7/2025</h4>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
												</div>
											</div>
												<Rating max={5} value={5} />
											
										</div>
										<div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
											<div className="info w-[80%] flex items-center gap-2 mt-5">
												
												<div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
													<img src="https://ui.shadcn.com/avatars/04.png" className="w-full flex items-center" />
												</div>
												<div className="w-[70%]">
													<h4 className="text-[16px]">John Doe</h4>
													<h4 className="text-[15px] mt-0.5">2/7/2025</h4>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
												</div>
											</div>
												<Rating max={5} value={5} />
											
										</div>
										<div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
											<div className="info w-[80%] flex items-center gap-2 mt-5">
												
												<div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
													<img src="https://ui.shadcn.com/avatars/04.png" className="w-full flex items-center" />
												</div>
												<div className="w-[70%]">
													<h4 className="text-[16px]">John Doe</h4>
													<h4 className="text-[15px] mt-0.5">2/7/2025</h4>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
												</div>
											</div>
												<Rating max={5} value={5} />
											
										</div>
										<div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
											<div className="info w-[80%] flex items-center gap-2 mt-5">
												
												<div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
													<img src="https://ui.shadcn.com/avatars/04.png" className="w-full flex items-center" />
												</div>
												<div className="w-[70%]">
													<h4 className="text-[16px]">John Doe</h4>
													<h4 className="text-[15px] mt-0.5">2/7/2025</h4>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
												</div>
											</div>
												<Rating max={5} value={5} />
											
										</div>
										
									</div>
										<br/>
									<div className="reviewForm bg-[#fafafa] p-4 rounded-md">
									<h2 className="text-[18px]">Add a review</h2>
										<Textarea className="min-h-[120px] mt-3 mb-3"/>
									
									<Rating max={5} value={3}/> 
									<div className="pt-5">
										<Button variant="">Submit Review</Button>
									</div>
									</div>
								</div>
								</div>
							)
						}
					</div>

					<div className="container py-6">
						<h2 className="text-[20px] font-[600] pb-0">Related Products</h2>
          <ProductsSlider props={5} />
					</div>
			</section>

		</>
	)
}

export default ProductDetails
