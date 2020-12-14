import React, {useState} from 'react';
import { Table } from 'react-bootstrap';
//Function
export default function AccountBalance(props){
    const [balance] = useState(props.data);
    const _rows = balance.map(item =>(
        <tr style={{fontSize:'0.8rem'}} key={item.account}>
            <td>***{item.account.toString().substr(5)}</td>
            <td>
                {item.balance.currency}
                {new Intl.NumberFormat().format(parseInt(item.balance.value))}
            </td>
            <td>
                {new Intl.DateTimeFormat('en-IN',{
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                }).format(new Date(item.createdAt.toString()))}
            </td>
        </tr>
    ));
    return(
        <Table bordered hover size="sm">
            <thead>
                <tr style={{fontSize:'0.8rem'}}>
                    <th>Account No.</th>
                    <th>Balance</th>
                    <th>Date of Latest Transfer</th>
                </tr>
            </thead>
            <tbody>{_rows}</tbody>
        </Table>
    )
}