"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import useAuthentication from "@/hooks/useAuthentication";
import Image from "next/image";


type ProfileParams = { id: string };

export default function ProfilePage() {
    const router = useRouter();
    const { signout } = useAuthentication()
    const params = useParams<ProfileParams>();
    const userData = useAppSelector((s) => s.authSlice.userData);
    console.log(userData)
    useEffect(() => {
        if (!userData) return;
        if (userData.id !== params.id) router.push("/");
    }, [userData, params.id, router]);

    if (!userData || userData.id !== params.id) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-600">
                Loading profile...
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white text-gray-800">
            {/* Header */}
            <header className="w-full border-b border-gray-200 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                    {/* User Info */}
                    <div className="flex items-center gap-4">
                        {userData?.image && (
                            <Image
                                src={userData.image}
                                alt="profile"
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full"
                            />
                        )}

                        <div>
                            <h1 className="text-lg sm:text-2xl font-semibold">
                                {userData.name}
                            </h1>
                            <p className="text-sm text-gray-500 truncate max-w-[220px] sm:max-w-none">
                                {userData.email}
                            </p>
                        </div>
                    </div>

                    {/* Role */}
                    <div className="flex items-center gap-3 sm:self-auto self-start">
                        <div className="text-right">
                            <div className="text-xs text-gray-500">Role</div>
                            <div className="font-medium capitalize">
                                {userData.role || "User"}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Dashboard Layout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Sidebar */}
                <aside className="lg:col-span-3 order-2 lg:order-1">
                    <div className="lg:sticky lg:top-6 space-y-4">
                        <div className="p-4 border border-gray-100 bg-white">
                            <div className="text-xs text-gray-500 mb-2">
                                Quick Actions
                            </div>

                            <div className="flex flex-col gap-2">
                                <button
                                    className="w-full text-left px-3 py-2 border rounded-sm text-sm hover:bg-gray-50"
                                    onClick={() => router.push("/forgot-password")}
                                >
                                    Change Password
                                </button>

                                <button
                                    onClick={signout}
                                    className="w-full text-left px-3 py-2 border rounded-sm text-sm hover:bg-gray-50"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="lg:col-span-9 space-y-6 order-1 lg:order-2">

                    {/* Top Widgets */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="p-4 border border-gray-100 bg-white">
                            <div className="text-xs text-gray-500">
                                Member Since
                            </div>
                            <div className="text-lg font-semibold mt-2">
                                {userData.createdAt
                                    ? new Date(userData.createdAt).toLocaleDateString()
                                    : "N/A"}
                            </div>
                        </div>
                    </div>

                    {/* Account Details */}
                    <div className="p-4 sm:p-6 border border-gray-100 bg-white">
                        <h2 className="text-base font-semibold mb-4">
                            Account Details
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700">

                            <div className="flex items-start">
                                <div className="w-32 text-gray-500">Full name</div>
                                <div className="font-medium">{userData.name}</div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-32 text-gray-500">Role</div>
                                <div className="font-medium capitalize">
                                    {userData.role || "User"}
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-32 text-gray-500">Email</div>
                                <div className="font-medium break-all">
                                    {userData.email}
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-32 text-gray-500">Email verified</div>
                                <div
                                    className={`font-medium ${userData.emailVerified
                                            ? "text-green-600"
                                            : "text-red-600"
                                        }`}>
                                    {userData.emailVerified ? "Verified" : "Not verified"}
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-32 text-gray-500">Phone</div>
                                <div className="font-medium">
                                    {userData.phoneNo ?? "-"}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}
