import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';




export function Summary () {
return (
    <Container>
    <div>
    <header>
        <p>Entradas</p>
        <img src={incomeImg} alt="Entradas" />
        <strong>R$ 1.000,00</strong>
    </header>        
    </div>
    
    
    <div >
    <header>
        <p>Saídas</p>
        <img src={outcomeImg} alt="Saída" />
        <strong>- R$ 500,00</strong>
    </header>        
    </div>

    <div className="highlight-background">
    <header>
        <p>Total</p>
        <img src={totalImg} alt="Total" />
        <strong>R$ 500,00</strong>
    </header>        
    </div>

    </Container>
);

}