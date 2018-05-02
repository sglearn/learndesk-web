"use strict"

import React, { Component } from 'react'

import App from './App'

import { parseIDsFromHref } from './location-href'

const progress = {}

const data = [
  {
    id: '1', 
    title: 'Topic 1 is the first topic, id define topic number',
    contents: [
      {id: 0, player: 'YOUTUBE', src: 'R9ZE97rnBqE', title: 'Nick and Dave Conversation'},
      {id: 1, player: 'YOUTUBE', src: 'r6bkETisayg', title: 'How to make friend and infulence people'},
    ]
  },
  { 
    id: '1a', 
    title: 'Topic 1 is the first topic, id define topic number',
    contents: [
      {id: 0, player: 'QUIZ', src: 'R9ZE97rnBqE', title: 'Quiz for test'},
    ]
  },
  {
    id: '2', 
    title: 'The second one, whatever name can be used',
    contents: [
      {id: 0, player: 'YOUTUBE', src: 'X6a9odk6b_c', title: 'Games of Thrones theme song: piano cover '},
      {id: 1, player: 'YOUTUBE', src: 'XQMnT9baoi8', title: 'Dragonborn is comming: piano cover'},
      {id: 3, player: 'YOUTUBE', src: 'dUNm721wTec', title: 'Age of agression'},
    ]
  },
  {
    id: '3', 
    title: 'Name should not too long',
    contents: [
      {id: 0, player: 'YOUTUBE', src: 'R9ZE97rnBqE', title: 'Nick and Dave Conversation'},
      {id: 1, player: 'YOUTUBE', src: 'r6bkETisayg', title: 'The last storyline'},
    ]
  }
]

class AppData extends Component {
  constructor(props) {
    super(props);
    this.state = { data, progress }
    this.updateProgress = this.updateProgress.bind(this);
  }

  componentWillMount() {
    console.log(parseIDsFromHref());
  }

  render() {
    return (
      <App  data = {this.state.data}
            progress = {this.state.progress}
            onCompletedContent = {this.updateProgress}
      />
    )
  }

  updateProgress({topicId, contentId}) {
    if (!progress[topicId]) {
      progress[topicId] = {};
    }
    progress[topicId][contentId] = true;
    this.setState({ progress })
  }
}

export default AppData