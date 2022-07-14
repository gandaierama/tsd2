import { useState, useEffect } from 'react';

import styles from './styles/ModalEdit.module.css';
import Image from 'next/image';
import InputMask from "react-input-mask";
import { Modal, Alert, Button, Badge } from "react-bootstrap";
import Link from 'next/link'


function ModalEdit({show, onHide, handleContinue, namePage, refreshData, nameModule, formValue, setFormValue}) {
        
    const [showAlert, setShowAlert] = useState(false);


    if(!formValue.id){
      return false
    }
    if(formValue.segunda){
      const segunda = JSON.parse(formValue.segunda);
      console.log("segunda", segunda.motoboys);
      const value1=segunda.motoboys;
      const name="moto1"
      
        
    }
    if(formValue.terca){
      const terca = JSON.parse(formValue.terca);
      console.log("terca", terca.motoboys);
      const value2=terca.motoboys;
      const name="moto2"
      
    }
    if(formValue.quarta){
      const quarta = JSON.parse(formValue.quarta);
      console.log("quarta", quarta.motoboys);
      const value3=quarta.motoboys;
      const name="moto1"
      
        
    }

    if(formValue.quinta){
      const quinta = JSON.parse(formValue.quinta);
      console.log("quinta", quinta.motoboys);
      const value4=quinta.motoboys;
      const name="moto1"
      
        
    }

    if(formValue.sexta){
      const sexta = JSON.parse(formValue.sexta);
      console.log("sexta", sexta.motoboys);
      const value5=sexta.motoboys;
      const name="moto1"

      
        
    }
    if(formValue.sabado){
      const sabado = JSON.parse(formValue.sabado);
      console.log("sabado", sabado.motoboys);
      const value6=sabado.motoboys;
      const name="moto1"
      
        
    }

    if(formValue.domingo){
      const domingo = JSON.parse(formValue.domingo);
      console.log("domingo", domingo.motoboys);
      const value7=domingo.motoboys;
      const name="moto1"
      
        
    }

    //const arrWeek=[JSON.parse(formValue.segunda), formValue.terca, formValue.quarta, formValue.quinta, formValue.sexta, formValue.sabado, formValue.domingo ];

    


    const fetchHeader={
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    console.log(formValue);
    const handleChange = (event) => {
    const { name, value } = event.target;
        setFormValue((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
    };

     const handleSubmit = async (e) => {
      let res;
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(formValue),
        headers: new Headers(fetchHeader),
      };

      try {
        let result = [];
        const res = await fetch(`/api/${nameModule}/edit`, requestOptions);
        const json = await res.json();
        setShowAlert(true);
      } catch (error) {
        console.log(error);
      }
      return false;
    };

    return (
        <Modal show={show} size="xl" onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Editar {namePage}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert show={showAlert} variant="success">
            <Alert.Heading>Ação executada com sucesso!</Alert.Heading>
            <p>Parabéns a ação foi executada com sucesso!</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={handleContinue} variant="outline-success">
                Continuar
              </Button>
            </div>
          </Alert>
          {!showAlert && (
            <>
              <div className="row">
                <div className="col-12 ">
                  <div className="row">
                    <div className="col-12 ">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.name}
                          name="name"
                          placeholder="Digite o nome"
                          type="text"
                        />
                        <label>Nome</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.diaria1}
                          name="diaria1"
                          placeholder="Digite o cpf"
                          type="text"
                        />
                        <label>Diária simples</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.diaria2}
                          name="diaria2"
                          placeholder="Digite o email"
                          type="text"
                        />
                        <label>Diária Noturna</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.diaria3}
                          name="diaria3"
                          placeholder="Digite o senha"
                          type="number"
                          min="0"
                          step="0.1"
                        />
                        <label>Diária Madrugada</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.entrega1}
                          name="entrega1"
                          placeholder="Digite o valor"
                          type="number"
                          step="0.1"
                          min="0"
                        />
                        <label>Entrega normal</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.entrega2}
                          name="entrega2"
                          placeholder="Digite o valor"
                          type="number"
                          step="0.1"
                          min="0"
                        />
                        <label>Entrega noturna</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.entrega3}
                          name="entrega3"
                          placeholder="Digite o valor"
                          type="number"
                          step="0.1"
                          min="0"
                        />
                        <label>Entrega madrugada</label>
                      </div>
                    </div>

                       <div className="col-12">
                      <hr/>
                      <b>Agenda</b>
                    </div>
                    <div className="col-12 mt-1 p-2">
                      <div className="row  p-2 border">
                        <div className="col-2">
                
                          <div className="form-floating form-control py-3 px-2 mt-2">
                            <div className="form-check">
                              <input className="form-check-input" onChange={handleChange} type="checkbox" name="dia1" value={formValue.dia1} />
                              <label className="form-check-label">Segunda</label>
                            </div>
                          </div>
                        </div>

                        <div className="col-2">
                   
                          <div className="input-group form-floating mt-2">

                            <input
                              className="form-control"
                              onChange={handleChange}
                              name="moto1"
                              value={value1}
                              placeholder="Digite o valor"
                              type="number"
                            />
                            <label>Qtd. Motoboys</label>
                          </div>
                        </div>
                        <div className="col-2">
                      
                          <div className="input-group form-floating mt-2">
                            <select
                              className="form-select"
                              onChange={handleChange}
                              name="periodo1"
                              placeholder="Escolha o período"
                     
                              >
                              <option ></option>
                              <option value="1">Normal</option>
                              <option value="2">Norturno</option>
                              <option value="3">Madrugada</option>
                            </select>
                            <label>Período</label>
                          </div>

                         

                        </div>

                         <div className="col-3">
                            <div className="form-floating mt-2">
                              <InputMask
                                className="form-control"
                                onChange={handleChange}
                                name="start1"
                                mask="99:99"
                                placeholder="Digite a hora inicial"
                                type="text"
                              />
                              <label>Hora início</label>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="form-floating mt-2">
                              <InputMask
                                className="form-control"
                                onChange={handleChange}
                                name="end1"
                                mask="99:99"
                                placeholder="Digite a hora final"
                                type="text"
                              />
                              <label>Hora fim</label>
                            </div>
                          </div>

                      </div>


                      <div className="row  p-2 border">
                        <div className="col-2">
                
                          <div className="form-floating form-control py-3 px-2 mt-2">
                            <div className="form-check">
                              <input className="form-check-input" onChange={handleChange} type="checkbox" name="dia2" value={formValue.dia2} />
                              <label className="form-check-label">Terça</label>
                            </div>
                          </div>
                        </div>

                        <div className="col-2">
                   
                          <div className="input-group form-floating mt-2">

                            <input
                              className="form-control"
                              onChange={handleChange}
                              name="moto2"
                              placeholder="Digite o valor"
                              type="number"
                            />
                            <label>Qtd. Motoboys</label>
                          </div>
                        </div>
                        <div className="col-2">
                      
                          <div className="input-group form-floating mt-2">
                            <select
                              className="form-select"
                              onChange={handleChange}
                              name="periodo2"
                              placeholder="Escolha o período"
                     
                              >
                              <option ></option>
                              <option value="1">Normal</option>
                              <option value="2">Norturno</option>
                              <option value="3">Madrugada</option>
                            </select>
                            <label>Período</label>
                          </div>

                         

                        </div>

                          <div className="col-3">
                            <div className="form-floating mt-2">
                              <InputMask
                                className="form-control"
                                onChange={handleChange}
                                name="start2"
                                mask="99:99"
                                placeholder="Digite a hora inicial"
                                type="text"
                              />
                              <label>Hora início</label>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="form-floating mt-2">
                              <InputMask
                                className="form-control"
                                onChange={handleChange}
                                name="end2"
                                mask="99:99"
                                placeholder="Digite a hora final"
                                type="text"
                              />
                              <label>Hora fim</label>
                            </div>
                          </div>
                      </div>
                

                      <div className="row  p-2 border">
                        <div className="col-2">
                
                          <div className="form-floating form-control py-3 px-2 mt-2">
                            <div className="form-check">
                              <input className="form-check-input"  onChange={handleChange} type="checkbox" name="dia3" value={formValue.dia3} />
                              <label className="form-check-label">Quarta</label>
                            </div>
                          </div>
                        </div>

                        <div className="col-2">
                   
                          <div className="input-group form-floating mt-2">

                            <input
                              className="form-control"
                              onChange={handleChange}
                              name="moto3"
                              placeholder="Digite o valor"
                              type="number"
                            />
                            <label>Qtd. Motoboys</label>
                          </div>
                        </div>
                        <div className="col-2">
                      
                          <div className="input-group form-floating mt-2">
                            <select
                              className="form-select"
                              onChange={handleChange}
                              name="periodo3"
                              placeholder="Escolha o período"
                     
                              >
                              <option ></option>
                              <option value="1">Normal</option>
                              <option value="2">Norturno</option>
                              <option value="3">Madrugada</option>
                            </select>
                            <label>Período</label>
                          </div>

                         

                        </div>

                         <div className="col-3">
                            <div className="form-floating mt-2">
                              <InputMask
                                className="form-control"
                                onChange={handleChange}
                                name="start3"
                                mask="99:99"
                                placeholder="Digite a hora inicial"
                                type="text"
                              />
                              <label>Hora início</label>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="form-floating mt-2">
                              <InputMask
                                className="form-control"
                                onChange={handleChange}
                                name="end3"
                                mask="99:99"
                                placeholder="Digite a hora final"
                                type="text"
                              />
                              <label>Hora fim</label>
                            </div>
                          </div>
                      </div>


                     {/* <div className="row  p-2 border">
                        <div className="col-2">
                
                          <div className="form-floating form-control py-3 px-2 mt-2">
                            <div className="form-check">
                              <input className="form-check-input"type="checkbox"  onChange={handleChange} type="checkbox" name="dia4" value={formValue.dia4} />
                              <label className="form-check-label">Quinta</label>
                            </div>
                          </div>
                        </div>

                        <div className="col-2">
                   
                          <div className="input-group form-floating mt-2">

                            <input
                              className="form-control"
                              onChange={handleChange}
                              name="moto4"
                              placeholder="Digite o valor"
                              type="number"
                            />
                            <label>Qtd. Motoboys</label>
                          </div>
                        </div>
                        <div className="col-2">
                      
                          <div className="input-group form-floating mt-2">
                            <select
                              className="form-select"
                              onChange={handleChange}
                              name="periodo4"
                              placeholder="Escolha o período"
                     
                              >
                              <option ></option>
                              <option value="1">Normal</option>
                              <option value="2">Norturno</option>
                              <option value="3">Madrugada</option>
                            </select>
                            <label>Período</label>
                          </div>

                         

                        </div>

                          <div className="col-3">
                            <div className="form-floating mt-2">
                              <InputMask
                                className="form-control"
                                onChange={handleChange}
                                name="start4"
                                mask="99:99"
                                placeholder="Digite a hora inicial"
                                type="text"
                              />
                              <label>Hora início</label>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="form-floating mt-2">
                              <InputMask
                                className="form-control"
                                onChange={handleChange}
                                name="end4"
                                mask="99:99"
                                placeholder="Digite a hora final"
                                type="text"
                              />
                              <label>Hora fim</label>
                            </div>
                          </div>
                      </div>*/}



                      <div className="row  p-2 border">
                        <div className="col-2">
                
                          <div className="form-floating form-control py-3 px-2 mt-2">
                            <div className="form-check">
                              <input className="form-check-input"   onChange={handleChange} type="checkbox" name="dia5" value={formValue.dia5} />
                              <label className="form-check-label">Sexta</label>
                            </div>
                          </div>
                        </div>

                        <div className="col-2">
                   
                          <div className="input-group form-floating mt-2">

                            <input
                              className="form-control"
                              onChange={handleChange}
                              name="moto5"
                              placeholder="Digite o valor"
                              type="number"
                            />
                            <label>Qtd. Motoboys</label>
                          </div>
                        </div>
                        <div className="col-2">
                      
                          <div className="input-group form-floating mt-2">
                            <select
                              className="form-select"
                              onChange={handleChange}
                              name="periodo5"
                              placeholder="Escolha o período"
                     
                              >
                              <option ></option>
                              <option value="1">Normal</option>
                              <option value="2">Norturno</option>
                              <option value="3">Madrugada</option>
                            </select>
                            <label>Período</label>
                          </div>

                         

                        </div>

                          <div className="col-3">
                            <div className="form-floating mt-2">
                              <InputMask
                                className="form-control"
                                onChange={handleChange}
                                name="start5"
                                mask="99:99"
                                placeholder="Digite a hora inicial"
                                type="text"
                              />
                              <label>Hora início</label>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="form-floating mt-2">
                              <InputMask
                                className="form-control"
                                onChange={handleChange}
                                name="end5"
                                mask="99:99"
                                placeholder="Digite a hora final"
                                type="text"
                              />
                              <label>Hora fim</label>
                            </div>
                          </div>
                      </div>



                      <div className="row  p-2 border">
                        <div className="col-2">
                
                          <div className="form-floating form-control py-3 px-2 mt-2">
                            <div className="form-check">
                              <input className="form-check-input"   onChange={handleChange} type="checkbox" name="dia6" value={formValue.dia6} />
                              <label className="form-check-label">Sábado</label>
                            </div>
                          </div>
                        </div>

                        <div className="col-2">
                   
                          <div className="input-group form-floating mt-2">

                            <input
                              className="form-control"
                              onChange={handleChange}
                              name="moto6"
                              placeholder="Digite o valor"
                              type="number"
                            />
                            <label>Qtd. Motoboys</label>
                          </div>
                        </div>
                        <div className="col-2">
                      
                          <div className="input-group form-floating mt-2">
                            <select
                              className="form-select"
                              onChange={handleChange}
                              name="periodo6"
                              placeholder="Escolha o período"
                     
                              >
                              <option ></option>
                              <option value="1">Normal</option>
                              <option value="2">Norturno</option>
                              <option value="3">Madrugada</option>
                            </select>
                            <label>Período</label>
                          </div>

                         

                        </div>

                          <div className="col-3">
                            <div className="form-floating mt-2">
                              <InputMask
                                className="form-control"
                                onChange={handleChange}
                                name="start6"
                                mask="99:99"
                                placeholder="Digite a hora inicial"
                                type="text"
                              />
                              <label>Hora início</label>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="form-floating mt-2">
                              <InputMask
                                className="form-control"
                                onChange={handleChange}
                                name="end6"
                                mask="99:99"
                                placeholder="Digite a hora final"
                                type="text"
                              />
                              <label>Hora fim</label>
                            </div>
                          </div>
                      </div>


                      <div className="row  p-2 border">
                        <div className="col-2">
                
                          <div className="form-floating form-control py-3 px-2 mt-2">
                            <div className="form-check">
                              <input className="form-check-input"   onChange={handleChange} type="checkbox" name="dia7" value={formValue.dia7} />
                              <label className="form-check-label">Domingo</label>
                            </div>
                          </div>
                        </div>

                        <div className="col-2">
                   
                          <div className="input-group form-floating mt-2">

                            <input
                              className="form-control"
                              onChange={handleChange}
                              name="moto1"
                              placeholder="Digite o valor"
                              type="number"
                            />
                            <label>Qtd. Motoboys</label>
                          </div>
                        </div>
                        <div className="col-2">
                      
                          <div className="input-group form-floating mt-2">
                            <select
                              className="form-select"
                              onChange={handleChange}
                              name="periodo1"
                              placeholder="Escolha o período"
                     
                              >
                              <option ></option>
                              <option value="1">Normal</option>
                              <option value="2">Norturno</option>
                              <option value="3">Madrugada</option>
                            </select>
                            <label>Período</label>
                          </div>

                         

                        </div>

                         <div className="col-3">
                            <div className="form-floating mt-2">
                              <InputMask
                                className="form-control"
                                onChange={handleChange}
                                name="start7"
                                mask="99:99"
                                placeholder="Digite a hora inicial"
                                type="text"
                              />
                              <label>Hora início</label>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="form-floating mt-2">
                              <InputMask
                                className="form-control"
                                onChange={handleChange}
                                name="end7"
                                mask="99:99"
                                placeholder="Digite a hora final"
                                type="text"
                              />
                              <label>Hora fim</label>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 mt-3 d-flex">
                      <button
                        type="button"
                        className="btn btn-lg btn-secondary m-2 w-50"
                        data-bs-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="btn btn-lg m-2 btn-primary w-50"
                      >
                        Salvar{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    );
}
export default ModalEdit;