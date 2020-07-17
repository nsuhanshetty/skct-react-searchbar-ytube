import { createStore } from 'redux';
import videosReducer from '../reducers/videos';

const videoStore = createStore(videosReducer);

videoStore.subscribe(() => {
 console.log('videoStore data:', videoStore.getState());
});

export default videoStore;