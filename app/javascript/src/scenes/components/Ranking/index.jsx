import React from 'react'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Explore from '@material-ui/icons/Explore';
import Paper from '@material-ui/core/Paper';
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

  iconColor(position) {
    switch (position) {
      case 0:
        return styles.gold
      case 1:
        return styles.silver
      case 2:
        return styles.brass
      default:
        return ''
    }
  }

  render() {
    return (
      <Paper className={styles.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={styles.icon}></TableCell>
                <TableCell className={styles.point}>Pontos</TableCell>
                <TableCell className={styles.name}>Nome</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.scouts.map((scout, index) => (
                <TableRow key={index}>
                  <TableCell className={styles.icon}> {index < 3 && <Explore className={this.iconColor(index)} />}</TableCell>
                  <TableCell className={styles.point}>{scout.score}</TableCell>
                  <TableCell className={styles.name}>{scout.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Paper>
    )
  }
}
export default Ranking