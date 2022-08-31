const express = require('express');
const app = express();

const dbConfig = require('./db');
const roomsRoute = require('./routes/roomRoute');
const usersRoute = require('./routes/userRoute');
const bookingRoute = require('./routes/bookingRoute');

app.use(express.json());
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/bookings', bookingRoute);

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV == 'production') {
	console.log('here comes');
	app.use(express.static('client/build'));
	const path = require('path');

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Node app listening on ${port} port!`));
