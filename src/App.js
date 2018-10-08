import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App wrapper">
        <Header>
          <Navigation />
        </Header>
        <main>
            My app will go here!
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
