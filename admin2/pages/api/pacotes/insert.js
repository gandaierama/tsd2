import axios from "axios"
import { userService } from '../../../services';

export default async (req, res) => {
  const url = `http://localhost:3200/valores`;
  const user = userService.userValue;
  let payload = { 
    name: req.body.nome, 
    diaria1: req.body.diaria1, 
    diaria2: req.body.diaria2, 
    diaria3: req.body.diaria3, 
    entrega1: req.body.entrega1, 
    entrega2: req.body.entrega2, 
    entrega3: req.body.entrega3, 
    segunda: JSON.stringify({
        status: req.body.dia1, 
        motoboys: req.body.moto1, 
        periodo: req.body.periodo1, 
        start: req.body.start1, 
        end: req.body.end1, 
    }),
    terca: JSON.stringify({
        status: req.body.dia2, 
        motoboys: req.body.moto2, 
        periodo: req.body.periodo2, 
        start: req.body.start2, 
        end: req.body.end2, 
    }), 
    quarta: JSON.stringify({
        status: req.body.dia3, 
        motoboys: req.body.moto3, 
        periodo: req.body.periodo3, 
        start: req.body.start3, 
        end: req.body.end3, 
    }), 
    quinta: JSON.stringify({
        status: req.body.dia4, 
        motoboys: req.body.moto4, 
        periodo: req.body.periodo4, 
        start: req.body.start4, 
        end: req.body.end4, 
    }), 
    sexta: JSON.stringify({
        status: req.body.dia5, 
        motoboys: req.body.moto5, 
        periodo: req.body.periodo5, 
        start: req.body.start5, 
        end: req.body.end5, 
    }),
    sabado: JSON.stringify({
        status: req.body.dia6, 
        motoboys: req.body.moto6, 
        periodo: req.body.periodo6, 
        start: req.body.start6, 
        end: req.body.end6, 
    }),
    domingo: JSON.stringify({
        status: req.body.dia7, 
        motoboys: req.body.moto7, 
        periodo: req.body.periodo7, 
        start: req.body.start7, 
        end: req.body.end7, 
    }),
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
      res.status(400).json({ err })
    })
}