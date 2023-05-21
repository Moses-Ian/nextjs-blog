export default function handler(req, res) {
	console.log('hello');	// printed on the server
  res.status(200).json({ text: 'Hello' });
}