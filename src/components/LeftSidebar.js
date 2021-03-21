// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'; 
import {useState} from 'react';

import SimpleBar from 'simplebar-react';

import logoSm from '../assets/images/logo_sm.png';
import logoDark from '../assets/images/logo-dark.png';
import logoDarkSm from '../assets/images/logo_sm_dark.png';
import logo from '../assets/images/logo.png';
import helpBoxImage from '../assets/images/help-icon.svg';
import profileImg from '../assets/images/users/avatar-1.jpg';
import iconeLupa from '../assets/images/icons/1.png';
import iconePessoa from '../assets/images/icons/3.png';
import iconePessoaRed from '../assets/images/icons/4_red.png';
import iconeProdutos from '../assets/images/icons/5.png';
import iconeProdutosRed from '../assets/images/icons/6_red.png';
import iconeVendas from '../assets/images/icons/7.png';
import iconeVendasRed from '../assets/images/icons/8_red.png';
import iconeFinanceiro from '../assets/images/icons/11.png';
import iconeFinanceiroRed from '../assets/images/icons/12_red.png';
import iconeRelatorios from '../assets/images/icons/13.png';
import iconeRelatoriosRed from '../assets/images/icons/14_red.png';
import iconeEstoque from '../assets/images/icons/9.png';
import iconeEstoqueRed from '../assets/images/icons/10_red.png';



import AppMenu from './AppMenu';

type SideBarContentProps = {
    menuClickHandler?: {},
    isLight: boolean,
    hideUserProfile: boolean,
};

