import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const KeyFeatures = ({ features }) => {

    return (
        <div className='container mx-auto px-4'>
            <h1 className='text-2xl text-center font-semibold text-blue-500 py-5'>Key Features</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {features.map((feature) => (
                    <Card>
                        <CardHeader>
                            <feature.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                            <CardTitle className='text-center text-blue-600'>{feature?.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-center text-gray-600'>{feature?.description} </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )

}

export default KeyFeatures