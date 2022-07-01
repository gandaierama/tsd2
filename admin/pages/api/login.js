import axios from "axios"

export default async (req, res) => {
  const url = `http://localhost:3200/cliente/login`;
  let payload = { email: req.body.email, senha: req.body.senha };
  await axios
    .post(url, payload)
    .then(({ data }) => {
      res.status(200).json({ data })
    })
    .catch(({ err }) => {
      console.log(err);
      res.status(400).json({ err })
    })
}