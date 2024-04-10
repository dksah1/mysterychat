import {z} from 'zod'

export const usernameValidation = z
.string()
.min(2,"Username must be atleast 2 character")
.max(20, "Username cannot be more than 20 characters")
.regex(/^[a-zA-Z0-9_]{3,20}$/ ,"Username must not contain special character")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Please enter a valid email"}),
    password: z.string().min(6,{message:"Password should have minimum 6 character"})
})