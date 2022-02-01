import React from "react";
import { Button } from "reactstrap";
import axios from 'axios'
import { baseUri } from "../baseUri/baseUri";

const GetMore = ({ search, movies, setMovies }) => {

    const getMore = async () => {
        let params = [movies.length, search]
        await axios.get(`${baseUri}/${JSON.stringify(params)}`)
            .then(res => {
                console.log(res.data)
                setMovies([...movies, ...res.data])
            })
            .catch(err => console.log(err))
    }

    return (<div style={{marginBottom: "5px", width: "100%", alignSelf: "center", justifySelf: "center" }}>
        <Button color="danger" onClick={getMore}>Load More Movies</Button>
    </div>)
}
export default GetMore