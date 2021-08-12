import axios from 'axios';

export default{
    async  registerUser(form){
        let data = await axios.post('http://localhost:8000/api/register', form);
        return data;
    }
}