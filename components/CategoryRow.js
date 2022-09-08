import { View, Text, ScrollView, Image } from 'react-native';
import React, {useEffect, useState} from 'react';
import RestaurantCards from './RestaurantCards';
import SanityClient from '../sanity';

export default function CategoryRow({title,description,id}) {
  const [restaurants,setRestaurants] = useState([]);

  useEffect(( ) =>{
    SanityClient.fetch(`
    *[_type == 'category' &&  _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
    }[0]
    `,{id}
    ).then((data) => {
      setRestaurants(data?.restaurants);
    });
  }, [])

  return (
    <View className='bg-white'>
      <View className='mt-4 items-center justify-between px-4'>
        <Text className='font-bold text-2xl text-[#b96eff] self-start px-5'>{title}</Text>
      </View>
      {/* <Text className='text-[10px] text-[#b96eff] px-4'>{description}</Text> */}
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      className='pt-4'
      contentContainerStyle={{
        paddingHorizontal: 15
      }}>
        {/*ResturantCards */}
        {restaurants?.map((restaurants) => (
           <RestaurantCards
           key={restaurants._id}
           id={restaurants._id}
           imgUrl={restaurants.image}
           title={restaurants.name}
           rating={restaurants.rating}
           genre={restaurants.type?.name}
           address={restaurants.address}
           short_description={restaurants.short_description}
           dishes={restaurants.dishes}
           long={restaurants.long}
           lat={restaurants.lat}
         />
        ))}

      </ScrollView>
    </View>
  )
}