import express from 'express';

const app = express()
const port = process.env.PORT || 3000

app.get('/jocks', (req, res) => {
  const jocks = [
    { name: 'Jock', age: 30 },
    { name: 'jocker', age: 25 },
    { name: 'bhai', age: 35 },
    { name: 'jer', age: 25 },
    { name: 'bhi', age: 35 },
  ]
  res.send(jocks);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
  })
  