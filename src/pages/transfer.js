import React, { useState } from 'react';
import {Row, Col, Card, CardDeck, Container, Form, Button } from 'react-bootstrap';
import {mockTransactionsDAO} from '../components/mockDAO';
import {mockAccountBalanceDAO} from '../components/mockDAO';
import HomeHeader from '../components/genericheader';
import TransferTable from '../components/transfertable'
import Chart from '../components/chart';
//Function
export default function Home(){
    const [company] = useState('Mock Company');
    const [formlist, setFormlist] = useState('');
    const [toaccount, setToaccount] = useState('');
    const [amount, setAmount] = useState(0.00);
    const [balances] = useState(mockAccountBalanceDAO.balance);
    const [flag, setFlag] = useState('neutral-leyend');
    const [message, setMessage] = useState('');
    //Function
    function handleChangeList(e){
        e.preventDefault();
        setFormlist(e.target.value);
    };
    function handleToAccount(e){
        e.preventDefault();
        setToaccount(e.target.value);
    };
    function handleAmount(e){
        e.preventDefault();
        setAmount(e.target.value);
    };
    function handleSubmit(){
        let _toaccount = parseInt(toaccount);
        let _amount = parseFloat(amount);
        let _fromaccount = parseInt(formlist.split('|')[0]);
        let _balance = parseFloat(formlist.split('|')[1]);
        //Validate
        if(_fromaccount < 0 || isNaN(_fromaccount)){
            setFlag('error-leyend');
            setMessage('Origin Account not valid');
        }else if(_balance <= 0){
            setFlag('error-leyend');
            setMessage('Insufficient funds!!');
        }else if(!_toaccount){
            setFlag('error-leyend');
            setMessage('Destiny Account not valid => '.concat(toaccount.toString()));
        }else if(!_amount || _amount > 100000){
            setFlag('error-leyend');
            setMessage('Amount not valid => '.concat(amount.toString()));
        }else{
            setFlag('success-leyend');
            setMessage('Transaction performed success!');
        }
    };
    function handleClear(){
        window.location = "/mock/transfer";
    };
    const _accounts = balances.map(item =>(
        <option key={item.account} value={item.account.toString().concat('|').concat(item.balance.value.toString())}>
            ***{item.account.toString().substr(5)} - {item.balance.currency}{new Intl.NumberFormat().format(parseInt(item.balance.value))}
        </option>
    ));
    //Render
    return(
        <div id="container" className="App-header">
            <HomeHeader company={company}/>
            <section className="transaction-board">
                <Container fluid>
                    <Row>
                        <Col md={{ span: 2, offset: -2 }}>
                            <CardDeck style={{gridGap:'5rem', width: '60rem'}}>
                                <Card style={{borderRadius:'10px'}}>
                                    <Card.Title className="centro subtitulo">Create new transfer</Card.Title>
                                    <Card.Body>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Row>
                                                <Form.Label className="label-form">Select origin account</Form.Label>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formBasic1">
                                                    <Form.Control
                                                        as="select"
                                                        name="list"
                                                        onChange={handleChangeList}
                                                        autoComplete="off"
                                                        className="sombra"
                                                        style={{fontSize: '0.5em'}}
                                                        size="sm"
                                                        required>
                                                        <option value="-1" id="0">--Please, select account transfer--</option>
                                                        { _accounts }
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label className="label-form">Destination account</Form.Label>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formBasic2">
                                                    <Form.Control
                                                        type="text"
                                                        name="toaccount"
                                                        value={toaccount}
                                                        maxLength="15"
                                                        onChange={handleToAccount}
                                                        autoComplete="off"
                                                        className="sombra"
                                                        size="sm"
                                                        required
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Label className="label-form">Amount</Form.Label>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formBasic3">
                                                    <Form.Control
                                                        type="text"
                                                        name="amount"
                                                        value={amount}
                                                        onChange={handleAmount}
                                                        autoComplete="off"
                                                        className="sombra"
                                                        size="sm"
                                                        required
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <hr/>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formButton1">
                                                    <Button variant="primary" type="submit" className="button" size="sm">Transfer</Button>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="formButton1">
                                                    <Button variant="outline-secondary" onClick={handleClear} className="button" size="sm">Cancel</Button>
                                                </Form.Group>
                                            </Form.Row>
                                        </Form>
                                    </Card.Body>
                                    <Card.Footer className={flag} bg="transparent">{message}</Card.Footer>
                                </Card>
                                <Card border="light" bg="transparent">
                                    <Card.Body>
                                        <div>
                                            <Chart data={mockTransactionsDAO}/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="transfer-table-section centro">
                <Container fluid>
                    <Row>
                        <TransferTable data={mockTransactionsDAO} datacc="123456789"/>
                    </Row>                    
                    <Row>
                        <TransferTable data={mockTransactionsDAO} datacc="987654321"/>
                    </Row>                    
                </Container>
            </section>
        </div>
    )
}
