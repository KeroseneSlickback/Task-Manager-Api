// CRUD, create - read - update - delete

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true },
	(error, client) => {
		if (error) {
			return console.log('Unable to connect to database');
		}

		const db = client.db(databaseName);

		// db.collection('users')
		// 	.deleteOne({
		// 		_id: new ObjectId('6108a9188b9e88066903ab14'),
		// 	})
		// 	.then(result => {
		// 		console.log(result);
		// 	})
		// 	.catch(error => {
		// 		console.log(error);
		// 	});

		db.collection('tasks')
			.deleteMany({ completed: true })
			.then(result => {
				console.log(result);
			})
			.catch(error => {
				console.log(error);
			});
	}
);
