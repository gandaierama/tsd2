import { useState, useEffect } from 'react';
import getConfig from 'next/config';
import styles from '../styles/Dash.module.css'
import { userService } from '../services';
import Image from 'next/image';
import { MDBDataTableV5 } from 'mdbreact';
import { clienteService } from '../services';
import {Modal} from 'react-bootstrap'
import {SideBar}  from '../components/'
export default Contratos;

const { publicRuntimeConfig } = getConfig();

function Contratos({data}) {




    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    let userData = [];
    data.map((item, index) => {
    
      item.action = (
        <div >
          <div
            className="btn btn-sm btn-secondary m-1"

            onClick={() => handleUpdate(item.id)}
          >Editar</div>

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
  

  const [datatable, setDatatable] =useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 270,
      },
      {
        label: 'E-mail',
        field: 'email',
        width: 200,
      },
      {
        label: 'cnpj',
        field: 'cnpj',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Telefone',
        field: 'telefone',
        sort: 'disabled',
        width: 150,
      }
      ,
      {
        label: 'Ação',
        field: 'action',
        sort: 'disabled',
        width: 50,
      }
    ],
    rows: data,
  });


  const inputImportante='col col-12 ';
  const inputBase='col col-12 col-xl-6';
  const inputSimples='col col-12 col-sm-4 col-xl-3';
    const formPage =[
    {id:1,name:'nome',col: inputImportante, title:'Nome', type:'text', required:true, error: 'Digite o seu nome'},
    {id:2,name:'email',col: inputBase, title:'E-mail', type:'text', required:true, error: 'Digite o seu nome'},
    {id:4,name:'cnpj',col: inputBase, title:'CNPJ', type:'text', required:true, error: 'Digite o seu nome'},
    {id:5,name:'endereco',col: inputBase, title:'Endereço', type:'text', required:true, error: 'Digite o seu endereço'},
    {id:6,name:'numero',col: inputSimples, title:'Número', type:'text', required:true, error: 'Digite o seu endereço'},
    {id:7,name:'complemento',col: inputSimples, title:'Complemento', type:'text', required:true, error: 'Digite o seu endereço'},
    {id:8,name:'bairro',col: inputSimples, title:'Bairro', type:'text', required:true, error: 'Digite o seu endereço'},
    {id:9,name:'cidade',col: inputSimples, title:'Cidade', type:'text', required:true, error: 'Digite o seu endereço'},
    {id:10,name:'Estado',col: inputSimples, title:'Estado', type:'text', required:true, error: 'Digite o seu endereço'},
    {id:10,name:'CEP',col: inputSimples, title:'CEP', type:'text', required:true, error: 'Digite o seu endereço'},
    
    ];

    const mooc={values:[
      'Daniel Batista', 
      'daniel@teste',
      '93966633232',
      'Rua teste',
      '123',
      '123',
      '123',
      '123',
      'SP',
    ]};

    const [users, setUsers] = useState(null);

    const [itemGet, setItemGet] = useState(null);
    const [lista, setLista] = useState(null);
    const [itemUp, setItemUp] = useState(null);

    const [inputs, setInputs] = useState(mooc);

    const handleChange = ()=>{
      return(true);

    }
    const handleDelete = (id)=>{
      console.log("Delete", id);
      return(true);
    }
    const handleUpdate = async(id)=>{
      console.log("Update", id);
      
      const requestOptions = {
        method: 'GET'
      };
      let res;
      try {
          let result=[];
          const res=await fetch(`/api/contratos`, requestOptions);
          const json = await res.json();
          const arr = Object.keys(json.data).map((key) => [key, json.data[key]]);
          setItemUp(arr);
          console.log(arr);
          handleShow();
      } catch(error) {
        console.log(error);
      }
      return(false);
    }
    // useEffect(() => {
    //     userService.getAll().then(x => setUsers(x));
    // }, []);

        useEffect(() => {
          //const clientesJson=clienteService.getAll().then(x => setLista(x))

          setUsers([{'id':'1', 'name':'Daniel', 'email': 'daniel@teste.com' }]);
    }, [setInputs,setUsers]);
    return (
        <>
        <header className={`navbar navbar-dark bg-primary sticky-top flex-md-nowrap p-0 shadow `}>
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-center" href="#">TSD Motoboys</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      <a className="nav-link px-3 btn" href="#">Sair</a>
    </div>
  </div>
</header>

<div className="modal" tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Editar</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="row">
            <div className="col-12 col-md-3 border-end">
            <div className="p-2 text-center">
            <div className="img-thumbnail rounded">
                <Image className="mt-2 " src={`/logo.png`} alt="" width="200" height="200"/>
           </div>
                <button className="btn btn-secondary w-100 m-2 " >
                  Enviar Logo
                </button>
                <hr/>
                <button className="btn btn-warning w-100 m-2 " >
                  Enviar MEI
                </button>
                <button className="btn btn-warning w-100  m-2" >
                  Enviar CNPJ
                </button>
                <button className="btn btn-warning w-100  m-2" >
                  Enviar RG
                </button>
                <button className="btn btn-warning w-100  m-2" >
                  Enviar Contrato Social
                </button>
                <div>
                </div>
                </div>
            </div>
            <div className="col-12 col-md-9">
            <div className="row">
           {

        formPage.map((inputsS, index) =>{
       
          let campo=inputs.values[index];
     
          return (
          <div className={inputsS.col} key={index}>
          
          <div className="form-floating mt-2">
                            
                            <input className="form-control" onChange={handleChange} key={inputsS.id} value={campo} name={inputsS.name} placeholder={inputsS.title} type={inputsS.type} />
                            <label>{inputsS.title}</label>
            </div>
            </div>
            )}
                        )}
            </div>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="submit" className="btn btn-primary">Salvar  </button>
      </div>
     </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


<Modal show={show} size="xl" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>        {itemUp===null ? <button>Logout</button> : <>
          
          <div className="row">
            <div className="col-12 col-md-3 border-end">
            <div className="p-2 text-center">
            <div className="img-thumbnail rounded">
                <div className=" ratio ratio-1x1 mx-auto">
                  <span>500x500</span>
                </div>
           </div>
                <button className="btn btn-secondary w-100 m-2 " >
                  Enviar Logo
                </button>
                <hr/>
                <button className="btn btn-warning w-100 m-2 " >
                  Enviar MEI
                </button>
                <button className="btn btn-warning w-100  m-2" >
                  Enviar CNPJ
                </button>
                <button className="btn btn-warning w-100  m-2" >
                  Enviar RG
                </button>
                <button className="btn btn-warning w-100  m-2" >
                  Enviar Contrato Social
                </button>
                <div>
                </div>
                </div>
            </div>
            <div className="col-12 col-md-9">
                        <div className="row">
           {

        formPage.map((inputsS, index) =>{
       
          console.log(itemUp[inputsS.name])
          return (
          <div className={inputsS.col} key={index}>
          
          <div className="form-floating mt-2">
                            
                            <input className="form-control" onChange={handleChange} key={inputsS.id} value={itemUp[inputsS.name]} name={inputsS.name} placeholder={inputsS.title} type={inputsS.type} />
                            <label>{inputsS.title}</label>
            </div>
            </div>
            )}
                        )}
</div>
              <div>{itemUp.id}</div>
              <div>{itemUp.name}</div>
              <div>{itemUp.email}</div>
              <div>{itemUp.cpf}</div>
              <div>{itemUp.cnpj}</div>
              <div>{itemUp.endereco}</div>
              <div>{itemUp.numero}</div>
              <div>{itemUp.bairro}</div>
              <div>{itemUp.cidade}</div>
              <div>{itemUp.estado}</div>
              <div>{itemUp.cep}</div>
            

            <div className="row mt-5">
            <div className="col-12"><hr/></div>
                <div className="col-6 col-md-3 h-100">
                  <div className="card text-center">

                      <div className="card-header">
                        <h4>Ordens</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="display-1 border-5">0</h1>
                      </div>
           
                  </div>
                </div>

                <div className="col-6 col-md-3 h-100">
                  <div className="card text-center">

                      <div className="card-header">
                        <h4>Entregas</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="display-1 border-5">0</h1>
                      </div>
           
                  </div>
                </div>

                <div className="col-6 col-md-3 h-100">
                  <div className="card text-center">

                      <div className="card-header">
                        <h4>Pagamentos</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="display-1 border-5">0</h1>
                      </div>
           
                  </div>
                </div>

                <div className="col-6 col-md-3 h-100">
                  <div className="card text-center">

                      <div className="card-header">
                        <h4>Bloqueios</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="display-1 border-5">0</h1>
                      </div>
           
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          </>
        }
</Modal.Body>

      </Modal>
<div className="modal  " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
    
    </div>
  </div>
</div>

<div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <form >
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Novo Cadastro</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="row">
            <div className="col-12 col-md-3 border-end">
            <div className="p-2 text-center">
            <div className="img-thumbnail rounded">
                <div className=" ratio ratio-1x1 mx-auto">
                  <span>500x500</span>
                </div>
           </div>
                <button className="btn btn-secondary w-100 m-2 " >
                  Enviar Logo
                </button>
                <hr/>
                <button className="btn btn-warning w-100 m-2 " >
                  Enviar MEI
                </button>
                <button className="btn btn-warning w-100  m-2" >
                  Enviar CNPJ
                </button>
                <button className="btn btn-warning w-100  m-2" >
                  Enviar RG
                </button>
                <button className="btn btn-warning w-100  m-2" >
                  Enviar Contrato Social
                </button>
                <div>
                </div>
                </div>
            </div>
            <div className="col-12 col-md-9">
            <div className="row">
           {

        formPage.map((inputsS, index) =>{
       
     
          return (
          <div className={inputsS.col} key={index}>
          
          <div className="form-floating mt-2">
                            
                            <input className="form-control" onChange={handleChange} key={inputsS.id} value="" name={inputsS.name} placeholder={inputsS.title} type={inputsS.type} />
                            <label>{inputsS.title}</label>
            </div>
            </div>
            )}
                        )}
</div>
            <div className="row mt-5">
            <div className="col-12"><hr/></div>
                <div className="col-6 col-md-3 h-100">
                  <div className="card text-center">

                      <div className="card-header">
                        <h4>Ordens</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="display-1 border-5">0</h1>
                      </div>
           
                  </div>
                </div>

                <div className="col-6 col-md-3 h-100">
                  <div className="card text-center">

                      <div className="card-header">
                        <h4>Entregas</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="display-1 border-5">0</h1>
                      </div>
           
                  </div>
                </div>

                <div className="col-6 col-md-3 h-100">
                  <div className="card text-center">

                      <div className="card-header">
                        <h4>Pagamentos</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="display-1 border-5">0</h1>
                      </div>
           
                  </div>
                </div>

                <div className="col-6 col-md-3 h-100">
                  <div className="card text-center">

                      <div className="card-header">
                        <h4>Bloqueios</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="display-1 border-5">0</h1>
                      </div>
           
                  </div>
                </div>

            </div>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="submit" className="btn btn-primary">Salvar  </button>
      </div>
     </form>
    </div>
  </div>
</div>

        <div className="container-fluid text-light text-center ">
  <div className="row">
    <SideBar/>

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap p-2 bg-light text-dark flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom rounded mt-3">
        <h1 className="h2">Contratos</h1>
        <div className="btn-toolbar mb-2 mb-md-0 ">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-md btn-success" data-id="" data-bs-toggle="modal" data-bs-target="#exampleModal2">Novo</button>
      
          </div>
          
        </div>
      </div>



      <div className="table-responsive text-light bg-light p-3 rounded">
        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} 
      searchTop
      searchBottom={false} />
        
      </div>
    </main>
  </div>
</div>
       
        </>
    );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const baseUrl = `${publicRuntimeConfig.apiUrl}/contratos`;
  const res = await fetch(baseUrl)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}