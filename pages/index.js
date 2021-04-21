import Head from 'next/head'
import styles from '../styles/Home.module.css';

import Header from "../components/Header";
import Feed from "../components/Feed";
import { SearchStorage } from "../contexts/SearchContext";

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
const YOUTUBE_API_KEY = "AIzaSyC9gyt-HSGV5rFXnE7iHlMIyIlQHR-IPQ4";
const PLAYLIST_ID = "PLeOcw7g_7LWWv6LYoBgsRV8u8lg1Uzd8O";
// "PLeOcw7g_7LWWv6LYoBgsRV8u8lg1Uzd8O"


export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

const Home = ({data}) => {
  return (
    <>
      <Head>
        <title>Karaoke</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <SearchStorage>
        <Header />
        <Feed data={data}/>
      </SearchStorage>
    </>
  )
}

export default Home;