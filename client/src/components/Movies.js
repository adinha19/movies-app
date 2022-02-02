import React, { useState } from "react";
import Movie from "./Movie";
import RateModal from "./RateModal";
import { useSelector } from "react-redux";
import { Row } from "reactstrap";

const Movies = ({ type, setSearch }) => {
    const movies = useSelector(state => state.movies.movies)

    const [showModal, setShowModal] = useState(false)

    const toggle = () => {
        setShowModal(true)
        setSearch('')
        setTimeout(() => {
            setShowModal(false)
        }, 1500);
    }
        //reset search when toggles, close modal after 1.5 sec
    return (<div className="container">
        <Row>
            {movies?.map((movie) => {
                return <Movie key={movie._id} type={type} movie={movie} toggle={toggle} />
            })}
        </Row>
        <RateModal toggle={toggle} showModal={showModal} />
    </div>)
}

export default Movies