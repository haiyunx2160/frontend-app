import axios from 'axios';

export const onSignIn=(e)=>{
    e.preventDefault();

const req =axios.post('http://178.128.233.31/frontend/login',{username:'user2', password:'qqxhy7629'})
        req.then((response)=>{
            console.log(response)
        })

};