const SideBarContent = ({ hideUserProfile, isLight, menuClickHandler }: SideBarContentProps) => {
    
    var[selecaoDoMenu,setSelecaoDoMenu] = useState({usuarios:true, livros:false});
    const history = useHistory();

    function irParaUsuarios(){
        setSelecaoDoMenu({...selecaoDoMenu, usuarios:true, livros:false});
        let path = `usuarios`; 
        history.push(path);
    }

    function irParaLivros(){
        setSelecaoDoMenu({...selecaoDoMenu, livros:true, usuarios:false});
        let path = `livros`; 
        history.push(path);
    }

    return (
        <React.Fragment>

            {!hideUserProfile && (
                <div className="leftbar-user">
                    <Link to="/">
                        <img src={profileImg} alt="" height="42" className="rounded-circle shadow-sm" />
                        <span className="leftbar-user-name">Dominic Keller</span>
                    </Link>
                </div>
            )}

                                <div style={{display:'block', width:'100%', height:'auto'}}>
                                    
                                <div style={{width:'100%', display:'inline-block', textAlign:'center', marginTop:'20%'}}>
                                        <div>
                                            <img src={iconeLupa} style={{width:'32px', height:'32px', position:'absolute', transform:'translate(20%, 20%)'}}></img>
                                            <input type="text" placeholder="     Procurar opção do menu" style={{display:'inline-block', height:'50px', textAlign:'center', color:'white',fontSize:'15px', fontWeight:'bold', background: 'linear-gradient(180deg, #8a9aca 0%, #6b7dab 35%, #8a9aca 100%)', borderRadius:'20px 20px', width:'85%'}}></input>
                                        </div>
                                    
                                    </div>

                                    <div style={{width:'100%', display:'inline-block', textAlign:'center', marginTop:'20%'}}>
                                    {selecaoDoMenu.usuarios ?
                                            (<img src={iconePessoaRed} style={{width:'32px', height:'32px', position:'absolute', transform:'translate(20%, 20%)'}}></img>)
                                            :
                                            (<img src={iconePessoa} style={{width:'32px', height:'32px', position:'absolute', transform:'translate(20%, 20%)'}}></img>)
                                        }                                        
                                    {selecaoDoMenu.usuarios ?
                                            (<button style={{display:'inline-block', height:'50px', textAlign:'center', color:'red',fontSize:'15px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Usuarios</button>)
                                            :
                                            (<button onClick={irParaUsuarios} style={{display:'inline-block', height:'50px',textAlign:'center', color:'black',fontSize:'15px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Usuarios</button>)
                                        }
                                    </div>
                                    <div style={{width:'100%', display:'inline-block', textAlign:'center', marginTop:'5%'}}>
                                    {selecaoDoMenu.livros ?
                                            (<img src={iconeProdutosRed} style={{width:'32px', height:'32px', position:'absolute', transform:'translate(20%, 20%)'}}></img>)
                                            :
                                            (<img src={iconeProdutos} style={{width:'32px', height:'32px', position:'absolute', transform:'translate(20%, 20%)'}}></img>)
                                        }                                       
                                     {selecaoDoMenu.livros ?
                                            (<button style={{display:'inline-block', height:'50px', textAlign:'center', color:'red',fontSize:'15px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Livros</button>)
                                            :
                                            (<button onClick={irParaLivros} style={{display:'inline-block', height:'50px', textAlign:'center', color:'black',fontSize:'15px', fontWeight:'bold', background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 35%, rgba(255,255,255,1) 100%)', borderRadius:'20px 20px', width:'85%'}}>Livros</button>)
                                        }                                    
                                    </div>
                                   
                                    
                                  
                                </div>

            

{/*             

                <AppMenu menuClickHandler={menuClickHandler} />
                <div className="help-box text-white text-center">
                <Link to="/" className="float-right close-btn text-white">
                    <i className="mdi mdi-close" />
                </Link>

                <img src={helpBoxImage} height="90" alt="Helper Icon" />
                <h5 className="mt-3">Unlimited Access</h5>
                <p className="mb-3">Upgrade to plan to get access to unlimited reports</p>
                <button className="btn btn-outline-light btn-sm">Upgrade</button>
            </div>
 */}            <div className="clearfix" />
        </React.Fragment>
    );
};

type LeftSidebarProps = {
    menuClickHandler?: {},
    hideLogo?: boolean,
    hideUserProfile?: boolean,
    isLight?: boolean,
    isCondensed: boolean,
};

class LeftSidebar extends Component<LeftsidebarProps> {
    menuNodeRef: any;

    constructor(props: LeftSidebarProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleOtherClick = this.handleOtherClick.bind(this);
    }

    /**
     * Bind event
     */
    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleOtherClick, false);
    };

    /**
     * Bind event
     */
    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleOtherClick, false);
    };

    /**
     * Handle the click anywhere in doc
     */
    handleOtherClick = (e: any) => {
        if (this.menuNodeRef.contains(e.target)) return;
        // else hide the menubar
        if (document.body) {
            document.body.classList.remove('sidebar-enable');
        }
    };

    /**
     * Handle click
     * @param {*} e
     * @param {*} item
     */
    /*:: handleClick: () => void */
    handleClick(e: {}) {
        console.log(e);
    }

    render() {
        const isCondensed = this.props.isCondensed || false;
        const isLight = this.props.isLight || false;
        const hideLogo = this.props.hideLogo || false;
        const hideUserProfile = this.props.hideUserProfile || false;

        return (
            <React.Fragment>
                <div className="left-side-menu"  ref={node => (this.menuNodeRef = node)} style={{backgroundColor:'#113396'}}>
                    {!hideLogo && (<React.Fragment>
                        <Link to="/" className="logo text-center logo-light" style={{marginTop:'2%'}} >
                            <span className="logo-lg" style={{backgroundColor:'#113396'}}>
                                <img src={isLight ? logoDark : logo} alt="logo" height="64" />
                            </span>
                            <span className="logo-sm" >
                                <img src={isLight ? logoSm : logoDarkSm} alt="logo" height="64" />
                            </span>
                        </Link>

                        <Link to="/" className="logo text-center logo-dark">
                            <span className="logo-lg">
                                <img src={isLight ? logoDark : logo} alt="logo" height="64" />
                            </span>
                            <span className="logo-sm">
                                <img src={isLight ? logoSm : logoDarkSm} alt="logo" height="64" />
                            </span>
                        </Link>
                    </React.Fragment>
                    )}

                    {!isCondensed && (
                        <SimpleBar style={{ maxHeight: '100%' }} timeout={500} scrollbarMaxSize={320}>
                            <SideBarContent 
                                menuClickHandler={this.handleClick}
                                isLight={isLight}
                                hideUserProfile={hideUserProfile}
                               
                            />
                        </SimpleBar>
                    )}
                    {isCondensed && (
                        <SideBarContent isLight={isLight} hideUserProfile={hideUserProfile} />
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default LeftSidebar;
