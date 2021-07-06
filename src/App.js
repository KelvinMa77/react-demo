import './App.css';
import ItemComponent from './Item';
import { Tabs, List, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';

const { TabPane } = Tabs;

function ItemList (props) {
  return (
    <List
      dataSource={props.data}
      rowKey={() => 'index'}
      renderItem={(item,index) => (
          <ItemComponent data={item} index={index} deleteData={(i) => props.deleteData(i)} changeData={(val,i) => props.changeData(val, i)}></ItemComponent>
        )
      }
    >
    </List>
  )
}

function MyTabs (props) {
  console.log(props);
  return (
    [
      <h2>
        Todo List
      </h2>,
      <div className="btn-group">
        <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        onClick={() => props.add()}
        >
        </Button>
      </div>,
      <Tabs defaultActiveKey="1" onChange={(val) => props.changeType(val)}>
        <TabPane tab="待办" key="todo">
          <ItemList data={props.todo} deleteData={(i) => props.deleteData(i)} changeData={(val,i) => props.changeData(val, i)}></ItemList>
        </TabPane>
        <TabPane tab="已完成" key="complete">
          <ItemList data={props.complete} deleteData={(i) => props.deleteData(i)} changeData={(val,i) => props.changeData(val, i)}></ItemList>
        </TabPane>
      </Tabs>
    ]
  )
}

export default class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todo: [1,2,3],
      complete: [4,5,6],
      currentType: 'todo'
    }
  }

  addItem () {
    const arr = this.state[this.state.currentType]
    arr.push('')
    this.setState({
      [this.state.currentType]: arr
    })
  }
  changeType (value) {
    this.setState({
      currentType: value
    })
  }
  changeData (val, index) {
    const arr = this.state[this.state.currentType]
    arr[index] = val
    this.setState({
      [this.state.currentType]: arr
    })
  }
  deleteData (index) {
    const arr = this.state[this.state.currentType]
    arr.splice(index, 1)
    this.setState({
      [this.state.currentType]: arr
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyTabs 
            todo={this.state.todo} 
            complete={this.state.complete} 
            add={() => this.addItem()} 
            changeType={(val) => this.changeType(val)}
            changeData={(val, index) => this.changeData(val, index)}  
            deleteData={(index) => this.deleteData(index)}  
          ></MyTabs>
        </header>
      </div>
    )
  }
}