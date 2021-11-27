import * as React from 'react';
import axios from 'axios';

export default class ViewData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    axios.get('https://localhost:3000/api/data').then(res => {
      this.setState({
        data: res.data
      })
    })
  }

  deleteData = (id) => {
    const confirm = window.confirm('Are you sure?');

    if (confirm) {
      axios.delete(`https://localhost:3000/api/data/${id}`).then(res => {
        this.getData();
      })
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <table class="app-table" width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Register At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!this.state.data.length ? <tr><td colSpan="4">No Data</td></tr> : this.state.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.registerAt}</td>
                  <td>
                    <button className="app-btn">Edit</button>
                    <button className="app-btn app-btn-danger" onClick={() => this.deleteData(item.id)}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}