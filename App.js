import express from 'express'

const app = express();
app.use(express.json())

let teaData = [];
let idFirst = 1

app.post("/api/tea", (req, res) => {
  const { name, price } = req.body
  const newNum = { id: idFirst++, name, price };

  teaData.push(newNum)
  res.status(201).send(newNum);
  
})

app.get("/api/tea", (req, res) => {
  return res.status(201).json(teaData);
  console.log(teaData)
})

app.listen(3000, () => {
  console.log("server started");
})