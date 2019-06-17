import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';

const contactData = [
  {
    firstName: "Bella",
    lastName: "Narn"
  },
  {
    firstName: "John",
    lastName: "Bennet"
  },
  {
    firstName: "Phillip",
    lastName: "Porter"
  },
  {
    firstName: "Jessica",
    lastName: "Christensen"
  },
  {
    firstName: "Mark",
    lastName: "Becker"
  },
  {
    firstName: "Monica",
    lastName: "Castio"
  }
]

function NavigationBar({ setPageView }) {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => setPageView('Inbox')}>
        <Text>Inbox</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setPageView('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setPageView('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

function InboxContact({ name }) {
  return (
    <View style={styles.inboxContact}>
      <Text>{name}</Text>
    </View>
  )
}

function InBox() {
  return (
    <View>
      {contactData.map(contact => {
        return (
          <InboxContact
            name={contact.firstName + ' ' + contact.lastName}
            key={contact.firstName + ' ' + contact.lastName}
          />
        )
      })}
    </View>
  )
}

function Profile() {
  return (
    <View>
      <Text>Profile Page!</Text>
    </View>
  )
}

function Home() {
  return (
    <View>
      <Text>Home Page!</Text>
    </View>
  )
}

export default function App() {
  const [ pageView, setPageView ]= useState('');

  function currentView() {
    switch (pageView) {
      case 'Home':
        return <Home />
      case 'Inbox':
        return <InBox />
      case 'Profile':
        return <Profile />
      default:
        return <Home />
    }
  }

  return (
    <View>
      <NavigationBar setPageView={setPageView}></NavigationBar>
      {currentView()}
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'pink',
    justifyContent: 'space-between',
    padding: 40,
    height: 60
  },

  inboxContact: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "black",
    margin: 5,
    fontSize: 12,
    padding: 10
  }
});
