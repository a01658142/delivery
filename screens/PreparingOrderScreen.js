import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function PreparingOrderScreen() {
  const navigation = useNavigation();
  useEffect(()=> {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 4000);
  },[])
  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <Animatable.Image
        source={require('../assets/delivery.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='h-85 w-85'
      />
      <Animatable.Text 
        animation='slideInUp'
        iterationCount={1}
        className='text-lg my-20 text-[#ffb451] font-bold text-center'>Wait for restaurant to accept your order!</Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color='black'/>
    </SafeAreaView>
  )
}