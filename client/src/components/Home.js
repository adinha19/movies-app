import React, { useState, useEffect } from 'react'
import Movies from './Movies'
import Search from './Search'
import GetMore from './GetMore';
import MoviesShowsSwitch from './MoviesShowsSwitch';
import { getMovies } from '../actions/actions';
import { useDispatch } from 'react-redux'

const Home = () => {
    const [search, setSearch] = useState('')
    const [type, setType] = useState('Movie')

    const dispatch = useDispatch()

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        if (search.length >= 2) {
            dispatch(getMovies(search, type))
        } else if (search.length === 0) {
            dispatch(getMovies(search, type))
        }
    }, [search, type])

    return (<div style={{ backgroundColor: "black" }}>
        <Search search={search} onChange={onChange} />
        <div style={{ textAlign: "center", minHeight: "89vh", height: "100%", width: "100%" }}>
            <MoviesShowsSwitch type={type} setType={setType} />
            <Movies search={search} type={type} />
            <GetMore type={type} search={search} />
        </div>
    </div>)
}

export default Home