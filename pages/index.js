import React, { useState } from "react";
import Layout from '../components/Layout.js';


export default function Index() {


    function invert() {
        document.getElementById("theImage").style.filter = "invert(100%)";
    }

    return <>


        <Layout>

            {/* Potential idea, make the content fade in on gradient based on the offset height of bottom most part of the section dividing on the smaller upper portion offset base value*/}
            <section id="navCalc">
                <div>
                    <img id="topImg" className="divideFormat" src="/divide.png" />
                    <div className="dark">
                        <h1></h1>
                    </div>
                    <img id="bottomImg" className="divideFormat" src="/divide2.png" />
                </div>
            </section>

            <div className="changingContent">

                <img id="jeffPic" src="/square_cropped_bak.jpg" alt="Picture of Jeff" />

                <p> I am a Full-Stack Developer that has a background in clinical laboratory sciences. I have a meticulous and precise skill set as required by hospital standards, and an attention to detail that I have carried over as I have transitioned into software application development. I am passionate and enjoy being able to create truly interesting things that increase the ease, comfort, and fun for everyone that may use them. I carry an education from The University of Texas: Medical Branch, a full-stack coding certificate from University of Texas coding bootcamp, and currently continuing my education at Austin Community College in pursuit of a second Bachelors leading into master degree through online courses. Skills in HTML, CSS, Javascript, React.js, Next.js, React Native, Bootstrap, and node.js to name a few. A strong creative sense with a hobby in creation of art projects using the Adobe Suite. I am exhilarated to blend all my knowledge and skill sets while continuing to grow in order to make a maximized high quality experience that would make me a valuable member to any organization.</p> <br />


<h2>More about me</h2>
                <p>
                    In addition my pursuits, I am a gamer, an adventurer, a BBQ fanatic, an avid manga, science, and food recipe reader, constant learner, and artist.  I love to help those who need help and taken a hobby of teaching little things I've learned along the way to others.  I am very mathematically and analytically focused and enjoy problem solving.
                </p>
            </div>

        </Layout>




    </>

}