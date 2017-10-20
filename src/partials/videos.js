import React, { Component } from 'react'
import Cosmic from 'cosmicjs'
import config from '../config'
import { getYouTubeID } from '../helpers'
import { Message, Loader } from 'semantic-ui-react'

export default class App extends Component {
	constructor() {
		super()
		this.state = { loading: true }
		Cosmic.getObjectsByType(config, { type_slug: config.type_slug }, (err, res) => {
			this.setState({ videos: res.objects ? res.objects.all : null, loading: false })
		})
	}
  render() {
    return (
      <div>
        {
          this.state.loading &&
          <div><Loader active content='Loading' /></div>
        }
        {
          !this.state.loading && !this.state.videos &&
          <Message warning>You don't have any videos yet.  Add videos <a href="#" name='Add Video' onClick={this.props.goTo.bind(this, 'Add Video')}>here</a>.</Message>
        }
      	{
      		this.state.videos &&
      		this.state.videos.map(video => {
      			return (
      				<div style={{ marginBottom: 60 }}>
	      				<h2>{ video.title }&nbsp;&nbsp;&nbsp;<a style={{ fontSize: '12px' }} target="_parent" href={`https://cosmicjs.com/${config.bucket.slug}/edit-object/${video.slug}`}>Edit</a></h2>
	      				<div style={{ marginBottom: 20 }}>{ video.metadata.video_text }</div>
	      				<iframe width="560" height="315" src={`https://www.youtube.com/embed/${getYouTubeID(video.metafield.youtube_video_url.value)}`} frameborder="0" allowfullscreen></iframe>
	      			</div>
      			)
      		})
      	}
      </div>
    )
  }
}