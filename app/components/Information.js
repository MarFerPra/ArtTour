import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import styles from './../styles/Information';
import {clearInfo} from './../actions/infoActions';
import { withRouter, Redirect } from 'react-router-native';

const Information = ({title, body, clearInfo}) => (
	<View style={styles.wrapper}>
		{ !title && !body && <Redirect to='/code' /> }
		<View style={styles.textWrapper}>
			<View>
	      <Text style={styles.title}>
					{title}
				</Text>
			</View>
	    <View>
	      <Text style={styles.body}>
					{body}
				</Text>
	    </View>
		</View>
		<View style={styles.btnWrapper}>
			<Button
				onPress={ () => clearInfo() }
				title='Back'
				large
				backgroundColor={'#1e88e5'}
				borderRadius={5}
			/>
		</View>
	</View>
)

const mapStateToProps =  ({information: {data}}) => ({
	title: data.title,
	body: data.body,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
		clearInfo
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Information);
