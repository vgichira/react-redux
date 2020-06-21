import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

// action to get all the posts from jsonplaceholder API
export function fetchPosts(){
    return async (dispatch) => {
        const posts = await axios.get("http://jsonplaceholder.typicode.com/posts", {
            headers:{
                "Content-Type":"application/json", 
                "Access-Control-Allow-Origin":"*" 
            }
        })

        dispatch({
            type: FETCH_POSTS,
            items: posts.data
        })
    }
}

// action to post a new post to the jsonplaceholder API 
export function newPost(postData){
    return async (dispatch) => {
        const response = await axios.post("http://jsonplaceholder.typicode.com/posts", postData, {
            headers:{
                "Content-Type":"application/json", 
                "Access-Control-Allow-Origin":"*" 
            }
        })

        dispatch({
            type: NEW_POST,
            payload: response.data
        })
    }
}