import React from 'react';
import Header from '../layout/header/Header';
import Content from '../layout/content/Content'
import Footer from '../layout/footer/Footer';


class Home extends React.Component {
  
  render() {
    return (
      <div >
        < Header />
        < Content />
        < Footer />
      </div>
    )
  }
}

export default Home;
