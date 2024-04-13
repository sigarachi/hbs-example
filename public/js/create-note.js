function onSubmit(event) {
	event.preventDefault();
	const formValues = Object.fromEntries(new FormData(event.target));
	fetch('/api/notes/create', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(formValues),
	})
		.then(() => {
			window.location.href = '/';
		})
		.catch((err) => {
			const errorLabel = document.getElementById('error_text');
			errorLabel.innerHTML = err;
		});
}
document.getElementById('create_notes').addEventListener('submit', onSubmit);
