import React from "react";
import { Card, CardBody, CardFooter, CardHeader, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { baseUri } from "../baseUri/baseUri";
import axios from 'axios'

const Movie = ({ movie, toggle, movies, setMovies }) => {

    const onRate = async (rating) => {
        let data = {
            rating: rating,
            movies: movies.length
        }
        await axios.put(`${baseUri}/rate/${movie._id}`, data)
            .then((res) => {
                setMovies(res.data)
                toggle()})
            .catch(err => console.log(err))
    }

    return <Card style={{ flex: "1 0 18%", margin: "5px", height: "370px", maxWidth: "19%", backgroundColor: "indianred" }}>
        <CardHeader>
            <CardTitle>{movie.title}</CardTitle>
            <CardSubtitle>{movie.year}</CardSubtitle>
        </CardHeader>
        <CardBody>
            <CardImg style={{ height: "170px" }} src={movie.img} alt="movie image" />
            <CardText>
                {movie.description}
            </CardText>
            <CardSubtitle>{movie.actors.map((actor, i) => {
                return <span key={i}>{(i ? ', ' : "") + actor}</span>
            })}</CardSubtitle>
        </CardBody>
        <CardFooter>
            <i onClick={() => onRate(1)} className={movie.rating >= 1 ? "bi bi-star-fill" : "bi bi-star"}></i>
            <i onClick={() => onRate(2)} className={movie.rating >= 2 ? "bi bi-star-fill" : "bi bi-star"}></i>
            <i onClick={() => onRate(3)} className={movie.rating >= 3 ? "bi bi-star-fill" : "bi bi-star"}></i>
            <i onClick={() => onRate(4)} className={movie.rating >= 4 ? "bi bi-star-fill" : "bi bi-star"}></i>
            <i onClick={() => onRate(5)} className={movie.rating >= 5 ? "bi bi-star-fill" : "bi bi-star"}></i>
        </CardFooter>
    </Card>
}

export default Movie