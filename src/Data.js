import React, { Component } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import img from './img.jpg';


import './App.css';



export default class Data extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
          
            errors: {},
            isLoading: true
        }
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    componentDidMount() {
        const self = this;
        axios({
            method: 'post',
            url: 'http://private-anon-c885589ea7-crmindigo.apiary-mock.com/login',
            parameter: {
                "username": "mhmmdnzr@helio.id",
                "password": "thisismysecretblah"
            },
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(function (response) {
                self.setState({ data: response.data.data })
            })
            .catch(function (error) {
                // this.setState({message:error})
                console.log(error);
            });
    }

    render() {

        const { data } = this.state;
        // console.log(data);
        return (
            <div className="box">
                <Avatar id="avatar"
                    alt="Adelle Charles"
                    src={img}
                />
                <h1>Hello,{data.nama}</h1>
                <p>Email : {data.email}</p>
                <p>Gender : {data.gender}</p>
                <p>Tanggal Lahir : {data.tanggal_lahir}</p>
                <p>Kota : {data.kota_domisili}</p>
                <p>Telepon : {data.nomor_telepon}</p>
                <p>Profesi : {data.profesi}</p>

            </div>

        );
    }


}