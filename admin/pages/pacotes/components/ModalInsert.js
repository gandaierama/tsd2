import { useState, useEffect } from 'react';
import styles from './styles/ModalInsert.module.css'
import Image from 'next/image';

import { Modal, Alert, Button, Badge,  } from "react-bootstrap";
import Link from 'next/link'
import InputMask from "react-input-mask";

function ModalInsert({show, onHide, handleContinue, namePage, refreshData, nameModule}) {
    
    const formClean={
    };

 const fetchHeader={
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const [showAlert, setShowAlert] = useState(false);
    const [formValue, setFormValue] = useState(formClean);

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
          const res = await fetch(`/api/${nameModule}/insert`, requestOptions);
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
          <Modal.Title>Novo {namePage}</Modal.Title>
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
                          value={formValue.nome}
                          name="nome"
                          placeholder="Digite o nome"
                          type="text"
                        />
                        <label>Nome</label>
                      </div>
                    </div>
                    
                     <div className="col-12">
                      <hr/>
                      <b>Valores</b>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="form-floating mt-2">
                      <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.diaria1}
                          name="diaria1"
                          placeholder="Digite o valor"
                          type="number"
                          step="0.1"
                          min="0"
                        />
                        <label>Diária normal</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.diaria2}
                          name="diaria2"
                          placeholder="Digite o valor"
                          type="number"
                          step="0.1"
                          min="0"
                        />
                        <label>Diária noturna</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-4">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.diaria3}
                          name="diaria3"
                          placeholder="Digite o valor"
                          type="number"
                          step="0.1"
                          min="0"
                        />
                        <label>Entrega madrugada</label>
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

export  default ModalInsert ;