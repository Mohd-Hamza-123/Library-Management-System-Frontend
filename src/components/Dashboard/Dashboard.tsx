"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/styles/dashboard.css";
import { getDateTime } from "@/utils/dates";
import { FiBook, FiDollarSign, FiUsers, FiLayers } from "react-icons/fi";
import { Icons } from "../Icons";
import Link from "next/link";

export default function Dashboard() {
  const cards = [
    {
      id: "library",
      title: "Library",
      desc: "Search books, issue & return",
      icon: <FiBook className="h-6 w-6" />,
      path: "/library-option",
    },
    {
      id: "fees",
      title: "Fees",
      desc: "Pay or view invoices",
      icon: <FiDollarSign className="h-6 w-6" />,
      path: "/fees",
    },
    {
      id: "courses",
      title: "Courses",
      desc: "Browse & enroll",
      icon: <FiLayers className="h-6 w-6" />,
      path: "/courses",
    },
  ];

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

  const cardHover = { scale: 1.03, y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" };

  return (
    <main className="h-[90dvh] overflow-y-scroll bg-gray-50 px-4 pt-4 pb-8 md:p-6 lg:p-8">
      {/* HERO */}
      <section className="relative rounded-2xl overflow-hidden shadow-xl">
        <div className="relative w-full h-40 md:h-56 lg:h-64">
          <Image
            src="/images/dashboard-bg.jpg"
            alt="dashboard background"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        <div className="absolute inset-0 flex items-start justify-between p-3 md:p-6">
          <div className="text-left text-white">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold drop-shadow">Welcome to Dashboard</h1>
            <p className="mt-1 text-xs md:text-sm opacity-90">{getDateTime()}</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-block bg-gray-200 backdrop-blur-sm text-white rounded-full p-2 shadow hover:scale-105 transition-transform">
              <Icons.lightMode className="text-black" />
            </button>

            <div className="bg-white rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-gray-700 font-medium">N</div>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* LEFT: main content (spans 3 cols on md+) */}
        <div
          className="col-span-1 md:col-span-3 bg-white rounded-2xl p-4 md:p-6 shadow">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg md:text-xl font-semibold">Quick Actions</h2>
              <p className="text-sm text-gray-500 mt-1">Open the most used sections quickly.</p>
            </div>

            <button className="ml-auto md:ml-0 px-3 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition text-sm md:text-base">New Entry</button>
          </div>

          {/* CARDS */}
          <div className="mt-6">

            {/* Mobile: horizontal scroll */}
            <div className="flex flex-wrap gap-4 md:hidden overflow-x-auto pb-2 -mx-1 md:mx-0 snap-x snap-mandatory">
              {cards.map((c) => (
                // legacyBehavior forces Link to render an <a> wrapper (Next compatibility)
                <Link key={c.id} href={c.path}
                  className="min-w-[300px] flex-wrap bg-white border border-gray-100 rounded-xl p-4 text-left snap-center cursor-pointer block hover:shadow-lg"

                  role="link"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                      {React.cloneElement(c.icon, { className: "h-5 w-5" })}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 text-sm md:text-base">{c.title}</div>
                      <div className="text-xs text-gray-500">{c.desc}</div>
                    </div>
                  </div>

                </Link>
              ))}
            </div>

            {/* md+: grid using anchors for navigation */}
            <div className="hidden md:grid md:grid-cols-4 gap-4">
              {cards.map((c) => (
                <Link key={c.id} href={c.path}
                  className="group bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-xl p-4 text-left hover:shadow-lg focus:outline-none block cursor-pointer"
                  role="link"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">{React.cloneElement(c.icon, { className: "h-5 w-5" })}</div>
                    <div>
                      <div className="font-medium text-gray-800">{c.title}</div>
                      <div className="text-xs text-gray-500">{c.desc}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="text-sm text-indigo-700">Active Users</div>
              <div className="text-2xl md:text-3xl font-semibold mt-2">1,243</div>
            </div>

          </div>
        </div>

        {/* RIGHT: notifications */}
        <aside className="bg-white rounded-2xl p-4 md:p-6 shadow">
          <div className="md:sticky md:top-20">
            <h3 className="font-semibold text-sm md:text-base">Notifications</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="p-3 rounded-md bg-gray-50">New book added: "Learning React"</li>
              <li className="p-3 rounded-md bg-gray-50">Fees pending for 12 students</li>
              <li className="p-3 rounded-md bg-gray-50">Faculty meeting scheduled</li>
            </ul>

            <div className="mt-4 text-right">
              <button className="text-indigo-600 text-sm md:text-base">View all</button>
            </div>
          </div>
        </aside>
      </section>

      <footer className="mt-6 text-right text-xs text-gray-400">MS-Lib • Library Management</footer>
    </main>
  );
}
