"use client"

import { useRouter } from "next/navigation"

const TryItButton = () => {
    const router = useRouter();    
    const handle = () => {
        router.push("learning-path")
    }
    
    return (
        <button onClick={handle} className="px-4 py-2 bg-black text-white rounded-sm">
            Try it now!
        </button>
    )
}

export default TryItButton