import React from 'react'
import { Button } from "@/components/ui/button"
import { RiMenu2Fill } from 'react-icons/ri'
import { LiaAngleDownSolid } from 'react-icons/lia'
import { GoRocket } from "react-icons/go";
import { Link } from "react-router-dom"
import CategoryPanel from './CategoryPanel';
const NavigationPage = () => {
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	return (
			<>
				<nav className='py-2'>
				<div className='container mx-auto items-center grid grid-cols-[1fr_2fr_1fr] gap-2'>
					<div>
						<Button onClick={() => setDrawerOpen(true)} variant="effect" className="gap-2 w-full flex justify-between"><RiMenu2Fill />Shop By Categories <LiaAngleDownSolid className='text-[13px] ml-auto font-bold cursor-pointer'/></Button>
					</div>
					<div>
						<ul className='flex items-center'>
							<li className='list-none'>
								<Link className="link transition text-[14px] font-semibold" to="/">
									<Button size="sm" variant="custom" className="link transition font-semibold text-[rgba(0, 0, 0, 0.7)] hover:text-[#ff5353]">Home</Button>
								</Link>
							</li>
							<li className='list-none relative group'>
								<Link className="link" to="/"><Button size="sm" variant="custom" className="link transition font-semibold text-[rgba(0, 0, 0, 0.7)] hover:text-[#ff5353]">Fashion</Button></Link>
								<div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white  shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300  group-hover:top-[100%] z-999'>
									<ul>
										<li className='list-none w-full relative'>
											<Link to={"/"}>
											<Button variant="custom2" className="text-black/80 w-full justify-start text-left ">Men</Button>
											<div className='submenu absolute min-w-[150px] bg-white  shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300  group-hover:top-[100%]'>
									<ul>
										<li className='list-none w-full'>
											<Link to={"/"}>
											<Button variant="custom2" className="text-black/80 w-full justify-start text-left ">T-Shirt</Button>
											</Link>
											
										</li>
										<li className='list-none w-full'>
											<Link to={"/"}>
											<Button variant="custom2" className="text-black/80 w-full justify-start text-left">Women</Button>
											</Link>
										</li>
										<li className='list-none w-full'>
											<Link to={"/"}>
											<Button variant="custom2" className="text-black/80 w-full justify-start text-left">Kids</Button>
											</Link>
										</li>
										<li className='list-none w-full'>
											<Link to={"/"}>
											<Button variant="custom2" className="text-black/80 w-full justify-start text-left">Girls</Button>
											</Link>
										</li>
										<li className='list-none w-full'>
											<Link to={"/"}>
											<Button variant="custom2" className="text-black/80 w-full justify-start text-left">Boy</Button>
											</Link>
										</li>
									</ul>
								</div>
											</Link>
											
										</li>
										<li className='list-none w-full'>
											<Link to={"/"}>
											<Button variant="custom2" className="text-black/80 w-full justify-start text-left">Women</Button>
											</Link>
										</li>
										<li className='list-none w-full'>
											<Link to={"/"}>
											<Button variant="custom2" className="text-black/80 w-full justify-start text-left">Kids</Button>
											</Link>
										</li>
										<li className='list-none w-full'>
											<Link to={"/"}>
											<Button variant="custom2" className="text-black/80 w-full justify-start text-left">Girls</Button>
											</Link>
										</li>
										<li className='list-none w-full'>
											<Link to={"/"}>
											<Button variant="custom2" className="text-black/80 w-full justify-start text-left">Boy</Button>
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li className='list-none'>
								<Link className="link" to="/"><Button size="sm" variant="custom" className="link transition font-semibold text-[rgba(0, 0, 0, 0.7)] hover:text-[#ff5353]">Electronics</Button></Link>
							</li>
							<li className='list-none'>
								<Link className="link" to="/"><Button size="sm" variant="custom" className="link transition font-semibold text-[rgba(0, 0, 0, 0.7)] hover:text-[#ff5353]">Bags</Button></Link>
							</li>
							<li className='list-none'>
								<Link className="link" to="/"><Button size="sm" variant="custom" className="link transition font-semibold text-[rgba(0, 0, 0, 0.7)] hover:text-[#ff5353]">Footwear</Button></Link>
							</li>
							<li className='list-none'>
								<Link className="link" to="/">
								<Button size="sm" variant="custom" className="link transition font-semibold text-[rgba(0, 0, 0, 0.7)] hover:text-[#ff5353]">Grocies</Button></Link>
							</li>
							<li className='list-none'>
								<Link className="link" to="/"><Button size="sm" variant="custom" className="link transition font-semibold text-[rgba(0, 0, 0, 0.7)] hover:text-[#ff5353]">Beauty</Button></Link>
							</li>
							<li className='list-none'>
								<Link className="link" to="/"><Button size="sm" variant="custom" className="link transition font-semibold text-[rgba(0, 0, 0, 0.7)] hover:text-[#ff5353]">Wellness</Button></Link>
							</li>
							<li className='list-none'>
								<Link className="link" to="/"><Button size="sm" variant="custom" className="link transition font-semibold text-[rgba(0, 0, 0, 0.7)] hover:text-[#ff5353]">Jewellery</Button></Link>
							</li>
						</ul>
					</div>
					<div>
						<div className='truncate flex items-center gap-4 justify-end'>
							<GoRocket className='text-[18px]' />
							<div className='text-[14px] font-semibold mb-0 mt-0 -ml-2'>Free International Delivery</div>
						</div>
					</div>
				</div>
				</nav>
				<div>
					<CategoryPanel open={drawerOpen} setOpen={setDrawerOpen} />
				</div>
			</>
	)
}

export default NavigationPage
