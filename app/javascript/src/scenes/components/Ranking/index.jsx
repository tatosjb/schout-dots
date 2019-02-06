import React from 'react'
import { sortBy } from 'lodash'
import styles from './styles.scss'
import RankingTable from './RankingTable'
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Search from '@material-ui/icons/Search';
import RankingToolbar from './RankingToolbar'

class Ranking extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { scouts: [], searchValue: '' };
  }

  componentDidMount() {
    fetch('/api/v1/scouts')
      .then((response) => { return response.json() })
      .then((data) => { this.setState({ scouts: sortBy(data.scouts, ['score']).reverse() }) });
  }

  setSearchValue(event){
    this.setState({searchValue: event.currentTarget.value})
  }

  render() {
    return (
      <React.Fragment>
        <RankingToolbar />
        <Paper className={styles.root}>
          <Input margin='dense' value={this.props.searchValue} onChange={this.setSearchValue.bind(this)}
            className={styles.searchInput} placeholder="Pesquise um nome"/>
          <Search />
          <RankingTable scouts={this.state.scouts} filter={this.state.searchValue} />
        </Paper>
      </React.Fragment>
    )
  }
}
export default Ranking