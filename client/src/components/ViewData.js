import * as React from 'react';
import Modal from 'react-awesome-modal';
import axios from 'axios';

export default class ViewData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: '',
      username: '',
      visible: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    axios.get('/api/data').then(res => {
      this.setState({
        data: res.data
      })
    })
  }

  deleteData = (id) => {
    const confirm = window.confirm('Are you sure?');

    if (confirm) {
      axios.delete(`/api/data/${id}`).then(res => {
        this.getData();
      })
    } else {
      return;
    }
  }
  openModal = () => {
    this.setState({
      visible : true
    });
  }

  closeModal = () => {
    this.setState({
      visible : false
    });
  }
  
  editData = (item) => {
    this.setState({
      id: item.id,
      username: item.username,
    });
    this.openModal();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
    }
    axios.put(`/api/data/${this.state.id}`, data).then(res => {
      this.getData();
    });
    this.closeModal();
  }

  render() {
    return (
      <div>
        <table class="app-table" width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!this.state.data.length ? <tr><td colSpan="4">No Data</td></tr> : this.state.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.updatedAt}</td>
                  <td>
                    <button className="app-btn" onClick={() => this.editData(item)}>Edit</button>
                    <button className="app-btn app-btn-danger" onClick={() => this.deleteData(item.id)}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Modal visible={this.state.visible} width="500" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
          <div className="app-modal" style={{ background: '#282c34', width: '500px', height: '300px', borderRadius: '.25rem', padding: '1rem' }}>
            <form onSubmit={this.handleSubmit}>
            <input class="app-input" type="number" name="id" placeholder="ID" value={this.state.id} onChange={this.handleChange} style={{ textAlign: 'center', width: '120px' }} />
            <input class="app-input" type="text" name="username" placeholder="Name" value={this.state.username} onChange={this.handleChange} />
            <button className="app-btn" type="submit">Submit</button>
          </form>
          </div>
        </Modal>
      </div>
    );
  }
}