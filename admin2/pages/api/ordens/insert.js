import axios from "axios"
import { userService } from '../../../services';

export default async (req, res) => {
  const url = `http://localhost:3200/ordens`;
  const user = userService.userValue;
  let payload = { 
    id_contrato: req.body.id_contrato, 
    date: req.body.date,
    start: req.body.start, 
    end: req.body.end,
    motoboys: req.body.motoboys
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