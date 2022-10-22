import './ProfileTag.css';
import {useEffect, useState} from "react";
import axios from "axios";


const ProfileTag = (props) => {
    let subtitle;
    const [completeUser, setCompleteUser] = useState(null);

    useEffect(() => {
        axios.get('https://dummyapi.io/data/v1/user/'+props.user.id, {headers: {'app-id': "6203cac620dca44319e5e397"}})
            .then(function (response) {
                setCompleteUser(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])




    return(
        <div className={"profile-tag"} onClick={() => props.openModal(props.user)}>
            <img src={props.user.picture}  alt={props.user.lastName}/>
            <div className={"info"}>
                <span>{props.user.firstName + " " + props.user.lastName}</span>
            </div>

        </div>
    )
}

export default ProfileTag;