import React from 'react'
import { connect } from 'react-redux'
import RoomPriceList from '../containers/RoomPriceList';
import NewRowForm from '../containers/NewRowForm';




// transform the current Redux store state into the props
const mapStateToProps = (state) => {
  return {
  }
}

// return callback props to inject into the presentational component
const mapDispatchToProps = (dispatch) => {
  return {       
  }
}


class App extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <RoomPriceList />
        </div>
        <div className="row">
          <NewRowForm/>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

