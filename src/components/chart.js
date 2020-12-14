import React, { useState } from 'react';
import {Pie} from 'react-chartjs-2';

export default function Chart(props){
    const [transac] = useState(props.data.transactions);
    //Iterate object
    function handleValue(_account){
        var _value = 0;
        transac.forEach(item =>{
            if(item.toAccount === _account){
                _value += parseFloat(item.amount.value);
            };
        });
        return _value;
    };
    //Data to render
    const data = {
        labels: [
            'Acc: 192837465',
            'Acc: 543216789'
        ],
        datasets: [
            {
                data: [`${handleValue(192837465)}`, `${handleValue(543216789)}`],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB'
                ]
            }
        ]
    };
    return(
        <>
            <Pie data={data}/>
        </>
    );
}