import styles from "./Search.module.css"
import {FaSearch} from "react-icons/fa"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useQuery } from "./MoviesGrid"






export const Search = () => {

  const [searchText, setSearchText] = useState("")
  const query = useQuery()
  const search = query.get("search")
 

  useEffect(()=>{
    setSearchText(search || "")
  },[search])

  const handleSubmit = (e)=>{
    e.preventDefault()   
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
        <div className={styles.searchDiv}>
            <input onChange={(e)=> setSearchText(e.target.value)} className={styles.searchInput} type="text" value={searchText}/>
            <Link to={`/?search=${searchText}`}>
              <button  className={styles.searchButton} type="submit"><FaSearch size={20}/></button>
            </Link>
        </div>
    </form>
  )
}
