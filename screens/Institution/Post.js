import { Dimensions, View, StyleSheet, TouchableNativeFeedback} from 'react-native';
import { Avatar } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        justifyContent: 'space-between',
        marginBottom: 5,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 10,
        padding: 0,
      },
      date: {
        color: 'gray',
        fontSize: 12.5,
      },
      postRow: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 6,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 6,
        width: Dimensions.get('window').width * 1,
      },
      postImage: {
        backgroundColor: 'rgba(0, 0, 0, 0.075)',
        height: 200,
      },
      userImage: {
        marginRight: 12,
      },
      wordRow: {
        marginBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 6,
      },
      wordText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 22,
      },
});

const Post = ({containerStyle, poster, image, createdDate, sentences, onPostClicked}) => (
    <TouchableNativeFeedback onPress = {onPostClicked}>
        <View style={[styles.container, containerStyle]}>
        <View style={styles.postRow}>
        <View style={styles.userImage}>
            <Avatar
            rounded
            size="medium"
            source={{
                uri: poster.avatar,
            }}
            />
        </View>
        <View>
            <Text>{poster.name}</Text>
            <Text style={styles.date}>
            {datetime.timeDifferenceForDate(createdDate)}
            </Text>
        </View>
        </View>
        {image && <Image style={styles.postImage} source={{ uri: image }} />}
        <View style={styles.wordRow}>
        <Text style={styles.wordText}>{sentences}</Text>
        </View>
    </View>
  </TouchableNativeFeedback>
);

Post.propTypes = {
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    image: PropTypes.string,
    poster: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    createdDate: PropTypes.string.isRequired,
    sentences: PropTypes.string.isRequired,
};
  
Post.defaultProps = {
    containerStyle: {},
    image: null
};

export default Post;