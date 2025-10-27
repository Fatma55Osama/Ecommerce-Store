import React from 'react'
import styles from './index.module.css'
import about1 from '../../assets/about-01.jpg'
import about2 from '../../assets/about-02.jpg'

export default function About() {
    return (
        <div>
            <div className={styles.bgimg + " w-full h-[240px] flex justify-center items-center"}>
                <h2 className='font-bold text-[50px] leading-1 text-white'>About</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-64' id={styles.ourStory}>
                <div className='grid grid-cols-12 container  justify-between'>
                    <div className='col-span-8 flex flex-col gap-10 ' id={styles.textContain}>
                        <h3 className='font-bold text-[28px] text-[#333] leading-1'>Our Story</h3>
                        <p className='text-[#888] font-[350] text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.</p>
                        <p className='text-[#888] font-[350] text-[15px]'>Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. </p>
                        <p className='text-[#888] font-[350] text-[15px]'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>

                    </div>
                    <div className='col-span-4'>
                        <div className={styles.howbor}>
                            <div className={styles.howimg}>
                                <img src={about1} width={370} height={370} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 container  justify-between'>
                    <div className='col-span-4'>
                        <div className={styles.howbor2}>
                            <div className={styles.howimg}>
                                <img src={about2} width={370} height={370} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-8 flex flex-col gap-10 ' id={styles.textContain}>
                        <h3 className='font-bold text-[28px] text-[#333] leading-1'>Our Mission</h3>
                        <p className='text-[#888] font-[350] text-[15px]'>Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.</p>
                        <div className='border-l-3 border-[#e6e6e6]' id={styles.divborderleft}>

                            <i className='text-[#888] font-[400]  text-[16px]'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</i>
                            <ul>
                                <li className='text-[#555] font-[400] text-[14px] leading-1.5'>
								- Steve Job’s 
							</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
