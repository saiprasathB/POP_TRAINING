import { useState,useEffect } from "react";
import axios from 'axios';

const UseEffectApi = () => {
    var [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => {
                console.log("Error OCCURRED: ", err)
            })
    }, [])
    return (
        <div>
            <h1>API USECASE</h1>
            <ol> {
                posts.map((post)=>
                 (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    )
                )
            }</ol>

        </div>

    )
}
export default UseEffectApi;