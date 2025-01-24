import express from 'express'

const app = express();
app.use(express.json())


// let teaData = [];
// let idFirst = 1

// app.post("/api/tea", (req, res) => {
//   const { name, price } = req.body
//   console.log('name:', name, 'price', price)
//   const newNum = { id: idFirst++, name, price };

//   teaData.push(newNum)
//   console.log(newNum)
//   res.status(201).send(newNum);
// })

// app.get("/api/tea", (req, res) => {
//   return res.status(201).json(teaData);
//   console.log(teaData)
// })

// app.patch("/api/tea", (req, res) => {
//   const { id, name, author, date, price } = req.body;
//   console.log(id);

//   let updatedItems = books.findIndex((obj) => (
//     obj.id === id
//   ))
//   console.log(updatedItems);
//   books[updatedItems] = {
//     id, name, price, author, date
//   }
//   console.log(books);
//   res.sendStatus(200)
// })

// app.put("/api/tea", (req, res) => {
//   const { name, id, author } = req.body;

//   const bookIdx = books.findIndex((book) => (
//     book.id === id))

//   console.log(bookIdx);
//   books[bookIdx] = {
//     name, author
//   }
//   console.log("books", books)
//   res.sendStatus(204)
// })

// app.get("/api/tea/:id", (req, res) => {
//   let id = parseInt(req.params.id);
//   let findId = teaData.find(el => el.id === id);
//   if (!findId) {
//     return res.status(404).send("Data Not found")
//   }
//   res.send(200).send(findId)
// })


// app.delete("/api/tea/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);

//   const dleBook = books.filter((book) => (
//     book.id != id
//   ))
//   console.log(dleBook);
//   res.sendStatus(200)


// })

const allMusic = [
  {
    "id": 1,
    "name": "The Great Adventure",
    "genre": "Adventure",
    "price": 12.99,
    "rating": 4.5,
    "author": "John Doe",
    "published": "2015-06-15",
    "available": true
  },
  {
    "id": 2,
    "name": "Mystery of the Unknown",
    "genre": "Mystery",
    "price": 8.99,
    "rating": 4.3,
    "author": "Jane Smith",
    "published": "2018-08-21",
    "available": false
  },
  {
    "id": 3,
    "name": "Science for Everyone",
    "genre": "Science",
    "price": 15.99,
    "rating": 4.8,
    "author": "Albert Newtown",
    "published": "2020-11-01",
    "available": true
  },
  {
    "id": 4,
    "name": "Romantic Nights",
    "genre": "Romance",
    "price": 10.99,
    "rating": 4.1,
    "author": "Emily Rose",
    "published": "2019-02-14",
    "available": true
  },
  {
    "id": 5,
    "name": "The Coding Chronicles",
    "genre": "Technology",
    "price": 18.99,
    "rating": 4.9,
    "author": "Tech Guru",
    "published": "2021-05-05",
    "available": true
  }
]

let id = allMusic.length + 1;

// to get or display information
app.get("/api/music", ((req, res) => {
  res.status(200).json(allMusic)
}))

// to add an array to allmusic
app.post("/api/music", ((req, res) => {
  const { name, gener, price, author, published, available, rating } = req.body;
  if(name === "" || gener === "" || price === "" || author === "" || published === "" || available === "" || rating === ""){
    res.status(302).json({
      message: "Please don't enter blank value"
    })
  }
  const newData = {
    id: id++,
    name, gener, price, author, published, available, rating
  }
   allMusic.push(newData);
  res.status(200).json({
    message: 'New data has been inserted'
  })
}))

//for updating the data of allmusic array..............

app.put("/api/music",(req, res)=>{
  const { name, genre, price, author, published, available, rating } = req.body;
  let newId = parseInt(req.body.id)

      let newName = allMusic.findIndex((el)=> {
           return el.id === newId;
      });
      if(newName === -1){
        res.status(404).json({
          message: "resources not found"
        })
      }
      allMusic[newName] = {
        ...allMusic[newName],
        name, genre, price, author, published, available, rating
      }
      res.status(200).json({ message: "Music updated successfully", updatedMusic: allMusic[newName] });
})

// To delete object in array;
app.delete("/api/music/:id", (req, res)=>{
  const id = parseInt(req.params.id);
   let deletedMusic = allMusic.filter((music)=> music.id !== id);
  res.status(200).json({ message: `Data ${id} is deleted`, deletedObj: deletedMusic })
   if(allMusic.length != deletedMusic.length){
    allMusic.length = 0
    allMusic.push(...deletedMusic)
   }
})

app.listen(3000, () => {
  console.log("server started");
})