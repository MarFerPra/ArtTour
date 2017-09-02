import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'
import logo from './../../assets/logo.png';
import styles from './../styles/LandingPage';
import { withRouter } from 'react-router-native';

const LandingPage = ({history}) => (
	<View style={styles.wrapper}>
		<Image source={logo} style={styles.logo}/>
		<View style={styles.continueBtnWrapper}>
			<Button
				onPress={ () => history.push('/code') }
				title='Continue'
				large
				backgroundColor={'#1e88e5'}
				borderRadius={5}
			/>
		</View>
	</View>
)

export default withRouter(LandingPage);
