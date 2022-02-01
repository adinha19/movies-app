import React, { useState, useEffect } from 'react'
import Movies from './Movies'
import Search from './Search'
import axios from 'axios'
import { baseUri } from "../baseUri/baseUri";
import GetMore from './GetMore';
import MoviesShowsSwitch from './MoviesShowsSwitch';

const Home = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [type, setType] = useState('Movie')

    const searchMovies = async () => {
        let params = [0, search, type]
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
    }, [search, type])

    return (<div style={{ backgroundColor: "black" }}>
        <Search search={search} onChange={onChange} />
        <div style={{ textAlign: "center", minHeight: "89vh", height: "100%", width: "100%" }}>
            <MoviesShowsSwitch type={type} setType={setType} />
            <Movies search={search} type={type} movies={movies} setMovies={setMovies} />
            <GetMore type={type} search={search} movies={movies} setMovies={setMovies} />
        </div>
    </div>)
}

export default Home