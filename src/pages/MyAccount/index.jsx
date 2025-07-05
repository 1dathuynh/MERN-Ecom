import React from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { Button } from '../../components/ui/button';
import { FaRegUser } from "react-icons/fa";
import { BsHandbag } from 'react-icons/bs';
import { CiLogout } from 'react-icons/ci';
import { IoMdHeartEmpty } from 'react-icons/io';
import { NavLink } from "react-router";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { myProfileSchemas } from '../../../schemas/index.js';
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
const MyAccountPage = () => {
	const form = useForm({
		resolver: zodResolver(myProfileSchemas),
		defaultValues:{
			name:"",
			email: ""
		}
	})
	const onSubmit = (data) => {
    console.log("Form data:", data);
  };
	return (
		<section className='py-10 w-full'>
			<div className='container flex gap-5'>
				<div className='col1 w-[25%]'>
					<div className='card bg-white shadow-md rounded-md'>
						<div className='w-full p-5 flex items-center justify-center flex-col'>
							<div className='w-[110px] h-[110px] rounded-full overflow-hidden mb-3 relative group'>
								<img className='w-full h-full object-cover' src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4866.jpg' />
								<div className='overlay 
								w-[100%] h-[100%] absolute
								top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)]
								flex items-center justify-center cursor-pointer
								opacity-0 transition-all group-hover:opacity-100
								 '>
									<IoCloudUploadOutline className='text-[#fff] text-[22px]' />
									<input type='file' className='absolute cursor-pointer top-0 left-0 w-full h-full opacity-0'/>
								</div>
							</div>

							<h3>Joh Doe</h3>
							<h6 className='text-[13px] font-semibold text-[rgba(0,0,0,0.6)]'>JohnDoe@example.com</h6>
						</div>

						<ul className='myAccountTabs bg-[#f1f1f1]'>
							<li className='w-full'>
									<NavLink  to='/my-account' exact={true} activeClassName="isActive">
										<Button className='w-full border boder-[rgba(0,0,0,0.1)] bg-white hover:bg-white hover:text-[rgba(0,0,0,0.8)] text-[rgba(0,0,0,0.8)] rounded-none flex items-center gap-2 transition-all active:scale-100 active:bg-[#f1f1f1] text-left justify-start !px-5 py-5'><FaRegUser
									className='text-[20px]' />My Profile</Button>
									</NavLink>
							</li>
							<li className='w-full'>
								<NavLink  to='/my-list' exact={true} activeClassName="isActive">
								<Button className='w-full border boder-[rgba(0,0,0,0.1)] bg-white hover:bg-white hover:text-[rgba(0,0,0,0.8)] text-[rgba(0,0,0,0.8)] rounded-none flex items-center gap-2 transition-all active:scale-100 active:bg-[#f1f1f1] text-left justify-start !px-5 py-5'><BsHandbag
								className='text-[20px]' />My List</Button>
								</NavLink>
							</li>
							<li className='w-full'>
								<NavLink  to='/my-orders' exact={true} activeClassName="isActive">
								<Button className='w-full border boder-[rgba(0,0,0,0.1)] bg-white hover:bg-white hover:text-[rgba(0,0,0,0.8)] text-[rgba(0,0,0,0.8)] rounded-none flex items-center gap-2 transition-all active:scale-100 active:bg-[#f1f1f1] text-left justify-start !px-5 py-5'><IoMdHeartEmpty
								className='text-[20px]' />My Order</Button>
								</NavLink>

							</li>
							<li className='w-full'>
								<NavLink  to='/logout' exact={true} activeClassName="isActive">
								<Button className='w-full border boder-[rgba(0,0,0,0.1)] bg-white hover:bg-white hover:text-[rgba(0,0,0,0.8)] text-[rgba(0,0,0,0.8)] rounded-none flex items-center gap-2 transition-all active:scale-100 active:bg-[#f1f1f1] text-left justify-start !px-5 py-5'><CiLogout
								className='text-[20px]' />Logout</Button>
								</NavLink>

							</li>

						</ul>
					</div>
				</div>

				<div className='col2 w-[80%]'>
					<div className='card shadow-md rounded-md p-5 bg-white'>
						<h2 className='pb-3'>My Profile</h2>
						<hr/>

						<Form {...form}>
						<form className='mt-5' onSubmit={form.handleSubmit(onSubmit)}>
						<div className='flex items-center gap-5'>
							<div className='w-[50%]'>
								<FormField
									control={form.control}
									name="name"
									render={({field}) => (
										<FormItem>
											<FormControl>
												<Input {...field} className='placeholder:text-[16px]' placeholder="Full Name" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								 />
							</div>
							<div className='w-[50%]'>
								<FormField
									control={form.control}
									name="email"
									render={({field}) => (
										<FormItem>
											<FormControl>
												<Input {...field} className='placeholder:text-[16px]' placeholder="Email" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								 />
							</div>
						</div>
						<div className='flex items-center mt-5'>
							<div className='w-[50%]'>
								<FormField
									control={form.control}
									name="phone"
									render={({field}) => (
										<FormItem>
											<FormControl>
												<Input {...field} className='placeholder:text-[16px]' placeholder="Phone Number" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								 />
							</div>
						</div>

						<br />
						<div className='flex items-center gap-4'>
							<Button variant='btnOrg' className='w-[120px]'>Save</Button>
							<Button variant='btnOrgBorder' className='w-[120px]'>Cancel</Button>

						</div>
						</form>
						</Form>

					</div>
				</div>
			</div>
		</section>
	)
}

export default MyAccountPage
