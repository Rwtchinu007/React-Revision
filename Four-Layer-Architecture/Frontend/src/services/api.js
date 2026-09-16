import axios from 'axios';
export const fetchUser = async (user) =>{
    const res = await axios.get("http://localhost:3000/api/users");
    return res.data;
}