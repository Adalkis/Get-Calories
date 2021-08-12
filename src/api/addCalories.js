import axios from 'axios';

export default{
    async addCalories(calories){
        let data =  await axios.post('http://localhost:8000/api/food', calories);
        return data;
    }
}