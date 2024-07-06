'use client'
import React from "react"
import { useRouter } from "next/navigation"
import signUp from "@/firebase/auth/signUp"

import PageLayout from "@/component/PageLayout"
import Button from "@/component/Button"
import FormInput from "@/component/FormInput"
import Link from "next/link"

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
        <PageLayout>
            <form onSubmit={handleForm} className="form flex flex-col">
                <label htmlFor="email">
                    <p>Email</p>
                    <FormInput onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <FormInput onChange={(e) => setPassword(e.target.value)} required type="text" name="password" id="password" placeholder="password" />
                </label>
                <Button type="submit" text="SignUp" />
                <p>have an account ? <Link href='/' className="text-rose-600">SIgnIn</Link></p>
            </form>
        </PageLayout>
    )
  }

  export default Page