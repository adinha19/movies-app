import React from "react";
import { ButtonGroup, Button } from "reactstrap";

const MoviesShowsSwitch = ({ type, setType }) => {

    const onClick = (e) => {
        setType(e.target.name)
    }

    return (<ButtonGroup style={{marginLeft: "25px", height: "40px"}} >
        <Button style={{height: "40px"}} color={type === "Movie" ? "primary" : "secondary"} name="Movie" onClick={(e) => onClick(e)}>Movies</Button>
        <Button style={{height: "40px"}} color={type === "TV Show" ? "primary" : "secondary"} name="TV Show" onClick={(e) => onClick(e)}>TV Shows</Button>
    </ButtonGroup>)
}

export default MoviesShowsSwitch