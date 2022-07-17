import axios from "axios"
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default async (req, res) => {
  const url = `${publicRuntimeConfig.backUrl}/contratos/${req.body.id}`

  console.log(req)
  await axios
    .get(url)
    .then(({ data }) => {
      res.status(200).json({ data })
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}