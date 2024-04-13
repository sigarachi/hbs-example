const express = require('express');
require('dotenv').config();
const sequelize = require('./config/db');

const cors = require('cors');
const handlebars = require('express-handlebars');
const router = require('./routes/router');
const notes = require('./controllers/notes');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', async (_, res) => {
	const notesResponse = await notes.getList(_, res);
	res.render('home', { title: 'Home page', notes: notesResponse });
});

app.get('/create', async (_, res) => {
	res.render('create');
});

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();

		app.listen(PORT, () =>
			console.log(`App has been started on port: ${PORT}`)
		);
	} catch (e) {
		console.error(e);
		process.exit(1);
	}
};

start();
