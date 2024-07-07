'use client'
import React from "react"
import signIn from "@/firebase/auth/signIn"
import { useRouter } from "next/navigation"
import Button from "@/components/Button"
import FormInput from "@/components/FormInput"
import Link from "next/link"
import FormLayout from "@/components/FormLayout"
function Page() {
    const [email, setEmail] =React.useState('')
    const[password, setPassword]= React.useState('')
    const [error, setError]= React.useState(null)
    const router = useRouter()

    const handleForm = async(event)=>{
        event.preventDefault()

        const {result, error} = await signIn(email, password);

        if(error){
            setError(error.message)
            return console.error
        }

        console.log(result)
        return router.push("/admin")
    }

    return(
        <FormLayout title="Sign In">
            {error && <p className="text-red-500 text-sm">{error}</p>}

                <form onSubmit={handleForm} className="form flex flex-col gap-3">
                    
                    <FormInput onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                   
                    <FormInput onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                 
                    <Button type="submit" text="Sign In" />
                    <p className="text-sm text-gray-600" >dont have an account ? <Link href='/signUp' className="text-rose-600">Sign Up</Link></p>
                </form>
        </FormLayout>
    )
  }

  export default Page