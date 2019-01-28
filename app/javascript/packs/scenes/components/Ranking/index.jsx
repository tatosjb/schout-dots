import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sortBy } from 'lodash'
import styles from './styles.scss'

class Ranking extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { scouts: [] };
  }

  componentDidMount() {
    fetch('/api/v1/scouts')
      .then((response) => { return response.json() })
      .then((data) => { this.setState({ scouts: sortBy(data.scouts, ['score']) }) });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Pontos</th>
            <th scope="col">Nome</th>
          </tr>
        </thead>
        <tbody>
          {this.state.scouts.map((scout, index) => (
            <tr key={scout.id}>
              {index === 0 && <td><FontAwesomeIcon icon="compass" color="#e2d10d" /></td>}
              {index === 1 && <td><FontAwesomeIcon icon="compass" color="#d8d8d6" /></td>}
              {index === 2 && <td><FontAwesomeIcon icon="compass" color="#8e7700" /></td>}
              {index > 2 && <td></td>}
              <td>{scout.score}</td>
              <td>{scout.name}</td>
            </tr>
          ))}
        </tbody>
      </table>)
  }
}
export default Ranking