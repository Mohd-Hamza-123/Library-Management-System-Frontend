"use client";

import { seatBlocks } from "@/constant";
import React, { useEffect, useRef } from "react";
import type { Student } from "@/types/models.type";
import { useInfiniteQuery } from "@tanstack/react-query";
import useLibraryStudent from "@/hooks/useLibraryStudent";
import { DataFetchError, Spinner, StudentListDesktop, StudentListMobile } from "@/components/";

type StudentBlock = {
    block: string;
    students: Student[];
};

export default function LibrarySections() {


    const spinnerRef = useRef<HTMLDivElement>(null);
    const { getLibraryStudent } = useLibraryStudent();


    const {
        data,
        error,
        isError,
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
            return lastPage?.nextCursor < seatBlocks.length ? lastPage?.nextCursor : undefined;
        },
    });


    console.log("library-student data : ", data)
    // console.log("ispending", status)

    const students: StudentBlock[] | [] = data?.pages?.flatMap((page) => page?.data) || [];
    // console.log("students ; ",students)
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
    }, [hasNextPage, fetchNextPage, isFetchingNextPage]);

    return (

        <div className="w-full bg-white shadow p-4 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">Library Student List</h2>
            {isError ? (
                <DataFetchError error={error}/>
            ) : (
                <>
                    <StudentListDesktop
                        data={students}
                        isLoading={status === "pending"}
                    />
                    <StudentListMobile
                        data={students}
                        isLoading={status === "pending"}
                    />

                    {hasNextPage && (
                        <div className="flex justify-center py-4" ref={spinnerRef}>
                            <Spinner />
                        </div>
                    )}
                </>
            )}



        </div>

    );
}
