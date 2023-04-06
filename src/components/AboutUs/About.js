import React from "react";
import './About.css';
import Team from "./Team";

function About() {
    return (
        <>
            <div className="every">
                <div className="wrapper">
                    <div className="test">
                        <article>
                            <h1 classname="abtitle">About Us</h1>
                            <blockquote>
                                Welcome to our web application! A Blogify web application where people
                                can create and publish content on various topics, sharing their ideas, opinions, or experiences
                                with a wider audience . Our team is committed to providing an exceptional
                                user experience and we hope that you'll find our website useful and an easy-to-use.
                                Thank you for visiting.
                            </blockquote>
                        </article>
                    </div>
                </div>
            </div>

            <Team />
        </>
    )
}
export default About;