import React, { useState, useEffect, useContext } from "react";
import styles from "./Feed.module.css";

import {SearchContext} from "../../contexts/SearchContext"

const Feed = ({ data }) => {

  const { search } = useContext(SearchContext)
  const [videos, setVideos] = useState(data.items);
 
  useEffect(() => {
    if(!search) setVideos(data.items);
    handleTextSearch(data)
  }, [search, data])

  const handleTextSearch = (data) => {
    setVideos(data.items.filter( item => item.snippet.title.toUpperCase().includes(search.toUpperCase())))
  }

  return (
    <section className={styles.feed}>
    <h2 className={styles.headline}>Últimas músicas</h2>
    <ul className={styles.cards}>
      {videos ? videos.map(({ id, snippet = {} }) => {
        const { title, thumbnails = {}, resourceId = {} } = snippet;
        const { medium } = thumbnails;
        return medium && (
          <li key={id} className={styles.card}>
            <a className={styles.infos} href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
            <p>
              <img className={styles.thumbnail} src={medium.url} alt={title} />
            </p>
            <h3 className={styles.title}>{ title }</h3>
            </a>
          </li>
        )
      }) : (
        <div className={styles.empty}>
          Nada encontrado!
        </div>
      )}
    </ul>
    </section>
  )
}

export default Feed;