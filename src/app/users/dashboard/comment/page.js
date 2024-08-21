import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth"
import prisma from "@/libs/prisma"
import Link from "next/link"

const page = async() => {
    const user = await authUserSession()
    const comments = await prisma.comment.findMany({ where: { user_email: user.email } })
    
    return (
        <section className="mt-4 px-4 w-full">
            <Header title={"Komentar"}/>
            <div className="grid grid-cols-1 py-2 gap-4">
                {comments.map(comment => {
                    return(        
                        <Link href={`/anime/${comment.mal_id}`} key={comment.id} className="bg-color-grey text-color-brown p-4">
                            <p className='text-sm'>{comment.anime_title}</p>
                            <p>{comment.comment}</p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default page