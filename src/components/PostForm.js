import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newPost } from "../redux/actions/postActions"

export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title:"",
            body:""
        }
    }
    
    render() {
        const handleChange = (event) => {
            this.setState({
                [event.target.name]:event.target.value
            })
        }

        const { title, body } = this.state

        const handleSubmit = (event) => {
            event.preventDefault();

            const newPost = {
                title, 
                body,
                userId:3
            }

            // call the new post action

            this.props.newPost(newPost)
        }

        return (
            <form onSubmit={handleSubmit}>
                <h4>New Post</h4>
                <div>
                    <label>Title</label><br/>
                    <input name="title" type="text" onChange={handleChange} value={title}/>
                </div><br/>

                <div>
                    <label>Body</label><br/>
                    <textarea name="body" onChange={handleChange} value={body}></textarea>
                </div><br/>

                <button type="submit">New Post</button>
            </form>
        )
    }
}

PostForm.propTypes = {
    newPost:PropTypes.func.isRequired
}

export default connect(null, { newPost })(PostForm)