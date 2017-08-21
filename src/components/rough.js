import preload from data.json

<Route exact path="/" component={Landing} />

<Route path="/Search" component={props => <Search shows={preload.shows} {...props} />} />

<Route path="/details/:id" component={(props : {match : Match}) => {
	const selectedShow = preload.shows.find(show => props.match.
	params.id === show.imdbId);
	return <Details show={selectedShow} {...props} />
}}
/>

on landing page

const mapStateToProps = state => ({ searchTerm : state.searchTerm})
export default connect(mapStateToProps)(Landing);

{
	"plugins":[
	"babel-plugin-transform-class-properties"
],
		"env" : {
	"test": {
		"plugins" : [
			"transform-es2015-modules-commonjs"
		]
	}
}
}

------------------
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import api from '.path/to/api/service';
import saga from './path/to/sagas';

function mockStore(rootSaga) {
	const sagaMiddleware = createSagaMiddleware();
	const actionReducer = (state, action) =>
			action.type === '@@redux/INIT' ? [] : [...state, action];
	const store = applyMiddleware(sagaMiddleware)(createStore)(actionReducer);
	sagaMiddleware.run(rootSaga);
	return store;
}

describe('suite', () => {
	it('test', async () => {
		const store = mockStore(saga);
		api.someCall = jest.fn(() => 'some response');

		store.dispatch({
			type: 'SOME_ACTION',
			id: 123
		});

		await Promise.resolve();

		const actual = store.getState();
		const expected = [
			{ type: 'SOME_ACTION', id: 123 },
			{ type: 'SOME_OTHER_ACTION', payload: 'some response' }
		];

		expect(actual).toEqual(expected);
		expect(api.someCall).toHaveBeenCalledWith(123);
	});
});