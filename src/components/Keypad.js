// Code Keypad Component Here
function Keypad() {
	return (
		<input
			type="password"
			onChange={() => console.log('Entering password...')}
		/>
	);
}

export default Keypad;

{
	/* <input type="password" /> field to capture input. Here's how to complete the exercise:

In the components/Keypad.js file, create a Keypad React component.
In that component, render an input with the right type.
On that input, add an event handler that listens for the change event.
When that event fires, use console.log to print out the text 'Entering password...'. */
}
