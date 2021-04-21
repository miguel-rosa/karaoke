import React, { useContext } from "react";
import { MdSearch, MdClose } from "react-icons/md";
import Link from 'next/link';

import styles from "./Header.module.css";
import { SearchContext } from "../../contexts/SearchContext";

const Header = () => {

  const { search, setSearch } = useContext(SearchContext);

  const handleInput = event => {
    setSearch(event.target.value);
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <span className={styles.logo}>karaokados</span>
      </Link>
      <div className={styles.input}>
        <MdSearch className={styles.search} />
        <input
          className={styles.textbox}
          placeholder="Busque por uma música..."
          onChange={handleInput}
          value={search}
          type="text"
          />
          {search && <MdClose className={styles.close} onClick={() => setSearch(null)} /> }
      </div>
      <button className={styles.button}>
        Criar conta
      </button>
    </header>
  )
}

export default Header;