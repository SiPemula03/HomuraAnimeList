import { authUserSession } from "@/libs/auth"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
    const user = await authUserSession()
    
    return (
        <div className="mt-8 text-color-brown flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold">Selamat Datang, {user.name}!</h5>
            <Image src={user.image} alt="..." width={250} height={250}/>
            <div className="flex flex-wrap gap-4 py-8">
                <Link href="/users/dashboard/collection" className="bg-color-cream text-color-brown font-bold px-4 py-3 text-xl">My Collection</Link>
                <Link href="/users/dashboard/comment" className="bg-color-cream text-color-brown font-bold px-4 py-3 text-xl">My Comment</Link>
            </div>
        </div>
    )
}

export default Page