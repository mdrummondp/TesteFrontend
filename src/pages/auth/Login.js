import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { Container, Row, Col, Card, CardBody, Label, FormGroup, Button, Alert } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

import { loginUser } from '../../redux/actions';
import { isUserAuthenticated } from '../../helpers/authUtils';
import LoaderWidget from '../../components/Loader';
import logo from '../../assets/images/logo.png';

import MicrosoftLogin from "react-microsoft-login";

//import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT;

const url = process.env.REACT_APP_URL_API;
const urlInserirUsuario = url+"InserirUsuarioBasico";


const authHandler = (err, data) => {
    console.log(err, data);
};

class Login extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.adicionarUsuario = this.adicionarUsuario.bind(this);
        this.state = {
            username: '',
            password: '',
            usuario:{nome:'', idade:'', telefone:'', email:'', senha:''}
        };
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleValidSubmit = (event, values) => {
        this.props.loginUser(values.username, values.password, this.props.history);
    };

    renderRedirectToRoot = () => {
        const isAuthTokenValid = isUserAuthenticated();
        if (isAuthTokenValid) {
            return <Redirect to="/" />;
        }
    };

    adicionarUsuario(){
        fetch(urlInserirUsuario, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({nome:" ", idade:0, telefone:" ", email:this.state.email,senha:this.state.senha})
         })
         .then(function(response){
             return response.json();
         })
         .then(data =>{
            alert("Usuario Cadastrado");
         })

         .catch(error => {
            alert("Erro ao cadastrar");
         });
    }

    render() {
        const isAuthTokenValid = isUserAuthenticated();
        return (
            <React.Fragment>
                {this.renderRedirectToRoot()}

                {(this._isMounted || !isAuthTokenValid) && (
                    <div className="account-pages mt-5 mb-5">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg={5}>
                                    <Card>
                                        <div className="card-header pt-2 pb-2 text-center bg-primary" style={{ Color: "white" }}>
                                            <Link to="/">
                                                <span>
                                                    <img src={logo} alt="" height="100" />
                                                </span>
                                            </Link>
                                        </div>

                                        <CardBody className="p-4 position-relative">
                                            {/* preloader */}
                                            {this.props.loading && <LoaderWidget />}

                                            <div className="text-center w-75 m-auto">
                                                <h4 mb-3 className="text-dark-50 text-center mt-0 font-weight-bold">
                                                    Login
                                                </h4>
                                            </div>

                                            {this.props.error && (
                                                <Alert color="danger" isOpen={this.props.error ? true : false}>
                                                    <div>{this.props.error}</div>
                                                </Alert>
                                            )}

                                             <AvForm onValidSubmit={this.handleValidSubmit}>
                                                <AvField
                                                    name="username"
                                                    label="Usuário"
                                                    placeholder="Digite o nome do seu usuário"
                                                    value={this.state.username}
                                                    required
                                                />

                                                <AvGroup>
                                                    <Label for="password">Senha</Label>
                                                    <AvInput
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        placeholder="Digite a sua senha"
                                                        value={this.state.password}
                                                        required
                                                    />
                                                    <AvFeedback>Campo inválido</AvFeedback>
                                                </AvGroup>

                                                <FormGroup className="text-center mt-4" >
                                                    <Button color="success">Acessar</Button>
                                                </FormGroup>

                                            </AvForm>
                                           
                                         </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg={5}>
                                    <Card>
                                        <CardBody className="p-4 position-relative">
                                         <div style={{marginTop:'2%'}}>
                                                    <div>
                                                    <div className="text-center w-75 m-auto">
                                                <h4 mb-3 className="text-dark-50 text-center mt-0 font-weight-bold">
                                                    Não é cadastrado ?
                                                </h4>
                                                </div>
                                                        <div style={{textAlign:'center'}}> 
                                                            <input type='text' placeholder="Usuário" style={{marginTop:'2%',width:'90%', fontSize:'14px', background:'#37404A', color:'#e3eaef'}} onChange={(e) => this.setState({email:e.target.value})} value={this.state.email}></input>
                                                            <input type='password' placeholder="Senha" style={{marginTop:'2%',width:'90%', fontSize:'14px', background:'#37404A', color:'#e3eaef'}}onChange={(e) => this.setState({senha:e.target.value})} value={this.state.senha}></input>

                                                        </div>   
                                                        <div style={{display:'inline-block', width:'100%', height:'auto', margin:'2.5% auto',textAlign:'left', fontSize:20, textAlign:'center'}}>
                                                    </div>

                                                </div>
                                                <div className="text-center">
                                                    <Button color="primary" onClick={() => this.adicionarUsuario(this)}>Cadastrar-se</Button>
                                                </div>
                                            </div>
                                         </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { user, loading, error } = state.Auth;
    return { user, loading, error };
};

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
