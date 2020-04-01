import React, { useState, useEffect } from 'react';
import './style.scss';

import axios from "axios";


const Posts = props => { 

    const [posts, setPosts] = useState([]);
    

    useEffect(() => { 
        axios.get('https://blog-27edb.firebaseio.com/posts.json').then(res => { 

            const arrResults = Object.keys(res.data).map(post => {
                return { id: post, allPosts: res.data[post] }
            });

            setPosts(arrResults)

            // console.log(arrResults);
            // console.log(Object.keys(res.data)); // id

        }).catch(err => { 
            console.log(err)
        });
    }, [])

    return (
        <div className="parent_post row">
            {
                posts.map(post => { 
                   return <div className="col-lg-4" key={post.id}>
                        <img src={post.allPosts.image} alt="" />
                        <h3> {post.allPosts.title} </h3>
                        <div className="text-info">
                            <ul className="list-unstyled list-text">
                                <li> By: <b>Joanna Wellick</b> </li>
                                <li> {post.allPosts.date} </li>
                                <li> 1.5K views </li>
                            </ul>
                        </div> 
                        <p> {post.allPosts.content.substr(0, 123) + "..."} </p>
                    </div>
                })
            }


        </div>
    );
}

export default Posts;