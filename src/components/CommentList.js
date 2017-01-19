import React, { Component, PropTypes } from 'react'
import {addComment, loadCommentsByArticleId} from '../AC'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import {connect} from 'react-redux'
import { mapToArray } from '../helpers'


class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps(nextProps) {

        if (!this.props.isOpen && nextProps.isOpen) {
            //console.log('nextProps ---', nextProps.article.id )
            loadCommentsByArticleId(nextProps.article.id)
        }
    }

    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
            </div>
        )
    }

    getLink() {
        return <a href="#" onClick = {this.props.toggleOpen}>
            {this.props.isOpen ? 'hide' : 'show'} comments
        </a>
    }

    getBody() {
        const { comments, article, isOpen, addComment } = this.props
        if (!isOpen) return null
        const form = <NewCommentForm addComment={(comment) => addComment(article.id, comment)} />
        if (!comments.length) return <div><p>No comments yet</p>{form}</div>

        // const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <div>
                <ul>
                {
                    /*
                        commentItems
                    */
                }
                </ul>
                {form}
            </div>
        )
    }
}

export default connect((storeState, props) => {

    const comments = mapToArray(storeState.comments.entities)
    console.log('CommentsList ----', comments)
    return {
        comments: props.article.comments.map(id => storeState.comments.get(id))
    }
}, { addComment, loadCommentsByArticleId })(toggleOpen(CommentList))