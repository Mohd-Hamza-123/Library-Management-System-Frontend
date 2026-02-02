"use client";

import { toast } from "sonner";
import SeatBlock from "./SeatBlock";
import { seatBlocks as block } from "@/constant";
import { useInfiniteQuery } from "@tanstack/react-query";
import useLibraryStudent from "@/hooks/useLibraryStudent";
import React, { useEffect, useRef, useState } from "react";
import { LibraryStudentDialog, Spinner } from "@/components";
import { libraryStudentSchema } from "@/lib/validation/libraryStudentSchema";
import { submitHandler } from "./action";

type Student = {
  _id: string;
  name: string;
  father_name: string;
  shift: string;
  seat?: string;
  joining_date?: string;
};

type Block = {
  block: string;
  students: Student[];
};

type SeatBlockProps = {
  blocks: Block[] | [];
};

export default function LibraryStudentPage() {

  const { addLibraryStudent, getLibraryStudent } = useLibraryStudent()
  const spinnerRef = useRef<HTMLDivElement>(null)

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
    queryKey: ['library-student'],
    queryFn: ({ pageParam }) => {
      // console.log(pageParam)
      return getLibraryStudent(block[pageParam], pageParam)
    },
    getNextPageParam: (lastPage, pages) => {
      // console.log(lastPage?.nextCursor)
      return lastPage?.nextCursor < block.length ? lastPage?.nextCursor : undefined
    },
  })

  // console.log(data)
  const students = data?.pages.flatMap((page) => page?.data) || []
  // console.log(students)

  const createStudent = async (formData: FormData) => {

    const result = submitHandler(formData)
    if (result.success && result.data) {

      await addLibraryStudent(result?.data)

    } else {
      toast(result?.message, {
        duration: 5000,
        style: {
          color: "red",
        },
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
    }
  }

  useEffect(() => {
    const ref = spinnerRef.current
    if (!ref) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNextPage) {
        // console.log("intersect")
        fetchNextPage()
      }
    },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    )

    observer.observe(ref);
    return () => observer.unobserve(ref);

  }, [hasNextPage, fetchNextPage, data])


  return (
    <main className="bg-[#f5f7fb] px-3 py-5 sm:px-5 lg:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Page header */}
        <header className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 md:text-2xl">
              Library Students
            </h1>
            <p className="text-sm text-gray-500">
              Add, edit & view library students.
            </p>
          </div>

          <LibraryStudentDialog
            triggerClassName="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-[#5b3fff] px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#4a32d1] hover:text-white"
            label="Add Student"
            submitHandler={createStudent}
          />

        </header>

        {/* seat blocks */}
        <SeatBlock blocks={students} />
        {hasNextPage && <div className="flex justify-center my-2" ref={spinnerRef}>
          <Spinner />
        </div>}

      </div>
    </main>
  );
}
