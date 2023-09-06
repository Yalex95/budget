import React from 'react'
import {  formatDate } from '../helpers'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
// export all images
import savingIcon from '../img/icono_ahorro.svg';
import homeIcon from '../img/icono_casa.svg';
import foodIcon from '../img/icono_comida.svg';
import spendsIcon from '../img/icono_gastos.svg';
import healthIcon from '../img/icono_salud.svg';
import subscriptionsIcon from '../img/icono_suscripciones.svg';

const Icons = {
            savings : savingIcon,
            food : foodIcon,
            home : homeIcon, 
            spends : spendsIcon,
            health : healthIcon,
            subscriptions : subscriptionsIcon
}

const Spent = ({spent,setSpentEdit,removeSpent}) => {
    const {category, name, amount, id, date} = spent

    const leadingActions =()=>(
      <LeadingActions>
        <SwipeAction onClick={() => setSpentEdit(spent)}>
          Edit
        </SwipeAction>
      </LeadingActions>
    )

    const trailingActions =()=>(
      <TrailingActions>
        <SwipeAction
          destructive={true}
          onClick={() => removeSpent(id)}
        >
          Delete
        </SwipeAction>
      </TrailingActions>
    )

  return (
    <SwipeableList>
      <SwipeableListItem 
      leadingActions={leadingActions()}
      trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
            <div className='contenido-gasto'>
              <img 
              src={Icons[category]} 
              alt={category}
              />
                <div className="descripcion-gasto">
                    <p className="category">{category} </p>
                    <p className="nombre-gasto">{name}</p>
                    <p className='fecha-gasto'>Added on: {''} <span>{formatDate(date) }</span></p>
                </div>
            </div>
            <p className="cantidad-gasto"> ${amount}</p>
        </div> 
    </SwipeableListItem>
  </SwipeableList>
  )
}

export default Spent