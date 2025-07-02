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
import { Link } from "react-router-dom";
import { registerSchemas } from "../../../schemas";
import { useTransition } from "react";
const RegisterForm = () => {
	const [isPending, startTransition] = useTransition()
	const form = useForm({
		resolver: zodResolver(registerSchemas),
		defaultValues: {
		name: "",
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
						<span className="bg-gradient-to-r from-lime-400 to-fuchsia-600 bg-clip-text text-transparent">Shop</span>
					</div>
					</h1>
					<p className="text-muted-foreground text-sm">Create an account</p>
				</div>
			</CardHeader>
			<CardContent>
				<Form {...form}>
				<form onSubmit={form.handleSubmit(onsubmit)} className="space-y-5">
					<div className="space-y-5">
					<FormField control={form.control} name="name" render={({field}) => (
						<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl> 
									<Input {...field} placeholder="John Doe" type="text" disabled={isPending}/>
								</FormControl>
              <FormMessage />
						</FormItem>
					)} />
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
					<Button type="submit" className="w-full" disabled={isPending}>Register</Button>
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
					<Link to='#'>Already have an account?</Link>
				</Button>
			</CardFooter>
		</Card>
		</div>
	)
}

export default RegisterForm
