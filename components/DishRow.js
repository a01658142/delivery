import { View, Text, TouchableOpacity,Image } from 'react-native';
import React, { useState } from 'react';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsWidhId } from '../features/basketSlice';

export default function DishRow({id, name, description, price, image, resTitle}) {
  const [isPressed, setIsPressed] = useState(false)
  const dispatch = useDispatch();
  const items = useSelector((state)=> selectBasketItemsWidhId(state,id));
  const addItemToBasket = () => {
    dispatch(addToBasket({id,name,description,price,image,resTitle}))
  }

  const removeItemFromBasket = () => {
    if(!items.length>0) return;
    dispatch(removeFromBasket({id}))
  }

  return (
    <>
    <TouchableOpacity 
    onPress={()=> setIsPressed(!isPressed)}
    className='bg-white px-3 py-3 border-gray-200'
    >
      <View className='flex-row'>
        <View className='flex-1 pr-2 border-b border-[#ffb451]'>
          <Text className='text-lg'>{name}</Text>
          <Text className='text-black'>{description}</Text>
          <Text className='text-black mt-1'>$ {price}</Text>
        </View>
        <View>
          <Image style={{
            borderWidth: 0,
            borderColor: 'white'
          }} source={{
            uri: urlFor(image).url()
          }}
          className='h-20 w-20 bg-gray-300 rounded'/>
        </View>
      </View>
    </TouchableOpacity>
  
    {isPressed && (
      <View className='bg-white px-4'>
        <View className='flex-row items-center space-x-2 pb-3'>
          <TouchableOpacity>
            <MinusCircleIcon 
            onPress={removeItemFromBasket}
            color={items.length > 0 ? '#ffb451' : '#b96eff'} size={40}/>
          </TouchableOpacity>
          <Text>{items.length}</Text>
          <TouchableOpacity>
            <PlusCircleIcon onPress={addItemToBasket}
            color='#ffb451' size={40}/>
          </TouchableOpacity>
        </View>
      </View>
    )}
    </>
  )
}