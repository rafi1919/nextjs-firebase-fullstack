'use client'
import React from "react";
import { useAuthContext} from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { getAuth, signOut } from "firebase/auth";

// import getData from "@/firebase/firestore/getData";

function Page() {
    const { user } = useAuthContext()
    const router = useRouter()
    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            localStorage.clear(); 
            router.push("/");
        } catch (error) {
            console.error("error sign out", error);
        }
    };

    return (        
        <div className="flex flex-col ">

            <h1 className="font-bold text-lg text-white">Welcome</h1>
            <Button onClick={handleLogout} text="Sign Out"/>
        </div>

    );
}

export default Page;