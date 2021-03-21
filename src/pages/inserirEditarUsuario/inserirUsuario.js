import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import { Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './usuario.css';
import {
    useLocation
} from "react-router-dom";
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const user = cookies.get('user');
const token = user.tokenBack;

const url = process.env.REACT_APP_URL_API;
const urlDeletarUsuario = url+"deletarUsuario/";
const urlRetornarUsuario = url+"retornarUsuario/";
const urlInserirUsuario = url+"inserirUsuario";
const urlAtualizarUsuario = url+"atualizarUsuario";
const urlRetornarTodosOsLivrosFavoritos = url+"retornarFavorito/"


function InserirPessoas() {
    const location = useLocation();

    var id = null
    if(location.state.idUsuario != null){
     id = location.state.idUsuario;
    }
    const history = useHistory();
    const [usuario, setUsuario] = useState({nome:'', idade:'', telefone:'', email:'', senha:''})
    const [livros, setLivros] = useState([{}])
    const [atualizar, setAtualizar] = useState(false); 

    useEffect(() =>{
        if(id != null){
            setAtualizar(true);
            fetch(urlRetornarUsuario+id, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
             })
             .then(function(response){
                 return response.json();
             })
             .then(data =>{
                  setUsuario(data[0]);

                
             })

             .catch(error => {
                 console.log("O Erro é: "+ error);
             });

             retornarTodosLivrosFavoritos()
        }
    }, [])

    function adicionarUsuario(){
        fetch(urlInserirUsuario, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token':token
            },
            body:JSON.stringify(usuario)
         })
         .then(function(response){
             return response.json();
         })
         .then(data =>{
            fecharFormulario();
         })

         .catch(error => {
             console.log("O Erro é: "+ error);
             fecharFormulario();
         });
    }

    function atualizarUsuario(){
        fetch(urlAtualizarUsuario, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token':token
            },
            body:JSON.stringify({idUsuario:id, nome:usuario.nome, idade:usuario.idade,telefone:usuario.telefone ,email:usuario.email, senha:usuario.senha})
         })
         .then(function(response){
             return response.json();
         })
         .then(data =>{
            fecharFormulario();
         })

         .catch(error => {
             
             fecharFormulario();
         });
    }

    function fecharFormulario(){
        let path = `usuarios`; 
        history.push(path);
    }
     

    function atualizarOuInserir(){
        
        if(atualizar == true){
            return(<div><button style={{display:'inline-block', width:'30%', marginRight:'1%', backgroundColor:'#123392', borderRadius:'10px', fontWeight:'bold', color:'white'}} onClick={atualizarUsuario}>Atualizar</button><button style={{display:'inline-block', width:'30%', backgroundColor:'#8d8b89', borderRadius:'10px', fontWeight:'bold', color:'white'}} onClick={fecharFormulario}>Fechar</button></div>)
        }else if(atualizar == false){
            return(<div><button style={{display:'inline-block', width:'30%', marginRight:'1%', backgroundColor:'#123392', borderRadius:'10px', fontWeight:'bold', color:'white'}} onClick={adicionarUsuario}>Confirmar</button><button style={{display:'inline-block', width:'30%', backgroundColor:'#8d8b89', borderRadius:'10px', fontWeight:'bold', color:'white'}} onClick={fecharFormulario}>Fechar</button></div>)
        }
    }

    function retornarTodosLivrosFavoritos(){
        fetch(urlRetornarTodosOsLivrosFavoritos+id, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
         })
         .then(function(response){
             return response.json();
         })
         .then(data =>{
            setLivros(data);
         })

         .catch(error => {
             console.log("O Erro é: "+ error);
         });
    }


    function checarSeTemValor(valor){
        if(valor != ''){
            return parseFloat(valor);
        }else{
            return 0;
        }
    }

    function menuAbasInterface(){
            return(
            <div style={{marginTop:'2%'}}>
                <div style={{display:'inline-block',margin:"0 auto", width:'45%',marginRight:'2.5%', backgroundColor:'white', border:'2px solid #99B2CB', borderRadius:'5%',verticalAlign:'top', paddingBottom:'2%'}}>
                    <div>
                        <br></br><text style={{fontSize:30, fontWeight:'bold', color:'black', textAlign:'left', marginLeft:'5%'}}>Usuário</text>
                    </div> 
                    <div style={{textAlign:'left', marginLeft: '40px'}}> 
                        Nome <br></br><input type='text' placeholder="Nome" onChange={v => setUsuario({...usuario,nome:v.target.value})} style={{marginTop:'2%', width:'90%', fontSize:'30px'}} value={usuario.nome} ></input><br></br><br></br>
                        Idade <br></br><input type='number' placeholder="Idade" style={{marginTop:'2%',width:'90%', fontSize:'30px'}}  onChange={v => setUsuario({...usuario,idade:v.target.value})} value={usuario.idade}></input><br></br><br></br>
                        Telefone <br></br><input type='text' placeholder="Telefone" style={{marginTop:'2%',width:'90%', fontSize:'30px'}}  onChange={v => setUsuario({...usuario,telefone:v.target.value})} value={usuario.telefone}></input><br></br><br></br>
                        Email <br></br><input type='text' placeholder="Email" style={{marginTop:'2%',width:'90%', fontSize:'30px'}}  onChange={v => setUsuario({...usuario,email:v.target.value})} value={usuario.email}></input><br></br><br></br>
                        Senha <br></br><input type='password' placeholder="Senha" style={{marginTop:'2%',width:'90%', fontSize:'30px'}}  onChange={v => setUsuario({...usuario,senha:v.target.value})}></input>

                    </div>   
                    <div style={{display:'inline-block', width:'100%', height:'auto', margin:'2.5% auto',textAlign:'left', fontSize:20, textAlign:'center'}}>
                        {atualizarOuInserir()}
                    </div>

                </div>
                <div style={{display:'inline-block',margin:"0 auto",marginLeft:'2.5%', width:'45%', minHeight:'500px',backgroundColor:'white', border:'2px solid #99B2CB', borderRadius:'5%',verticalAlign:'top', paddingBottom:'2%'}}>
                    <br></br>
                    <div>
                        <text style={{fontSize:30, fontWeight:'bold', color:'black', textAlign:'left', marginLeft:'5%', overflow:'auto'}}>Lista de Livros Favoritos</text>
                    </div>
                     {livros.map((e) =>{
                         return(
                            <div style={{fontSize:'30px', border:'1px solid black', width:'90%', margin:'1% auto', textAlign:'center', color:'black'}}>
                                <text>{e.titulo}</text>
                            </div>
                            )
                     })} 
                    

                </div>
               
            </div>
            )
    }

          return (
            <React.Fragment>
                <Row>
                    <Col>
                        <div>
                            {menuAbasInterface()}
                           
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        );
    
}

export default InserirPessoas;