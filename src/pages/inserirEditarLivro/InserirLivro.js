import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import './livro.css';
import {
    useLocation
} from "react-router-dom";
import { Cookies } from 'react-cookie';


const url = process.env.REACT_APP_URL_API;
const urlDeletarLivro = url+"deletarLivro/";
const urlRetornarLivro = url+"retornarLivro/";
const urlInserirLivro = url+"inserirLivro";
const urlAtualizarLivro = url+"atualizarLivro"
const urlFavoritar = url+"inserirFavorito"
const urlDeletarFavorito = url+"deletarFavorito/"
const urlRetornarTodosOsUsuariosFavoritos = url+"retornarUsuariosFavoritos/"
const urlRetornarUsuarios = "retornarUsuarios"

const cookies = new Cookies();
const user = cookies.get('user');
const token = user.tokenBack;

function InserirPessoas() {
    const location = useLocation();

    var id = null
    if(location.state.idLivro != null){
     id = location.state.idLivro;
    }
    const history = useHistory();
    const [livro, setLivro] = useState({titulo:'', isbn:'', categoria:'', ano:''})
    const [usuarios, setUsuarios] = useState([{}])
    const [idDosFavoritos, setIdDosFavoritos] = useState([{}])

    const [atualizar, setAtualizar] = useState(false); 

    useEffect(() =>{
        if(id != null){
            setAtualizar(true);
            fetch(urlRetornarLivro+id, {
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
                  setLivro(data[0]);

                
             })

             .catch(error => {
                 console.log("O Erro é: "+ error);
             });

             fetch(url+urlRetornarUsuarios, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
             })
             .then(function(response){
                 return response.json();
             })
             .then(data => setUsuarios(data))
             .catch(error => {
                 console.log("O Erro é: "+ error);
             });

             retornarTodosUsuariosFavoritos();
        }
    }, [])
    

    function adicionarLivro(){
        fetch(urlInserirLivro, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token':token
            },
            body:JSON.stringify(livro)
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

    function atualizarLivro(){
        fetch(urlAtualizarLivro, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token':token
            },
            body:JSON.stringify({idLivro:id, titulo:livro.titulo, isbn:livro.isbn, categoria:livro.categoria, ano:livro.ano})
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

    function favoritar(idUsuario){
        if(checarFavorito(idUsuario) == false){
        fetch(urlFavoritar, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token':token
            },
            body:JSON.stringify({idLivro:id, idUsuario:idUsuario})
         })
         .then(function(response){
             return response.json();
         })
         .then(data =>{
             alert("Adicionado aos favoritos")
             retornarTodosUsuariosFavoritos();

         })

         .catch(error => {
             console.log("O Erro é: "+ error);
             fecharFormulario();
         });
        }else if(checarFavorito(idUsuario) == true){
            fetch(urlDeletarFavorito+idUsuario+"/"+id, {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token':token
                },
             })
             .then(function(response){
                 return response.json();
             })
             .then(data =>{
                alert("Removido dos favoritos")
                retornarTodosUsuariosFavoritos();

             })
    
             .catch(error => {
                 console.log("O Erro é: "+ error);
             });
        }

    }

    function retornarTodosUsuariosFavoritos(){
        fetch(urlRetornarTodosOsUsuariosFavoritos+id, {
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
            setIdDosFavoritos(data);
         })

         .catch(error => {
             console.log("O Erro é: "+ error);
         });
    }

    function checarFavorito(idUsuario){
      var id = null;
      id = idDosFavoritos.find(i => i.idUsuario == idUsuario
      );

      if(id != null){
          return true;
      }else{
          return false;
      }
    }
    function fecharFormulario(){
        let path = `usuarios`; 
        history.push(path);
    }

     

    function atualizarOuInserir(){
        
        if(atualizar == true){
            return(<div><button style={{display:'inline-block', width:'30%', marginRight:'1%', backgroundColor:'#123392', borderRadius:'10px', fontWeight:'bold', color:'white'}} onClick={atualizarLivro}>Atualizar</button><button style={{display:'inline-block', width:'30%', backgroundColor:'#8d8b89', borderRadius:'10px', fontWeight:'bold', color:'white'}} onClick={fecharFormulario}>Fechar</button></div>)
        }else if(atualizar == false){
            return(<div><button style={{display:'inline-block', width:'30%', marginRight:'1%', backgroundColor:'#123392', borderRadius:'10px', fontWeight:'bold', color:'white'}} onClick={adicionarLivro}>Confirmar</button><button style={{display:'inline-block', width:'30%', backgroundColor:'#8d8b89', borderRadius:'10px', fontWeight:'bold', color:'white'}} onClick={fecharFormulario}>Fechar</button></div>)
        }
    }


    function checarSeTemValor(valor){
        if(valor != ''){
            return parseFloat(valor);
        }else{
            return 0;
        }
    }
    

    function menuAbasInterface(){
        if(id == null){
            return(
            <div style={{marginTop:'2%'}}>
                <div style={{display:'block',margin:"0 auto", width:'35%', backgroundColor:'white', border:'2px solid #99B2CB', borderRadius:'5%',verticalAlign:'top', paddingBottom:'2%'}}>
                   
                    <div>
                        <text style={{fontSize:45, fontWeight:'bold', color:'black', textAlign:'left', marginLeft:'5%'}}>Livro</text>
                    </div> 
                    <div style={{textAlign:'center'}}> 
                        <input type='text' placeholder="Titulo" onChange={v => setLivro({...livro,titulo:v.target.value})} style={{marginTop:'2%', width:'90%', fontSize:'30px'}} value={livro.titulo} ></input>
                        <input type='text' placeholder="Isbn" style={{marginTop:'2%',width:'90%', fontSize:'30px'}}  onChange={v => setLivro({...livro,isbn:v.target.value})} value={livro.isbn}></input>
                        <input type='text' placeholder="Categoria" style={{marginTop:'2%',width:'90%', fontSize:'30px'}}  onChange={v => setLivro({...livro,categoria:v.target.value})} value={livro.categoria}></input>
                        <input type='number' placeholder="Ano" style={{marginTop:'2%',width:'90%', fontSize:'30px'}}  onChange={v => setLivro({...livro,ano:v.target.value})} value={livro.ano}></input>
                    </div>   
                    <div style={{display:'inline-block', width:'100%', height:'auto', margin:'2.5% auto',textAlign:'left', fontSize:20, textAlign:'center'}}>
                        {atualizarOuInserir()}
                    </div>

                </div>
               
            </div>
            )
        }else{
            return(
            <div style={{marginTop:'2%'}}>
                
                <div style={{display:'inline-block',margin:"0 auto", width:'45%',marginRight:'2.5%', backgroundColor:'white', border:'2px solid #99B2CB', borderRadius:'5%',verticalAlign:'top', paddingBottom:'2%'}}>
                   
                    <div>
                        <text style={{fontSize:45, fontWeight:'bold', color:'black', textAlign:'left', marginLeft:'5%'}}>Livro</text>
                    </div> 
                    <div style={{textAlign:'left', marginLeft: '40px'}}>
                        Título <br></br><input type='text' placeholder="Titulo" onChange={v => setLivro({...livro,titulo:v.target.value})} style={{marginTop:'2%', width:'90%', fontSize:'30px'}} value={livro.titulo} ></input><br></br><br></br>
                        ISBN <br></br><input type='text' placeholder="Isbn" style={{marginTop:'2%',width:'90%', fontSize:'30px'}}  onChange={v => setLivro({...livro,isbn:v.target.value})} value={livro.isbn}></input><br></br><br></br>
                        Categoria <br></br><input type='text' placeholder="Categoria" style={{marginTop:'2%',width:'90%', fontSize:'30px'}}  onChange={v => setLivro({...livro,categoria:v.target.value})} value={livro.categoria}></input><br></br><br></br>
                        Ano <br></br><input type='text' placeholder="Ano" style={{marginTop:'2%',width:'90%', fontSize:'30px'}}  onChange={v => setLivro({...livro,ano:v.target.value})} value={livro.ano}></input>
                    </div>   
                    <div style={{display:'inline-block', width:'100%', height:'auto', margin:'2.5% auto',textAlign:'left', fontSize:20, textAlign:'center'}}>
                        {atualizarOuInserir()}
                    </div>

                </div>
                <div style={{display:'inline-block',margin:"0 auto",marginLeft:'2.5%', width:'45%', minHeight:'500px',backgroundColor:'white', border:'2px solid #99B2CB', borderRadius:'5%',verticalAlign:'top', paddingBottom:'2%'}}>
                    <div>
                        <br></br>
                        <text style={{fontSize:30, fontWeight:'bold', color:'black', textAlign:'left', marginLeft:'5%', overflow:'auto'}}>Sou Favorito de:</text>
                    </div>
                     {usuarios.map((e) =>{
                         return(
                            <div style={{fontSize:'30px', border:'1px solid black', width:'90%', margin:'1% auto'}}>
                                <input type="checkbox" width="20px" onClick={() => favoritar(e.idUsuario)} checked={checarFavorito(e.idUsuario)}></input>
                                <text>{" " + e.email}</text>
                            </div>
                            )
                     })} 
                    

                </div>
               
            </div>

            )
        }
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