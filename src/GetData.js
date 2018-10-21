import React, { Component } from 'react';
import axios from 'axios';

export default class GetData extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            message: '',
            isLoading: true
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }


    componentDidMount() {
        const self = this;
        axios({
            method: 'get',
            url: 'http://ec2-13-251-45-154.ap-southeast-1.compute.amazonaws.com:8080/api/v1/insert-order-management?page=2&size=10',
            headers: {
                'Authorization': 'Basic dGVsa29tOmRhMWMyNWQ4LTM3YzgtNDFiMS1hZmUyLTQyZGQ0ODI1YmZlYQ=='
            }
        })
            .then(function (response) {
                self.setState({ data: response.data.data.result, message: response.message })
            })
            .catch(function (error) {
                // this.setState({message:error})
                console.log(error);
            });
    }

    render() {
        const { data } = this.state;
        console.log(data);
        return (
            <div class="container">
            <div>
                <table border='1'>
                    <tbody>
                        <tr>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Nama Project</th>
                            <th>Nama Unit</th>

                        </tr>

                        {this.state.data.map(function (data, index) {

                            return (
                                <tr key={index}>
                                    <td>{data.first_name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.project_name}</td>
                                    <td>{data.unit_name}</td>

                                </tr>
                            )

                        })}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}