import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";

class Posts extends Component{
    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        // const { posts } = this.props
        // console.log(posts)
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

const mapStateToProps = state => ({
    posts:state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
