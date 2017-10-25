import React from 'react';

function CreateEdit(props) {
	return (
		<div>
			Create/Edit View
			<ul>
				<li>should have a form to create new post or edit existing posts</li>
				<li>when editing, existing data should be populated in the form</li>

				Can work for both post and comment?

				Type: 	presentation, form, receive data from PostDetail component

				Props: 	- existing data for post to edit
								- handler for submitting data

				State: 	- controlled component

				Seletors: 	- none

				Links: 	- home or just category
								- back up to PostDetail (or just show this on submit?)

			</ul>
		</div>
	);
}

export default CreateEdit;
