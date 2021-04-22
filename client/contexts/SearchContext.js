import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

export const SearchStorage = props => {

  const [search, setSearch] = useState(null);

  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <SearchContext.Provider value={{search, setSearch}}>
      { props.children }
    </SearchContext.Provider>
  )
}