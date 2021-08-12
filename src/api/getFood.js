import axios from 'axios';

export default{
    async getFood(name){
        let data =  await axios.get(`https://api.calorieninjas.com/v1/nutrition?query=${name}`, {headers: { 'X-Api-Key': 'nGF7lt3Se6rxCPfgwx/mzg==FhaakZXNdzllnl7c'}});
        return data;
        


    }
}