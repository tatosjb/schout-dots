import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles.scss'

class RankingToolbar extends React.PureComponent {

  render() {
    return (
      <AppBar color="inherit" className={styles.appBar} position="static">
        <Toolbar>
          <Typography type="title" style={{ flex: 1 }}>
            Ranking de pontos conquistados
          </Typography>
          <div>
            <Button>
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default RankingToolbar
