import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core/';
import ReactTable from 'react-table';
import 'react-table/react-table.css'



import { getStyleOfGame } from '../actions/GameActions';

class GameList extends Component {

  componentDidMount() {
    const { getStyleOfGame, style } = this.props;
    getStyleOfGame(style);
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return <CircularProgress />
    }
    debugger;

    const columns = [
    {
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    },
    {
      Header: 'Small Blind',
      accessor: 'smallblind'
    },
    {
      Header: 'Big Blind',
      accessor: 'bigblind'
    }
  ]


    return (
      <div style={{ backgroundColor: 'white' }}>
          <ReactTable
            data={this.props.listgames}
            columns={columns}
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

export default connect(mapStateToProps, mapDispatchToProps)(GameList);