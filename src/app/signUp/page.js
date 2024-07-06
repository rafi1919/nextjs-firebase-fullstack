'use client'
import React from "react"
import { useRouter } from "next/navigation"
import signUp from "@/firebase/auth/signUp"

import Button from "@/components/Button"
import FormInput from "@/components/FormInput"
import Link from "next/link"
import FormLayout from "@/components/FormLayout"

function Page() {
    const [email, setEmail] =React.useState('')
    const[password, setPassword]= React.useState('')
    const router = useRouter()

    const handleForm = async(event)=>{
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if(error){
            return console.error
        }

        console.log(result)
        return router.push("/admin")
    }

    return(
        <FormLayout title="Sign Up">
            <form onSubmit={handleForm} className="form flex flex-col gap-3">
             
                <FormInput onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
        
                <FormInput onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                <Button type="submit" text="Sign Up" />
                <p className="text-sm text-gray-600">have an account ? <Link href='/' className="text-rose-600">Sign In</Link></p>
            </form>
        </FormLayout>
    )
  }

  export default Page