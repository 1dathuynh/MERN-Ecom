import React, { useState } from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from '../ui/button';
const Verify = () => {
	const [otp, setOtp] = useState("")
	const handleChange = (value) => {
		setOtp(value)
		
	}
	const verifyOTP = (e) => {
		e.preventDefault();
		alert(otp);
	}
	return (
		<section className='section py-10'>
			<div className='container'>
				<div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10'>
					<div className='text-center flex items-center justify-center'>
						<img  src='/shield.png' className='w-[50px]'/>
					</div>
					<h3 className='text-center text-[18px] text-black mt-4 mb-5'>
						Verify OTP
					</h3>
					<p className='text-center text-[18px] mt-0 mb-4'>OTP send to <span className='text-[#ff5252] font-bold'>dathuynh1221212@gmail.com</span></p>
					
				<form onSubmit={verifyOTP}>
					<div className='flex justify-center'>
					<InputOTP maxLength={6} value={otp} onChange={handleChange}>
					<InputOTPGroup className="flex gap-2">
						<InputOTPSlot className="h-12 w-12 rounded-md border border-gray-300 text-center text-2xl font-bold focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white" index={0} />
						<InputOTPSlot className="h-12 w-12 rounded-md border border-gray-300 text-center text-2xl font-bold focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white" index={1} />
						<InputOTPSlot className="h-12 w-12 rounded-md border border-gray-300 text-center text-2xl font-bold focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white" index={2} />
						<InputOTPSlot className="h-12 w-12 rounded-md border border-gray-300 text-center text-2xl font-bold focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white" index={3} />
						<InputOTPSlot className="h-12 w-12 rounded-md border border-gray-300 text-center text-2xl font-bold focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white" index={4} />
						<InputOTPSlot className="h-12 w-12 rounded-md border border-gray-300 text-center text-2xl font-bold focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white" index={5} />
					</InputOTPGroup>
				</InputOTP>
				</div>

				<div className='flex items-center justify-center mt-5'>
					<Button type="submit" className='w-full'>Verify OTP</Button>
				</div>
				</form>
				</div>
			</div>
		</section>
	)
}

export default Verify
