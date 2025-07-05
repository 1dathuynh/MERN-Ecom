import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
const CartPannel = () => {
	return (
		<>
			<div className='scroll w-full max-h-[400px] overflow-y-scroll overflow-x-hidden py-3 px-4'>
				 		<div className='cartItem w-full flex items-center gap-4  border-b border-[rgba(0,0,0,0.1)] pb-5'>
              <div className='img w-[25%] overflow-hidden h-[110px] rounded-md'>
								<Link to='/productDetails/12313' className='block group'>
                <img src='https://image.hm.com/assets/hm/af/9b/af9b624b039db30c2cb4a2a9070637f949c31410.jpg?imwidth=820' className='w-full transform transition-transform duration-200 ease-in-out group-hover:scale-105'
                 />
								 </Link>
              </div>
              <div className='info w-[75%] pr-5 relative'>
               <Link to='/productDetails/12313' className='link transition-all'> <h4 className='text-[14px] font-semibold'>Textured jersey top</h4> </Link>
								<p className='flex items-center gap-5'>
									<span>Quantity: <span>2</span></span>
									<span className='text-[#ff5252] font-bold'>Price: $25</span>
								</p>
								<RiDeleteBin6Line className='absolute top-[8px] right-[10px] cursor-pointer text-[20px] link transition-all' />

              </div>
            </div>
						 <div className='cartItem w-full flex items-center gap-4  border-b border-[rgba(0,0,0,0.1)] pb-5'>
              <div className='img w-[25%] overflow-hidden h-[110px] rounded-md'>
								<Link to='/productDetails/12313' className='block group'>
                <img src='https://image.hm.com/assets/hm/af/9b/af9b624b039db30c2cb4a2a9070637f949c31410.jpg?imwidth=820' className='w-full transform transition-transform duration-200 ease-in-out group-hover:scale-105'
                 />
								 </Link>
              </div>
              <div className='info w-[75%] pr-5 relative'>
               <Link to='/productDetails/12313' className='link transition-all'> <h4 className='text-[14px] font-semibold'>Textured jersey top</h4> </Link>
								<p className='flex items-center gap-5'>
									<span>Quantity: <span>2</span></span>
									<span className='text-[#ff5252] font-bold'>Price: $25</span>
								</p>
								<RiDeleteBin6Line className='absolute top-[8px] right-[10px] cursor-pointer text-[20px] link transition-all' />

              </div>
            </div>
						<div className='cartItem w-full flex items-center gap-4  border-b border-[rgba(0,0,0,0.1)] pb-5'>
              <div className='img w-[25%] overflow-hidden h-[110px] rounded-md'>
								<Link to='/productDetails/12313' className='block group'>
                <img src='https://image.hm.com/assets/hm/af/9b/af9b624b039db30c2cb4a2a9070637f949c31410.jpg?imwidth=820' className='w-full transform transition-transform duration-200 ease-in-out group-hover:scale-105'
                 />
								 </Link>
              </div>
              <div className='info w-[75%] pr-5 relative'>
               <Link to='/productDetails/12313' className='link transition-all'> <h4 className='text-[14px] font-semibold'>Textured jersey top</h4> </Link>
								<p className='flex items-center gap-5'>
									<span>Quantity: <span>2</span></span>
									<span className='text-[#ff5252] font-bold'>Price: $25</span>
								</p>
								<RiDeleteBin6Line className='absolute top-[8px] right-[10px] cursor-pointer text-[20px] link transition-all' />

              </div>
            </div>

      </div>
			<br />

			<div className='bottomSection absolute bottom-[10px]  w-full'>
			<div className='bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col'>
				<div className='flex items-center justify-between w-full'>
					<span className='text-[14px] font-[600]'>1 item</span>
					<span className='text-[#ff5252]'>$86.00</span>
				</div>
				<div className='flex items-center justify-between w-full'>
					<span className='text-[14px] font-[600]'>Shipping</span>
					<span className='text-[#ff5252]'>$6.00</span>
				</div>
			</div>


			<div className='bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col'>
				<div className='flex items-center justify-between w-full'>
					<span className='text-[14px] font-[600]'>Total (tax excl.)</span>
					<span className='text-[#ff5252]'>$86.00</span>
					</div>
				<div className='flex items-center justify-between w-full mt-5 space-x-2'>
				<Link className='w-[48%]' to='/cart'><Button className='capitalize w-full' variant='btnOrg'>View Cart</Button></Link>
				<Link className='w-[48%]' to='/checkout'><Button variant="btnOrgBorder" className='w-full capitalize'>Checkout</Button></Link>
				</div>
			</div>
		</div>
		</>
	)
}

export default CartPannel
