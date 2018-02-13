import React, {Component} from 'react'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { viewportChange, mapClick } from './actions'
import Sidebar from '../Sidebar/Sidebar'

class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 0,
        longitude: 0,
        zoom: 1
      },
      actions: []
    }
    this._onViewportChange = this._onViewportChange.bind(this)
    this._onClick = this._onClick.bind(this)
    this.dispatchLocalAction = this.dispatchLocalAction.bind(this)
  }

  dispatchLocalAction (action) {
    this.setState(prevState => ({
      actions: prevState.actions.concat(action)
    }))
  }

  componentWillMount() {
    window.onresize = () => this.setState(prevState => ({
      viewport: {
        ...prevState.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    }));
  }

  componentWillUnmount() {
    window.onresize = null;
  }

  _onViewportChange(viewport) {
    this.setState({viewport});
    this.dispatchLocalAction(viewportChange(viewport))
  }

  _onClick(event) {
    this.dispatchLocalAction(mapClick(event))
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        showZoomControls={true}
        mapboxApiAccessToken={process.env.REACT_APP_API_KEY_MAPBOX}
        onViewportChange={this._onViewportChange}
        onClick={this._onClick}
      >
        <Sidebar
          mapActions={this.state.actions}
          emitMapAction={this.dispatchLocalAction}
        />
      </ReactMapGL>
    )
  }
}

export default MapContainer
