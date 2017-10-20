import React, { Component } from 'react'
import { Menu, Message } from 'semantic-ui-react'
import Videos from './partials/videos'
import AddVideo from './partials/add-video'

export default class App extends Component {
  
  state = { activeItem: 'Videos' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  goTo = (where) => this.setState({ activeItem: where })
  showMessage = () => this.setState({ ...this.state, show_message: true })
  render() {
    const { activeItem } = this.state
    return (
      <div style={{ margin: 20 }}>
        <h1>Training Videos</h1>
        {
          this.state.show_message &&
          <Message success>Video added!</Message>
        }
        <Menu tabular>
          <Menu.Item name='Videos' active={activeItem === 'Videos'} onClick={this.handleItemClick} />
          <Menu.Item name='Add Video' active={activeItem === 'Add Video'} onClick={this.handleItemClick} />
        </Menu>
        {
          activeItem === 'Videos' &&
          <Videos goTo={this.goTo}/>
        }
        {
          activeItem === 'Add Video' &&
          <AddVideo goTo={this.goTo} showMessage={this.showMessage}/>
        }
      </div>
    )
  }
}