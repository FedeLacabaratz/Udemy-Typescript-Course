import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.status(201).json({
    ok: true,
    msg: 'Nuevo id: es Fede!'
  })

  res.json({
      ok: true,
      msg: 'Todo salio bien'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})