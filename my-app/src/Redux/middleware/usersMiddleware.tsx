import {START_FETCH_PROFILES, successFetchProfiles} from "../actions/actions.tsx";
import axios from "axios";

const usersMiddleware = ({dispatch, getState}) => (next) => (action) => {
    next(action)

    switch (action.type) {
        case START_FETCH_PROFILES:
            axios.get('https://dummyapi.io/data/v1/user/', {headers: {'app-id': "6203cac620dca44319e5e397"}})
                .then(response => dispatch(successFetchProfiles(response.data.data)))
                .catch(error =>  console.log(error));
   }
}
export default usersMiddleware;