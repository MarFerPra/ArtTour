import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { withRouter, Redirect } from 'react-router-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements'
import logo from './../../assets/viewer-logo.png';
import styles from './../styles/EntryCode';
import {setArtCode,
  fetchArtInfo,
  setInputError,
  fetchInfo
} from './../actions/infoActions';

const EntryCode = ({
  data,
  artCode,
  inputError,
  setArtCode,
  setInputError,
  fetchArtInfo,
  fetchInfo,
}) => (
  <KeyboardAvoidingView style={styles.wrapper} behavior={'padding'}>
    {
      !data.loading &&
      !data.error &&
      data.title &&
      data.body &&
      <Redirect to="/info" />
    }
		<Image source={logo} style={styles.logo} />
    <View style={styles.inputWrapper}>
      <FormInput
        value={artCode}
        onChangeText={ (text) => {setArtCode(text)} }
        placeholder='Insert art piece code here'
      />
      <FormValidationMessage>{inputError || data.error}</FormValidationMessage>
    </View>
		<View style={styles.continueBtnWrapper}>
			<Button
				onPress={ () => {
          if(!artCode) {
            setInputError('Code required')
          } else {
            fetchInfo(artCode);
          }
        } }
				title='Accept'
				large
				backgroundColor={'#1e88e5'}
				borderRadius={5}
			/>
		</View>
	</KeyboardAvoidingView>
)

const mapStateToProps = ({information: {artCode, inputError, data}}) => ({
  artCode,
  inputError,
  data
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setArtCode,
    fetchArtInfo,
    setInputError,
    fetchInfo,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryCode);
