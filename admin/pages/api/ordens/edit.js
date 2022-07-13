import axios from "axios"

export default async (req, res) => {
  const url = `http://localhost:3200/ordens/${req.body.id}`;
  let payload = { 
    name: req.body.name, 
    email: req.body.email, 
    cnpj: req.body.cnpj, 
    cpf: req.body.cpf, 
    endereco: req.body.endereco, 
    numero: req.body.numero, 
    complemento: req.body.complemento, 
    cidade: req.body.cidade, 
    estado: req.body.estado, 
    cep: req.body.cep, 
    telefone: req.body.telefone, 
    bairro: req.body.bairro 
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