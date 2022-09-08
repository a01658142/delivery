import { View, Text, TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function CategoryCard({imgUrl, title}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Category')} className='relative mr-1'>
      <Image 
      source={{
        uri: imgUrl}} 
      className='h-24 w-24 rounded flex-row'/>
      <Text className='absolute bottom-1 right-1 text-base text-white font-extrabold'>{title}</Text>
    </TouchableOpacity>
  )
}