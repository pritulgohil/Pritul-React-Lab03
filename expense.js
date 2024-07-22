import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const expenseRecords = [
  {
    id: '1',
    description: 'Health Insurance',
    amount: 300,
    expenseDate: '2023-05-10',
  },
  {
    id: '2',
    description: 'Water Bill',
    amount: 80,
    expenseDate: '2024-07-12',
  },
  {
    id: '3',
    description: 'Mobile Service',
    amount: 40,
    expenseDate: '2024-07-11',
  },
  {
    id: '4',
    description: 'Mortgage Payment',
    amount: 1000,
    expenseDate: '2024-07-05',
  },
  {
    id: '5',
    description: 'Bakery',
    amount: 15,
    expenseDate: '2024-07-18',
  },
  {
    id: '6',
    description: 'Cinema',
    amount: 25,
    expenseDate: '2024-07-16',
  },
  {
    id: '7',
    description: 'Taxi Service',
    amount: 35,
    expenseDate: '2024-07-15',
  },
  {
    id: '8',
    description: 'Yoga Class',
    amount: 50,
    expenseDate: '2024-07-14',
  },
  {
    id: '9',
    description: 'Magazine Subscription',
    amount: 10,
    expenseDate: '2024-07-13',
  },
  {
    id: '10',
    description: 'Footwear',
    amount: 120,
    expenseDate: '2024-07-10',
  },
  {
    id: '11',
    description: 'E-books',
    amount: 30,
    expenseDate: '2024-07-09',
  },
  {
    id: '12',
    description: 'Concert',
    amount: 100,
    expenseDate: '2024-07-08',
  },
  {
    id: '13',
    description: 'Bus Fare',
    amount: 20,
    expenseDate: '2024-07-07',
  },
  {
    id: '14',
    description: 'Supermarket',
    amount: 200,
    expenseDate: '2024-07-06',
  },
  {
    id: '15',
    description: 'Brunch',
    amount: 60,
    expenseDate: '2024-07-05',
  },
];

const totalAmount = expenseRecords.reduce(
  (sum, record) => sum + record.amount,
  0,
);

const ExpenseOverview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.totalAmountText}>Total Amount: ${totalAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8e1e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalAmountText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4b2e83',
  },
});

export default ExpenseOverview;
