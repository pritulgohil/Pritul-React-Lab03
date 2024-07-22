import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const expenseItems = [
  {
    id: '1',
    description: 'Health Insurance',
    cost: 300,
    expenseDate: '2023-05-10',
    type: 'Insurance',
    remarks: 'Monthly health insurance',
  },
  {
    id: '2',
    description: 'Water Bill',
    cost: 80,
    expenseDate: '2024-07-12',
    type: 'Utilities',
    remarks: 'Monthly water bill',
  },
  {
    id: '3',
    description: 'Mobile Service',
    cost: 40,
    expenseDate: '2024-07-11',
    type: 'Utilities',
    remarks: 'Monthly mobile service',
  },
  {
    id: '4',
    description: 'Mortgage Payment',
    cost: 1000,
    expenseDate: '2024-07-05',
    type: 'Housing',
    remarks: 'Monthly mortgage payment',
  },
  {
    id: '5',
    description: 'Bakery',
    cost: 15,
    expenseDate: '2024-07-18',
    type: 'Food & Beverage',
    remarks: 'Bought pastries',
  },
  {
    id: '6',
    description: 'Cinema',
    cost: 25,
    expenseDate: '2024-07-16',
    type: 'Entertainment',
    remarks: 'Movie night',
  },
  {
    id: '7',
    description: 'Taxi Service',
    cost: 35,
    expenseDate: '2024-07-15',
    type: 'Transportation',
    remarks: 'Ride to airport',
  },
  {
    id: '8',
    description: 'Yoga Class',
    cost: 50,
    expenseDate: '2024-07-14',
    type: 'Health & Fitness',
    remarks: 'Monthly yoga class fee',
  },
  {
    id: '9',
    description: 'Magazine Subscription',
    cost: 10,
    expenseDate: '2024-07-13',
    type: 'Entertainment',
    remarks: 'Monthly magazine subscription',
  },
  {
    id: '10',
    description: 'Footwear',
    cost: 120,
    expenseDate: '2024-07-10',
    type: 'Shopping',
    remarks: 'Bought new shoes',
  },
];

export default function ExpenseListScreen({navigation}) {
  return (
    <View style={customStyles.wrapper}>
      <Text style={customStyles.header}>Expense List</Text>
      <FlatList
        data={expenseItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('expensedetail', {expense: item})
            }
            style={customStyles.expenseItem}>
            <Text style={customStyles.expenseText}>{item.description}</Text>
            <Text style={customStyles.expenseText}>${item.cost}</Text>
            <Text style={customStyles.expenseText}>{item.expenseDate}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const customStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e8f5e9',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#388e3c',
  },
  expenseItem: {
    padding: 18,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#c8e6c9',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  expenseText: {
    fontSize: 18,
    color: '#4caf50',
  },
});
