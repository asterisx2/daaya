import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { newListingUpload } from '../actions';
import { Input } from 'react-native-elements';
const UploadForm = ({uploadStatus, newListingUpload}) => {

let {
    container, 
    form, 
    button } = styles;

    return (
        <View style={styles.container}>

            <Button title = "Post" style={styles.button} onPress={newListingUpload}/>
        </View>
    );

};

var styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    form: {
      alignSelf: 'stretch'
    },
    button: {
      height: 36,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  });
  
  let mapStateToProps = ({uploadStatus}) => ({uploadStatus});

  export default connect(mapStateToProps, { newListingUpload })(UploadForm);