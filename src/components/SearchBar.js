import React from 'react';
class SearchBar extends React.Component {
    state = { term: '' }
    onInputChanged = (event) => {
        this.setState({ term: event.target.value });
    }
    onSubmitForm = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSubmitForm} className="ui form">
                    <div className="field">
                        <label>video search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChanged} ></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;