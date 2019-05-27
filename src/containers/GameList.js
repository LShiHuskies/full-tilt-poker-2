import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircularProgress, Button } from '@material-ui/core/';
import ReactTable from 'react-table';
import 'react-table/react-table.css'


import { withRouter } from 'react-router'

import { getStyleOfGame } from '../actions/GameActions';

class GameList extends Component {

  componentDidMount() {
    const { getStyleOfGame, style } = this.props;
    getStyleOfGame(style);
  }

  chooseGameRoom = (row) => {
    this.props.history.push(`/gameroom/${row.id}`)
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return <CircularProgress />
    }

    const columns = [
    {
      Header: 'Table',
      accessor: 'id'
    },
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Small Blind',
      accessor: 'smallblind'
    },
    {
      Header: 'Big Blind',
      accessor: 'bigblind'
    },
    {
      Header: 'Seats'
    },
    {
      Header: 'Select Game',
      Cell: row  => (
        <Button color="primary" style={{ backgroundColor: 'lightBlue' }} onClick={() => this.chooseGameRoom(row.original)}>
          Let's Play
        </Button>
      )
    }
  ]


    return (
      <div>
          <ReactTable
            data={this.props.listgames}
            columns={columns}
            defaultPageSize={5}
            minRows={5}
            defaultSorted={[
              {
                id: "id",
                desc: false
              }
            ]}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.LoginSignUp.user,
      style: state.GameReducer.style,
      loading: state.GameReducer.loading,
      listgames: state.GameReducer.listgames
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStyleOfGame: (data) => dispatch(getStyleOfGame(data))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameList));