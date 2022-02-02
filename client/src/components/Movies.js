import React, { useState } from "react";
import Movie from "./Movie";
import RateModal from "./RateModal";
import { useSelector } from "react-redux";
import { Row } from "reactstrap";

const Movies = ({ type, search }) => {
    const movies = useSelector(state => state.movies.movies)

    const [showModal, setShowModal] = useState(false)

    const toggle = () => {
        setShowModal(true)
        setTimeout(() => {
            setShowModal(false)
        }, 1500);
    }

    return (<div className="container">
        <Row>
            {movies?.map((movie) => {
                return <Movie key={movie._id} search={search} type={type} movie={movie} toggle={toggle} />
            })}
        </Row>
        <RateModal toggle={toggle} showModal={showModal} />
    </div>)
}

export default Movies