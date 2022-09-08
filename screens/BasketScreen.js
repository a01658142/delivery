import { View, Text, SafeAreaView, TouchableOpacity,Image, ScrollView } from 'react-native';
import React, {useMemo, useState} from 'react';
import { selectBasketItems, removeFromBasket, selectBasketTotal, addToBasketId } from '../features/basketSlice';
import { useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon, ShoppingBagIcon } from 'react-native-heroicons/solid';


export default function BasketScreen() {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);


  useMemo (() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results [item.id] || []).push(item);
      return results;
    },{})
    setGroupedItemsInBasket(groupedItems);
  }, [items])

  return (
    <SafeAreaView className='mt-8 flex-1'>
      <View className='flex-1 bg-[#fdfbf0]'>
        <View className='p-4 bg-white'>
          <TouchableOpacity className='absolute top-10 left-5 p-3 bg-gray-100 rounded-full' 
            onPress={navigation.goBack}>
            <ArrowLeftIcon size={20} color='#ca89ff'/>
          </TouchableOpacity>
          <View className='flex-1 items-center'>
            <Text className='text-3xl font-bold text-[#ffb451]'>Shopping Bag</Text>
            <ShoppingBagIcon size={80} color='#b96eff'/>
          </View>
          
        </View>
        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image source={{
            uri: 'http://links.papareact.com/wru'
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />
          <Text className='flex-1 text-[20px] font-bold'>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className='text-[#ca89ff] text-[15px] font-bold'>Change</Text>
          </TouchableOpacity>
          
        </View>
        <ScrollView className='divide-y divide-[#b96eff]'>
          {Object.entries(groupedItemsInBasket).map(([key,items])=> (
            <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
              <Image source={{
                uri: urlFor(items[0]?.image).url()}}
                className='h-12 w-12 rounded-full'
              />
              <PlusCircleIcon color='#b96eff' size={28} 
                onPress= {() => dispatch(addToBasketId({id:key}))}
              />
              <Text className='font-bold text-[18px]'>{items.length}X</Text>
              <MinusCircleIcon color='#b96eff' size={28} 
                onPress={()=> dispatch(removeFromBasket({id:key}))}
              />
              <View className='flex-1'>
                <Text className='font-bold text-[18px]'>{items[0]?.name}</Text>
                <Text className='text-[15px]'>{items[0]?.resTitle}</Text>
              </View>
              <Text className='text-[18px] font-bold'>$ {items[0]?.price}</Text>
              
            </View>
          ))}
        </ScrollView>
        <View className='p-5 bg-white mt-5 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-[#ffb451] text-[18px] font-bold'>Subtotal </Text>
            <Text className='s font-bold text-[18px]'>$ {basketTotal}</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-[#ffb451] text-[18px] font-bold'>Delivery Fee </Text>
            <Text className='font-bold text-[18px]'>$ 75</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-black text-[18px] font-bold'>Order Total </Text>
            <Text className='font-bold text-[18px]'>$ {basketTotal + 75}</Text>
          </View>
          <TouchableOpacity 
            className='rounded-lg bg-[#b96eff] p-3'
            onPress={()=>navigation.navigate('PreparingOrderScreen')}>
              <Text className='text-center text-white text-2xl font-bold'>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}