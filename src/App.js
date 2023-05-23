import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Aside,Nav,Footer} from './Layouts';
import {Dashboard} from './Layouts/Content';
import { Visions } from './Layouts/Plugins';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <Aside />
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-x-hidden">
          <Nav />
          <div className="container-fluid py-4">
            <Routes>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/visions" element={<Visions />} />
            </Routes>

            <Footer />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
