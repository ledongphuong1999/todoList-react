import React from 'react';
import './App.css';
import Bottom from './Components/Bottom';
import Top from './Components/Top';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          name: 'Xin việc ở GG',
          status: true
        },
        {
          id: 2,
          name: 'Cưới vợ',
          status: false
        },
        {
          id: 3,
          name: 'Mua xe hơi',
          status: true
        },
      ]
    }
  }
  delete = (id) => {
    var tempList = this.state.list.filter(item => item.id !== id);
    this.setState({
      list: tempList
    })
  }
  edit = (id) => {
    var tempList = this.state.list.map((item) => {
      if (item.id === id) { item.status = !item.status };
      return item;
    });
    this.setState({
      list: tempList
    })
  }

  add = (work) => {
    var tempList = this.state.list;
    tempList.push(work);
    this.setState({
      list: tempList
    })
  }
  render() {
    return (
      <main>
        <Top add = {(work) => this.add(work)}/>
        <Bottom data={this.state.list} delete={(id) => this.delete(id)} edit={(id) => this.edit(id)} />
      </main>
    );
  }
}

export default App;
