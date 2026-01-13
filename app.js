
import React, { useState } from 'react';

const App = ({ prop }) => {
	const [isHidden, setIsHidden] = useState(false)
	function btnClickHandler() {
		setIsHidden((prev) => !prev);
	}

	return (
		<div style={{ textAlign: 'center' }}>
			<h1 style={{ color: 'green' }}>GeeksforGeeks</h1>
			<h1>Hey {prop}!</h1>
			<h2>Welcome to GeeksforGeeks</h2>
			{
				isHidden &&
				<h3>A Computer Science Portal.</h3>
			}
			<button onClick={btnClickHandler}
				style={
					{
						backgroundColor: "green",
						color: '#fff',
						padding: '15px',
						cursor: 'pointer',
						border: 'none',
						borderRadius: '10px'
					}}>
				Click to toggle more page content
			</button>
			{
				isHidden &&
				<p>
					This content is toggled dynamically using
					click event with button.
				</p>
			}
		</div>
	);
};

export default App;
