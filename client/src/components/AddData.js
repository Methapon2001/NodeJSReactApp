import * as React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

class AddData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, name } = this.state;
    axios.post('/api/data', { id, name }).then(res => {
      this.props.navigate('/');
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input class="app-input" type="number" name="id" placeholder="ID" value={this.state.id} onChange={this.handleChange} style={{ textAlign: 'center', width: '120px' }} />
          <input class="app-input" type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
          <button className="app-btn" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default function WithRouter(props) {
  const navigate = useNavigate();
  return (<AddData {...props} navigate={navigate}/>);
}
