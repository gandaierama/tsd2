import axios from "axios"

export default async (req, res) => {
  const url = `http://localhost:3200/pagamentos`
  await axios
    .get(url)
    .then(({ data }) => {
      res.status(200).json({ data })
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}