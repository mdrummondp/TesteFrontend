import React, { useState, useEffect } from "react";
import { Row, Col } from 'reactstrap';
import {useHistory} from 'react-router-dom';
import './usuarios.css';

import iconeEditar from '../../assets/images/icons/18.png';
import iconeEditarBlue from '../../assets/images/icons/18_blue.png';

import iconeDuplicar from '../../assets/images/icons/20.png';
import iconeDuplicarBlue from '../../assets/images/icons/20_blue.png';

import iconeDeletar from '../../assets/images/icons/22.png';
import iconeDeletarBlue from '../../assets/images/icons/22_blue.png';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const user = cookies.get('user');
const token = user.tokenBack;

const url = process.env.REACT_APP_URL_API;
const urlRetornarUsuarios = "retornarUsuarios"
const urlDeletarUsuario = 'deletarUsuario/'

function Usuarios() {
    const history = useHistory();
    const [usuarios, setUsuarios] = useState([]);   
    const [search, setSearch] = useState(''); 
    var [pagina, setPagina] = useState(1);

    useEffect(() =>{ 
        fetch(url+urlRetornarUsuarios, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            }
         })
         .then(function(response){
             return response.json();
         })
         .then(data => setUsuarios(data))
         .catch(error => {
             console.log("O Erro é: "+ error);
         });
        },[]);


  function usuarioFetch(){
    let path = `inserirEditarUsuario`; 
    history.push(path, { idUsuario: null});
  }

  function suasInformacoes(){
    let path = `inserirEditarUsuario`; 
    history.push(path, { idUsuario: user.id});
  }

  function passarInfoParaEditar(id){
    let path = `inserirEditarUsuario`; 
    history.push(path, { idUsuario: id});
  }

 async function deletarUsuario(usuario){
    setUsuarios(usuarios.filter(usuarios => {
        if (usuarios !== usuario) {
            return usuario;
        }
    }));

    await fetch(url+urlDeletarUsuario+ usuario.idUsuario, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token':token
        }
     })
     .then(function(response){
         return response.json();
     })
     .catch(error => {
         console.log("O Erro é: "+ error);
     });
  }

function mudarBotaoEditarQuandoMouseEntrar(idUsuario){
      document.getElementById("buttonEditar"+idUsuario).src = iconeEditarBlue;
     
  }
function mudarBotaoEditarQuandoMouseSair(idUsuario){
    document.getElementById("buttonEditar"+idUsuario).src = iconeEditar;
}

function mudarBotaoDuplicarQuandoMouseEntrar(idUsuario){
    document.getElementById("buttonDuplicar"+idUsuario).src = iconeDuplicarBlue;
   
}
function mudarBotaoDuplicarQuandoMouseSair(idUsuario){
  document.getElementById("buttonDuplicar"+idUsuario).src = iconeDuplicar;
}

function mudarBotaoDeletarQuandoMouseEntrar(idUsuario){
    document.getElementById("buttonDeletar"+idUsuario).src = iconeDeletarBlue;
   
}
function mudarBotaoDeletarQuandoMouseSair(idUsuario){
  document.getElementById("buttonDeletar"+idUsuario).src = iconeDeletar;
}
    
