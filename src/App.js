import React, { Component } from 'react'
import { Menu, Message } from 'semantic-ui-react'
import Videos from './partials/videos'
import AddVideo from './partials/add-video'
import { getParameterByName } from './helpers'

export default class App extends Component {
  
  state = { activeItem: 'Videos' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div style={{ margin: 20 }}>
        <h1>Training Videos</h1>
        {
          getParameterByName('message') &&
          <Message success>Video added!</Message>
        }
        <Menu tabular>
          <Menu.Item name='Videos' active={activeItem === 'Videos'} onClick={this.handleItemClick} />
          <Menu.Item name='Add Video' active={activeItem === 'Add Video'} onClick={this.handleItemClick} />
        </Menu>
        {
          activeItem === 'Videos' &&
          <Videos />
        }
        {
          activeItem === 'Add Video' &&
          <AddVideo />
        }
      </div>
    )
  }
}