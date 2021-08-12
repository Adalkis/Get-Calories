import axios from 'axios';

export default{
    async logoutUser(user){
        let data = axios.post('http://localhost:8000/api/logout',user, {withCredentials:true});
        console.log('estoy en logout.js')
        console.log(data )
        return data;
    }
}