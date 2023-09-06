import {useEffect, useState} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const BudgetControll = ({budget,spents}) => {
    const [percentage, setPercentage] = useState(0);
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);
// calculates spents made 
    useEffect(() => {
        const total = spents.reduce((total, spent) => spent.amount + total,0 );
        const totalAvailable = budget - total;
        //   calculate percentage
        const newPercentage = (((budget-totalAvailable)/budget)*100).toFixed(2);
       
        setAvailable(totalAvailable)
          setSpent(total)
          setTimeout(() => {
            
        setPercentage(newPercentage)
          }, 1500);
       
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
        <CircularProgressbar value={percentage} 
                            styles={buildStyles({    // Colors
                                pathColor: '#3d82f6',
                                textColor: '#3d82f6',
                                trailColor: '#f5f5f5',
                            })}  
                            text={`${percentage}% Spent`} />
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