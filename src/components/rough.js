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