

import { createContext, useState, useEffect, ReactNode} from 'react'
import { api} from './services/api';


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt:string;
}


interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction [];
    createTransaction: (transaction: TransactionsInput) => Promise<void>;
}

type TransactionsInput = Omit<Transaction, 'id' | 'createdAt'>;

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    
    );

export function TransactionsProvider ({children} : TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect (() => {
    api.get ('transactions')
    .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction (transactioninput:TransactionsInput) {
      const response =  await api.post ('/transactions', {
          ...transactioninput,
          createdAt: new Date(),
      })
      const {transaction}= response.data;
        
    setTransactions([
        ...transactions,
        transaction,
        
    ]
    );

    
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>

        {children}

        </TransactionsContext.Provider>
    )
}

