import axios from "axios"

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default async (req, res) => {
  const url = `${publicRuntimeConfig.backUrl}/contratos/${req.body.id}`;
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