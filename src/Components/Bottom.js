import React, { Component } from 'react'

export default class Bottom extends Component {

    render() {
        let listWork = this.props.data.map((item) => {
            let status = (item.status) ? 'xong' : 'chua'
            return (<Item key = {item.id} id={item.id} name={item.name} status={status}
                delete={() => this.props.delete(item.id)}
                edit={() => this.props.edit(item.id)} />)
        })
        return (
            <div className="list">
                <ul id="list-work">
                    {listWork}
                </ul>
                <p>(Click vào tên công việc để chuyển từ trạng thái chưa làm sang đã làm và ngược lại)</p>
            </div>
        )
    }
}

class Item extends Component {
    deleteClick = (idWork) => {
        if (window.confirm('Bạn có chắc muốn xóa công việc này ?')) {
            this.props.delete(idWork);
        }
    }
    editClick = (idWork) => {
        this.props.edit(idWork);
    }
    render() {
        return (
            <li className={this.props.status}>
                <span onClick={(id) => this.editClick(this.props.id)}>{this.props.name}</span>
                <span onClick={(idWork) => this.deleteClick(this.props.id)} ><i className='fa fa-close'></i></span>
            </li>
        )
    }
}
