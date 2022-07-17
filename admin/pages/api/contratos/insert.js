import axios from "axios"
import { userService } from '../../../services';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default async (req, res) => {
  const url = `${publicRuntimeConfig.backUrl}/contratos`;
  const user = userService.userValue;
  let payload = { 
    id_cliente: req.body.id_cliente, 
    start_date: req.body.start_date, 
    end_date: req.body.end_date, 
    id_pacote: req.body.id_pacote, 
    type: req.body.tipo
  };
  let config = {
  headers: {
    Authorization: user.access_token,
  }
}

  console.log(payload);
  await axios
    .post(url, payload,{
  headers: {
    Authorization: 'Bearer ' + user.access_token
  } })
    .then(({ data }) => {
      res.status(200).json({ data })
    })
    .catch(({ err }) => {
      console.log(err);
      res.status(400).json({ err })
    })
}