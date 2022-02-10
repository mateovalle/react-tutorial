import './ProfileModal.css';
import {useNavigate} from 'react-router-dom'
import loader from '../../svg/loader.svg'

const ProfileModal = (props) => {
    const navigate = useNavigate();
    const goToPosts = () => {
        navigate('/posts/'+ props.user.id)
    }

    return(
        props.user.picture ?
            <div>
                <div className={"modalContainer"}>
                    <img className={"modalPicture"} src={props.user.picture} />
                    <div className={"info"}>
                        <span><b>{props.user.title +" "+ props.user.firstName +" "+ props.user.lastName}</b></span>
                        <span><b>Gender: </b>{props.user.gender}</span>
                        <span><b>Date of birth: </b>{props.user.dateOfBirth}</span>
                        <span><b>Register date: </b>{props.user.registerDate}</span>
                        <span><b>Email: </b>{props.user.email}</span>
                        <span><b>Phone: </b>{props.user.phone}</span>
                    </div>
                    <div className={"info"}>
                        <span><b>Adress</b></span>
                        <span><b>State: </b>{props.user.location.state}</span>
                        <span><b>Street: </b>{props.user.location.street}</span>
                        <span><b>City: </b>{props.user.location.city}</span>
                        <span><b>Country: </b>{props.user.location.country}</span>
                        <span><b>Timezone: </b>{props.user.location.timezone}</span>
                    </div>
            </div>

                <button onClick={goToPosts}>See posts</button>

            </div> : <div className={"modalContainer"}><img className={"loader"} src={loader}/></div>
    )
}

export default ProfileModal;