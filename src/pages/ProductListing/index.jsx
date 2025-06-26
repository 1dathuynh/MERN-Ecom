
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import SideBar from '../../components/SideBar'
import ProductsItem from '../../components/ProductsItem'
import { Button } from '../../components/ui/button'
import { MdOutlineGridView } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react";
import ProductsItemListView from "../../components/ProductItemListView";

const ProductListing = () => {
const [openMenu, setOpenMenu] = useState(false)
const [itemView, setIsItemView] = useState('grid')

	return (
		<section className='py-6 pb-0'>
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
			<div className='container'>
				<div className='bg-white flex p-2 mt-4 w-full'>
						{/* Left */}
					<div className='sidebarWrapper w-[20%] h-full bg-white'>
						<SideBar />
					</div>
						{/* Right */}
						<div className='rightContent w-[80%] py-3'>
							<div className='bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between'>
								{/* iconGrid + Span 'there are..' */}
								<div className='col1 flex items-center gap-1'>
									<Button onClick={() => setIsItemView('list')} variant='custom' className={`w-[40px] bg-white/6 min-w-[40px] cursor-pointer rounded-full text-[#000] h-[40px] ${itemView == 'list' && 'text-[#ff5252]'}`}>
											<LuMenu />
										</Button>
									<Button onClick={() => setIsItemView('grid')} variant='custom' className={`w-[40px] bg-white/6 min-w-[40px] cursor-pointer rounded-full text-[#000] h-[40px] ${itemView == 'grid' && 'text-[#ff5252]'}`}>
										<MdOutlineGridView />
									</Button>
									<span className="text-[14px] font-[500] pl-3 text-black/70">There are 27 products.</span>
								</div>

								{/* Sort */}
								<div className="col2 ml-auto  flex items-center justify-end gap-2 pr-4">
									<span className="text-[14px] font-[500] pl-3 text-black/70">Sort By:</span>
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button variant='ghost' className='bg-white text-[#000]  focus:outline-none focus:ring-0 focus:ring-transparent'>Sale, highest to lowest</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent>
													<DropdownMenuItem>Sale, highest to lowest</DropdownMenuItem>
													<DropdownMenuItem>Relevance</DropdownMenuItem>
													<DropdownMenuItem>Name, A to Z</DropdownMenuItem>
													<DropdownMenuItem>Name, Z to A</DropdownMenuItem>
													<DropdownMenuItem>Price, low to high</DropdownMenuItem>
													<DropdownMenuItem>Price, hight to low</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
								</div>
							</div>

							{/* Product */}
							<div className={`grid ${itemView=='grid' ? 'grid-cols-4 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-1' } gap-4`}>
							{itemView === "grid" ? (
								<>
								<ProductsItem/>
								<ProductsItem/>
								<ProductsItem/>
								<ProductsItem/>
								<ProductsItem/>
								<ProductsItem/>
								<ProductsItem/>
								<ProductsItem/>
								</>
							) : (
								<>
									<ProductsItemListView />
									<ProductsItemListView />
									<ProductsItemListView />
									<ProductsItemListView />
									
								</>
							)}

							</div>

							{/* Pagination */}
							<div className="mt-10 flex items-center">
								<Pagination>
								<PaginationContent>
									<PaginationItem>
										<PaginationPrevious href="#" />
									</PaginationItem>
									<PaginationItem>
										<PaginationLink href="#">1</PaginationLink>
									</PaginationItem>
									<PaginationItem>
										<PaginationEllipsis />
									</PaginationItem>
									<PaginationItem>
										<PaginationNext href="#" />
									</PaginationItem>
								</PaginationContent>
							</Pagination>
							</div>
						</div>
					
						
				</div> 	
			</div>
		
		</section>
	)
}

export default ProductListing
