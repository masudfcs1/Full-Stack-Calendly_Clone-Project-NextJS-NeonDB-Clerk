import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const LandingPage = () => {
    return (
        <main className='container mx-auto px-4 py-2'>
            <div className='flex md:flex-row items-center justify-between gap-12 mb-24'>
                <div className='md:w-1/2'>
                    <h1 className='text-7xl font-extrabold text-blue-500 pb-6'>Simplify Your Scheduling</h1>
                    <p className='text-xl text-gray-500 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi explicabo quam enim unde iste corrupti harum laudantium nemo. Earum!</p>
                    <Link href='/dasboard'>
                     <Button>
                        Get Started <ArrowRight className='ml-2 h-5 w-5'/>
                     </Button>
                    </Link>
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <div className='relative w-full max-w-md aspect-square'>
                        <Image
                            src='/landing-page-post.png'
                            width={800}
                            height={900}
                            alt='landing page image'
                            objectFit='container'
                            // layout='fill'
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LandingPage