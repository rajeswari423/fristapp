import React from 'react';
import axios from 'axios';

export default class BookService extends React.Component {
 
    constructor(props) {
        super(props);    
       this.state = {
       persons: []
      }
    }

  componentDidMount() {
    axios.get(`https://60a3781e7c6e8b0017e2701c.mockapi.io/api/v1/books`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person =>
             <li>{person.author}
             {person.id}
             {person.avatar} 
             </li>
             
             )
        }
      </ul>
    )
  }
}