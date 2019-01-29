import React from 'react'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Explore from '@material-ui/icons/Explore';
import styles from './styles.scss'


class RankingTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { scouts: [] };
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
    const { scouts, filter } = this.props

    return (
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
            {scouts.map((scout, index) => (
              <React.Fragment key={index}>
              {scout.name.toUpperCase().includes(filter.toUpperCase()) &&
                <TableRow>
                  <TableCell className={styles.icon}> {index < 3 && <Explore className={this.iconColor(index)} />}</TableCell>
                  <TableCell className={styles.point}>{scout.score}</TableCell>
                  <TableCell className={styles.name}>{scout.name}</TableCell>
                </TableRow>
              }
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Grid>
    )
  }
}
export default RankingTable