import { useState, useEffect } from "react";
import getConfig from "next/config";
import styles from "../../styles/Dash.module.css";
import { userService } from "../../services";
import Image from "next/image";
import { MDBDataTableV5 } from "mdbreact";
import { clienteService } from "../../services";
import { Modal, Alert, Button, Badge } from "react-bootstrap";
export default Cliente;
import { SideBar, Header } from "../../components/";


const { publicRuntimeConfig } = getConfig();
import { useRouter } from "next/router";

const nameModule ="cliente";
const namePage ="Cliente";

function Cliente({ data }) {

  const router = useRouter();
  const formClean={
    email: "",
    senha: "",
    nome: "",
    email: "",
    cnpj: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
  };
  const fetchHeader={
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const [formValueEdit, setFormValueEdit] = useState(formClean);
  const [formValue, setFormValue] = useState(formClean);
  const [users, setUsers] = useState(null);
  const [itemGet, setItemGet] = useState(null);
  const [lista, setLista] = useState(null);
  const [itemUp, setItemUp] = useState(null);
  const [files, setFiles] = useState([]);
  const [show, setShow] = useState(false);
  const [showCad, setShowCad] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertEdit, setShowAlertEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseCad = () => setShowCad(false);
  const handleShow = () => setShow(true);
  const handleShowCad = () => setShowCad(true);
  
  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  const handleLogout = () => {
    userService.logout();
  };

  let userData = [];

  (data.data).map((item, index) => {
    item.action = (
      <div>
        <div
          className="btn btn-sm btn-secondary m-1"
          onClick={() => handleUpdate(item.id)}
        >
          Editar
        </div>

        <div
          className="btn btn-sm btn-danger m-1"
          onClick={() => handleDelete(item.id)}
        >
          Apagar
        </div>
      </div>
    );
    userData.push(item);
  });

  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: "Name",
        field: "name",
        width: 270,
      },
      {
        label: "E-mail",
        field: "email",
        width: 200,
      },
      {
        label: "cnpj",
        field: "cnpj",
        sort: "asc",
        width: 100,
      },
      {
        label: "Ação",
        field: "action",
        sort: "disabled",
        width: 50,
      },
    ],
    rows: data,
  });



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleLogo = (e) => {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    setFiles((prevState) => {
      return [...prevState, , ...filesArr];
    });
  };

  const removeFile = (f) => {
    setFiles((prevState) => {
      return [...prevState.filter((x) => x !== f)];
    });
  };

  const handleChangeEdit = (event) => {
    const { name, value } = event.target;
    setFormValueEdit((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleDelete = async (id) => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
      headers: new Headers(fetchHeader),
    };
    let res;
    try {
      let result = [];
      const res = await fetch(`/api/${nameModule}/delete`, requestOptions);
      const json = await res.json();
      refreshData();
    } catch (error) {
      console.log(error);
    }
    return false;
  };


  
  const handleUpdate = async (id) => {
    console.log("Update", id);
    setFormValueEdit((prevState) => {
      return {
        ...prevState,
        id: id,
      };
    });
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
      headers: new Headers(fetchHeader),
    };
    let res;
    try {
      let result = [];
      const res = await fetch(`/api/${nameModule}/get`, requestOptions);
      const json = await res.json();

      setFormValueEdit(json.data);
      console.log(json.data);
      handleShow();
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  const handleSubmitEdit = async (e) => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(formValueEdit),
      headers: new Headers(fetchHeader),
    };
    let res;
    try {
      let result = [];
      const res = await fetch(`/api/${nameModule}/edit`, requestOptions);
      const json = await res.json();
      setShowAlertEdit(true);
    } catch (error) {
      console.log(error);
    }
    return false;
  };
  const handleContinueEdit = () => {
    setFormValueEdit(formClean);
    handleClose();
    refreshData();
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
  const handleContinue = () => {
    setFormValue(formClean);
    handleCloseCad();
    refreshData();
  };


  useEffect(() => {
    setIsRefreshing(false);
  }, [data]);

  return (
    <>
      <Modal show={show} size="xl" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar {namePage}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {setFormValueEdit === {} ? (
            <>Logout</>
          ) : (
            <>
              <div className="row">
                <div className="col-12">
                  <Alert show={showAlertEdit} variant="success">
                    <Alert.Heading>Ação executada com sucesso!</Alert.Heading>
                    <p>Parabéns a ação foi executada com sucesso!</p>
                    <hr />
                    <div className="d-flex justify-content-end">
                      <Button
                        onClick={handleContinueEdit}
                        variant="outline-success"
                      >
                        Continuar
                      </Button>
                    </div>
                  </Alert>
                  {!showAlertEdit && (
                    <>
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="form-floating mt-2">
                            <input
                              className="form-control"
                              onChange={handleChangeEdit}
                              value={formValueEdit.name}
                              name="nome"
                              placeholder="Digite o nome"
                              type="text"
                            />
                            <label>Nome</label>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-floating mt-2">
                            <input
                              className="form-control"
                              onChange={handleChangeEdit}
                              value={formValueEdit.cnpj}
                              name="cnpj"
                              placeholder="Digite o cnpj"
                              type="text"
                            />
                            <label>CNPJ</label>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="form-floating mt-2">
                            <input
                              className="form-control"
                              onChange={handleChangeEdit}
                              value={formValueEdit.email}
                              name="email"
                              placeholder="Digite o email"
                              type="text"
                            />
                            <label>E-mail</label>
                          </div>
                        </div>

           
                        <div className="col-12 col-md-6">
                          <div className="form-floating mt-2">
                            <input
                              className="form-control"
                              onChange={handleChangeEdit}
                              value={formValueEdit.endereco}
                              name="endereco"
                              placeholder="Digite o endereco"
                              type="text"
                            />
                            <label>Endereco</label>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="form-floating mt-2">
                            <input
                              className="form-control"
                              onChange={handleChangeEdit}
                              value={formValueEdit.numero}
                              name="numero"
                              placeholder="Digite o numero"
                              type="text"
                            />
                            <label>Número</label>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="form-floating mt-2">
                            <input
                              className="form-control"
                              onChange={handleChangeEdit}
                              value={formValueEdit.complemento}
                              name="complemento"
                              placeholder="Digite o complemento"
                              type="text"
                            />
                            <label>Complemento</label>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="form-floating mt-2">
                            <input
                              className="form-control"
                              onChange={handleChangeEdit}
                              value={formValueEdit.bairro}
                              name="bairro"
                              placeholder="Digite o bairro"
                              type="text"
                            />
                            <label>Bairro</label>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="form-floating mt-2">
                            <input
                              className="form-control"
                              onChange={handleChangeEdit}
                              value={formValueEdit.cidade}
                              name="cidade"
                              placeholder="Digite o cidade"
                              type="text"
                            />
                            <label>Cidade</label>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="form-floating mt-2">
                            <input
                              className="form-control"
                              onChange={handleChangeEdit}
                              value={formValueEdit.estado}
                              name="estado"
                              placeholder="Digite o estado"
                              type="text"
                            />
                            <label>Estado</label>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="form-floating mt-2">
                            <input
                              className="form-control"
                              onChange={handleChangeEdit}
                              value={formValueEdit.cep}
                              name="cep"
                              placeholder="Digite o cep"
                              type="text"
                            />
                            <label>CEP</label>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="form-floating mt-2">
                            <input
                              className="form-control"
                              onChange={handleChangeEdit}
                              value={formValueEdit.telefone}
                              name="telefone"
                              placeholder="Digite o telefone"
                              type="text"
                            />
                            <label>Telefone</label>
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
                            onClick={handleSubmitEdit}
                            className="btn btn-lg m-2 btn-primary w-50"
                          >
                            Salvar{" "}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>

      <Modal show={showCad} size="xl" onHide={handleCloseCad}>
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
                    <div className="col-12 col-md-6">
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
                    <div className="col-12 col-md-6">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.cnpj}
                          name="cnpj"
                          placeholder="Digite o cnpj"
                          type="text"
                        />
                        <label>CNPJ</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
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

                    <div className="col-12 col-md-6">
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

                    <div className="col-12 col-md-6">
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

                    <div className="col-12 col-md-6">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.numero}
                          name="numero"
                          placeholder="Digite o numero"
                          type="text"
                        />
                        <label>Número</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.complemento}
                          name="complemento"
                          placeholder="Digite o complemento"
                          type="text"
                        />
                        <label>Complemento</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.bairro}
                          name="bairro"
                          placeholder="Digite o bairro"
                          type="text"
                        />
                        <label>Bairro</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.cidade}
                          name="cidade"
                          placeholder="Digite o cidade"
                          type="text"
                        />
                        <label>Cidade</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.estado}
                          name="estado"
                          placeholder="Digite o estado"
                          type="text"
                        />
                        <label>Estado</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.cep}
                          name="cep"
                          placeholder="Digite o cep"
                          type="text"
                        />
                        <label>CEP</label>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-floating mt-2">
                        <input
                          className="form-control"
                          onChange={handleChange}
                          value={formValue.telefone}
                          name="telefone"
                          placeholder="Digite o telefone"
                          type="text"
                        />
                        <label>Telefone</label>
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

      <Header />

      <div className="container-fluid text-light text-center ">
        <div className="row">
          <SideBar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap p-2 bg-light text-dark flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom rounded mt-3">
              <h1 className="h2">{namePage}s</h1>
              <div className="btn-toolbar mb-2 mb-md-0 ">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-md btn-success"
                    onClick={handleShowCad}
                  >
                    Novo
                  </button>
                </div>
              </div>
            </div>

            <div className="table-responsive text-light bg-light p-3 rounded">
              <MDBDataTableV5
                hover
                entriesOptions={[5, 20, 25]}
                entries={5}
                pagesAmount={4}
                data={datatable}
                searchTop
                searchBottom={false}
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const baseUrl = `${publicRuntimeConfig.apiUrl}/${nameModule}`;
  const res = await fetch(baseUrl);
  const data = await res.json();
  const propsData = data.data;
  // Pass data to the page via props
  return { props: { data } };
}
