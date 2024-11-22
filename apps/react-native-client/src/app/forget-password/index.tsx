import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'expo-router';
import { View, Text, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Separator } from '@/components/ui/separator';

const ForgetPassword = () => {
  return (
    <View className='h-full w-full relative bg-muted'>
      <Image source={require('@/assets/images/hotel.png')} className='w-full absolute h-1/2 top-0 left-0 right-0 ' />
      <View className="absolute inset-0 bg-black opacity-50" />
      <View
        className='h-screen w-full backdrop-blur-sm'
      >

        <View
          className='absolute bottom-0 left-0 shadow-sm right-0 bg-background rounded-t-[3rem] px-9 py-16 min-h-fit h-fit w-full flex flex-col gap-0'
        >
          <Text className='text-4xl text-primary font-bold'>
            Forget!
          </Text>
          <View className='flex flex-row gap-2 items-center'>
            <Text className='text-muted-foreground'>
              Don't have an account?
            </Text>
            <Link href='/register-now' className='text-lg text-muted-foreground underline '>
              Register Now
            </Link>
          </View>
          <View className='mt-6 flex flex-col gap-2.5'>
            <View>
              <Label htmlFor='email' className='text-lg font-medium'>
                Email
              </Label>
              <View className='flex items-center gap-2.5 flex-row'>
                <Input className='flex-grow w-[80%]' />
                <Button
                  className='w-[16%] mx-auto my-6 flex items-center justify-center h-10 native:h-12'
                >
                  <Text><AntDesign name="arrowright" className='ml-2.5 size-5' /></Text>
                </Button>
              </View>
            </View>
          </View>
          <Separator />
          <View className='mt-6 flex flex-col gap-2.5'>
            <View>
              <Label htmlFor='email' className='text-lg font-medium'>
                OTP
              </Label>
              <Input />
            </View>
            <View>
              <Label htmlFor='password' className='text-lg font-medium'>
                New Password
              </Label>
              <Input secureTextEntry />
            </View>
            <Button
              className='w-48 mx-auto my-6 flex items-center justify-center'
            >
              <Text>Reset Now <AntDesign name="arrowright" className='ml-2.5 size-5' /></Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ForgetPassword;