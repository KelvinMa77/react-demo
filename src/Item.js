import React from 'react';
import { Input, Button } from 'antd';
import './Item.css'

class ItemComponent extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        status: 'preview', // preview | edit
        value: props.data
      }
    }

    changeStatus() {
        this.setState({
            status: 'edit'
        })
    }

    changeData(e) {
        this.setState({
            status: 'preview'
        })
        this.props.changeData(e.target.value, this.props.index)
    }
  
    render() {
        return (
            <div className="item-wrapper" onDoubleClick={() => this.changeStatus()}>
                { this.state.status === 'edit' ? 
                    <Input defaultValue={this.props.data} onBlur={(e) => this.changeData(e)}></Input> 
                    : 
                    <>
                        {this.props.data}
                        <Button 
                            className="inline-button" 
                            type="primary" 
                            shape="circle" 
                            size="small"
                            onClick={() => this.props.deleteData(this.props.index)}
                        >
                            X
                        </Button>
                    </>
                }
            </div>
        )
    }
}
export default ItemComponent