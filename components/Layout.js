import React, { useState } from "react";




export default function Layout(props) {


    async function myFunction() {

        var contentBoxV = (contentBox.getBoundingClientRect().top + document.documentElement.scrollTop)+((content.getBoundingClientRect().top + document.documentElement.scrollTop)*0.25) + 20;

        var windowOffset = (content.getBoundingClientRect().top + document.documentElement.scrollTop);

        if ((contentBoxV >= windowOffset)) {
            navbar.classList.add("sticky");
            
        }
        else {
            navbar.classList.remove("sticky");
        }
    }






    if (typeof window !== "undefined") {
        var navbar = document.getElementById("navbar");
        var content = document.getElementById("navCalc");
        var contentBox = document.getElementById("contentH");


        
        var bottomName = document.getElementById("bottomName");
        
    }

    return <>



        <div id="contentH" className="container-xl contentDocument" onScroll={() => myFunction()} >

            <div id="navbar" className="container navMenu fixedIntro">
                <div className="row">
                    <div className="col">Jeffrey Arriaga</div>
                    <div className="col">Resume</div>
                    <div className="col">Portfolio</div>
                    <div className="col">Contact</div>
                </div>
            </div>



            

            {props.children}

            <footer>
                <p>Footer</p>
            </footer>

        </div>

    </>







}

