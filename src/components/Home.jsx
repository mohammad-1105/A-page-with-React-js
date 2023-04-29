import React from 'react';
import '../styles/home.css';
import vg from '../assets/vg.webp';

import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillGoogleSquare } from 'react-icons/ai';

const Home = () => {
    return (
        <>

            <div className="home" id='home'>
                <h1>TECHNO.LOGY</h1>
                <p>We are the solution of your problem</p>
            </div>
            <div className="home0">
                
            </div>

            <div className="home2">
                <img src={vg} alt="Grapics" />

                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, veniam reprehenderit excepturi, perferendis eos quisquam at, ipsam eius labore harum sequi aperiam! A, quas facere maiores nostrum sed iusto recusandae nemo, repellat sapiente repellendus quod! Neque voluptas accusantium deleniti id.
                    </p>
                </div>
            </div>

            {/* About us  */}

            <div className="home3" id='about'>
                <div>
                    <h1>WHO WE ARE !</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut tempore iure, commodi magni necessitatibus, beatae illum quasi laudantium quaerat ducimus, sed placeat soluta in maiores nisi voluptate aspernatur dicta. Voluptate iure praesentium numquam ipsam cumque ut cupiditate laudantium illum voluptas architecto dolor quis hic tempore necessitatibus quasi, consequuntur alias reiciendis voluptatum suscipit modi recusandae repellat asperiores? Praesentium voluptatem, alias aperiam possimus blanditiis omnis perferendis fugit natus. Ducimus qui tenetur illum quas nam itaque consequatur eligendi ipsum molestias dicta, iusto magni soluta eius tempore debitis nulla incidunt ea explicabo id veniam aut beatae! Provident libero totam, magni facere error nihil delectus.</p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillFacebook />
                            <p>Facebook</p>
                        </div>
                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillTwitterSquare />
                            <p>Twitter</p>
                        </div>
                        <div style={{ animationDelay: "0.75s" }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                        <div style={{ animationDelay: "1s" }}>
                            <AiFillGoogleSquare />
                            <p>Google</p>
                        </div>

                    </article>
                </div>
            </div>
        </>
    )
}

export default Home