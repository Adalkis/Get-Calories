import axios from 'axios';

export default{
    async  loginUser(form){
        let data = await axios.post('http://localhost:8000/api/login', form, {withCredentials:true});
        return data;
    }
}