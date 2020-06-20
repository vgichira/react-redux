import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

export function fetchPosts(){
    return async (dispatch) => {
        const posts = await axios.get("http://jsonplaceholder.typicode.com/posts")

        dispatch({
            type: FETCH_POSTS,
            items: posts.data
        })
    }
}