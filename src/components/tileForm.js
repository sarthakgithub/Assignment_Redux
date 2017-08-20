 import React from 'react';
 import { getData, updateData } from '../dataapi/api.js';
 import PropTypes from 'prop-types';

 class TileForm extends React.PureComponent {
     constructor(props) {
         super(props);
     }
     componentDidMount() {
        this.props.dispatchFilteredData(this.props.match.params.id);
     }
     render() {
         return (
             <div>
                 {
                 (this.props.editState ?
                     <div>
                         {
                         <InfoEdit onEditToggle={this.props.handleEditState} tile={this.props.filteredTileData} saveAction={this.props.saveTileData}/>}
                         <Info onEditToggle={this.props.handleEditState} tile={this.props.filteredTileData} />
                     </div> : <Info onEditToggle={this.props.handleEditState} tile={this.props.filteredTileData} />)
                 }
             </div>
         );
     }

 }

 const Info = ({ tile,onEditToggle }) => {
     return (


         <div className="description form-group divTable">

             <div className="headRow">
                 <div>Image Details</div>
             </div>

             <div className="divRow">
                 <div className="divCell">Image Title :</div>
                 <div className="divCell">{tile.title}</div>
             </div>

             <div className="divRow">
                 <div className="divCell">Image Name :</div>
                 <div className="divCell">{tile.name}</div>
             </div>

             <button className="edit btn btn-primary" type="button" onClick={onEditToggle}>Edit</button>

         </div>
     );
 };

 class InfoEdit extends React.PureComponent {
     constructor(props) {
         super(props);
         this.state ={
             tile:{},
             temp:{}
         };
         this.state.tile ={title:'',name:''};
         this.onChange = this.onChange.bind(this);
         this.saveActionFunction = this.saveActionFunction.bind(this)
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

 export default TileForm;