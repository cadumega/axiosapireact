import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

    const [posts, setPosts] = useState([]);             //2.comeca com array vazio, mas se cair no then, recebe inf. da API
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://alemdocodigo.herokuapp.com/list_posts')        //1.request da rota da api
            .then((response) => {                                       //dando certo
                setPosts(response.data.posts);
                setLoading(false);                   // quando cair no then ele seta o loading para false
            }) //.catch(() => {                                         //dando errado
        //     console.log('Deu Errado');
        // })
    }, [])

    if (loading) {
        return (
            <div className="loading">
                <div class="loadingio-spinner-rolling-p9nmp2rwwc"><div class="ldio-z9xdclf8sp">
                    <div></div>
                </div></div>
            </div>
        )
    }


    return (
        <div className="app">
            <div className="cards">

                {posts.map((post, key) => {              //3.map para cada post nos cards.
                    return (
                        <div className="card" key={key}>
                            <div className="card-body">
                                <h1>{post.title}</h1>
                                <div className="line"></div>
                                <h2>{post.content}</h2>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default App;
