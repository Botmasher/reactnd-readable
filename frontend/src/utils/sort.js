export function sortPosts(optionValue) {
	const [property, ascDesc] = optionValue.split('-');
	return (state) => (
		{sort: {property, ascending: ascDesc==='asc' ? true : false}}
	);
}