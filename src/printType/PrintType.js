import React, {Component} from 'react';

class PrintType extends Component{
    render(){
        return(
            <React.Fragment>
                <select
                    onChange={event => this.props.printFilter(event.target.value)}
                    name='printtype'
                >
                    <option value='all'>all</option>
                    <option value='books'>books</option>
                    <option value='magazines'>magazines</option>
                </select>
            </React.Fragment>
        );
    }
}