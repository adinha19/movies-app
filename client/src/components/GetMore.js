import React from "react";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMore } from "../actions/actions";

const GetMore = ({ type, search }) => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies.movies)

    let data = [movies.length, search, type]

    return (<div style={{ padding: "10px", width: "100%" }}>
        <Button color="danger" onClick={() => dispatch(getMore(data))}>Load More</Button>
    </div>)
}
export default GetMore