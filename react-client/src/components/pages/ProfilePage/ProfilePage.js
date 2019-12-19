import React, {Component} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {loadPlayerData} from "../../UserFunctions";


class ProfilePage extends Component {
     username;

    constructor(props){
        super(props);
        this.state = {
            p_id: 0,
            username: '',
            firstName: '',
            lastName: '',
            jerseyNumber: null,
            height: 0,
            weight: 0,
            isAdmin: 0,
            isFormer: 0,
            errors: {}
        };
    }


    componentDidMount() {
        try{
            /*const decoded = jwt_decode(window.$userToken);
            console.log(decoded);
            this.setState({
                username: decoded.username,
                firstName: decoded.firstName,
                lastName: decoded.lastName,
                jerseyNumber: decoded.jerseyNumber
            });*/
            loadPlayerData().then(response => {
                const data = response.data.data;
                console.log(data);
                const players = data.map(p =>
                    <div>
                        {
                            localStorage.username === p.username ? console.log("yes") : console.log("no")
                        }
                        <p className="m-0">
                            {localStorage.username === p.username ? "Name: " + p.firstName + " " : null}
                            {localStorage.username === p.username ? p.lastName : null}

                        </p>
                        <p className="m-0">
                            {localStorage.username === p.username ? "Jersey Number: " + p.jerseyNumber : null}
                        </p>
                        <p className="m-0">
                            {localStorage.username === p.username ? p.height <= 0 ? "No saved height" : "Height: " + p.height + "cm" : null}
                        </p>
                        <p className="m-0">
                            {localStorage.username === p.username ? p.weight <= 0 ? "No saved weight" : "Weight: " + p.weight + "kg" : null}
                        </p>
                        <p className="m-0">
                            {localStorage.username === p.username ? p.isAdmin === 1 ? "Admin: Yes" : "Admin: No" : null}
                        </p>
                        <p className="m-0">
                            {localStorage.username === p.username ? p.isFormer === 1 ? "Former Player: Yes" : "Former Player: No" : null}
                        </p>
                        {localStorage.username === p.username ?  console.log(this.state.username = p.lastName) : null}
                        {localStorage.username === p.username ?  console.log(this.state.username = p.lastName) : null}
                    </div>
                );
                this.setState({players})})
                .catch(err => {
                    console.log(err);
                    throw err})
        }catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="container">
                {/*to be added: instead of "Player" it will be the player's first name*/}
                <h1>Profile {}</h1>
                <p>{this.state.players}</p>
                <p>{this.state.username}</p>
            </div>

        );
    }
}

export default ProfilePage;