// @flow
import React, { Component } from 'react';
import { Table, Row, Col, Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import PageTitle from '../../../components/PageTitle';

type TabsProps = {};

type TabsState = {
    activeTab?: string,
};

const Lote = () => {
    return (
        <React.Fragment>
                                        <div className="row text-left mb-0 ml-1 mt-0">
                                        <Table hover responsive className="mb-0 mt-0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Nome Arquivo</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">arq.txt</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Data Importação</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">29/10/2020</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Data Vencimento</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">29/10/2020</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Data Inicio Cobrança</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">29/10/2020</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Data Fim Cobrança</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">29/10/2020</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Data Arquivo Retorno</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">29/10/2020</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Data Envio Retorno</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">29/10/2020</h5>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        </div>
        </React.Fragment>
    );
};

const Qtde = () => {
    return (
        <React.Fragment>
                                        <div className="row text-left mb-0 ml-1 mt-0">
                                        <Table hover responsive className="mb-0 mt-0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Aguardado Validação</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">0</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Processo em Andamento</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">2</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Não Conseguiu Cobrar</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">0</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Cobrado com Sucesso</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">1</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Quantidade Cobranças</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">1</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Quantidade Importada</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">0</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Quantidade Cobrada</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">0</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Quantidade Autorizada</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">0</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Quantidade Capturada</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">0</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Quantidade Não Autorizada</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">0</h5>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        </div>
        </React.Fragment>
    );
};

const Valores = () => {
    return (
        <React.Fragment>
                                        <div className="row text-left mb-0 ml-1 mt-0">
                                        <Table hover responsive className="mb-0 mt-0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Valor Total Trailer</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">0,00</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Valor Total Importado</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">0,00</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Valor Cobrado</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">0,00</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Valor Autorizado</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">0,00</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Valor Capturado</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">0,00</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Valor Não Autorizado</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">0,00</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">Tiquete Médio</h5>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-10 mb-0 mt-0 font-weight-normal">0,00</h5>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        </div>
        </React.Fragment>
    );
};


class TabsDash extends Component<TabsProps, TabsState> {
    constructor(props: TabsProps) {
        super(props);
        this.state = { activeTab: '1' };
        this.toggle = this.toggle.bind(this);
    }

    toggle = (tab: string) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    };

    render() {
        const tabContents = [
            {
                id: '1',
                title: 'Lote',
                icon: 'mdi mdi-home-variant',
                text: <Lote />,
            },
            {
                id: '2',
                title: 'Qtde',
                icon: 'mdi mdi-account-circle',
                text: <Qtde />,
            },
            {
                id: '3',
                title: 'Valores',
                icon: 'mdi mdi-settings-outline',
                text: <Valores />,
            },
        ];

        return (
            <React.Fragment>
                                <Nav tabs className="nav-pills bg-nav-pills nav-justified">
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <NavItem key={index}>
                                                <NavLink
                                                    href="#"
                                                    className={classnames({ active: this.state.activeTab === tab.id })}
                                                    onClick={() => {
                                                        this.toggle(tab.id);
                                                    }}>
                                                    <i
                                                        className={classnames(
                                                            tab.icon,
                                                            'd-lg-none',
                                                            'd-block',
                                                            'mr-1'
                                                        )}></i>
                                                    <span className="d-none d-lg-block">{tab.title}</span>
                                                </NavLink>
                                            </NavItem>
                                        );
                                    })}
                                </Nav>

                                <TabContent activeTab={this.state.activeTab}>
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <TabPane tabId={tab.id} key={index}>
                                                    {tab.text}
                                            </TabPane>
                                        );
                                    })}
                                </TabContent>
            </React.Fragment>
        );
    }
}

export default TabsDash;
