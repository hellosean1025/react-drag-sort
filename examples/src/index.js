import React from 'react'
import ReactDOM from 'react-dom'
import EasyDragSort from './EasyDragSort.js'

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        list: [{name: 'title'},{name: 'name'},{name: 'code'},{name: 'email'}],
        curMoveItem: null
      }
  }

  handleDragMove = (data, from, to) => {
    this.setState({
      curMoveItem: to,
      list: data
    })
  }

  handleDragEnd = ()=>{
    this.setState({
      curMoveItem: null
    })
  }

  render() {


      return (
          <div>
              <h3>react-drag-sort</h3>
              <ul>
              <EasyDragSort onDragEnd={this.handleDragEnd} onChange={this.handleDragMove} data={this.state.list} >
                
                  {this.state.list.map( (item, index) =>{
                    return <div className={this.state.curMoveItem === index? 'item active' : 'item'}
                      key={item.name}
                      onClick={()=> {
                        let newItems = this.state.list.slice();
                        newItems.splice(index, 1);
                        this.setState({list: newItems});
                      }}
                    >{item.name}</div>
                  })}
              </EasyDragSort>
              </ul>
            

          </div>
      )
  }
}

const render = () => ReactDOM.render(
  <App/>, document.getElementById('app')
);

render();

// hot-reload
if (module.hot) {
  module.hot.accept();
}
