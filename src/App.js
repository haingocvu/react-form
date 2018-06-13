import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtPassword: '',
            txtDescription: '',
            sltGender: 3,
            rdLang: 'vi',
            chkSingle: true
        }
    }
    
    onHandleChange = event=>{
        let target = event.target;
        let name = target.name;
        let value = target.type==='checkbox'?target.checked:target.value;
        if(target.type==='checkbox') {
            this.setState({
                [name]: value
            })
        }else if(value && value.trim().length) {
            this.setState({
                [name]: value
            })
        }
    }

    onHandleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="container mt-30">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="panel panel-info">
                              <div className="panel-heading">
                                    <h3 className="panel-title">Form</h3>
                              </div>
                              <div className="panel-body">
                                    <form onSubmit={this.onHandleSubmit}>
                                        <div className="form-group">
                                            <label>User</label>
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            name="txtName"
                                            onChange={this.onHandleChange}
                                            value={this.state.txtName}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input 
                                            type="Password" 
                                            className="form-control" 
                                            name="txtPassword"
                                            onChange={this.onHandleChange}
                                            value={this.state.txtPassword}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea 
                                                name="txtDescription" 
                                                className="form-control" 
                                                rows="3"
                                                onChange={this.onHandleChange}
                                                value={this.state.txtDescription}
                                            >
                                            </textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <select 
                                                name="sltGender" 
                                                className="form-control"
                                                value={this.state.sltGender}
                                                onChange={this.onHandleChange}
                                                >
                                                <option value={1}>Male</option>
                                                <option value={0}>Female</option>
                                                <option value={3}>Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Language</label>
                                            <div className="radio">
                                                <label>
                                                    <input 
                                                        type="radio" 
                                                        name="rdLang" 
                                                        value="en" 
                                                        checked={this.state.rdLang==='en'}
                                                        onChange={this.onHandleChange}
                                                    />
                                                    English
                                                </label>&nbsp;
                                                <label>
                                                    <input 
                                                        type="radio" 
                                                        name="rdLang" 
                                                        value="vi" 
                                                        checked={this.state.rdLang==='vi'}
                                                        onChange={this.onHandleChange}
                                                    />
                                                    Vietnamese
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Status</label>
                                            <div className="checkbox">
                                                <label>
                                                    <input 
                                                        type="checkbox" 
                                                        name="chkSingle"
                                                        checked={this.state.chkSingle===true}
                                                        onChange={this.onHandleChange}
                                                    />
                                                    Single
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                                        <button type="Reset" className="btn btn-default">Reset</button>
                                    </form>
                              </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default App;
