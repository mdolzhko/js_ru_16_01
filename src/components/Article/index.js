import React, { Component, PropTypes } from 'react'
import CommentList from '../CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import { deleteArticle, loadArticleById } from '../../AC'
import { connect } from 'react-redux'
import './style.css'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        onClick: PropTypes.func
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.isOpen && nextProps.isOpen) {
            nextProps.loadArticleById(nextProps.article.id)
        }

    }

    componentDidMount() {
//        console.log('---', this.refs.container)
    }
    /*
     shouldComponentUpdate(nextProps, nextState) {
     return this.props.isOpen != nextProps.isOpen
     }
     */

    componentWillUpdate() {
    }

    render() {
        const { article, onClick } = this.props
        return (
            <div ref = "container">
                <h3 onClick = {onClick}>{article.title}</h3>
                <div>
                    <a href="#" onClick = {this.handleDelete}>delete article</a>
                </div>
                <CSSTransition
                    transitionName="article-body"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300} >
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        if (!this.props.isOpen) return null
        return (
            <section>
                {this.props.article.text}
                <CommentList article = {this.props.article} />
            </section>
        )
    }

    handleDelete = ev => {
        ev.preventDefault()
        this.props.deleteArticle(this.props.article.id)
    }
}

export default connect(null, { deleteArticle, loadArticleById })(Article)