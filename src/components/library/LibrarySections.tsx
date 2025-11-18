"use client"

import React, { useState } from 'react'

export default function LibrarySections() {
    const [view, setView] = useState("list");
    return (
        <div className="p-5 bg-white rounded-xl shadow w-full">
            <h2 className="text-lg font-semibold mb-4">Library</h2>
            {/* Switcher */}
            <div className="inline-flex rounded-lg bg-gray-100 p-1 mb-4">
                <button
                    onClick={() => setView("list")}
                    className={`px-4 py-1 rounded-lg text-sm font-medium transition
            ${view === "list" ? "bg-white text-indigo-700 shadow" : ""}
          `}
                >
                    List
                </button>

                <button
                    onClick={() => setView("seat")}
                    className={`px-4 py-1 rounded-lg text-sm font-medium transition
            ${view === "seat" ? "bg-white text-indigo-700 shadow" : ""}
          `}
                >
                    Seat
                </button>

                <button
                    onClick={() => setView("update")}
                    className={`px-4 py-1 rounded-lg text-sm font-medium transition
            ${view === "update" ? "bg-white text-indigo-700 shadow" : ""}
          `}
                >
                    Update
                </button>
            </div>

            {/* Content Placeholder */}
            <div className="border rounded-lg p-4 min-h-[120px]">
                {view === "list" && (
                    <p className="text-sm text-gray-600">List view selected.</p>
                )}

                {view === "seat" && (
                    <p className="text-sm text-gray-600">Seat view selected.</p>
                )}

                {view === "update" && (
                    <p className="text-sm text-gray-600">Update view selected.</p>
                )}
            </div>
        </div>


    )
}