function  retornarPessoasItem(p){
        
    return( 
    <div>
        <div className="div-filter-card" style={{height:'auto', borderBottom:'3px solid #dadada', backgroundColor:'white', borderLeft:'2px solid #dadada', borderRight:'2px solid #dadada'}}> 
            <div style={{width:'100%'}}>
                <div style={{display:'inline-block', width:'2.5%', height:30, marginRight:'1%', marginLeft:'1%', position:'relative',transform: 'translateY(-5px)', fontSize:'18px', fontWeight:'bold'}}>
                    <img  id={"buttonEditar"+p.idUsuario} src={iconeEditar} style={{width:'32px', height:'32px'}} onMouseEnter={() => mudarBotaoEditarQuandoMouseEntrar(p.idUsuario)} onMouseLeave={() => mudarBotaoEditarQuandoMouseSair(p.idUsuario)} onClick={() => passarInfoParaEditar(p.idUsuario)}></img>
                </div>
                <div style={{display:'inline-block', width:'2.5%', height:30, marginRight:'1%', marginLeft:'1%', position:'relative',transform: 'translateY(-5px)', fontSize:'18px', fontWeight:'bold'}}>
                    <img  id={"buttonDeletar"+p.idUsuario} src={iconeDeletar} style={{width:'32px', height:'32px'}} onMouseEnter={() => mudarBotaoDeletarQuandoMouseEntrar(p.idUsuario)} onMouseLeave={() => mudarBotaoDeletarQuandoMouseSair(p.idUsuario)} onClick={() => deletarUsuario(p)}></img>
                </div>
                <div style={{display:'inline-block', width:'86.5%'}}>
               
                        <textarea type="text" style={{fontSize:15, fontWeight:'bold', width:'25%', backgroundColor:'white', border:'none', color:'black',resize:'none', overflow:'hidden', maxHeight:'27px'}} disabled='disabled' value={p.nome}></textarea>
                        <textarea type="text" style={{fontSize:15, fontWeight:'bold', width:'25%', backgroundColor:'white', border:'none', color:'black',resize:'none', overflow:'hidden', maxHeight:'27px'}} disabled='disabled' value={p.idade}></textarea>
                        <textarea type="text" style={{fontSize:15, fontWeight:'bold', width:'25%', backgroundColor:'white', border:'none', color:'black',resize:'none', overflow:'hidden', maxHeight:'27px'}} disabled='disabled' value={p.telefone}></textarea>
                        <textarea type="text" style={{fontSize:15, fontWeight:'bold', width:'25%', backgroundColor:'white', border:'none', color:'black',resize:'none', overflow:'hidden', maxHeight:'27px'}} disabled='disabled' value={p.email}></textarea>
                
                    </div>
                
            </div>
        </div>
    </div>
    );
}

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <div className="page-upper-card" style={{borderBottom:'3px solid #dadada', backgroundColor:'white', borderLeft:'2px solid #dadada', borderRight:'2px solid #dadada'}}>
                            <div style={{display:'inline-block', width:'70%', padding:'2%'}}>
                                <button style={{width:'23%', height:'30px', marginTop:'-13px', fontWeight:'bold', fontSize:'18px'}} onClick={suasInformacoes}>Seus dados</button>
                             </div>
                             <form  style={{display:'inline-block', width:'28%'}}>
                                <div style={{display:'inline-block', width:'70%'}}>
                                    <input style={{fontSize:'20px', fontWeight:'bold', width:'100%'}} type="text" placeholder='Digite o nome' onChange={e => setSearch(e.target.value)}></input>
                                </div>
                                <div style={{display:'inline-block', width:'30%'}}>
                                <button style={{fontSize:'20px', fontWeight:'bold', width:'100%'}}>Buscar</button>
                                </div>
                             </form>
                        </div>
                       
                        <div className="div-filter-card" style={{height:'auto', borderBottom:'3px solid #dadada', backgroundColor:'white', borderLeft:'2px solid #dadada', borderRight:'2px solid #dadada'}}> 
                            <div style={{display:'inline-block', width:'13%'}}></div>
                            <div style={{display:'inline-block', width:'87%'}}>
                                <input type="text" style={{textAlign:'left',fontSize:15, fontWeight:'bold', width:'25%',  backgroundColor:'white', border:'none', color:'#243d95'}} disabled='disabled' value=" NOME"></input>
                                <input type="text" style={{textAlign:'left',fontSize:15, fontWeight:'bold', width:'25%',  backgroundColor:'white', border:'none', color:'#243d95'}} disabled='disabled' value=" IDADE"></input>
                                <input type="text" style={{textAlign:'left',fontSize:15, fontWeight:'bold', width:'25%',  backgroundColor:'white', border:'none', color:'#243d95'}} disabled='disabled' value=" TELEFONE"></input>
                                <input type="text" style={{textAlign:'left',fontSize:15, fontWeight:'bold', width:'25%', backgroundColor:'white', border:'none', color:'#243d95'}} disabled='disabled' value="EMAIL"></input>
                            </div>
                        </div>
                    
                          {usuarios.slice(pagina*10-10,pagina*10).map(p => retornarPessoasItem(p))}
                    
                    </div>
                    <div className="div-filter-card" style={{height:'auto', borderBottom:'3px solid #dadada', backgroundColor:'white', borderLeft:'2px solid #dadada', borderRight:'2px solid #dadada'}}> 
                        <div style={{textAlign:'left', display:'inline-block', width:'50%'}}>
                           <text style={{marginLeft:'5%'}}>Página {pagina} de {parseInt(usuarios.length/10)+1}</text>
                        </div>
                        <div style={{textAlign:'right', display:'inline-block', width:'50%'}}>
                            <button style={{border:'3px solid #dadada', fontSize:'17px', color:'#a69cb3',borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px'}} onClick={() => {if(pagina > 1){setPagina(pagina-1)}}}>Ant</button>
                            <button style={{border:'3px solid #004080',backgroundColor:'#004080', fontSize:'17px', color:'white'}} disabled>{pagina}</button>
                            <button style={{border:'3px solid #dadada', fontSize:'17px', color:'#a69cb3',borderTopRightRadius:'5px', borderBottomRightRadius:'5px'}} onClick={() => {if(pagina < parseInt(usuarios.length/10)+1){setPagina(pagina+1)}}}>Seg</button>
                        </div>
                    </div>
                    
                </Col>
                    
            </Row>
        </React.Fragment>
    );

}

export default Usuarios;