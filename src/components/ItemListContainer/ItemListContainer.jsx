import style from './ItemListContainer.module.css'

const ItemListContainer = (props) => {
  console.log(props)
  return (
    <div >
      <h1 className={style.texto}> {props.greeting}</h1>
    </div>
  )
}

export default ItemListContainer