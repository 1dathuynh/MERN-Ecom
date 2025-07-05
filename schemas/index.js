import * as z from "zod"

export const loginSchemas =  z.object({
	email: z.string().email({
		message: "Email is require"
	}),
	password: z.string().min(1, {
		message: "Password is require"
	})

})
export const registerSchemas =  z.object({
	name: z.string().min(1, {
		message: "Name is required"
	}),
	email: z.string().email({
		message: "Email is required"
	}),
	password: z.string().min(6, {
		message: "Minimum 6 characters required "
	})

})

export const checkoutSchemas = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email"),
	address: z.string().min(5, "Address is to short"),
})