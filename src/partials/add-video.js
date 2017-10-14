import React, { Component } from 'react'
import { Form } from 'compounds'
import Cosmic from 'cosmicjs'
import config from '../config'

export default class App extends Component {
	handleSubmit(form_component, form_elements) {
    const params = {
    	title: form_elements[0].value,
    	metafields: form_elements,
    	type_slug: config.type_slug,
    	options: {
    		content_editor: 0
    	}
    }
    Cosmic.addObject(config, params, (err, res) => {
    	window.location.href = window.location.href + '&message=video-added'
    })
  }
  render() {
  	return (
      <div>
        <Form onSubmit={ this.handleSubmit.bind(this) } config={ config }/>
      </div>
    )
  }
}