import React, { PropTypes } from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filter from './Filters'
import Counter from './Counter'

function AppContainer(props) {
    return (
        <div>
            <Counter/>
            <UserForm />
            <ArticleList/>
            <Filter articles = {[]}/>
        </div>
    )
}

AppContainer.propTypes = {
}

export default AppContainer