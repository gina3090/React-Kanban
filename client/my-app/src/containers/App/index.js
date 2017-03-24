import React, { Component } from 'react';
import AppTitle from '../../components/AppTitle';
import Queue from '../../components/Queue';
import Progress from '../../components/Progress';
import Done from '../../components/Done';
import Card from '../../components/Card';
import './styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appTitle: 'KANBAN',
      queueTitle: 'IN QUEUE',
      progressTitle: 'IN PROGRESS',
      doneTitle: 'DONE',
      cards: []
    };
  }

  render() {
    return (
      <div className="App">
        <AppTitle
          appTitle={this.state.appTitle}
        />
        <Queue
          queueTitle={this.state.queueTitle}
        />
        <Progress
          progressTitle={this.state.progressTitle}
        />
        <Done
          doneTitle={this.state.doneTitle}
        />
      </div>
    );
  }
}

export default App;