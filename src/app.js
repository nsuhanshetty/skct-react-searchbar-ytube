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
            query: '',
            loading: false,
            message: '',
        };
        this.cancel = '';
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

    handleOnInputChange(event){
        const query = event.target.value;
        //this.setState({ query, loading: true, message: '' });
        if (!query) {
            this.setState({ query, results: {}, message: '' });
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(1, query);
            });
        }
    }

    /**
     * Fetch the search results and update the state with the result.
     *
     * @param {int} updatedPageNo Updated Page No.
     * @param {String} query Search Query.
     *
     */
    fetchSearchResults(updatedPageNo = '', query){
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        // By default the limit of results is 20
        const searchUrl = `http://localhost:3003/search/sai`; 
        //TODO : add pagenumber 
        //TODO : Search based on query
        // const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}${pageNumber}`;
        if (this.cancel) {
            // Cancel the previous request before making a new request
            this.cancel.cancel();
        }
        // Create a new CancelToken
        this.cancel = axios.CancelToken.source();
        axios
            .get(searchUrl, {
                cancelToken: this.cancel.token,
            })
            .then((res) => {
                const resultNotFoundMsg = !res.data.length
                    ? 'There are no more search results. Please try a new search.'
                    : '';
                this.setState({
                    results: res.data,//res.data.hits,
                    message: resultNotFoundMsg,
                    loading: false,
                });
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch results.Please check network',
                    });
                }
            });
    };

    render() {
        return (
            <div>
                <Header />
                {/* <UsersList/> */}
                <div className="container">
                    {/* <SearchBar   /> */}
                    {/* filterText={this.state.filterText} 
                                onFilterTextChange={this.handleFilterTextChange} */}

                    <input
                        value={this.state.query}
                        onChange={this.handleOnInputChange}
                        placeholder="Type something to search"
                    />
                    <VideosList />
                </div>
            </div>
        )
    }

    // renderSearchResults = () => {
    //     const {results} = this.state;
    //     if (Object.keys(results).length && results.length) {
    //         return (
    //             <div className="results-container">
    //                 {results.map((result) => {
    //                     return (
    //                         <a key={result.id} href={result.previewURL} className="result-items">
    //                             <h6 className="image-username">{result.user}</h6>
    //                             <div className="image-wrapper">
    //                                 <img className="image" src={result.previewURL} alt={result.user}/>
    //                             </div>
    //                         </a>
    //                     );
    //                 })}
    //             </div>
    //         );
    //     }
    // };
}

ReactDOM.render(
    // <Provider store={videoStore}>
    <App />
    //</Provider>
    , document.getElementById('root'));