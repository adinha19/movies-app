import React, { useState, useEffect } from 'react'
import Movies from './Movies'
import Search from './Search'
import GetMore from './GetMore';
import MoviesShowsSwitch from './MoviesShowsSwitch';
import { getMovies } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

    const [search, setSearch] = useState('')
    const [type, setType] = useState('Movie')

    const movies = useSelector(state => state.movies.movies)
    const dispatch = useDispatch()

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        dispatch(getMovies(search, type))
        //trigger when search or type changes
    }, [search, type])

    return (<div style={{ backgroundColor: "black" }}>
        <Search search={search} onChange={onChange} />
        <div style={{ display: "block", width: "100%", textAlign: "center", minHeight: "89vh", height: "100%" }}>
            <MoviesShowsSwitch type={type} setType={setType} />
            <Movies type={type} setSearch={setSearch} />
            {movies?.length > 9 && <GetMore type={type} search={search} />}
        </div>
    </div>)
}

export default Home