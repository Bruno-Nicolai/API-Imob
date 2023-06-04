const port = process.env.PORT || 3000

const express = require("express");
const cors = require("cors");

const app = express();
const products = require("./src/products/products.json")

app.use(express.json());
app.use(cors());


// app.post("/", async (req, res) => {
//     const data = req.body;
//     await Product.add(data);

//     res.status(203).send({msg: "Produto criado com sucesso"});
// });

// app.get("/products", async (req, res) => {
//     const snapshot = await Product.get();
//     const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

//     res.send(products)
// });

app.get("/products/:id", async (req, res) => {
    const id = req.params.id;
    const product = products.filter(a => a.id === id);

    res.send(product);
});


app.get("/products", (req, res) => {
    return res.json(products)
});

// app.put("/products/:id", async (req, res) => {
//     const id = req.params.id;
//     await Product.doc(id).update(req.body);

//     res.send({ msg: "Produto atualizado com sucesso!" });
// });

app.listen(port, () => {
    console.log("Application running");
});
