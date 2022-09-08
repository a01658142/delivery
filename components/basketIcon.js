import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

export default function basketIcon() {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity onPress={() => navigation.navigate('Basket')}
      className='mx-5 bg-[#b96eff] p-4 rounded-lg flex-row items-center space-x-1'>
        <Text className='text-white font-extrabold rounded text-xl bg-[#ffb451] py-1 px-2'>{items.length}</Text>
        <Text className='flex-1 text-white font-extrabold text-xl text-center'>Basket</Text>
        <Text className='text-xl text-white font-extrabold'>${basketTotal}</Text>
      </TouchableOpacity>
      
    </View>
  )
}