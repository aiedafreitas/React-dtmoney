
import { useContext } from 'react';
import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';




export function Summary () {


const {transactions} = useContext(TransactionsContext);

console.log(transactions);


return (
    <Container>
    <div>
    <header>
        <p>Entradas</p>
        <img className="img" src={incomeImg} alt="Entradas" />
        <strong>R$ 1.000,00</strong>
    </header>        
    </div>
    
    
    <div >
    <header>
        <p className="title">Saídas</p>
        <img className="img" src={outcomeImg} alt="Saída" />
        <strong>- R$ 500,00</strong>
    </header>        
    </div>

    <div className="highlight-background">
    <header>
        <p>Total</p>
        <img className="img" src={totalImg} alt="Total" />
        <strong>R$ 500,00</strong>
    </header>        
    </div>

    </Container>
);

}