import React from 'react'

export default function LibraryStudentTableSkeleton() {
    return (

        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
            
            <div className="bg-indigo-50 px-6 py-4">
                <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
            </div>

            
            <div className="grid grid-cols-5 bg-indigo-600 px-6 py-3 gap-4">
                <div className="h-3 bg-indigo-400 rounded animate-pulse"></div>
                <div className="h-3 bg-indigo-400 rounded animate-pulse"></div>
                <div className="h-3 bg-indigo-400 rounded animate-pulse"></div>
                <div className="h-3 bg-indigo-400 rounded animate-pulse"></div>
                <div className="h-3 bg-indigo-400 rounded animate-pulse"></div>
            </div>

            <div className="divide-y">

               
                <div className="grid grid-cols-5 px-6 py-4 gap-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-6 w-12 bg-indigo-200 rounded-full animate-pulse"></div>
                    <div className="h-6 w-20 bg-purple-200 rounded-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>

             
                <div className="grid grid-cols-5 px-6 py-4 gap-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-6 w-12 bg-indigo-200 rounded-full animate-pulse"></div>
                    <div className="h-6 w-20 bg-purple-200 rounded-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>

                
                <div className="grid grid-cols-5 px-6 py-4 gap-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-6 w-12 bg-indigo-200 rounded-full animate-pulse"></div>
                    <div className="h-6 w-20 bg-purple-200 rounded-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>

            </div>
        </div>

    )
}
