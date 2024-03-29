import React from 'react'
import timeago from 'timeago.js';

import Layout from "../components/Index"
import RelatedPosts from '../components/RelatedPosts'
import CallToAction from '../components/CallToAction'
import ProjectMeta from '../components/ProjectMeta'

import './post.sass'

export default class PostTemplate extends React.Component{
    render(){
        let post = this.props.pageContext

        let style = {
          backgroundImage: `url(${post.post.frontmatter.image})`
        }

        return(
            <Layout>
                {(post.post.frontmatter.image)? 
                    <section className="full-width-image" style={style}>
                    </section>                    
                : ""}
                <div className="container">
                    <header className="post-header">
                        <h4 className="post-header__subheadline">{(post.post.frontmatter.type)? post.post.frontmatter.type.join(", ") : timeago().format(post.post.frontmatter.date)}</h4>
                        <h1 className="post-header__headline">
                            {post.title}
                        </h1>
                    </header>
                    {(post.post.frontmatter.outline || post.post.frontmatter.quickFacts)? 
                        <ProjectMeta
                            outline={post.post.frontmatter.outline}
                            quickFacts={post.post.frontmatter.quickFacts}                        
                            />                    
                    : ""}
                    <article className="content" dangerouslySetInnerHTML={{ __html: post.post.html}}></article>
                </div>
                {(post.relatedPosts)? 
                    <RelatedPosts posts={post.relatedPosts}/>    
                :""}
                <CallToAction email="hello@joshuahackett.com"/>
            </Layout>
        )
    }
}