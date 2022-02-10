import './profiles.css'
import axios from "axios";
import {useEffect, useState} from "react";
import ProfileTag from "../components/ProfileTag/ProfileTag";
import Modal from "react-modal";
import ProfileModal from "../components/ProfileModal/ProfileModal";

const Profiles = () => {
    const [users, setUsers] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    const openModal = (user) =>{
        setIsOpen(true);
        axios.get('https://dummyapi.io/data/v1/user/'+user.id, {headers: {'app-id': "6203cac620dca44319e5e397"}})
            .then(function (response){
                setSelectedUser(response.data)

                console.log(selectedUser)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    const closeModal = () => {
        setIsOpen(false);
        setSelectedUser({})
    }

    useEffect(() => {
        axios.get('https://dummyapi.io/data/v1/user/', {headers: {'app-id': "6203cac620dca44319e5e397"}})
            .then(function (response) {
                setUsers(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return( users && users.length > 0 &&
        <div>
            <h3>All Profiles</h3>
            {users.map((user)=> {
                return <ProfileTag user={user} openModal={() => openModal(user)} closeModal={() => closeModal()}/>
            })}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <ProfileModal user={selectedUser}/>
            </Modal>
        </div>
    )
}

export default Profiles;