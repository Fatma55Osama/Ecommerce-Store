import React from 'react'
import styles from './index.module.css'
import { IoMdClose } from 'react-icons/io'
import { useCartmodal } from '../../store'
export default function Cart() {
    const { modalindex, openModal, closeModal } = useCartmodal()

    return (
        <div>
            <div className={styles.modal + " flex justify-end"} onClick={()=>closeModal()} >
                <div className={styles.contantmodal + " flex justify-center"} onClick={(e)=>e.stopPropagation()}>
                    <div className='container'>
                        <div className='flex justify-between'>
                            <span className='uppercase text-[#333] text-[18px]'>Your Cart</span>
                            <IoMdClose onClick={()=>closeModal()} className=' text-[#333] text-[18px]' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
