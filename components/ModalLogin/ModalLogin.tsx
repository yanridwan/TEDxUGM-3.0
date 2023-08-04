import React from 'react'
import Image from 'next/image'
import bigX from 'public/images/homepage/big-x.png'
import Button from '../Button/Button'
import modalBg from 'public/images/homepage/modal-pic-bg.png'

interface ModalLoginProps {
    open: boolean
}

const ModalLogin: React.FC<ModalLoginProps> = ({open}) => {
    if(!open) return null
    return (
        <div className='w-screen h-screen bg-black/40 z-[71] absolute'>
            <div className=''>
                <Image className='z-30' src={bigX} alt=''/>
                <Image className='z-20' src={modalBg} alt=''/>
            </div>

            <div className=''>
                <h3>Login</h3>
                <form>
                    <input type="email" placeholder='insert email'/>
                    <input type="password" placeholder='Password'/>
                    <Button text='Login' variant='primary' className='w-56 mx-auto hover:scale-110 transition-all drop-shadow-xl'/>
                    <Button text='Create New Account' variant='tertiary' className='w-56 mx-auto hover:scale-110 transition-all'/>
                    
                    
                </form>

            </div>

        </div>
    )
}

export default ModalLogin;