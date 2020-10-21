import React, { useState } from "react";
import Link from 'next/link';




export default function Layout(props) {


    async function myFunction() {

        var contentBoxV = (contentBox.getBoundingClientRect().top + document.documentElement.scrollTop)+((content.getBoundingClientRect().top + document.documentElement.scrollTop)*0.25);

        var windowOffset = (content.getBoundingClientRect().top + document.documentElement.scrollTop);

        console.log(contentBoxV);
        console.log(windowOffset);

        if ((contentBoxV >= (windowOffset + 15))) {
            navbar.classList.add("sticky");
            
        }
        else {
            navbar.classList.remove("sticky");
        }
    }


    if (typeof window !== "undefined") {
        var navbar = document.getElementById("navbar");
        var content = document.getElementById("subNav");
        var contentBox = document.getElementById("contentH");
        
    }

    return <>


        
        <div id="contentH" className="container-xl contentDocument" onScroll={() => myFunction()} >
        <div class="iceBorder"></div>
        <div class="frostBack"></div>
            <div id="paddingTop"></div>
            <div id="subNav"></div>

            <div id="navbar" className="container navMenu fixedIntro">
                <div className="row linkContainer">
                <Link href="/"><div className="col navLink">Jeffrey Arriaga</div></Link>
                    <div className="col navLink">Resume</div>
                    <div className="col navLink">Portfolio</div>
                    <div className="col navLink">Contact</div>
                </div>
            </div>


            {props.children}

            <footer>

                <p>Jeffrey Arriaga</p>
            </footer>

        </div>
        

    </>







}

