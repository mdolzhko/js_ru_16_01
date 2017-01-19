import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null
})

const DefaultReducerState = Record({
    error: null,
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

export default (commentState = new DefaultReducerState({}), action) => {

    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, new CommentModel({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            console.log('REDUCER LOAD_ARTICLE_COMMENTS + SUCCESS =====',
                commentState.setIn(['entities', response.id], new CommentModel(response)))
            return commentState.setIn(['entities', response.id], new CommentModel(response))

    }

    return commentState
}