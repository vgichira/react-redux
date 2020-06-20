import React, { useState } from 'react'

function PostForm() {
    const [initialForm, setFormValues] = useState({
        title:"",
        body:"",
    })

    const handleChange = (event=>{
        const { name, value } = event.target

        setFormValues({...initialForm, [name]:value})
    })

    const handleSubmit = (event)=>{
        event.preventDefault()
        
        const newPost = {
            title:initialForm.title,
            body:initialForm.body,
            id:101
        }

        console.log(newPost)
    }

    return (
        <div>
            <h3>Add Post</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label><br/>
                    <input type="text" name="title" onChange={handleChange} value={initialForm.title} />
                </div><br/>
                <div>
                    <label htmlFor="body">Body</label><br/>
                    <textarea name="body" onChange={handleChange} value={initialForm.body}></textarea>
                </div><br/>

                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default PostForm


// class PostForm extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              title:"",
//              body:"",
//         }
//     }
    
//     render() {
//         const { title, body } = this.state


//         const onChange = (event)=>{
//             this.setState({[event.target.name] : event.target.value})
//         }

//         // submit the form

//         const onSubmit = async (event)=>{
//             event.preventDefault();

//             const newPost = {
//                 title,
//                 body,
//                 "id":101
//             }

//             // make a post request to posts endpoint
//             // JSON placeholder API not working so i faked my own response
//             const response = newPost

//             console.log(response)
//         }


//         return (
//             <div>
//                <h3>Add Post</h3>

//                <form onSubmit={onSubmit}>
//                    <div>
//                        <label htmlFor="title">Title</label><br/>
//                        <input type="text" name="title" onChange={onChange} value={title} />
//                     </div><br/>
//                     <div>
//                        <label htmlFor="body">Body</label><br/>
//                        <textarea name="body" onChange={onChange} value={body}></textarea>
//                    </div><br/>

//                    <button type="submit">Add Post</button>
//                </form>
//             </div>
//         )
//     }
// }

// export default PostForm