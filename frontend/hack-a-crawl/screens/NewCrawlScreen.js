import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Picker, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import MultiSelect from 'react-native-multiple-select';

export default class NewCrawlScreen extends Component {
	static navigationOptions = {
		header: null,
  };

	constructor(props) {
    super(props);
    this.state = {
			crawlName: null,
			crawlLocation: null,
			crawlPriceRange: null,
			crawlStartTime: null,
			crawlEndTime: null,
			crawlTimeSpentOnEachPub: null,
			crawlCreator: null,
			crawlInvitedUsers: [],
			startDateTimePickerVisible: false,
			endDateTimePickerVisible: false,
		};

		this.items = [{
	    id: '92iijs7yta',
	    name: 'Ondo',
	  }, {
	    id: 'a0s0a8ssbsd',
	    name: 'Ogun',
	  }, {
	    id: '16hbajsabsd',
	    name: 'Calabar',
	  }, {
	    id: 'nahs75a5sg',
	    name: 'Lagos',
	  }, {
	    id: '667atsas',
	    name: 'Maiduguri',
	  }, {
	    id: 'hsyasajs',
	    name: 'Anambra',
	  }, {
	    id: 'djsjudksjd',
	    name: 'Benue',
	  }, {
	    id: 'sdhyaysdj',
	    name: 'Kaduna',
	  }, {
	    id: 'suudydjsjd',
	    name: 'Abuja',
	  }];
  }

  _onSelectedFriendsChange = selectedFriends => {
    this.setState({ crawlInvitedUsers: selectedFriends });
  };

	_showStartDateTimePicker = () => this.setState({ startDateTimePickerVisible: true });

	_showEndDateTimePicker = () => this.setState({ endDateTimePickerVisible: true });

	_hideStartDateTimePicker = () => this.setState({ startDateTimePickerVisible: false });

	_hideEndDateTimePicker = () => this.setState({ endDateTimePickerVisible: false });

	_handleStartDateTimePicked = (dateTime) => {
		this.setState({crawlStartTime: dateTime})
	  this._hideStartDateTimePicker();
	};

	_handleEndDateTimePicked = (dateTime) => {
		this.setState({crawlEndTime: dateTime})
	  this._hideEndDateTimePicker();
	};

	_checkTime = (time) => {
	  if (time < 10) {
	    time = "0" + time;
	  }
	  return time;
	}

	_dateTimeToString = (dateTime) => {
		const h = dateTime.getHours();
		let m = dateTime.getMinutes();
		const day = dateTime.getDate();
		const month = dateTime.getMonth() + 1;
		const year = dateTime.getFullYear();
		m = this._checkTime(m);
		return h + ':' + m + ' ' + day + '/' + month + '/' + year;
	};

  render() {
		const {navigate} = this.props.navigation;
		const startTime = (this.state.crawlStartTime === null) ? '' : this._dateTimeToString(this.state.crawlStartTime);
		const endTime = (this.state.crawlEndTime === null) ? '' : this._dateTimeToString(this.state.crawlEndTime);
		console.log(this.state.crawlEndTime);
		console.log(this.state.crawlStartTime);
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.field}
          placeholder="Name"
          onChangeText={(name) => this.setState({crawlName: name})}
        />
				<TouchableOpacity style={styles.field} onPress={this._showStartDateTimePicker}>
          <Text>Start Date/Time {startTime}</Text>
        </TouchableOpacity>
				<DateTimePicker
          isVisible={this.state.startDateTimePickerVisible}
          onConfirm={this._handleStartDateTimePicked}
          onCancel={this._hideStartDateTimePicker}
					mode='datetime'
        />
				<TouchableOpacity style={styles.field} onPress={this._showEndDateTimePicker}>
          <Text>End Date/Time {endTime}</Text>
        </TouchableOpacity>
				<DateTimePicker
          isVisible={this.state.endDateTimePickerVisible}
          onConfirm={this._handleEndDateTimePicked}
          onCancel={this._hideEndDateTimePicker}
					mode='datetime'
        />

				<MultiSelect
          hideTags
          items={this.items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.crawlInvitedUsers}
          selectText="Invite Friends..."
          searchInputPlaceholderText="Search Friends..."
          onChangeInput={ (text)=> console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
				<SectionedMultiSelect
          items={items}
          uniqueKey='id'
          subKey='children'
          iconKey='icon'
          selectText='Invite friends...'
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this._onSelectedFriendsChange}
          selectedItems={this.state.crawlInvitedUsers}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		paddingTop: 50,
		paddingLeft: 10,
  },
	field: {
		height: 60,
		fontSize: 16,
	}
});
