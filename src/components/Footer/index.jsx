import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Checkbox } from "@/components/ui/checkbox"
import { PiKeyReturn } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
	return (
		<>
			<footer className='py-6 bg-white boder-1 border-black/80 '>
			<div className='container'>
					<div className='grid grid-cols-5 gap-2 py-8 pb-10'>
						<div className='col1 flex items-center justify-center flex-col group'>
							<FaShippingFast className='text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#FF5353]'/>
							<h2 className='font-[600] text-[16px] mt-3'>Free Shipping</h2>
							<p className='font-[500] text-[12px]'>For all Orders Over $100</p>
						</div>
						<div className='col1 flex items-center justify-center flex-col group'>
							<PiKeyReturn className='text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#FF5353]'/>
							<h2 className='font-[600] text-[16px] mt-3'>30 Days Returns</h2>
							<p className='font-[500] text-[12px]'>For an Exchange Product</p>
						</div>
						<div className='col1 flex items-center justify-center flex-col group'>
							<MdPayment className='text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#FF5353]'/>
							<h2 className='font-[600] text-[16px] mt-3'>Secured Payment</h2>
							<p className='font-[500] text-[12px]'>Payment Cards Accepted</p>
						</div>
						<div className='col1 flex items-center justify-center flex-col group'>
							<FiGift className='text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#FF5353]'/>
							<h2 className='font-[600] text-[16px] mt-3'>Special Gifts</h2>
							<p className='font-[500] text-[12px]'>Our First Product Order</p>
						</div>
						<div className='col1 flex items-center justify-center flex-col group'>
							<BiSupport className='text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#FF5353]'/>
							<h2 className='font-[600] text-[16px] mt-3'>Support 24/7</h2>
							<p className='font-[500] text-[12px]'>Contact us Anytime</p>
						</div>
					</div>
					<br/>
					<hr />
					<div className='footer flex py-8'>
						<div className='part1 w-[25%] border-r border-rgba(0,0,0,0.1)'>
							<h2 className='text-[18px] font-[600] mb-4'>Contact us</h2>
							<p className='text-[13px] font-[400] pb-4'>Classyshop - Mega Super Store 
							507-Union Trade Centre France
							</p>
							<Link className='link text-[15px]' to="mailto:someone@example.com">
								dathuynh1221212@gmail.com
							</Link>
							<span className='text-[22px] font-[600] block w-full mt-3 mb-5 text-[#ff5353]'>03668312</span>
							<div className='flex items-center gap-2'>
								<BsChatDots className='text-[40px] text-[#ff5353]' />
								<span className='text-[16px] font-[600]'>Online Chat Get Expert Help</span>
							</div> 
						</div>
						<div className='part2 w-[40%] flex pl-8'>
							<div className='part2_col1 w-[50%]'>
								<h2 className='text-[18px] font-[600] mb-4'>Products</h2>
								<ul className='list-none'>
									<li><Link className='link block text-[14px] w-full mb-2' to='#'>Prices drop</Link></li>
									<li><Link className='link block text-[14px] w-full mb-2' to='#'>New Products</Link></li>
									<li><Link className='link block text-[14px] w-full mb-2' to='#'>Best sales</Link></li>
									<li><Link className='link block text-[14px] w-full mb-2' to='#'>Contact Us</Link></li>
									<li><Link className='link block text-[14px] w-full mb-2' to='#'>Sitemap</Link></li>
									<li><Link className='link block text-[14px] w-full mb-2' to='#'>Stores</Link></li>

								</ul>
							</div>
							<div className='part2_col2 w-[50%]'>
								<h2 className='text-[18px] font-[600] mb-4'>Our Company</h2>
								<ul className='list-none'>
									<li><Link className='link block mb-2 text-[14px] w-full' to='#'>Delivery</Link></li>
									<li><Link className='link block mb-2 text-[14px] w-full' to='#'>Legal Notice</Link></li>
									<li><Link className='link block mb-2 text-[14px] w-full' to='#'>Best sales</Link></li>
									<li><Link className='link block mb-2 text-[14px] w-full' to='#'>Terms and conditions of use</Link></li>
									<li><Link className='link block mb-2 text-[14px] w-full' to='#'>About us</Link></li>
									<li><Link className='link block mb-2 text-[14px] w-full' to='#'>Login</Link></li>

								</ul>
							</div>
						</div>
						<div className='part2 w[35%] flex flex-col pl-8 pr-8'>
							<h2 className='text-[18px] font-[600] mb-4'>Subscribe to newsletter</h2>
							<p className='text-[13px]'>Subscribe to our latest newsletter to get news about 
							special discounts.
							<form className='mt-5'>
								<input type='text' placeholder='Your Email Address' className='w-full h-[45px] focus:border-[rgba(0,0,0,0.3)] pl-4 pr-4 rounded-sm border outline-none placeholder:text-[14px]'/>
								<Button className='mt-4' variant='btnOrg'>Subscribe</Button>
								<div className='flex items-center gap-2 mt-2'>
									<Checkbox className='border border-red-500 bg-white data-[state=checked]:bg-red-500 data-[state=checked]:text-white' id="term" />
									<label className='text-[13px] cursor-pointer' htmlFor='term'>I agree to the terms and conditions and the privacy policy</label>
								</div>
								
							</form>
							</p>

						</div>
					</div>
				</div>
			
			</footer>
			<div className='bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3 bg-white'>
				<div className='container flex items-center justify-between'>
					<ul className='flex items-center  justify-center gap-2'>
						<li className='list-none'>
							<Link to={'#'} target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex items-center justify-center group transition-all  hover:bg-[#ff5353]'>
								<FaFacebookF className='text-[15px] group-hover:text-white' />
							</Link>
						</li>
						<li className='list-none'>
							<Link to={'#'} target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex items-center justify-center group transition-all  hover:bg-[#ff5353]'>
								<FaXTwitter className='text-[15px] group-hover:text-white' />
							</Link>
						</li>
						<li className='list-none'>
							<Link to={'#'} target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex items-center justify-center group transition-all  hover:bg-[#ff5353]'>
								<FaPinterestP className='text-[15px] group-hover:text-white' />
							</Link>
						</li>
						<li className='list-none'>
							<Link to={'#'} target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex items-center justify-center group transition-all  hover:bg-[#ff5353]'>
								<FaInstagram className='text-[15px] group-hover:text-white' />
							</Link>
						</li>
					</ul>
					<p className='text-[13px] text-center'>© 2024 - Ecommerce Template</p>
					<div className='flex items-center justify-center gap-2'>
						<div className="w-[60px] h-[40px] flex items-center justify-center">
							<img src="/jte.png" alt="J&T Express" className="w-full h-full object-contain" />
						</div>
						<div className="w-[60px] h-[40px] flex items-center justify-center">
							<img className='w-full h-full object-contain' src='/ghn express.png' alt='ghnExpress' />
						</div>
						<div className="w-[60px] h-[40px] flex items-center justify-center">
								<img className='w-full h-full object-contain' src='zalopay.png' alt='zalopay' />
						</div>
						<div className="w-[60px] h-[40px] flex items-center justify-center">
								<img className='w-full h-full object-contain' src='/momo.png' alt='Momo' />
						</div>
						<div className="w-[60px] h-[40px] flex items-center justify-center">
						<img className='w-full h-full object-contain' src='/napas.png' alt='Napas' />
						</div>
					</div>
				</div>
			</div>
		
		</>
	)
}

export default Footer
