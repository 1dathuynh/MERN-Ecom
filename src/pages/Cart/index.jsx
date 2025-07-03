import { BsFillBagCheckFill } from 'react-icons/bs'
import { Button } from "@/components/ui/button"
import CartItem from '../../components/CartItem'
const CartPage = () => {
	return (
		<section className='section py-5 pb-20'>
			<div className='container w-[80%] max-w-[80%] flex gap-6'>
				{/* Left */}
				<div className='leftPart w-[70%]'>
					<div className='shadow-md rounded-md p-5 bg-white'>
					<div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>
						<h2>Your Cart</h2>
					<p className='mt-0'>There are <span className='font-bold 
					text-[#ff5252]'>2 </span> 
					products in your cart
					</p>
					</div>
						<CartItem size='S' quantity={1} />
						<CartItem size='S' quantity={1} />
						<CartItem size='S' quantity={1} />
						<CartItem size='S' quantity={1} />
						<CartItem size='S' quantity={1} />
						<CartItem size='S' quantity={1} />
					</div>
				</div>

				{/* Right */}
				<div className='rightPart w-[30%]'>
					<div className='shadow-md rounded-md p-5 bg-white'>
						<h3 className='pb-3'>Cart Totals</h3>
						<hr/>
						<p className='flex items-center justify-between'>
							<span className='text-[14px] font-semibold'>
								Subtotal
							</span>
							<span className='text-[#ff5252] font-bold'>
								$58.00
							</span>
						</p>
						<p className='flex items-center justify-between'>
							<span className='text-[14px] font-semibold'>
								Shipping
							</span>
							<span className= 'font-bold'>
								Free
							</span>
						</p>
						<p className='flex items-center justify-between'>
							<span className='text-[14px] font-semibold'>
								Estimate For
							</span>
							<span className='font-bold'>
								United Kingdom
							</span>
						</p>
						<p className='flex items-center justify-between'>
							<span className='text-[14px] font-semibold'>
								Total
							</span>
							<span className='text-[#ff5252] font-bold'>
								$60.00
							</span>
						</p>
						<Button variant='btnOrg' className='w-full'>
						<BsFillBagCheckFill className='text-[20px]' />
						Checkout</Button>

					</div>
				</div>
			</div>
		</section>
	)
}

export default CartPage
