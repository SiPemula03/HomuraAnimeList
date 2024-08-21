import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, getNestedAnime, reproduce } from "../libs/api"

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let rekAnime = await getNestedAnime("recommendations/anime", "entry")
  rekAnime = reproduce(rekAnime, 8)

  return (
    <>
      <section>
        <Header title="Anime Populer" linkTitle="Cek Anime Populer" linkHref="/populer"/>
        <AnimeList api={topAnime}/>
      </section>
      <section>
        <Header title="Anime Rekomendasi"/>
        <AnimeList api={rekAnime}/>
      </section>
    </>
  )
}

export default Page