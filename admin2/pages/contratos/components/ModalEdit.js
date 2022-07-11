import { useState, useEffect } from 'react';
import styles from './styles/ModalEdit.module.css';
import Image from 'next/image';

import { Modal, Alert, Button, Badge } from "react-bootstrap";
import Link from 'next/link'


function ModalEdit({show, onHide, handleContinue, namePage, refreshData, nameModule, formValue, setFormValue}) {
    

    const [showAlert, setShowAlert] = useState(false);
 
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
                    <div className="col-12 col-md-4">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.start_date}
                          name="start_date"
                          placeholder="Digite a data final"
                          type="date"
                        />
                        <label>Início</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.end_date}
                          name="end_date"
                          placeholder="Digite a data inicial"
                          type="date"
                        />
                        <label>Término</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="form-floating mt-2">
                        <select
                          className="form-select"
                          onChange={handleChange}
                          value={formValue.type}
                          name="type"
                          placeholder="Escolha o tipo"
                 
                          >
                          <option></option>
                        </select>
                        <label>Tipo</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-floating mt-2">
                        <select
                          className="form-select"
                          onChange={handleChange}
                          value={formValue.id_cliente}
                          name="id_cliente"
                          placeholder="Escolha o cliente"
                 
                          >
                          <option></option>
                        </select>
                        <label>Cliente</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-floating mt-2 ">
                        <select
                          className="form-select"
                          onChange={handleChange}
                          value={formValue.id_pacote}
                          name="id_pacote"
                          placeholder="Escolha o pacote"
                 
                          >
                          <option></option>
                        </select>
                        <label>Pacote</label>
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
