import React, { Component } from 'react'

export default class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                id: Math.floor(Math.random() * 1000) + 1,
                name: '',
                status: false
            }
        }
    }

    isChange(e) {
        this.setState({
            item: {
                id: this.state.item.id,
                name: e.target.value,
                status: this.state.item.status,
            }
        })
    }

    addClick = (work) => {
        this.props.add(work);
        this.setState({
            item: {
                id: Math.floor(Math.random() * 1000) + 1,
                name: '',
                status: this.state.item.status,
            }
        });
    }

    render() {
        return (
            <div className="add">
                <h5>Danh sách những việc cần làm trong năm</h5>
                <form>
                    <div className="btn-group">
                        <input onChange={this.isChange.bind(this)} id="name" type="text" name="name" className="form-control" placeholder="Title..." defaultValue={this.state.item.name} />
                        <input type='reset' onClick={(work) => this.addClick(this.state.item)} className="btn btn-secondary" value='Thêm'/>
                    </div>
                </form>

            </div>

        )
    }
}
