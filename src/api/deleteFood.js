import axios from 'axios';

export default{
    async deleteFood(id){
        let data = await axios.delete(`http://localhost:8000/api/food/${id}`);
        return data;
    }
}