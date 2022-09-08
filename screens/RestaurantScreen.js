import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon, StarIcon, LocationMarkerIcon, ChevronRightIcon, LightBulbIcon } from 'react-native-heroicons/solid';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/basketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params:{
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
    }
  } = useRoute();

  useEffect(() => {
    dispatch(setRestaurant({
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
    }))
  }), [dispatch]

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  })

  return (
    <>
      <BasketIcon/>
      <ScrollView>
        <View className='relative'>
          <TouchableOpacity onPress={ ()=>navigation.navigate('Alergy')} className='mt-8 flex-row items-center space-x-2 p-4 bg-[#fdfbf0]'>
            <LightBulbIcon color='red' opacity={0.5} size={22}/>
            <Text className='pl-2 flex-1 text-xl font-bold text-[#ffb451] '>Have food alergy?</Text>
            <ChevronRightIcon color='#36173d'/>
          </TouchableOpacity>
          <Image 
            source={{
              uri:urlFor(imgUrl).url(),
            }}
            className='w-full h-56 bg-white p-4'
          />
          <TouchableOpacity className='absolute top-28 left-5 p-3 bg-gray-100 rounded-full' 
            onPress={navigation.goBack}>
            <ArrowLeftIcon size={20} color='#b96eff'/>
          </TouchableOpacity>
        </View>
        <View className='bg-[#fdfbf0] mr-0'>
          <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>
            <View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'> 
                <StarIcon color='#b96eff' opacity={0.5} size={22}/>
                <Text className='text-[#b96eff]'><Text>{rating} </Text>{genre}
                </Text>
                <LocationMarkerIcon color='#b96eff' opacity={0.5} size={22}/>
                <View className=' pr-3'>
                  <Text className='text-xs text-[#b96eff] text-justify'>Nearby {address}</Text>
                </View>
              </View>
            </View>
            <Text className='text-black mt-2 pb-4'>{short_description}</Text>
            <Text className='text-black mt-2 pb-4'>Loc:   {lat}   ,   {long}</Text>
          </View>
        </View>

        <View className='pb-36 bg-white'>
          <Text className='px-4 pt-3 pb-3 mb-3 font-bold text-3xl text-[#ffb451] border-b border-[#b96eff]'>Menu</Text>
          {/*Dish row */}
          {dishes?.map((dish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            image={dish.image}
            resTitle={title}
          />
          ))}
        </View>
        
      </ScrollView>
    </>
  )
}