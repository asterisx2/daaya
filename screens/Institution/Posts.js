import FlatList from 'react-native';
import Post from './Post';

const Posts = ({posts, onPostClicked}) => (
    <FlatList
        data = {posts}
        renderItem = {({item}) => <Post {...item} onPostClicked/>}
    />
);