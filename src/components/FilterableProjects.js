import React from 'react'
import Link from 'gatsby-link'
import slugify from 'slugify'

import Card from './common/Card'

import './filterableProjects.sass'

export default class FilterableProjects extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filter: "All"
        }
    }

    render(){

        const changeFilter = (filter) => {
            this.setState({
                filter: filter
            })
        }

        console.log(this.state)
        return(
            <section className="filterable-projects">
                <nav 
                    className="filterable-projects__filters" 
                    aria-role="tablist"
                    >
                    <button 
                        aria-role="tab"
                        className={(this.state.filter === "All")? "filterable-projects__button--active" : "filterable-projects__button"} 
                        onClick={()=>{changeFilter("All")}}
                        >
                        All
                    </button>
                    <button 
                        aria-role="tab"
                        className={(this.state.filter === "Design")? "filterable-projects__button--active" : "filterable-projects__button"} 
                        onClick={()=>{changeFilter("Design")}}
                        >
                        Design
                    </button>
                    <button 
                        aria-role="tab"
                        className={(this.state.filter === "Development")? "filterable-projects__button--active" : "filterable-projects__button"} 
                        onClick={()=>{changeFilter("Development")}}
                        >
                        Development
                    </button>   
                    <button 
                        aria-role="tab"
                        className={(this.state.filter === "Other")? "filterable-projects__button--active" : "filterable-projects__button"} 
                        onClick={()=>{changeFilter("Other")}}
                        >
                        Other
                    </button>   
                </nav>

                <ul className="filterable-projects__list">
                    {this.props.projects
                        .filter((project)=>{
                            if(this.state.filter == "All" || project.node.frontmatter.type.includes(this.state.filter)){
                                return project
                            }
                        })
                        .map((project, i) =>
                        <Link 
                            className="projects__list-item" 
                            aria-role="tabpanel"
                            to={`/project/${slugify(project.node.frontmatter.title, {lower: true})}`}
                            key={i}
                            >
                            <Card
                                imgAlt={project.node.frontmatter.title}
                                imgSrc={project.node.frontmatter.image}
                                subtitle={project.node.frontmatter.type.join(", ")}
                                title={project.node.frontmatter.title}
                                />
                        </Link>
                    )}
                </ul>

            </section>

        )
    }
}