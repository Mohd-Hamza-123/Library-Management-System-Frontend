import React from 'react'

export default function StudentTableMobile() {
    return (

        <div className="rounded-xl border bg-white overflow-hidden animate-pulse">

            {/* Block Header */}
            <div className="bg-blue-50 px-4 py-3">
                <div className="h-4 w-24 bg-blue-200 rounded"></div>
            </div>

            {/* Student Skeletons */}
            {[1, 2, 3].map((_, i) => (
                <div key={i} className="px-4 py-4 border-t space-y-3">

                    {/* Name */}
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>

                    {/* Father Name */}
                    <div className="h-3 w-48 bg-gray-200 rounded"></div>

                    {/* Tags */}
                    <div className="flex gap-2">
                        <div className="h-6 w-16 bg-blue-200 rounded-full"></div>
                        <div className="h-6 w-20 bg-purple-200 rounded-full"></div>
                    </div>

                    {/* Joined Date */}
                    <div className="h-3 w-36 bg-gray-200 rounded"></div>
                </div>
            ))}
        </div>
    );
};

