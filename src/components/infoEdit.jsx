import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

class InfoEdit extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state ={
            tile:{},
            temp:{}
        };
        this.state.tile ={title:'',name:''};
        this.onChange = this.onChange.bind(this);
        this.saveActionFunction = this.saveActionFunction.bind(this);
    }

    componentDidMount() {
        this.setState({ tile: this.props.tile });
    }

    onChange(e){
        this.state.temp = Object.assign({},this.state.tile);
        let key = e.target.name;
        this.state.temp[key] = e.target.value;
        this.setState({tile:this.state.temp});
    }

    saveActionFunction(){
        this.props.saveAction(this.state.tile.id,this.state.tile);
    }
    render() {
        return (
            <div>

                <div className="form-parent">
                    <form className="editable-form">
                        <h3 className="edit-heading"> Edit Details</h3>
                        <div className="form-group">
                            <label>Image Title</label>
                            <input type="text" className="field form-control" name="title" value={this.state.tile.title} onChange= {this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label>Image Name</label>
                            <input type="text" className="field form-control" name="name" value={this.state.tile.name} onChange= {this.onChange}/>
                        </div>

                        <button type="button"  value="save" className="btn btn-default" onClick={this.saveActionFunction}>SAVE</button>
                        <button type="button"  value="cancel" className="btn btn-default" onClick={this.props.onEditToggle}> CANCEL </button>
                    </form>
                </div>
            </div>
        );
    }
}

InfoEdit.propTypes ={
  saveAction: PropTypes.func,
  onEditToggle : PropTypes.func
};

export default InfoEdit;