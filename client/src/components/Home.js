import React, { useState, useEffect } from 'react'
import Movies from './Movies'
import Search from './Search'
import axios from 'axios'
import { baseUri } from "../baseUri/baseUri";
import GetMore from './GetMore';

const Home = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')

    const searchMovies = async () => {
        let params = [0, search]
        await axios.get(`${baseUri}/${JSON.stringify(params)}`)
            .then(res => {
                setMovies(res.data)
            })
            .catch(err => console.log(err))
    }

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        if (search.length >= 2) {
            searchMovies()
        } else if (search.length === 0) {
            searchMovies()
        }
    }, [search])

    return (<div>
        <Search search={search} onChange={onChange} />
        <div style={{ display: "flex", flexWrap: "wrap", textAlign: "center", minHeight: "89vh", height: "100%", width: "100%", backgroundColor: "black" }}>
            <Movies movies={movies} setMovies={setMovies} />
            <GetMore search={search} movies={movies} setMovies={setMovies} />
        </div>
    </div>)
}

export default Home