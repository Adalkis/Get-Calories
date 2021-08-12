import axios from 'axios';

export default{
    async eatenFood(){
        let data = await axios.get('http://localhost:8000/api/food');
        return data;
    }
}