import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {startFetchItemByName, startFetchPokemon} from "../../redux/actions.tsx";
import {CircularProgress, TableBody, TableCell, TableRow} from "@mui/material";

const ItemInfoRow = ({name}) => {
    const findName = (itemData) => {
        return itemData.name === name;
    }
    const itemData = useSelector((state) => {return state.items.loadedItems.find(findName)})
    const dispatch = useDispatch()

    console.log(name)
    useEffect(() => {
        if (!itemData){
            dispatch(startFetchItemByName({name: name}))
        }
    }, [name, itemData])

    return (
        itemData ?
            <TableBody className={'table-body'}>
                <TableRow className={'table-row'}>
                    <TableCell className={'table-cell'}><img className={'sprites'} src={itemData.sprites.default}/></TableCell><TableCell></TableCell>
                </TableRow>
                <TableRow className={'table-row'}>
                    <TableCell className={'table-cell'}>Category: {itemData.category.name}</TableCell><TableCell className={'table-cell'}>Cost: {itemData.cost}</TableCell>
                </TableRow>
            </TableBody>
            : <TableRow className={'table-row'}><TableCell className={'table-cell'}><CircularProgress /></TableCell></TableRow>
    )
}

export default ItemInfoRow;