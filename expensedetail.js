import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TransactionDetailScreen({route}) {
  const {transaction} = route.params;

  return (
    <View style={customStyles.wrapper}>
      <View style={customStyles.infoWrapper}>
        <Text style={customStyles.label}>Description:</Text>
        <Text style={customStyles.value}>{transaction.description}</Text>
      </View>
      <View style={customStyles.infoWrapper}>
        <Text style={customStyles.label}>Cost:</Text>
        <Text style={customStyles.value}>${transaction.cost}</Text>
      </View>
      <View style={customStyles.infoWrapper}>
        <Text style={customStyles.label}>Expense Date:</Text>
        <Text style={customStyles.value}>{transaction.expenseDate}</Text>
      </View>
      <View style={customStyles.infoWrapper}>
        <Text style={customStyles.label}>Type:</Text>
        <Text style={customStyles.value}>{transaction.type || 'N/A'}</Text>
      </View>
      <View style={customStyles.infoWrapper}>
        <Text style={customStyles.label}>Remarks:</Text>
        <Text style={customStyles.value}>
          {transaction.remarks || 'No additional remarks'}
        </Text>
      </View>
    </View>
  );
}

const customStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffecb3',
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#fff3e0',
    borderBottomWidth: 1,
    borderBottomColor: '#bcaaa4',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6d4c41',
  },
  value: {
    fontSize: 18,
    color: '#6d4c41',
  },
});
