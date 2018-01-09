import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification'
import {
  Container,
  Content,
  View,
  Button,
  Icon,
  Text,
  Form,
  Item,
  Label,
  Input
} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';

import AppHeader from './../components/Header';
import MedForm from '../components/MedForm';

class MedicationsScreen extends Component {

  constructor() {
    super();
    this.state = {
      date: Date.now(),
      time: "08.00",
      isDatePickerVisible: false,
      isTimePickerVisible: false
    };
  }

  render() {

    var { timeStyle } = styles;

    return (
      <Container>
        <AppHeader
          headerText={'Medications'}
          headerLeft={
            <Button onPress={this._onMenuPressed.bind(this)}>
              <Icon name='menu' />
            </Button>
          }
        />

        <Content>
          <MedForm titleText={"Medicine Name"}>
            <Form>
              <Item floatingLabel>
                <Label>medicine or brand name</Label>
                <Input />
              </Item>
            </Form>
          </MedForm>

          <MedForm titleText={"Reminder Time"}>
            <Text onPress={() => this._showTimePicker()} style={timeStyle}>
              {this.state.time}
            </Text>
            <DateTimePicker
              mode="time"
              isVisible={this.state.isTimePickerVisible}
              onConfirm={this._handleTimePicked}
              onCancel={this._hideTimePicker}
            />
          </MedForm>

          <MedForm titleText={"Schedule"}>
            <Text onPress={() => this._showDatePicker()} style={timeStyle}>
              {this.state.date}
            </Text>
            <DateTimePicker
              mode="date"
              isVisible={this.state.isDatePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDatePicker}
            />
          </MedForm>

        </Content>

      </Container>
    )
  };

  _showTimePicker = () => this.setState({ isTimePickerVisible: true });

  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  _showDatePicker = () => this.setState({ isDatePickerVisible: true });

  _hideDatePicker = () => this.setState({ isDatePickerVisible: false });

  _handleTimePicked = (date) => {
    var time = date.toTimeString().split(' ')[0].split(':')
    this.setState({ time: time[0] + ':' + time[1] })
    this._hideTimePicker();
  }

  _handleDatePicked = (date) => {

    this.setState({ date: date.toDateString() })
    this._hideDatePicker();
  }

  _setNotification() {
    var myNoti = PushNotification.localNotification({
      title: "My Notification Title",
      message: "My Notification Message",
      actions: '["Yes", "No"]'
    })

  }

  _onMenuPressed() {
    this.props.navigation.navigate("DrawerToggle");
  }
};

const styles = {
  timeStyle: {
    fontSize: 18,
    color: "#1686C4",
    padding: 15,
  }
}

export default MedicationsScreen;