const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'mitchellspaur@gmail.com',
		subject: 'Thanks for joining!',
		text: `Welcome to the app, ${name}! Let me know how you get along with the app.`,
	});
};

const sendCancelEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'mitchellspaur@gmail.com',
		subject: "We're sorry to see you go",
		text: `We hope you enjoyed using our app, ${name}! We'd love to hear about what you thought about it.`,
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancelEmail,
};
