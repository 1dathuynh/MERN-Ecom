import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Search from '../Header/Search'
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosGitCompare } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import NavigationPage from '@/components/Header/Navigation';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip" 
import { Heart } from 'lucide-react';
import { MyContext } from '../../App';
import { FaRegUser } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { Button } from '../ui/button';
const Header = () => {
	const context = useContext(MyContext)
	return (
		<header className='bg-white'>
			{/* Tool tip */}
			<div className='top-strip py-1'>
				<div className='container'>
					<div className='flex items-center justify-between'>
						<div className='columns-1 w-[50%]'>
							<p className='text-[12px] font-[500]'>Get up to 50% off new season styles, limited time only</p>
						</div>
						<div className='flex items-center justify-end columns-2'>
							<ul className='flex items-center gap-2'>
								<li className='list-none'>
									<Link to='#' className='text-[12px] font-semibold link transform-3d'>Help Center</Link>
								</li>
								<li className='list-none'>
									<Link to='#' className='text-[12px] font-semibold link transition'>Order Tracking</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			
			<div className='header py-3'>
				<div className='container'>
					<div className='grid grid-cols-[25%_45%_30%]'>
						<div className='flex items-center'>
							<Link to="/">
								<img src='/logo.jpg' />
							</Link>
						</div>
						<div className='flex items-center'>
							<Search />
						</div>
						<div className='flex items-center justify-end'>
							<ul className='flex items-center gap-3 pl-2'>
								{context.isLogin === false ? (
									<>
										<li className='list-none'>
									<Link to="/login" className='link font-semibold text-sm transition-shadow'>Sign In</Link> |
								</li>
								<li className='list-none -ml-2'>
									<Link to="/register" className='link font-semibold text-sm transition-shadow'>Sign Up</Link>
								</li>
									</>
								): (
									<>
									<DropdownMenu>
										<DropdownMenuTrigger>
											<Button variant='btnUserOutline' className='myAccountWrap flex items-center gap-3 '>
										<Button variant='btnUser' className='w-[40px] h-[40px] rounded-full  bg-[#f1f1f1]'>
											<FaRegUser className='text-[16px text-[rgba(0,0,0,0.7)]' />
										</Button>
										<div className='info flex flex-col'>
											<h4 className='text-[13px] mb-0 text-left justify-start'>John Doe</h4>
											<span className='text-[12px] text-left justify-start truncate max-w-[150px]'>JohnDoe@example.com</span>
										</div>
									</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent className="min-w-[160px] py-2">
											<DropdownMenuItem className="px-3 py-3"><FaRegUser /><Link className='w=full' to='/my-account'>My Account</Link></DropdownMenuItem>
											<DropdownMenuItem className="px-3 py-3"><BsHandbag /><Link className='w=full' to='/my-orders'>Orders</Link></DropdownMenuItem>
											<DropdownMenuItem className="px-3 py-3"><IoMdHeartEmpty /><Link className='w=full' to='/my-list'>My List</Link></DropdownMenuItem>
											<DropdownMenuItem className="px-3 py-3"><CiLogout /><Link className='w=full' to='/logout'>Logout/</Link></DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
									</>
								)}
								
								<Tooltip>
									<TooltipTrigger>
										<li className="list-none">
											<div className="relative py-2">
												<Badge
													variant="custom"
													className="absolute top-0.5 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff5353] text-[10px] font-medium text-white"
												>
													3
												</Badge>
												<IoIosGitCompare className="h-6 w-6 text-gray-800" />
											</div>
										</li>
									</TooltipTrigger>
									<TooltipContent>
										Compare
									</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger>
										<li className="list-none">
											<div className="relative py-2">
												<Badge variant="custom" className="absolute top-0.5 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff5353] text-[10px] font-medium text-white">
													3
												</Badge>
												<Heart />
											</div>
										</li>
									</TooltipTrigger>
									<TooltipContent>Wishlist</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger>
										<li className="list-none">
											<div className="relative py-2">
												<Badge
													variant="custom"
													className="absolute top-0.5 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff5353] text-[10px] font-medium text-white"
												>
													3
												</Badge>
												<CiShoppingCart onClick={()=>context.setOpenCartPanel(true)} className="h-6.5 w-6.5 text-gray-800" />
											</div>
										</li>
									</TooltipTrigger>
									<TooltipContent>Cart</TooltipContent>
								</Tooltip>
							</ul>
						</div>
					</div>

				</div>
			</div>
			
			{/* Nav */}
			<div className=''>
				<NavigationPage />
			</div>
		</header>
	)
}

export default Header
