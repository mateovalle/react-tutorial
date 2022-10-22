import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {startFetchItems} from "../../redux/actions.tsx";
import * as React from "react";
import ItemIcon from "./ItemIcon.tsx";
import './ItemIconsPage.css'
import axios from "axios";
import ItemModal from "./ItemModal.tsx";

const ItemIconsPage = (props) => {
    const [open, setOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})

    const allItems = useSelector((state) => {return state.items.allItems})
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startFetchItems())
    }, [])

    const openModal = (item) => {
        console.log('openModal')
        console.log(item.name)
        setOpen(true)
        axios.get('https://pokeapi.co/api/v2/item/' + item.name)
            .then(response => setSelectedItem(response.data))
            .catch(e => console.log(e))
    }

    const handleClose = () => {
        setOpen(false)
        setSelectedItem({})
    }

    const filterItems = (items, query) => {
        if (!query) {
            return items;
        }

        return allItems.filter((item) => {
            const itemName = item.name.toLowerCase();
            return itemName.includes(query.toLowerCase());
        });
    };

    const filteredItems = filterItems(allItems, props.itemNameQuery);

    return (allItems && allItems.length > 0 &&
        <div>
            <div className={'item-icons-grid'}>
                {filteredItems.map((item) => {
                    return <ItemIcon key={item.name} name={item.name} openModal={() => openModal(item)} closeModal={() => handleClose()}/>
                })}
            </div>
            <ItemModal open={open} handleClose={handleClose} item={selectedItem} />
        </div>
    )

}

export default ItemIconsPage;