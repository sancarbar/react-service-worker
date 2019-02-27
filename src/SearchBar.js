import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.css';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {query: ""};
        this.onQueryChanged = this.onQueryChanged.bind(this);
        this.onSearchClicked = this.onSearchClicked.bind(this);
    }


    onQueryChanged(e) {
        this.setState({query: e.target.value})
    }

    onSearchClicked(e) {
        e.preventDefault();
        this.props.onSearchClicked(this.state.query)
    }

    render() {
        return (

            <Paper className="root" elevation={1}>

                <InputBase className="input" placeholder="Search Books" onChange={this.onQueryChanged}/>
                <IconButton className="iconButton" aria-label="Search"
                            onClick={this.onSearchClicked}>
                    <SearchIcon/>
                </IconButton>

            </Paper>
        );
    }


}

