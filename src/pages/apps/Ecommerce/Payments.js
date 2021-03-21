// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    FormGroup,
    Label,
    Input,
    InputGroup,
    InputGroupButtonDropdown,
} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, {
    PaginationProvider,
    SizePerPageDropdownStandalone,
    PaginationTotalStandalone,
    PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
import classNames from 'classnames';
import HyperDatepicker from '../../../components/Datepicker';
import PageTitle from '../../../components/PageTitle';
//import { orders } from './Data';

// OrderTable
const OrderTable = mainProps => {
    const customTotal = (from, to, size) => (
        <label className="react-bootstrap-table-pagination-total ml-2">
            Showing {from} to {to} of {size}
        </label>
    );

    const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
        <React.Fragment>
            <label className="d-inline mr-1">Display</label>
            <UncontrolledDropdown className="d-inline dropdown-sm">
                <DropdownToggle caret tag="button" type="button" className="btn btn-outline-secondary btn-sm">
                    {currSizePerPage}
                </DropdownToggle>
                <DropdownMenu>
                    {options.map((option, idx) => (
                        <DropdownItem
                            key={idx}
                            type="button"
                            className={classNames({ active: currSizePerPage + '' === option.page + '' })}
                            onClick={() => onSizePerPageChange(option.page)}>
                            {option.text}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </UncontrolledDropdown>
            <label className="d-inline ml-1">Pagamentos</label>
        </React.Fragment>
    );

    const { SearchBar } = Search;

    return (
        <PaginationProvider
            bootstrap4
            pagination={paginationFactory({
                ...mainProps.paginationOptions,
                paginationTotalRenderer: customTotal,
                custom: true,
                sizePerPageRenderer: sizePerPageRenderer,
            })}
            keyField="id"
            data={mainProps.data}
            columns={mainProps.columns}>
            {({ paginationProps, paginationTableProps }) => (
                <ToolkitProvider keyField="id" data={mainProps.data} columns={mainProps.columns} search>
                    {props => (
                        <React.Fragment>
                            <Row>
                                <Col>
                                    <div className="page-title-box">
                                        <div className="page-title-right">
                                            <form className="form-inline">
                                            <div className="form-group" style={{marginRight: "10px"}}>
                                                    <h2>Cartões</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <Input type="select" name="select" id="status" className="custom-select" style={{marginRight: "10px"}}>
                                                        <option>Selecione</option>
                                                        <option value="1">Telefone</option>
                                                        <option value="2">Documento (CPF)</option>
                                                        <option value="3">Identificação (Ban/Conta)</option>
                                                        <option value="4">Data de pagamento</option>
                                                    </Input>
                                                   
                                                    <Input placeholder="" style={{marginRight: "-15px"}}/>
                                                    <button className="btn btn-primary ml-2">
                                                        Buscar
                                                    </button>
                                                    
                                                
                                                </div>
                                                <div className="form-group">
                                                    <HyperDatepicker />
                                                </div>
                                                
                                            </form>
                                        </div>
                                        <h4 className="page-title"><br></br></h4>
                                    </div>
                                </Col>
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                headerClasses="thead-light"
                                wrapperClasses="table-responsive"
                                {...paginationTableProps}
                            />
                            
                            <Row>
                                <Col>
                                    <SizePerPageDropdownStandalone {...paginationProps} />
                                    <PaginationTotalStandalone {...paginationProps} dataSize={orders.length} />
                                </Col>
                                <Col className="react-bootstrap-table-pagination-list">
                                    <PaginationListStandalone {...paginationProps} />
                                </Col>
                            </Row>
                            
                        </React.Fragment>
                    )}
                </ToolkitProvider>
            )}
        </PaginationProvider>
    );
};

// main component
const Orders = () => {
    // custom column render
    const OrderColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <Link to="/" className="text-body font-weight-bold">
                    {cell}
                </Link>
            </React.Fragment>
        );
    };

    const OrderDateColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                {cell} <small className="text-muted">{row.order_time}</small>
            </React.Fragment>
        );
    };

    const PaymentStatusColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <h5>
                    <span
                        className={classNames('badge', {
                            'badge-success-lighten': cell === 'Pago',
                            'badge-danger-lighten': cell === 'Pagamento falhou',
                            'badge-info-lighten': cell === 'Não pago',
                            'badge-warning-lighten': cell === 'Aguardando autorização',
                        })}>
                        {cell === 'Pago' && <i className="mdi mdi-coin mr-1"></i>}
                        {cell === 'Pagamento falhou' && <i className="mdi mdi-cancel mr-1"></i>}
                        {cell === 'Não pago' && <i className="mdi mdi-cash mr-1"></i>}
                        {cell === 'Aguardando autorização' && <i className="mdi mdi-timer-sand mr-1"></i>}
                        {cell}
                    </span>
                </h5>
            </React.Fragment>
        );
    };

    const StatusColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <h5>
                    <span
                        className={classNames('badge', {
                            'badge-success-lighten': cell === 'Delivered',
                            'badge-danger-lighten': cell === 'Cancelled',
                            'badge-info-lighten': cell === 'Shipped',
                            'badge-warning-lighten': cell === 'Processing',
                        })}>
                        {cell}
                    </span>
                </h5>
            </React.Fragment>
        );
    };

    const ActionColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <Link to="/" className="action-icon">
                    {' '}
                    <i className="mdi mdi-eye"></i>
                </Link>
                <Link to="/" className="action-icon">
                    {' '}
                    <i className="mdi mdi-square-edit-outline"></i>
                </Link>
                <Link to="/" className="action-icon">
                    {' '}
                    <i className="mdi mdi-delete"></i>
                </Link>
            </React.Fragment>
        );
    };

    const CardnumberColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                {cell} <small className="text-muted">XXXX XXXX XXXX XXXX</small>
            </React.Fragment>
        );
    };

    const PhoneColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <small className="text-muted">XX XXXXX-XXXX</small>
            </React.Fragment>
        );
    };

    const NameColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <small className="text-muted">Fulano Beltrano</small>
            </React.Fragment>
        );
    };

    const CardNameColumn = (cell, row, rowIndex, extraData) => {
        return (
            <React.Fragment>
                <small className="text-muted">Fulano B Silva</small>
            </React.Fragment>
        );
    };

    const columns = [
        {
            dataField: 'order_date',
            text: 'Data de Pagamento',
            sort: true,
            formatter: OrderDateColumn,
        },
        {
            dataField: 'total',
            text: 'Valor',
            sort: false,
        },
        {
            dataField: 'payment_status',
            text: 'Status',
            sort: false,
            formatter: PaymentStatusColumn,
        },
        {
            dataField: 'order_id',
            text: 'NSU',
            sort: false,
        },
        {
            dataField: 'order_id',
            text: 'LR',
            sort: false,
        },
        {
            dataField: 'number',
            text: 'CardNumber',
            sort: false,
            formatter: CardnumberColumn,
        },
        {
            dataField: 'payment_method',
            text: 'Bandeira',
            sort: false,
            formatter: OrderColumn,
        },
        
        // {
        //     dataField: 'action',
        //     isDummyColumn: true,
        //     text: 'Data da Fatura',
        //     sort: false,
        //     classes: 'table-action',
        //     formatter: ActionColumn,
        // },
        {
            dataField: 'order_date',
            text: 'Data da Fatura',
            sort: false,
            formatter: OrderDateColumn,
        },
        {
            dataField: 'order_date',
            text: 'Data de Envio do Arquivo',
            sort: false,
            formatter: OrderDateColumn,
        },
    ];

    const columnss = [
        {
            dataField: 'order_id',
            text: 'Identificação',
            sort: true,
            
        },
        {
            dataField: 'order_id',
            text: 'Documento',
            sort: false,
        },
        {
            dataField: 'payment_status',
            text: 'Telefone',
            sort: false,
            formatter: PhoneColumn,
        },
        {
            dataField: 'order_id',
            text: 'NomeCliente',
            sort: false,
            formatter: NameColumn,
        },
        {
            dataField: 'payment_method',
            text: 'Bandeira',
            sort: false,
            formatter: OrderColumn,
        },
        {
            dataField: 'order_id',
            text: 'CardHolder',
            sort: false,
            formatter: CardNameColumn,
        },
        {
            dataField: 'number',
            text: 'CardNumber',
            sort: false,
            formatter: CardnumberColumn,
        },
        {
            dataField: 'number',
            text: 'TokenOriginal',
            sort: false,
            formatter: CardnumberColumn,
        },
        
        // {
        //     dataField: 'action',
        //     isDummyColumn: true,
        //     text: 'Data da Fatura',
        //     sort: false,
        //     classes: 'table-action',
        //     formatter: ActionColumn,
        // },
        
    ];

    const paginationOptions = {
        paginationSize: 5,
        pageStartIndex: 1,
        withFirstAndLast: false,
        showTotal: true,
        sizePerPageList: [
            {
                text: '3',
                value: 3,
            },
            {
                text: '10',
                value: 10,
            },
            {
                text: '20',
                value: 20,
            },
        ],
    };

    return (
        <React.Fragment>
{/*             <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/orders' },
                    { label: 'Cartões', path: '/apps/ecommerce/payments', active: true },
                ]}
                title={'Cartões'}
            />
 */}
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <OrderTable data={orders} columns={columnss} paginationOptions={paginationOptions} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

{/*             <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/orders' },
                    { label: 'Pagamentos', path: '/apps/ecommerce/payments', active: true },
                ]}
                title={'Pagamentos'}
            />
 */}
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <OrderTable data={orders} columns={columns} paginationOptions={paginationOptions} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Orders;
