import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'expo-router';
import { View, Text, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Separator } from '@/components/ui/separator';
import { SvgUri } from 'react-native-svg';

const Login = () => {
  return (
    <View className='h-screen w-screen relative bg-muted'>
      <Image source={require('@/assets/images/hotel.png')} className='w-full absolute h-1/2 top-0 left-0 right-0 ' />
      <View className="absolute inset-0 bg-black opacity-50" />

      <View
        className='h-screen w-screen backdrop-blur-sm'
      >

        <View
          className='absolute bottom-0 left-0 shadow-sm right-0 bg-background rounded-t-[3rem] px-9 py-16 min-h-fit h-fit w-full flex flex-col gap-0'
        >
          <Text className='text-4xl text-primary font-bold'>
            Welcome Back!
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
              <Input />
            </View>
            <View>
              <Label htmlFor='password' className='text-lg font-medium'>
                Password
              </Label>
              <Input secureTextEntry />
            </View>
            <View className='flex w-full items-end justify-end'>
              <Link href='/forget-password' className='text-muted-foreground underline w-fit ml-auto self-end text-end'>
                Forgot Password?
              </Link>
            </View>
            <Button
              className='w-48 mx-auto my-6 flex items-center justify-center'
            >
              <Text>Login <AntDesign name="arrowright" className='ml-2.5 size-5' /></Text>
            </Button>
            <View className='flex flex-row gap-2 items-center justify-center w-full relative'>
              <Separator />
              <Text className='text-muted-foreground text-lg absolute top-1/2 left-1/2 bg-background -translate-x-1/2 -translate-y-1/2 px-2'>
                OR
              </Text>
            </View>
            <Button
              variant={"secondary"}
              className='rounded-full mx-auto my-6 bg-muted aspect-square'
            >
              <SvgUri
                width="24"
                height="24"
                uri="https://www.svgrepo.com/show/475656/google-color.svg"
                className='object-contain object-center'
              />
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login;