import React, { useState } from "react";
import Link from 'next/link';




export default function Layout(props) {

    async function myFunction() {

        if (typeof window !== "undefined") {
            var navbar = document.getElementById("navbar");
            var content = document.getElementById("subNav");
            var contentBox = document.getElementById("contentH");
    
        }

        var contentBoxV = (contentBox.getBoundingClientRect().top + document.documentElement.scrollTop) + ((content.getBoundingClientRect().top + document.documentElement.scrollTop) * 0.25);

        var windowOffset = (content.getBoundingClientRect().top + document.documentElement.scrollTop);

        if ((contentBoxV >= (windowOffset + 15))) {
            navbar.classList.add("sticky");
        }
        else {
            navbar.classList.remove("sticky");
        }
    }


    return <>
        <div id="contentH" className="container-xl contentDocument" onScroll={() => myFunction()} >
            <div className="iceBorder"></div>
            <div className="frostBack"></div>
            <div id="paddingTop"></div>
            <div id="subNav"></div>

            <div id="navbar" className="container navMenu fixedIntro">
                <div className="row linkContainer">
                    <Link href="/" ><div className="col navLink">Jeffrey Arriaga</div></Link>

                    <a id="resumePDF" className="col navLink" href="/ArriagaJeffrey_Resume_noPhone_CS_Version.pdf" target="_blank">Resume<img id="pdfMiniCon" src="/29587.png" alt="pdfFileImg" /></a>

                    <div className="col navLink">Portfolio</div>
                    <Link href="/contact" ><div className="col navLink">Contact</div></Link>
                </div>
            </div>


            {props.children}

            <footer>
                <p>Jeffrey Arriaga</p>
            </footer>

        </div>


    </>
}

