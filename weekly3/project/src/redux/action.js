import axios from 'axios'
import { getUser, addUser } from "./userSlice"

const URL = "https://6362193f7521369cd06490fe.mockapi.io/team"

const getUserAsync = () => {
    return async (dispatch) => {
        try {
            const user = await axios({
                method: "get",
                url: URL
            })
            dispatch(getUser(user.data))
        } catch (err) {
            console.log(err)
        }
    }
}

export { getUserAsync }