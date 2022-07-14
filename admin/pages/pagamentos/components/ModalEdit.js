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
                    <div className="col-12 ">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.cpf}
                          name="cpf"
                          placeholder="Digite o cpf"
                          type="text"
                        />
                        <label>CNPJ</label>
                      </div>
                    </div>

                    <div className="col-12 ">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.email}
                          name="email"
                          placeholder="Digite o email"
                          type="text"
                        />
                        <label>E-mail</label>
                      </div>
                    </div>

                    <div className="col-12 ">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.senha}
                          name="senha"
                          placeholder="Digite o senha"
                          type="text"
                        />
                        <label>Senha</label>
                      </div>
                    </div>

                    <div className="col-12 ">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.endereco}
                          name="endereco"
                          placeholder="Digite o endereco"
                          type="text"
                        />
                        <label>Endereco</label>
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
