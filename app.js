const express = require('express');
const app = express();
const PORT = 3000;

// static files
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
	res.send('hello world');
});

app.post('/', (req, res) => {
	res.send('Got a POST request.');
});

app.put('/', (req, res) => {
	res.send('Got a PUT request.');
});

app.delete('/', (req, res) => {
	res.send('Got a DELETE request.');
});

app.listen(PORT, () => {
	console.log(`Server listening to port http://localhost:${PORT}...`);
});