import { getAnimeResponse } from "@/libs/api"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { authUserSession } from "@/libs/auth"
import prisma from "@/libs/prisma"
import CommentInput from "@/components/AnimeList/CommentInput"
import CommentBox from "@/components/AnimeList/CommentBox"

const page = async({ params : { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, mal_id: id }
    })

    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-2xl text-color-brown">{anime.data.title} - {anime.data.year}</h3>
                {
                !collection && user && <CollectionButton mal_id={id} user_email= {user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title}/>
                }
            </div>
            <div className="pt-4 px-4 flex gap-2 text-color-brown overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-cream p-2">
                    <h3>SCORE</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-cream p-2">
                    <h3>EPISODE</h3>
                    <p>{anime.data.episodes}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-cream p-2">
                    <h3>RANKING</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-cream p-2">
                    <h3>MUSIM</h3>
                    <p>{anime.data.season}</p>
                </div>
            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-brown">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"
                />
                <p className="text-justify text-xl">{anime.data.synopsis}</p>
            </div>
            <div className="p-4">
                <h3 className="text-color-brown text-2xl mb-4">Komentar</h3>
                <CommentBox mal_id={id}/>
                {user && <CommentInput mal_id={id} user_email= {user?.email} username={user?.name} anime_title={anime.data.title}/>}
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
            </div>
        </>
    )
}

export default page