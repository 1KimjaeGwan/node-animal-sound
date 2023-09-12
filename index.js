const express = require('express')
var cors = require('cors')
const app = express()
const port = 4000

app.use(cors())

app.get('/', function (req, res) {
	res.send('Hello World')
})

app.get('/user/:id', function (req, res) {
	// const q = req.params
	// console.log(q.id)

	const p = req.query
	console.log(p.q)
	console.log(p.name)

	res.json({ 'userid': q.id }) // res.send()
})

app.get('/sound/:name', function (req, res) {
	const { name } = req.params
	console.log(name)

	if (name == "dog") {
		res.send({ 'sound': '멍멍' })
	} else if (name == "cat") {
		res.send({ 'sound': '야옹' })
	} else if (name == "pig") {
		res.send({ 'sound': '꿀꿀' })
	} else {
		res.send({ 'sound': '알수없음' })
	}

})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

