import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import globoTickets from './TicketsDB';

const TicketPurchase = ({route, navigation}) => {
  const [ticketQuantity, setTicketQuantity] = useState('1');
  const { tickId } = route.params;
  const selectedEvent = globoTickets.find(tickets => tickets.eventId === tickId);

  const purchase = () => {
    var price = selectedEvent.price * ticketQuantity;
    Alert.alert(`Your cost is ${price}`);
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedEvent.event}</Text>
      <Image
        style={styles.ticketImage}
        source={selectedEvent.image}
        />
      <Text style={styles.shortDescription}>
        {selectedEvent.shortDescription}
      </Text>
      <Text style={styles.description}>
        {selectedEvent.description}
      </Text>
      <View style={styles.purchaseRow}>
        <Text style={styles.shortDescription}>Quantity :</Text>
        <TextInput
          style={styles.quantityinput}
          onChangeText={quantity => setTicketQuantity(quantity)}
          value={ticketQuantity}
          selectTextOnFocus={true}
          keyboardType='numeric'
        />
      </View>
      <Text style={styles.price}>
        Total Price: ${selectedEvent.price * ticketQuantity}
      </Text>
      <TouchableOpacity
        onPress={purchase}
        style={styles.button}
      >
        <Text style={styles.buttontext}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10
  },
  purchaseRow: {
    flexDirection: 'row',
  },
  button: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: '60%',
  },
  title: {
    fontFamily: 'Ubuntu-Regular',
    paddingBottom: 10
  },
  ticketImage: {
    width: '100%',
    height: '180',
  },
  shortDescription: {
    fontFamily: 'Ubuntu-Regular',
    paddingTop: 5,
    textAlignVertical: 'left',
  },
  description: {
    textAlign: 'left',
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    padding: 10
  },
  price: {
    fontFamily: 'Ubuntu-Regular',
    paddingTop: 5,
    paddingBottom: 10,
  },
  buttontext: {
    fontFamily: 'Ubuntu-Regular',
    textAlign: 'center',
    padding: 5
  },
  quantityinput: {
    borderWidth: 1,
    fontFamily: 'Ubuntu-Regular',
    height: 38,
    width:40,
    marginLeft:25
  },
});

export default TicketPurchase;
