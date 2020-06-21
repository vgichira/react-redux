import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts, newPost } from "../redux/actions/postActions";

class Posts extends Component{
    componentDidMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        // check for a new post
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render(){
        return (
            <div>
                <h3>Posts</h3>
                {this.props.posts.map(post=>(
                <div key={post.id}>
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                </div>
                ))}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired, 
    posts: PropTypes.array.isRequired, 
    newPost: PropTypes.object 
}

const mapStateToProps = state => ({
    posts:state.posts.items, 
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
