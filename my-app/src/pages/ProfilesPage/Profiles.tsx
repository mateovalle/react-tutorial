import './profiles.css'
import axios from "axios";
import {useEffect, useState} from "react";
import ProfileTag from "../../components/ProfileTag/ProfileTag.tsx";
import Modal from "react-modal";
import ProfileModal from "../../components/ProfileModal/ProfileModal.tsx";
import {useDispatch, useSelector} from "react-redux";
import {startFetchProfiles} from "../../Redux/actions/actions.tsx";
import {State} from "../../Redux/store.tsx";
import * as React from "react";
import BasicModal from "../../components/ProfileModal/ProfileModalMUI.tsx";

const Profiles = (props) => {
    const [open, setOpen] = React.useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    const users = useSelector((state: State) => {return state.users.users})
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startFetchProfiles())
    }, [])

    const openModal = (user) =>{
        setOpen(true);
        axios.get('https://dummyapi.io/data/v1/user/'+ user.id, {headers: {'app-id': "6203cac620dca44319e5e397"}})
            .then((response) => setSelectedUser(response.data))
            .catch((error) => console.log(error))
    }

    const handleClose = () => {
        setOpen(false);
        setSelectedUser({})
    }

    const filterUsers = (users, query) => {
        if (!query) {
            return users;
        }

        return users.filter((user) => {
            const username = user.firstName.toLowerCase() + user.lastName.toLowerCase();
            return username.includes(query.toLowerCase());
        });
    };

    const filteredUsers = filterUsers(users, props.usernameQuery);

    return( users && users.length > 0 &&
        <div>
            {filteredUsers.map((user)=> {
                return <ProfileTag user={user} key={user.id} openModal={() => openModal(user)} closeModal={() => handleClose()}/>
            })}
            <BasicModal open={open} handleClose={handleClose} user={selectedUser}/>
        </div>
    )
}

export default Profiles;