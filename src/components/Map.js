import React, {Component} from 'react'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends Component {

  state = {
    viewport: {
      width: 600,
      height: 400,
      latitude: 51.508530,
      longitude: -0.076132,
      zoom: 0
    }
  };

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_API_KEY_MAPBOX}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    )
  }
}

export default Map
