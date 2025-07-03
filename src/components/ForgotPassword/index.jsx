import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "@/components/ui/input"
import {Form, FormControl, FormField, FormMessage, FormLabel, FormItem} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner"
import { loginSchemas } from "../../../schemas";
import { useState, useTransition } from "react";
import { FaLock } from "react-icons/fa6";
const ForgotPasswordForm = () => {
	const [isPending, startTransition] = useTransition()
	
	const form = useForm({
		resolver: zodResolver(loginSchemas),
		defaultValues: {
    email: "",
    password: ""
  }
	})
	const onsubmit = (data) =>{
		console.log(data);
		
	}
	return (
		<div>
			<Card className="w-[500px] shadow-2xl">
			<CardHeader>
				<div className="w-full flex flex-col items-center justify-center">
					<h1 className="text-3xl font-semibold">
					<div className="flex items-center justify-center gap-2">
							<FaLock className="text-[25px] text-[#b3ff02]"  />
						<span className="bg-gradient-to-r from-lime-400 to-fuchsia-600 bg-clip-text text-transparent">ClassyShop</span>
					</div>
					</h1>
					<p className="text-muted-foreground text-sm">Forgot password</p>
				</div>
			</CardHeader>
			<CardContent>
				<Form {...form}>
				<form onSubmit={form.handleSubmit(onsubmit)} className="space-y-8">
					<div className="space-y-6">
						<FormField control={form.control} name="password" render={({field}) => (
						<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl> 
									<Input {...field} placeholder="john.doe@example.com" type="password" disabled={isPending}/>
								</FormControl>
              <FormMessage />
						</FormItem>
					)} />
					<FormField control={form.control} name="confirmPassword" render={({field}) => (
						<FormItem>
								<FormLabel>Confirm Password</FormLabel>
								<FormControl>
									<Input placeholder="******" type="password" {...field} disabled={isPending}/>
								</FormControl>
              <FormMessage />
						</FormItem>
					)} />
					</div>
					{/* <FormError message={error} />
					<FormSuccess message={success}/> */}
					<Button type="submit" className="w-full" disabled={isPending}>Change Password</Button>
				</form>
			</Form>

			</CardContent>
			<CardFooter>
				<Button variant='link' className='w-full' size='lg'>
					<Link to='/login'>Back to login</Link>
				</Button>
			</CardFooter>
		</Card>
		</div>
	)
}

export default ForgotPasswordForm
