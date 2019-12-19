import axios from 'axios';

export const register = newPlayer => {
    return axios
        .post('http://localhost:4000/players/register', {
            username: newPlayer.username,
            password: newPlayer.password,
            firstName: newPlayer.firstName,
            lastName: newPlayer.lastName,
            jerseyNumber: newPlayer.jerseyNumber
        })
        .then(response => {
            console.log("Succesfully registered: " + newPlayer.username + " " + newPlayer.password);
        })
        .catch(err => {
            console.log(err);
        });
};

export const login = player => {
    return axios
        .post('http://localhost:4000/players/login', {
            username: player.username,
            password: player.password
        })
        .then(response => {
            localStorage.setItem('playertoken', response.data);
            window.$playerToken = response.data;
            return response.data;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

export const deletePlayer = player => {
    return axios
        .post()
}

export const loadPlayerData = user => {
    return axios
        .get('http://localhost:4000/players', {})
}

export const updateUser = updateData => {
    return axios
        .post
};