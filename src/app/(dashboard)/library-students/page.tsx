"use client";

import { seatBlocks } from "@/constant";
import type { Student } from "@/types/models.type";
import { useInfiniteQuery } from "@tanstack/react-query";
import useLibraryStudent from "@/hooks/useLibraryStudent";
import React, { useEffect, useRef, useState } from "react";
import { Spinner, StudentListDesktop, StudentListMobile } from "@/components/";

type StudentBlock = {
    block: string;
    students: Student[];
};

export default function LibrarySections() {

    const [view, setView] = useState("list");
    const spinnerRef = useRef<HTMLDivElement>(null);
    const { getLibraryStudent } = useLibraryStudent();

    const {
        data,
        error,
        status,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        initialPageParam: 0,
        queryKey: ["library-student"],
        queryFn: ({ pageParam }) => {
            // console.log(pageParam)
            return getLibraryStudent(seatBlocks[pageParam], pageParam);
        },
        getNextPageParam: (lastPage, pages) => {
            // console.log(lastPage?.nextCursor)
            return lastPage?.nextCursor < seatBlocks.length
                ? lastPage?.nextCursor
                : undefined;
        },
    });

    const students: StudentBlock[] | [] = data?.pages.flatMap((page) => page?.data) || [];

    useEffect(() => {
        const ref = spinnerRef.current;
        if (!ref) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && hasNextPage) {
                    // console.log("intersect")
                    fetchNextPage();
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            },
        );

        observer.observe(ref);
        return () => observer.unobserve(ref);
    }, [hasNextPage, fetchNextPage, data]);

    return (
      
        <div className="w-full bg-white shadow p-4 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">Library</h2>

            {/* View Switcher */}
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
                <button
                    onClick={() => setView("list")}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition
        ${view === "list"
                            ? "bg-white text-indigo-600 shadow"
                            : "text-gray-600 hover:text-gray-800"}
      `}
                >
                    List
                </button>

                <button
                    onClick={() => setView("seat")} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition
        ${view === "seat"
                            ? "bg-white text-indigo-600 shadow"
                            : "text-gray-600 hover:text-gray-800"}
      `}>
                    Seat
                </button>
            </div>

            {/* Content */}

            {view === "list" && (
                <>
                    {/* DESKTOP TABLE */}
                    < StudentListDesktop data={students} />
                    {/* MOBILE STACKED ROWS */}
                    <StudentListMobile data={students} />
                </>
            )}

            {/* Spinner */}
            {hasNextPage && (
                <div className="flex justify-center py-4" ref={spinnerRef}>
                    <Spinner />
                </div>
            )}

            {/* Seat View */}
            {view === "seat" && (
                <div className="rounded-lg border p-6 text-center text-sm text-gray-600">
                    Seat view selected.
                </div>
            )}

        </div>

    );
}
