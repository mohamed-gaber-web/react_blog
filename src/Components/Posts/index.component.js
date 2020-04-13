import React, { useState, useEffect } from 'react';
import './index.style.scss';

import axios from "axios";
import Post from './post/index.component';


const Posts = () => { 

    const [posts, setPosts] = useState([]);
    const [inputVal, setInputVal] = useState("");

    const hnadleSearchInput = event => { 
        setInputVal(event.target.value);
    }

    

    useEffect(() => { 
        axios.get('https://blog-27edb.firebaseio.com/posts.json').then(res => { 

            const arrResults = Object.keys(res.data).map(postId => {
                return { id: postId, allPosts: res.data[postId] }
            });
            
            const filterArticles = arrResults.filter(filterArticle => {
                 return filterArticle.allPosts.title.toLowerCase().includes(inputVal);
                // console.log(filterArticle.allPosts.title);
            });

            setPosts(filterArticles)
            // console.log(arrResults);
            // console.log(Object.keys(res.data)); // id

        }).catch(err => { 
            console.log(err)
        });
    }, [inputVal])

    return (
        <React.Fragment>
        <h1 className="text-center"> Articles </h1>
            <div className="input_search">
                <form>
                    <label htmlFor="search"> Search To Articles </label>
                    <input
                        type="text"
                        name="serach"
                        id="search"
                        className="form-control"
                        onChange={hnadleSearchInput}
                        defaultValue={inputVal} />
                </form>
            </div>
        <div className="parent_post row">
           
            {
                posts.map(article => { 
                    return <Post
                        id={article.id}
                        title={article.allPosts.title}
                        date={article.allPosts.date}
                        image={article.allPosts.image}
                        content={article.allPosts.content.substr(0, 123) + "..."}
                    />
                })
            }


            </div>
        </React.Fragment>
    );
}

export default Posts;