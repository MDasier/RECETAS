import { useState } from "react"

function ProductCard(props) {
  const [ toggle , setToggle ] = useState(false)

  const handleChecked = () => {
    //*pasamos un callBack a setAllProducts para tener acceso al valor actual del estado (STATE,setState)
    props.setAllProducts((estadoActual)=>{
      const clone = JSON.parse(JSON.stringify(estadoActual)) 
      clone[props.index].isPurchased = !clone[props.index].isPurchased//?cambio de valor del checheo(isPurchased)

      return clone
    })
  }
const toggleFunction = () => {
  setToggle(!toggle)
}
  return (
  <>
    <div className="product-card"  onClick={toggleFunction}>
      <h3>{props.eachProduct.receta}</h3>
      <p style={{color:props.eachProduct.dificultad==="medio"?"orange":props.eachProduct.dificultad==="difícil"?"rgb(214, 72, 72)":"green"}}>{props.eachProduct.dificultad}</p>
      <p>{props.eachProduct.tiempo} min</p>
      {/*🥑✅💪🟡⚖️⬇️⬆️🌾🆓🥬*/}
       <p>{props.eachProduct.tipo === "gluten free" ? "🌾🆓" : props.eachProduct.tipo === "ganancia muscular" ? "💪" : props.eachProduct.tipo === "perdida peso" ? "⚖️⬇️" : props.eachProduct.tipo === "vegetariana" ? "🥬" : props.eachProduct.tipo === "sin lactosa" ? "🐄🆓" :"🥑"}</p>
    </div>
    { toggle && <div className='receta-completa '>
      <h3>{props.eachProduct.descripcion}</h3>
      <p>Receta para {props.eachProduct.personas} pax</p>
      <p>{props.eachProduct.calorias} calorias aprox.</p>
      <p>{props.eachProduct.tipo}</p>
    </div>}
    
  </>
  );
}

export default ProductCard;
