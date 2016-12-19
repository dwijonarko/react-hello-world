import React from 'react';
import {render} from 'react-dom';
import ListComponent from './ListComponent.jsx';
class TodoComponent extends React.Component{

	render(){
		return (
            <div className="todoForm">
                <label htmlFor="todoInput">
                    {this.props.teks}
                </label>
                <input type="text" id="todoInput" className="inputForm" />
                <button type="button" class="btn btn-default" onClick={ListComponent.handleSubmit}>Save</button>
                <ListComponent />
            </div>
        );
	}
}

export default TodoComponent;