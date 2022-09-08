import { View, Text, SafeAreaView, TextInput, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import React, {useState} from 'react';
//import { setUser } from '../features/userSlice';
import {useNavigation} from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

export default function UserScreen() {
  const navigation = useNavigation();
  const [names, onChangeName] = useState('');
  const [lastname, onChangeLastname] = useState('');
  const [mail, onChangeMail] = useState('');
  const [phone, onChangeNumber] = useState('');
  const [birth_date, onChangeDate] = useState(''); 

  return (
    <>
    <SafeAreaView className=' pt-8 '>
      <View className='pb-4 pt-6 bg-[#fff9dc] border-b-2 border-[#b96eff] items-center'>
        <TouchableOpacity className='absolute top-14 left-5 p-3 bg-gray-100 rounded-full' 
          onPress={navigation.goBack}>
          <ArrowLeftIcon size={20} color='#b96eff'/>
        </TouchableOpacity>
        <Text className=' mb-5 font-extrabold text-2xl text-[#ffb451]'>Profile</Text>
        <Text className='  font-bold text-xl'>Update information</Text>
        <TouchableOpacity>
          <Image
            source={require('../assets/photoup.png')}
            className=' mt-4 h-85 w-85 rounded-full bg-white'
          />  
        </TouchableOpacity>
      </View>

      <ScrollView className='m-7'>
        <View >
          <Text className='pl-1 mt-2 mb-2 text-lg font-bold'>Name</Text>
          <TextInput className='border-2 rounded border-[#ffb451]' onChangeText={onChangeName} placeholder=' Names' value={names} keyboardType='default'/>
        </View>
        <View>
          <Text className='pl-1 mt-2 mb-2 text-lg font-bold'>Lastname</Text>
          <TextInput className='border-2 rounded border-[#ffb451]' onChangeText={onChangeLastname} placeholder=' Lastname' value={lastname} keyboardType='default'/>
        </View>
        <View>
          <Text className='pl-1 mt-2 mb-2 text-lg font-bold'>E-mail</Text>
          <TextInput className='border-2 rounded border-[#ffb451]' onChangeText={onChangeMail} placeholder=' E-mail' value={mail} keyboardType='email-address'/>
        </View>
        <View>
          <Text className='pl-1 mt-2 mb-2 text-lg font-bold'>Mobile phone</Text>
          <TextInput className='border-2 rounded border-[#ffb451]' onChangeText={onChangeNumber} placeholder=' Number' value={phone} keyboardType='numeric'/>
        </View>
        <View>
          <Text className='pl-1 mt-2 mb-2 text-lg font-bold'>Date of Birth</Text>
          <TextInput className='border-2 rounded border-[#ffb451]' onChangeText={onChangeDate} placeholder=' dd-mm-aaaa' value={birth_date} keyboardType='numeric'/>
        </View>
      </ScrollView>
      
    </SafeAreaView>
    </>
  )
}