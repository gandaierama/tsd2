import axios from "axios"
import { userService } from '../../../services';

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default async (req, res) => {
  const url = `${publicRuntimeConfig.backUrl}/pagamentos`;
  const user = userService.userValue;
  let payload = { 
    name: req.body.nome, 
    email: req.body.email, 
    cnpj: req.body.cnpj, 
    cpf: req.body.cpf, 
    endereco: req.body.endereco, 
    numero: req.body.numero, 
    complemento: req.body.complemento, 
    cidade: req.body.cidade, 
    estado: req.body.estado, 
    cep: req.body.cep, 
    telefone: req.body.telefone, 
    bairro: req.body.bairro 
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