import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {startFetchItemByName} from "../../redux/actions.tsx";
import './ItemIcon.css'

const ItemIcon = ({name, openModal}) => {
    const findName = (itemData) => {
        return itemData.name === name;
    }
    const itemData = useSelector((state) => {return state.items.loadedItems.find(findName)})
    const dispatch = useDispatch()

    useEffect(() => {
        if (!itemData){
            dispatch(startFetchItemByName({name: name}))
        }
    }, [name, itemData])

    return (
        itemData ?
           <div className={'item-container'} onClick={() => openModal(itemData)}>
               <span className={'row-title'}>{itemData.name}</span>
               <img className={'sprites'} src={itemData.sprites.default}/>
           </div>
            : <div className={'item-container'}></div>
    )
}

export default ItemIcon;