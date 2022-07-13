import axios from "axios"

export default async (req, res) => {
  const url = `http://api.tsdmotoboys.com.br/cliente/${req.body.id}`;
  await axios
    .delete(url)
    .then(({ data }) => {
      res.status(200).json({ data })
    })
    .catch(({ err }) => {
      console.log(err);
      res.status(400).json({ err })
    })
}