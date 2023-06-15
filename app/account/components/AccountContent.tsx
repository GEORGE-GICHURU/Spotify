"use client";

import { useEffect, useState } from "react";
import  { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";
import { postData } from "@/libs/helpers";

const AccountContent = () => {
    const router = useRouter();
    const {isLoading, user} = useUser();


    const [ loading, setLoading ]  = useState(false); 

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace("/");
        }

    }, [isLoading, user, router]);

    const redirectToCustomerPortal = async () => {
        setLoading(true);
        try {
            const { url, error } = await postData({
                url: "/api/create-portal-link"
            });
            window.location.assign(url);
        } catch (error) {
            if (error) 
            return alert((error as Error).message)

        }
        setLoading(true);
    };

    return (
        <div className="mb-7 px-6">
           <Button
                
                className="w-[300px]"
            >
                Subscribe

           </Button>

        </div>

        
    )

}

export default AccountContent;