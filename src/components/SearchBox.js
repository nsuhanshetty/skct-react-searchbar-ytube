import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {
        const filterText = this.props.filterText;
        return (
            <div className="row mb-12">
                <div className="input-group mb-2">
                    <input type="text" className="form-control" placeholder="Enter Class, Subject or Topics.." aria-label="Enter Class, Subject or Topics.." aria-describedby="button-addon2" value={filterText} onChange={this.handleFilterTextChange} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                <small id="searchHelpBlock" className="form-text text-muted">
                    Try searching for "10th class maths Trignometry" / "9th Digestive System" / "Vijayanagar Empire"
        </small>
            </div>
        );
    }
};

export default SearchBar