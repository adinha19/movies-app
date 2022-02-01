import React, { useState } from "react";
import Movie from "./Movie";
import RateModal from "./RateModal";

const Movies = ({ movies, setMovies }) => {
    const [showModal, setShowModal] = useState(false)

    const toggle = () => {
        setShowModal(true)
        setTimeout(() => {
            setShowModal(false)
        }, 1500);
    }

    return (<div style={{ display: "flex", flexWrap: "wrap", textAlign: "center", width: "100%", backgroundColor: "black", marginLeft: "20px" }}>
        {movies?.map((movie) => {
            return <Movie key={movie._id} movies={movies} setMovies={setMovies} movie={movie} toggle={toggle} />
        })}
        <RateModal toggle={toggle} showModal={showModal} />
    </div>)
}

export default Movies