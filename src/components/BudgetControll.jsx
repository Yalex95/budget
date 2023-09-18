import {useEffect, useState} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const BudgetControll = ({
    budget,
    setBudget,
    spents,
    setSpents,
    setIsValidBudget,
}) => {
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
    const handleReset=()=>{
        const res = confirm('Do you want to reset budget & spents?')

        if(res){
            setSpents([])
            setBudget(0)
            setIsValidBudget(false)
        }

    }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
        <CircularProgressbar value={percentage} 
                            styles={buildStyles({    // Colors
                                pathColor: percentage > 100 ? 'red' : '#3d82f6',
                                textColor: percentage > 100 ? 'red' : '#3d82f6',
                                trailColor: percentage > 100 ? 'red' : '#f5f5f5',
                            })}  
                            text={`${percentage}% Spent`} />
        </div>
        <div className="contenido-presupuesto">
            <button className='reset-app' type='button' onSubmit={handleReset}>Reset App</button>
            <p>
                <span>Budget: </span> {formatAmount(budget)}
            </p>
            <p className={`${available < 0 ? 'negativo' : ''}`}>
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