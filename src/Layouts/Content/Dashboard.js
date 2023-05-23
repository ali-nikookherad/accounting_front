import React, { Component } from 'react';
import { LargeCard, MedCard, SmallCard } from '../../Components';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <SmallCard />
        <MedCard />
        <LargeCard />
      </>
    );
  }
}

// export default Dashboard;