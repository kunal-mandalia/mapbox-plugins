import React, {Component} from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import { sidebarClick } from './actions'

const SidebarWrapper = styled('div')`
  height: 100%;
  width: 250px;
  background-color: grey;
`

const SidebarItem = styled('div')`
  display: block;
  color: white;
  padding: 8px;
`

const SidebarTitle = styled('h1')`
  margin: 0;
  padding: 12px;
`

export class Sidebar extends Component {
  constructor (props) {
    super(props)
    this._onClick = this._onClick.bind(this)
  }

  _onClick (e) {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    this.props.emitMapAction(sidebarClick(e))
  }

  render () {
    const { mapActions } = this.props
    return (
      <SidebarWrapper onClick={this._onClick}>
        <SidebarTitle>Sidebar</SidebarTitle>
        {mapActions.map((a, i) => <SidebarItem key={i}>{a.type}</SidebarItem>)}
      </SidebarWrapper>
    )
  }
}

export default Sidebar