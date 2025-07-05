import React from 'react'
import { Button } from '../../components/ui/button'
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { checkoutSchemas } from '../../../schemas'
import { IoBagCheckOutline } from "react-icons/io5";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";

const CheckoutPage = () => {
	const form = useForm({
		resolver: zodResolver(checkoutSchemas),
		defaultValues: {
			name: "",
			email: "",
			address: ""
		}
	})
	const onSubmit = (data) => {
		console.log(data);
		
	} 
	return (
		<section className='py-10'>
			<div className='container flex gap-5'>
				<div className='leftCol w-[70%]'>
					<div className='card bg-white shadow-md p-5 rounded-md w-full'>
						<h1>Billing Details</h1>

						<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='w-full mt-5'>
							<div className='flex items-center gap-5 pb-5'>
								<div className='col w-[50%]'>
									<FormField
										control={form.control}
										name="name"
										render={({field}) => (	
											<FormItem>
											<FormLabel>Full name *</FormLabel>
												<FormControl>
													<Input {...field} placeholder="John Doe"/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
									<div className='col w-[50%]'>
									<FormField
										control={form.control}
										name="email"
										render={({field}) => (
											<FormItem>
											<FormLabel>Email *</FormLabel>
												<FormControl>
													<Input type="email" {...field} placeholder="JohDoe@example.com"/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</div>

							<h4 className='text-[14px] font-semibold mb-3'>Street address *</h4>
							<div className='flex items-center gap-5 pb-5'>
								<div className='col w-[100%]'>
									<FormField
										control={form.control}
										name="streetname"
										render={({field}) => (
											<FormItem>
												<FormControl>
													<Input type="email" {...field} placeholder="House No. and Street Name"/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</div>
							<div className='flex items-center gap-5 pb-5'>
							
								<div className='col w-[100%]'>
									<FormField
										control={form.control}
										name="apartment"
										render={({field}) => (	
											<FormItem>
												<FormControl>
													<Input {...field} placeholder="Aparment, suite, unit etc."/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</div>


							<div className='flex items-center gap-5 pb-5'>
								<div className='col w-[50%]'>
									<FormField
										control={form.control}
										name="city"
										render={({field}) => (	
											<FormItem>
												<FormControl>
													<Input {...field} placeholder="Town / City *"/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
								<div className='col w-[50%]'>
									<FormField
										control={form.control}
										name="city"
										render={({field}) => (	
											<FormItem>
												<FormControl>
													<Input {...field} placeholder="State / Country *"/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</div>
							<div className='flex items-center gap-5 pb-5'>
								<div className='col w-full'>
									<FormField
										control={form.control}
										name="city"
										render={({field}) => (	
											<FormItem>
											<FormLabel>Postcode / ZIP *</FormLabel>
												<FormControl>
													<Input {...field} placeholder="Zip Code"/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</div>
							<div className='flex items-center gap-5 pb-5'>
								<div className='col w-full'>
									<FormField
										control={form.control}
										name="phone"
										render={({field}) => (	
											<FormItem>
											<FormLabel>Phone Number *</FormLabel>
												<FormControl>
													<Input {...field} placeholder="0123456789"/>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</div>
						</form>
						</Form>
					</div>
				</div>

				<div className='rightCol w-[30%]'> 
					<div className='card shadow-md bg-white p-5 rounded-md'>
						<h2 className='mb-4'>Your Order</h2>
						<div className="flex items-center justify-between py-4 px-2 border-t border-b border-[rgba(0,0,0,0.1)]">
							<span className='text-[12px] font-[600]'>Product</span>
							<span className='text-[12px] font-[600]'>Subtotal</span>

						</div>

						<div className='mb-6 scroll max-h-[300px] overflow-y-scroll overflow-x-hidden pr-5'>
						{/* Item 1 */}
						<div className='flex items-center justify-between py-2'>
							<div className='part1 flex items-center gap-3'>
								<div className='cursor-pointer img w-[70px] h-[70px] object-cover overflow-hidden rounded-md group'>
									<img className='w-full transition-all group-hover:scale-105' src='https://image.hm.com/assets/hm/3e/f5/3ef5ba36d1a023f5c037ec13279161c4f6557c29.jpg?imwidth=1260'/>
								</div>
								<div className='info'>
									<h4 className='text-[14px]'>Smock-detail dress </h4>
									<p className='text-[13px]'>Quantity: 1</p>
								</div>
							</div>
							<span className='text-[14px] font-semibold'>$180.00</span>
						</div>
						{/* Item 2 */}
						<div className='flex items-center justify-between py-2'>
							<div className='part1 flex items-center gap-3'>
								<div className='cursor-pointer img w-[70px] h-[70px] object-cover overflow-hidden rounded-md group'>
									<img className='w-full transition-all group-hover:scale-105' src='https://image.hm.com/assets/hm/3e/f5/3ef5ba36d1a023f5c037ec13279161c4f6557c29.jpg?imwidth=1260'/>
								</div>
								<div className='info'>
									<h4 className='text-[14px]'>Smock-detail dress </h4>
									<p className='text-[13px]'>Quantity: 1</p>
								</div>
							</div>
							<span className='text-[14px] font-semibold'>$180.00</span>
						</div>
						{/* Item 3 */}
						<div className='flex items-center justify-between py-2'>
							<div className='part1 flex items-center gap-3'>
								<div className='cursor-pointer img w-[70px] h-[70px] object-cover overflow-hidden rounded-md group'>
									<img className='w-full transition-all group-hover:scale-105' src='https://image.hm.com/assets/hm/3e/f5/3ef5ba36d1a023f5c037ec13279161c4f6557c29.jpg?imwidth=1260'/>
								</div>
								<div className='info'>
									<h4 className='text-[14px]'>Smock-detail dress </h4>
									<p className='text-[13px]'>Quantity: 1</p>
								</div>
							</div>
							<span className='text-[14px] font-semibold'>$180.00</span>
						</div>
						{/* Item 4 */}
						<div className='flex items-center justify-between py-2'>
							<div className='part1 flex items-center gap-3'>
								<div className='cursor-pointer img w-[70px] h-[70px] object-cover overflow-hidden rounded-md group'>
									<img className='w-full transition-all group-hover:scale-105' src='https://image.hm.com/assets/hm/3e/f5/3ef5ba36d1a023f5c037ec13279161c4f6557c29.jpg?imwidth=1260'/>
								</div>
								<div className='info'>
									<h4 className='text-[14px]'>Smock-detail dress </h4>
									<p className='text-[13px]'>Quantity: 1</p>
								</div>
							</div>
							<span className='text-[14px] font-semibold'>$180.00</span>
						</div>
						</div>

						<Button variant='btnOrg' className='w-full flex items-center gap-2'>
						<IoBagCheckOutline className='text-[25px]' />
						Checkout</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CheckoutPage
