import { View, Text, ScrollView } from 'react-native';
import React, {useEffect, useState} from 'react';
import RestaurantCards from './RestaurantCards';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import SanityClient from '../sanity';

export default function FeatureRow({title,description,id}) {
  const [restaurants,setRestaurants] = useState([]);

  useEffect(( ) =>{
    SanityClient.fetch(`
    *[_type == 'featured' &&  _id == $id] {
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
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-3xl text-[#ffb451]'>{title}</Text>
        <ArrowRightIcon size={28} color='#b96eff'/>
      </View>
      <Text className='text-[18px] text-black px-4 text-justify'>{description}</Text>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      className='pt-4'
      contentContainerStyle={{
        paddingHorizontal: 20
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