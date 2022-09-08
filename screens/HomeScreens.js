import { View, Text, SafeAreaView, Image, TextInput, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import React, { useEffect, useLayoutEffect , useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {UserIcon,ChevronDownIcon,SearchIcon,AdjustmentsIcon, GlobeAltIcon} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';
import SanityClient from '../sanity';
import { FloatingAction } from 'react-native-floating-action';
import { LightBulbIcon, LocationMarkerIcon, ShoppingBagIcon } from 'react-native-heroicons/solid';

export default function HomeScreens() {

  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([])
  const actions = [
    {
      text: "Alergy",
      icon: <LightBulbIcon size={30} color='white'
      onPress={() => navigation.navigate('Alergy')}/>,
      name: "bt_alergy",
      position: 2,
      color: '#ffb451'
    },
    {
      text: "Language",
      icon: <GlobeAltIcon size={30} color='white'/>,
      name: "bt_language",
      position: 1,
      color: '#ffb451'
    },
    {
      text: "Location",
      icon: <LocationMarkerIcon size={30} color='white'
      onPress={() => navigation.navigate('Delivery')}/>,
      name: "bt_room",
      position: 3,
      color: '#ffb451'
    },
    {
      text: "Basket",
      icon: <ShoppingBagIcon size={30} color='white'
      onPress={() => navigation.navigate('Basket')}/>,
      name: "bt_videocam",
      position: 4,
      color: '#ffb451'
    }
    
  ]

  useLayoutEffect(() => {
    navigation.setOptions( {
        headerShown: false,
      });
  }, [])

  useEffect(( ) =>{
    SanityClient.fetch(`
    *[_type == 'featured'] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }
    `).then((data) => {
      setFeaturedCategories(data);
    });
  }, [])

  return (
    <SafeAreaView className='bg-white pt-8 mt-2'> 
      <View>{/*Header*/}
        <View className='flex-row pb-3 pl-2 items-center mx-4 space-x-3'>
          <Image source={require('../assets/logo.jpg')}
            className='h-20 w-20 bg-white p-4 rounded-full'/>
          <View className='flex-1 pl-5'>
            <Text className='font-bold text-[#ffb451] text-[40px]'>OREXI</Text>
            <TouchableOpacity className='flex-row items-center'>
              <Text className='font-semibold text-[18px]'>Deliver place</Text>
              <ChevronDownIcon size={30} color='#b96eff'/> 
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('User')}>
            <UserIcon size={35} color='#b96eff'/>
          </TouchableOpacity>
          <TouchableOpacity>
            <AdjustmentsIcon size={30} color='#b96eff'/> 
          </TouchableOpacity>
          
        </View>
        {/*Search */}
        <View className='flex-row items-center space-x-2 pb-2 mx-5'>
          <View className='rounded flex-row space-x-2 flex-1 bg-[#fff9dc] mb-1 p-1 text-[50px]'>
            <SearchIcon size={35} color='#b96eff'/>
            <TextInput className='text-[25px]' placeholder='Restaurants' keyboardType='default'/>
          </View>
        </View>
      </View> 
      <View className='items-center justify-center '>
        {/*Body */}
        <ScrollView className='bg-[#fdfbf0] flex-1 ' 
        contentContainerStyle={{
          paddingBottom:350,
        }}>
          {/*Categories */}
          <Categories/>
          {/*Featured rows */}
          {/*Featured */}
          {featuredCategories?.map ((category) => (
            <FeatureRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            />
          ))}
          
        </ScrollView>
        {/*Plus Actions */}
        <View className='absolute pt-[350px] pl-[380px]'>
          <FloatingAction
            actions= {actions}
            color='#ffb451'
          /> 
        </View>
      </View>
    </SafeAreaView>
  )
}