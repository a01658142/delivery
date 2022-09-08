import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { selectRestaurant } from '../features/restaurantSlice';
import { XIcon } from 'react-native-heroicons/solid';
import { useSelector } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import * as Progress from 'react-native-progress';

export default function DeliveryScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className='bg-[#fff9dc] flex-1 pt-8'>
      <SafeAreaView>

        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity className='bg-gray-100 rounded-full' onPress={()=> navigation.navigate('Home')}>
            <XIcon  color='#b96eff' size={30}></XIcon>
          </TouchableOpacity>
          <Text className='font-extrabold text-[#ffb451] text-lg'> Order Help</Text>
        </View>

        <View className='bg-white mx-6 my-1 rounded-md p-3 z-50 shadow-md'>
          <View className='flex-row justify-between'>
            <View>
              <Text className='text-lg text-[#ffb451] font-extrabold'>Estimated Arrival</Text>
              <Text className='text-3xl font-bold'>40-55 minutes</Text>
            </View>
            <Image source={{uri: 'https://links.papareact.com/fls'}}
              className='h-28 w-28'
              color='#b96eff'/>
          </View>
          <Progress.Bar size={30} color='#b96eff' indeterminate={true}/>
          <Text className='mt-5 text-black'>Your order at {restaurant.title} is being prepared.</Text>
        </View>
      </SafeAreaView>

     <MapView
        showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: restaurant.lat,
          longitude:  restaurant.long,
          latitudeDelta: 0.000005,
          longitudeDelta: 0.000005,
        }}
        initialCamera={{
          center:{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          },
          altitude: 1000,
          zoom: 20,
          pitch: 10,
          heading: 10,
        }}
        showsPointsOfInterest={true}
        className='flex-1 mt-10 z-0'
        mapType='terrain'
        loadingEnabled={true}
        maxZoomLevel={20}
        >
        <Marker
          coordinate={{
            latitude: 19.28377617451835,
            longitude: -99.13354965018662,
          }}
          title={'Your Location'}
          identifier='origin'
          pinColor='#ffb451'>
        </Marker>
        <Marker 
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.description}
          identifier='origin'
          pinColor='#b96eff'>
        </Marker>
      </MapView> 
      <View className='flex-row p-2'>
        <Image source={require('../assets/delGuy.jpg')}
            className='h-28 w-28 rounded' 
            color='#b96eff'/>
        <View className='flex-1 p-3 items-center'>
          <Text className='text-xl text-[#b96eff]'>Your food is coming with:</Text>
          <Text className='text-xl'>Juan Paco López Hernández</Text>
        </View>
      </View>
    </View>
  )
}