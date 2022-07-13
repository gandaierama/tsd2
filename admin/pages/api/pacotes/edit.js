import axios from "axios"

export default async (req, res) => {
  const url = `http://localhost:3200/valores/${req.body.id}`;
  let payload = { 
    name: req.body.nome, 
    diaria1: req.body.diaria1, 
    diaria2: req.body.diaria2, 
    diaria3: req.body.diaria3, 
    entrega1: req.body.entrega1, 
    entrega2: req.body.entrega2, 
    entrega3: req.body.entrega3, 
    segunda: req.body.segunda, 
    terca: req.body.terca, 
    quarta: req.body.quarta, 
    quinta: req.body.quinta, 
    sexta: req.body.sexta,
    sabado: req.body.sabado,
    domingo: req.body.domingo,
  };
  console.log(payload);
  await axios
    .patch(url, payload)
    .then(({ data }) => {
      res.status(200).json({ data })
    })
    .catch(({ err }) => {
      console.log(err);
      res.status(400).json({ err })
    })
}