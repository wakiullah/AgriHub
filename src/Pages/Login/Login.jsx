import React from 'react'
import Input from '../../components/SmallComponents/Input'
import InputButton from '../../components/SmallComponents/Button'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <section>

            <div className='grid grid-cols-2 gap-12 max-w-screen-xl m-auto lg:px-8 mt-28 mb-16'>
                <div>
                    <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53Muk2g-T4PvhVH8NK2cPrwO4p9uqGQwlFA&s" alt="" />
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-center mt-5 mb-8  text-custom-primary'>LOGIN YOUR ACCOUNT!</h2>
                    <form action="">
                        <span className='mb-1 block ml-2 font-bold'>E-mail</span>
                        <Input type="email" placeholder={'Enter Your Email Address'} border={'primary'} />
                        <span className='mb-1 block ml-2 mt-3  font-bold'>Password</span>
                        <Input type="email" placeholder={'Enter Your Password'} border={'primary'} />
                        <br /><br />                        <InputButton text={'Log In'} />
                    </form>
                    <h3 className='mt-5'>Not Have an Account? <Link className='underline' to={'/signup'}>SignIn</Link></h3>
                </div>

            </div>
        </section>
    )
}
