import * as React from 'react';
import axios from 'axios';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        users: 0,
        maxUsers: {
          city: '',
          total: 0
        },
        minUsers: {
          date: '',
          total: 0
        },
        usersByCity: []
      },
    }
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    axios.get('/api/statistics').then(res => {
      this.setState({
        data: res.data
      })
    });
  }

  render() {
    return (
      <div>
        <table class="app-table" width="100%">
          <thead>
            <tr>
              <th width="50%">City</th>
              <th width="50%">Count</th>
            </tr>
          </thead>
          <tbody>
            {!this.state.data.usersByCity.length ? <tr><td colSpan="2">No Data</td></tr> : this.state.data.usersByCity.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.city}</td>
                  <td>{item.total}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        
        <table class="app-table" width="100%">
          <thead>
            <tr>
              <th colSpan="2">Statistics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="50%">Total Users</td>
              <td width="50%">{this.state.data.users}</td>
            </tr>
            <tr>
              <td>Highest user city</td>
              <td>{this.state.data.maxUsers.city} ({this.state.data.maxUsers.total})</td>
            </tr>
            <tr>
              <td>Lowest user city</td>
              <td>{this.state.data.minUsers.city} ({this.state.data.minUsers.total})</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}