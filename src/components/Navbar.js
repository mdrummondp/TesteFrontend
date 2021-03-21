// @flow
import React from 'react';
import AppMenu from './AppMenu';
import { Collapse } from 'reactstrap';
import {useHistory} from 'react-router-dom'; 
import {useState} from 'react';

type NavbarProps = {
    isMenuOpened?: boolean,

    //<AppMenu mode={'horizontal'} />
};



const Navbar = (props: NavbarProps) => {

    var[selecaoDoMenu,setSelecaoDoMenu] = useState({pessoas:true, produtos:false, vendas:false, estoque:false, financeiro:false, relatorios:false});
    const history = useHistory();

    function irParaPessoas(){
        setSelecaoDoMenu({...selecaoDoMenu, pessoas:true, produtos:false, vendas:false, estoque:false, financeiro:false, relatorios:false});
        let path = `pessoas`; 
        history.push(path);
    }

    function irParaProdutos(){
        setSelecaoDoMenu({...selecaoDoMenu, pessoas:false, produtos:true, vendas:false, estoque:false, financeiro:false, relatorios:false});
        let path = `produtos`; 
        history.push(path);
    }

    function irParaVendas(id){
        setSelecaoDoMenu({...selecaoDoMenu, pessoas:false, produtos:false, vendas:true, estoque:false, financeiro:false, relatorios:false});
        let path = `vendas`; 
        history.push(path);
    }

    function irParaEstoque(id){
        setSelecaoDoMenu({...selecaoDoMenu, pessoas:false, produtos:false, vendas:false, estoque:true, financeiro:false, relatorios:false});
        let path = `estoque`; 
        history.push(path);
    }

    function irParaFinanceiro(id){
        setSelecaoDoMenu({...selecaoDoMenu, pessoas:false, produtos:false, vendas:false, estoque:false, financeiro:true, relatorios:false});
        let path = `financeiro`; 
        history.push(path);
    }

    function irParaRelatorios(id){
        setSelecaoDoMenu({...selecaoDoMenu, pessoas:false, produtos:false, vendas:false, estoque:false, financeiro:false, relatorios:true});
        let path = `relatorios`; 
        history.push(path);
    }
    
    
    return (
        <React.Fragment>
            <div style={{backgroundColor:'#113396', borderTop:'4px solid white'}}>
                <div>
                    <nav className="navbar navbar-dark navbar-expand-lg topnav-menu"   >
                        <Collapse isOpen={props.isMenuOpened} className="navbar-collapse" id="topnav-menu-content" >
                                <div style={{display:'block', width:'100%', height:'auto'}}>
                                    <div style={{width:'20.5%', display:'inline-block'}}></div>
                                    <div style={{width:'10%', display:'inline-block', textAlign:'center'}}>
                                        {selecaoDoMenu.pessoas ?
                                            (<button style={{display:'inline-block', textAlign:'center', color:'red',fontSize:'23px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Dados Cadastrais</button>)
                                            :
                                            (<button onClick={irParaPessoas} style={{display:'inline-block', textAlign:'center', color:'black',fontSize:'23px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Dados Cadastrais</button>)
                                        }
                                    </div>
                                    <div style={{width:'10%', display:'inline-block', textAlign:'center'}}>
                                        {selecaoDoMenu.produtos ?
                                            (<button style={{display:'inline-block', textAlign:'center', color:'red',fontSize:'23px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Produtos</button>)
                                            :
                                            (<button  onClick={irParaProdutos} style={{display:'inline-block', textAlign:'center', color:'black',fontSize:'23px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Produtos</button>)
                                        }                                    </div>
                                    <div style={{width:'10%', display:'inline-block', textAlign:'center'}}>
                                        {selecaoDoMenu.vendas ?
                                            (<button style={{display:'inline-block', textAlign:'center', color:'red',fontSize:'23px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Vendas</button>)
                                            :
                                            (<button onClick={irParaVendas} style={{display:'inline-block', textAlign:'center', color:'black',fontSize:'23px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Vendas</button>)
                                        }                                       </div>
                                    <div style={{width:'10%', display:'inline-block', textAlign:'center'}}>
                                        {selecaoDoMenu.estoque ?
                                            (<button style={{display:'inline-block', textAlign:'center', color:'red',fontSize:'23px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Estoque</button>)
                                            :
                                            (<button onClick={irParaEstoque} style={{display:'inline-block', textAlign:'center', color:'black',fontSize:'23px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Estoque</button>)
                                        }                                       </div>
                                    <div style={{width:'10%', display:'inline-block', textAlign:'center'}}>
                                        {selecaoDoMenu.financeiro ?
                                            (<button style={{display:'inline-block', textAlign:'center', color:'red',fontSize:'23px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Financeiro</button>)
                                            :
                                            (<button onClick={irParaFinanceiro} style={{display:'inline-block', textAlign:'center', color:'black',fontSize:'23px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Movimento</button>)
                                        }                                    </div>
                                    <div style={{width:'10%', display:'inline-block', textAlign:'center'}}>
                                        {selecaoDoMenu.relatorios ?
                                            (<button style={{display:'inline-block', textAlign:'center', color:'red',fontSize:'23px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Relatórios</button>)
                                            :
                                            (<button onClick={irParaRelatorios} style={{display:'inline-block', textAlign:'center', color:'black',fontSize:'23px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Relatórios</button>)
                                        }                                     </div>
                                </div>
                        </Collapse>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
