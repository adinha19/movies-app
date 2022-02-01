import React from "react";
import { Button } from "reactstrap";
import axios from 'axios'
import { baseUri } from "../baseUri/baseUri";

const GetMore = ({ type, search, movies, setMovies }) => {

    const getMore = async () => {

        let params = [movies.length, search, type]

        await axios.get(`${baseUri}/${JSON.stringify(params)}`)
            .then(res => {
                setMovies([...movies, ...res.data])
            })
            .catch(err => console.log(err))
    }

    return (<div style={{ padding: "10px", width: "100%", alignSelf: "center", justifySelf: "center" }}>
        <Button color="danger" onClick={getMore}>Load More Movies</Button>
    </div>)
}
export default GetMore