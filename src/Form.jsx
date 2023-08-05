import React from 'react';
import { useState } from 'react';
import './Form.css';

function Form() {
	const [numbers, setNumbers] = useState([]);

	function handleSubmit(e) {
		e.preventDefault();
		setNumbers([...numbers, e.target.value]);
		console.log(e.target);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input id='values' name='values' type='text' />
				<select id='operation' name='operation'>
					<option value=''></option>
					<option value='sum'>sum</option>
					<option value='average'>average</option>
					<option value='mode'>mode</option>
				</select>

				<button type='submit'>Calculate</button>
			</form>
			<section id='result'>
				<p></p>
			</section>
		</>
	);
}

export default Form;
