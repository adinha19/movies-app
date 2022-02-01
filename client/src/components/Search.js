import React from "react";
import { Input } from 'reactstrap'
import logo from '../assets/logo.jpg'

const Search = ({ onChange, search }) => {

    return (<div style={{ display: "flex", alignItems: "center", backgroundColor: "black" }}>
        <div style={{ width: "50%" }}>
            <img src={logo} alt="logo" style={{ height: "100px", width: "250px" }} />
        </div>
        <div style={{ width: "40%" }}>
            <Input placeholder="Search for movies" value={search} onChange={(e) => onChange(e)}></Input>
        </div>
    </div>)
}

export default Search