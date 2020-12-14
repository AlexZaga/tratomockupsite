import React, { useState } from 'react';
import {Table} from 'react-bootstrap';
//Function
export default function TransferTableMain(props){
    const [transactions] = useState(props.data.transactions);
    const [account] = useState(props.datacc);
    const _rows = transactions.map((item, index) => {
        if(parseInt(account) === parseInt(item.fromAccount)){
            return <tr style={{fontSize:'0.8rem'}} key={index}>
                <td>***{item.fromAccount.toString().substr(5)}</td>
                <td>{item.toAccount.toString()}</td>
                <td>
                    {new Intl.DateTimeFormat('en-IN',{
                        year: "numeric",
                        month: "short",
                        day: "2-digit"
                    }).format(new Date(item.sentAt.toString()))}
                </td>
                <td>
                    {item.amount.currency}
                    {new Intl.NumberFormat().format(parseInt(item.amount.value))}
                </td>
            </tr>
        }else{
            return ''
        }
    });
    return(
        <Table responsive="xl" bordered size="xl" style={{width:'58rem'}}>
            <thead>
                <tr style={{fontSize:'1rem'}}>
                    <th>Origin account</th>
                    <th>Destination account</th>
                    <th>Transfer Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>{_rows}</tbody>
        </Table>
    );
}