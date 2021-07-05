import './App.css';
import { Tabs, List } from 'antd';
import React from 'react';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
export default class Todo extends React.Component {
  state = {
    todo: [1,2,3],
    complete: [4,5,6]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyTabs todo={this.state.todo} complete={this.state.complete}></MyTabs>
        </header>
      </div>
    )
  }
}
function ItemList (props) {
  return (
    <List
      dataSource={props.data}
      renderItem={item => (
          <List.Item>
            { item }
          </List.Item>
        )
      }
    >
    </List>
  )
}

function MyTabs (props) {
  console.log(props);
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="待办" key="todo">
        <ItemList data={props.todo}></ItemList>
      </TabPane>
      <TabPane tab="已完成" key="complete">
        <ItemList data={props.complete}></ItemList>
      </TabPane>
    </Tabs>
  )
}
