import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { LocationMarkerIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCards({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) {
 
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
    onPress={()=>{
      navigation.navigate('Restaurant', {
        id, imgUrl, title,rating,genre,address,short_description,dishes,long,lat,
      })
    }}
    className='bg-white mr-2 shadow'>
      <Image
        source={{
          uri:  urlFor(imgUrl).url()
        }}
        className='h-36 w-64 rounded'/>
        <View className='px-3 pb-4'>
          <Text className='font-bold text-lg pt-2 ml-1 text-[#ffb451]'>{title}</Text>
          <View className='flex-row items-center space-x-1'>
            <StarIcon color='#b96eff' opacity={0.5} size={22}/>
            <Text className='text-[#b96eff]'>{rating}  {genre}</Text>
          </View>
          <View className='flex-row items-center space-x-1'>
            <LocationMarkerIcon color='#b96eff' opacity={0.4} size={22}/>
            <Text className='text-xs text-black text-justify'>Nearby {address.substring(0,20)}</Text>
          </View>
        </View>
        
    </TouchableOpacity>
  )
}