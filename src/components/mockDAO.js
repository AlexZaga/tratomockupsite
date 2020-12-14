import React from 'react';

export const mockUsersDAO = {
    "users":[
        {
            "id": "7612333392",
            "username": "TratoMockUser1",
            "userpwd": "p4l4br4Cl4v3",
            "status": 1,
            "createdAt": "2012-04-23T17:15:01.100Z"
        }
    ]    
};
export var mockTransactionsDAO = {
    "transactions":[
        {
            "fromAccount":123456789,
            "toAccount":192837465,
            "amount": {
                "currency": "€",
                "value": 876.88
            },
            "sentAt": "2012-04-23T18:25:43.511Z"
        },
        {
            "fromAccount":123456789,
            "toAccount":192837465,
            "amount": {
                "currency": "€",
                "value": 654.88
            },
            "sentAt": "2012-04-23T18:25:43.511Z"
        },
        {
            "fromAccount":987654321,
            "toAccount":543216789,
            "amount": {
                "currency": "$",
                "value": 543
            },
            "sentAt": "2012-04-24T18:25:43.511Z"
        },
        {
            "fromAccount":987654321,
            "toAccount":543216789,
            "amount": {
                "currency": "$",
                "value": 987.54
            },
            "sentAt": "2012-04-24T18:25:43.511Z"
        }
    ]
};

export var mockAccountBalanceDAO = {
    "balance":[
        {
            "account":123456789,
            "balance":{
                "currency": "€",
                "value": 765095.54
            },
            "owner": 7612333392,
            "createdAt": "2012-04-23T18:25:43.511Z"
        },
        {
            "account":987654321,
            "balance":{
                "currency": "$",
                "value": 524323.54
            },
            "owner": 7612333392,
            "createdAt": "2012-04-23T18:25:43.511Z"
        },

    ]
};
export const UsersContext = React.createContext(mockUsersDAO.users);
export const TransactionsContext = React.createContext(mockTransactionsDAO.transactions);
export const AccountBalanceContext = React.createContext(mockAccountBalanceDAO.balance);
