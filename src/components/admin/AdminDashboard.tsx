import React from 'react'
import Link from 'next/link'
export default function AdminDashboard() {
    return (
        <div className="bg-[#f5f7fb] w-full rounded-tl-2xl">
            {/* Main content */}
            <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
                {/* Left: Quick Actions */}
                <section className="rounded-2xl p-6">
                    <div className="mb-5 flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                Quick Actions
                            </h2>
                            <p className="text-sm text-gray-500">
                                Open the most used sections quickly.
                            </p>
                        </div>

                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {/* Card 1 – Library Student */}
                        <Link
                            href="/admin/library-student"
                            className="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3edff]">
                                <span className="text-lg">📚</span>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Library Students
                                </h3>
                                <p className="mt-1 text-xs text-gray-500">
                                    Add, edit & view library students.
                                </p>
                            </div>
                        </Link>

                        {/* Card 2 – Academy Student */}
                        <Link
                            href="/admin/academy-student"
                            className="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9f6ff]">
                                <span className="text-lg">🎓</span>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Academy Students
                                </h3>
                                <p className="mt-1 text-xs text-gray-500">
                                    Manage academy student records.
                                </p>
                            </div>
                        </Link>

                        {/* Card 3 – Active Users (dummy stats) */}
                        <div className="flex flex-col justify-between rounded-2xl bg-[#f3edff] p-4">
                            <p className="text-xs font-medium text-[#5b3fff]">
                                Active Users
                            </p>
                            <p className="mt-3 text-3xl font-semibold text-gray-900">
                                1,243
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
