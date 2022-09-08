import { View, Text, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import React, {useState} from 'react';
import { ArrowLeftIcon, LightBulbIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function FoodAlergyScreen() {
  const navigation = useNavigation();
  const [box, onChangeBox] = useState('');

  return (
    <SafeAreaView>
      <ScrollView className='flex-1 bg-white space-y-4 '>
        <View className=' pb-4 pt-10 bg-[#fff9dc] border-b-2 border-[#b96eff] items-center'>
          <TouchableOpacity className='absolute top-14 left-5 p-3 bg-gray-100 rounded-full' 
            onPress={navigation.goBack}>
            <ArrowLeftIcon size={20} color='#b96eff'/>
          </TouchableOpacity>
          <Text className='text-3xl font-bold text-[#ffb451]'>Food Alergy?</Text>
          <LightBulbIcon size={80} color='#b96eff'/>
          <Text className='text-[18px]'>Have you or someone you know had been poison by some restaurant in this app?</Text>
        </View>
        <View className='p-3 pt-5 pb-5'>
          <TextInput className='h-[200px] border-2 rounded border-[#ffb451]  bg-slate-100 text-[18px] text-justify' onChangeText={onChangeBox} placeholder='WRITE IN THIS BOX -> Tell us more about the food alergy issue, we will respond as soon as posible.' value={box} keyboardType='default' />
        </View>
        <TouchableOpacity className='w-[300px] rounded-lg bg-[#b96eff] p-5 self-center'
          onPress={()=>navigation.navigate('Home')}>
          <Text className='text-center text-white text-2xl font-bold'>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}