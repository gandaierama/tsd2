import axios from "axios"

export default async (req, res) => {
  const url = `http://api.tsdmotoboys.com.br/contratos/${req.body.id}`;
  let payload = { 
    end_date: req.body.end_date, 
    id_pacote: req.body.id_pacote, 
    type: req.body.type
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