import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import store from './store/videoStore';
import { addUsers } from './actions/users';
import { addVideos } from './actions/videos';
import { Provider } from 'react-redux';

import Header from './components/Header';
// import UsersList from './components/UsersList';
import SearchBar from './components/SearchBox';
import VideosList from './components/VideosList';

import './css/bootstrap.min.css';
import './css/pricing.css';


import videoStore from './store/videoStore';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };
        // this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    // state = {
    //     videos: null,
    //     loading: false,
    //     value: ''
    //   };

    // handleFilterTextChange(filterText) {
    //     this.setState({
    //         filterText: filterText
    //     });
    // };

    // search = async val => {
    //     this.setState({ loading: true });
    //     const res = await axios(
    //     `http://localhost:3003/search/${val}`
    //       //`https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
    //     );
    //     const videos = await res.data.results;
    
    //     this.setState({ videos, loading: false });
    //   };

    componentDidMount() {
        // axios.get('http://localhost:3000/users')
        //     .then(response => {
        //         console.log(response.data);
        //         store.dispatch(addUsers(response.data.results));
        //     })
        axios.get('http://localhost:3003/search/sai') // + this.state.filterText
            .then(response => {
                console.log(response.data);
                store.dispatch(addVideos(response.data));
            })
    }
    // onChangeHandler = async e => {
    //     this.search(e.target.value);
    //     this.setState({ value: e.target.value });
    // };


    // get renderVideos() {
    //     let movies = <h1>There's no movies</h1>;
    //     if (this.state.movies) {
    //         movies = <VideosList list={this.state.movies} />;
    //     }

    //     return movies;
    // };

    render() {
        return (
            <div>
                <Header />
                {/* <UsersList/> */}
                <div className="container">
                    <SearchBar   />
                    {/* filterText={this.state.filterText} 
                                onFilterTextChange={this.handleFilterTextChange} */}

                    {/* <input
                        value={this.state.value}
                        onChange={e => this.onChangeHandler(e)}
                        placeholder="Type something to search"
                    /> */}
                    <VideosList />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={videoStore}>
        <App />
    </Provider>, document.getElementById('root'));