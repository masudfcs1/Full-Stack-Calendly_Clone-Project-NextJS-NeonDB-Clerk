import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

const PricingPlan = () => {
  return (
    <div className='container mx-auto px-4 my-10'>
        <div className='bg-blue-600 text-white rounded-lg p-8 text-center'>
            <h1 className='text-3xl font-bold mb-4'>Ready to Simplify Your Scheduling?</h1>
            <p className='text-xl mb-6'>Join thousands of professionals who trust Schedulrr for efficient time mangement</p>
            <Link href='/dashboard'>
            <Button size='lg' variant="secondary" className="text-blue-600 font-medium" >
                Start For Free <ArrowRight className='ml-2 w-5 h-5'/>
            </Button>
            </Link>
        </div>
    </div>
  )
}

export default PricingPlan