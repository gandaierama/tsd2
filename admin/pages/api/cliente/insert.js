import axios from "axios"
import { userService } from '../../../services';

export default async (req, res) => {
  const url = `http://api.tsdmotoboys.com.br/cliente`;
  console.log(req.body);
  const user = userService.userValue;
  let payload = req.body;
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