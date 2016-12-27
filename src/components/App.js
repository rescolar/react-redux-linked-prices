import React from 'react'
import RoomPriceList from '../containers/RoomPriceList';
import NewRowForm from '../containers/NewRowForm';
import SimpleFilter from '../containers/SimpleFilter';


class App extends React.Component {

  componentDidMount() {
    //console.log('props:',this.props)
    this.props.loadRoomPrices()        
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <SimpleFilter filterName="roomPriceFilter"/>
        </div>
        <div className="row">
          <NewRowForm/>
        </div>
        <div className="row">
          <RoomPriceList />
        </div>
        
      </div>
    )
  }

}

export default App

