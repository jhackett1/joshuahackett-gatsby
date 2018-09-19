import React from 'react'

import Layout from '../components/Index'
import CallToAction from '../components/CallToAction'

import './page.sass'

export default class Blog extends React.Component{
    render(){

        return(
            <Layout>
                <div className="container">
                    <header className="post-header">
                        <h1 className="post-header__headline">
                            About me
                        </h1>
                    </header>
                    <article className="content">
                        <p>I do a lot of different things, but most of all, I enjoy new approaches to old problems, sharing knowledge, and building digital products people enjoy using.</p>
                        <p>I like Javascript, React, Wordpress, static site generators, content design, prototyping, agile delivery and user research.</p>
                        <p>At the moment, I'm helping improve government services at DWP, and freelancing as a Javascript and Wordpress developer. Before that, I spent time as a journalist, marketer, photographer and even biologist!</p>
                        <p>Feel free to get in touch <a href="http://twitter.com/dinosaurenby">over Twitter.</a></p>
                        <p><a href="/cv.pdf">Download my CV →</a></p>
                        <section className="image-row">
                            <img className="image-row__image" src="/me_1.jpg" alt="Me"/>
                            <img className="image-row__image" src="/me_2.jpg" alt="Me"/>
                            <img className="image-row__image" src="/me_3.jpg" alt="Me"/>                                                        
                        </section>
                    </article>
                </div>
                <CallToAction email="hello@joshuahackett.com"/>
            </Layout>
        )
    }
}