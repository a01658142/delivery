import { View, Text, ScrollView, TouchableOpacity,SafeAreaView, Image } from 'react-native';
import React, { useLayoutEffect,useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import SanityClient from '../sanity';
import CategoryRow from '../components/CategoryRow';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';


export default function CategoryScreen() {
  const navigation = useNavigation();
  const [foodCategory, setfoodCategory] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions( {
        headerShown: false,
      });
  }, [])

  useEffect(( ) =>{
    SanityClient.fetch(`
    *[_type == 'category'] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }`
    ).then((data) => {
      setfoodCategory(data);
    });
  }, [])

  return (
    <SafeAreaView className='flex-1 pt-10'>
      <View className='bg-[#fff9dc] mx-space-2 p-2'>
        <TouchableOpacity className='absolute top-14 left-5 p-3 bg-gray-100 rounded-full' 
            onPress={navigation.goBack}>
            <ArrowLeftIcon size={20} color='#b96eff'/>
        </TouchableOpacity>
        <View className='items-center'>
          <Text className='text-3xl font-bold my-1 text-[#ffb451]'>Categories</Text>
          <Image source={require('../assets/logo.jpg')}
            className='h-20 w-20 bg-white my-2 rounded-full'/>
        </View>
      </View>
      <ScrollView 
        className='bg-[#fff9dc] flex-1' 
        contentContainerStyle={{
          paddingBottom:200,
        }}>
        
        {foodCategory?.map ((category) => (
          <CategoryRow
          key={category._id}
          id={category._id}
          title={category.name}
          />
        ))}
        
          
      </ScrollView>
    </SafeAreaView>
  )
}