import {useEffect, useState} from 'react'

const BudgetControll = ({budget,spents}) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);
// calculates spents made 
    useEffect(() => {
        const total = spents.reduce((total, spent) => spent.amount + total,0 );
        const totalAvailable = budget - total;
        setAvailable(totalAvailable)
          setSpent(total)
       
    }, [spents]);

    // format amount
    const formatAmount =(amount)=>{
        return amount.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Grafica Aqui</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Budget: </span> {formatAmount(budget)}
            </p>
            <p>
                <span>Available: </span> {formatAmount(available)}
            </p>
            <p>
                <span>Spent: </span> {formatAmount(spent)}
            </p>
        </div>
    </div>
  )
}

export default BudgetControll