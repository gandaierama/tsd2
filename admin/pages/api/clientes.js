import axios from "axios"

export default async (req, res) => {
  const url = `http://localhost:3200/cliente/6a0fd432-26b7-4346-aeec-2810df567883`

  await axios
    .get(url)
    .then(({ data }) => {
      res.status(200).json({ data })
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}