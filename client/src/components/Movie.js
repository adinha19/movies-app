import React from "react";
import { Card, CardBody, CardFooter, CardHeader, CardImg, CardSubtitle, CardText, CardTitle, Col } from "reactstrap";
import { baseUri } from "../baseUri/baseUri";
import axios from 'axios'
import { rateMovie } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
const Movie = ({ movie, toggle, type, search }) => {

    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies.movies)
    const onRate = async (rating) => {
        let data = {
            rating: rating,
            movies: movies.length,
            type: type,
            search: search
        }
        await axios.put(`${baseUri}/rate/${movie._id}`, data)
            .then((res) => {
                dispatch(rateMovie(res.data))
                toggle()
            })
            .catch(err => console.log(err))
    }

    return <div className="col-md-3 col-sm-6" style={{ maxWidth: "49%" }}>
        <Card style={{ height: "98%", backgroundColor: "#909090", marginTop: "15px", overflow: "hidden", border: "4px solid #EAEAEA", borderRadius: "10px" }}>
            <CardHeader>
                <CardTitle tag="h5">{movie.title}</CardTitle>
                <CardSubtitle tag="h6">{movie.year}</CardSubtitle>
            </CardHeader>
            <CardBody>
                <CardImg height="170px" src={movie.img} alt="movie image" />
                <CardText style={{ fontStyle: "oblique", fontSize: "14px", minHeight: "120px" }}>
                    {movie.description}
                </CardText>
                <CardSubtitle tag="h6" >{movie.actors.map((actor, i) => {
                    return <span key={i} >{(i ? ', ' : "") + actor}</span>
                })}</CardSubtitle>
            </CardBody>
            <CardFooter>
                <i onClick={() => onRate(1)} className={movie.rating >= 1 ? "bi bi-star-fill" : "bi bi-star"}></i>
                <i onClick={() => onRate(2)} className={movie.rating >= 2 ? "bi bi-star-fill" : "bi bi-star"}></i>
                <i onClick={() => onRate(3)} className={movie.rating >= 3 ? "bi bi-star-fill" : "bi bi-star"}></i>
                <i onClick={() => onRate(4)} className={movie.rating >= 4 ? "bi bi-star-fill" : "bi bi-star"}></i>
                <i onClick={() => onRate(5)} className={movie.rating === 5 ? "bi bi-star-fill" : "bi bi-star"}></i>
            </CardFooter>
        </Card>
    </div>
}

export default Movie