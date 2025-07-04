import * as z from "zod";
import { FaLock } from "react-icons/fa6";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { Input } from "@/components/ui/input"
import {Form, FormControl, FormField, FormMessage, FormLabel, FormItem} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button";
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner"
import { loginSchemas } from "../../../schemas";
import { useState, useTransition } from "react";
const LoginForm = () => {
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
	const history = useNavigate();
	const forgotPassword = () => {
		history("/verify")
		toast.success("OTP sent.")
	}
	return (
		<div>
			<Card className="w-[500px] shadow-2xl">
			<CardHeader>
				<div className="w-full flex flex-col items-center justify-center">
					<h1 className="text-3xl font-semibold">
					<div className="flex items-center justify-center gap-2">
							<FaLock className="text-[25px] text-[#b3ff02]"  />
						<span className="bg-gradient-to-r from-lime-400 to-fuchsia-600 bg-clip-text text-transparent">Shop</span>
					</div>
					</h1>
					<p className="text-muted-foreground text-sm">Welcome back!</p>
				</div>
			</CardHeader>
			<CardContent>
				<Form {...form}>
				<form onSubmit={form.handleSubmit(onsubmit)} className="space-y-8">
					<div className="space-y-6">
						<FormField control={form.control} name="email" render={({field}) => (
						<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl> 
									<Input {...field} placeholder="john.doe@example.com" type="email" disabled={isPending}/>
								</FormControl>
              <FormMessage />
						</FormItem>
					)} />
					<FormField control={form.control} name="password" render={({field}) => (
						<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input placeholder="******" type="password" {...field} disabled={isPending}/>
								</FormControl>
              <FormMessage />
						</FormItem>
					)} />
					</div>
					{/* <FormError message={error} />
					<FormSuccess message={success}/> */}
						<Button variant='link' className='w-full' size='sm'>
							<a onClick={forgotPassword}>Fogort password?</a>
						</Button>
					<Button type="submit" className="w-full" disabled={isPending}>Login</Button>
				</form>
			</Form>

			</CardContent>
			<CardFooter>
				<div className="flex items-center w-full gap-x-2">
					<Button variant="outline" className="w-[50%]" size="lg">
						<FcGoogle />
					</Button>
					<Button variant="default" className="w-[50%]" size="lg">
						<FaGithub className="h-full" />
					</Button>
				</div>
			</CardFooter>
			<CardFooter>
				<Button variant='link' className='w-full' size='lg'>
					<Link to='/register'>Don't have an account?</Link>
				</Button>
			</CardFooter>
		</Card>
		</div>
	)
}

export default LoginForm
