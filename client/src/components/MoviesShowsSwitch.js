import React from "react";
import { ButtonGroup, Button } from "reactstrap";

const MoviesShowsSwitch = ({ type, setType }) => {

    const onClick = (e) => {
        setType(e.target.name)
    }
    //change type of movies/TV Shows, also change button colors based on which type is active
    
    return (<ButtonGroup style={{ marginLeft: "25px", height: "40px" }} >
        <Button style={{ height: "40px" }} color={type === "Movie" ? "primary" : "secondary"} name="Movie" onClick={(e) => onClick(e)}>Movies</Button>
        <Button style={{ height: "40px" }} color={type === "TV Show" ? "primary" : "secondary"} name="TV Show" onClick={(e) => onClick(e)}>TV Shows</Button>
    </ButtonGroup>)
}

export default MoviesShowsSwitch