const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatDate(timestamp) {
	const date = new Date(parseInt(timestamp, 10));
	return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}