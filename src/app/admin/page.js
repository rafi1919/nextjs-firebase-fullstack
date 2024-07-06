'use client'
import React from "react";
import { useAuthContext} from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import getData from "@/firebase/firestore/getData";

function Page() {
    const { user } = useAuthContext()
    const router = useRouter()
    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return (<h1>Wellcome</h1>);
}

export default Page;