"use client"

import { toast } from "sonner";
import { useAppDispatch } from "@/lib/hooks";
import { setDialogClose } from "@/lib/features/booleanSlice";
import { LibraryStudentSchema } from "@/lib/validation/libraryStudentSchema";
import { useQueryClient } from "@tanstack/react-query";
import { Student } from "@/types/models.type";

type studentBlock = {
    block: string,
    students: Student[]
}

type pageType = {
    nextCursor: number,
    data: studentBlock[]
}

type oldDataType = {
    pageParams: number[],
    pages: pageType[]
}

export default function useLibraryStudent() {

    const dispatch = useAppDispatch()
    const queryClient = useQueryClient()

    const addLibraryStudent = async (data: LibraryStudentSchema) => {
        try {
            // console.log(data);
            const response = await fetch("/api/library-student/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const student = await response.json();

            // console.log(student);

            if (student.success) {
                const newData = student.data
                const block: string = student.data.seat.charAt(0)
                // console.log(newData)
                // console.log(block)
                queryClient.setQueryData(['library-student'], (oldData: oldDataType) => {

                    if (!oldData) return oldData
                    const newState = {
                        ...oldData,
                        pages: oldData.pages.map((page: pageType) => {
                            return {
                                ...page,
                                data: page.data.map((entity: studentBlock) => {
                                    if (entity.block !== block) return entity
                                    return {
                                        ...entity,
                                        students: [...entity.students, newData]
                                    }
                                })
                            }
                        })
                    }
                    // console.log(newState)
                    return newState
                })
                toast(student.message, {
                    duration: 4000,
                    style: {
                        color: "green",
                    },
                    action: {
                        label: "Undo",
                        onClick: () => console.log("Undo"),
                    },
                })
            } else {
                throw new Error(student.error || "Failed to add student");
            }

            dispatch(setDialogClose())
        } catch (error: unknown) {
            console.error("Error adding library student:", error);
            const errorMessage = process.env.NODE_ENV === "development" ? error instanceof Error ? error.message : "Internal Server Error" : "Failed to add student";

            toast(errorMessage, {
                duration: 2500,
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            })
        }
    }
    const updateLibraryStudent = async (id: string, data: LibraryStudentSchema) => {
        try {

            const update = await fetch(`/api/library-student/update/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data, id }),
            })

            const student = await update.json()

            if (student.success) {

                const updatedStudent = student.data
                const block: string = student.data.seat.charAt(0)

                queryClient.setQueryData(['library-student'], (oldData: oldDataType) => {
                    // if (!oldData) return oldData

                    const newData = {
                        ...oldData,
                        pages: oldData.pages.map((page: pageType) => {
                            return {
                                ...page,
                                data: page.data.map((entity: studentBlock) => {
                                    if (entity.block !== block) return entity
                                    return {
                                        ...entity,
                                        students: entity.students.map((student: Student) => {
                                            if (student._id !== id) return student
                                            return updatedStudent
                                        })
                                    }
                                })
                            }
                        })
                    }
                    console.log(oldData)
                    console.log(newData)

                    return newData
                })
                toast(student.message, {
                    duration: 4000,
                    style: {
                        color: "green",
                    },
                    action: {
                        label: "Undo",
                        onClick: () => console.log("Undo"),
                    },
                })
            } else {
                throw new Error(student.error || "Failed to update student");
            }

            dispatch(setDialogClose())

        } catch (error: unknown) {
            console.error("Error updating library student:", error);
            const errorMessage = process.env.NODE_ENV === "development" ? error instanceof Error ? error.message : "Internal Server Error" : "Failed to update student";
            toast(errorMessage, {
                duration: 2500,
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            })
        }
    }

    const getLibraryStudent = async (seat: string, pageParam: number) => {

        const response = await fetch(`/api/library-student/get-all?seat=${seat}&pageParam=${pageParam}`, {
            method: "GET",
            cache: "no-store"
        })

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData?.error || errorData?.message
                    ? `[${response.status}] : ${errorData.error || errorData.message}`
                    : "Failed to fetch students";

            throw new Error(errorMessage)
        }

        const student = await response.json();
        console.log(student)

        if (!student.success) {
            throw new Error(student.message || "Failed to fetch students")
        }

        return { data: student.data, nextCursor: student.nextCursor }

    }

    const deleteLibraryStudent = async (id: string, block: string) => {

        try {
            const response = await fetch(`/api/library-student/delete/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            })

            const student = await response.json()

            if (student.success) {

                queryClient.setQueryData(['library-student'], (oldData: oldDataType) => {
                    console.log(oldData)
                    if (!oldData) return oldData

                    const newData = {
                        ...oldData,
                        pages: oldData.pages.map((page: pageType) => {
                            return {
                                ...page,
                                data: page.data.map((entity: studentBlock) => {
                                    if (entity.block !== block) return entity
                                    return {
                                        ...entity,
                                        students: entity.students.filter((student: Student) => student._id !== id)
                                    }
                                })
                            }
                        })
                    }

                    // console.log(oldData)
                    // console.log(newData)
                    return newData

                })

                toast(student.message, {
                    duration: 4000,
                    style: {
                        color: "green",
                    },
                    action: {
                        label: "Undo",
                        onClick: () => console.log("Undo"),
                    },
                })

            } else {

                toast(student.message, {
                    duration: 4000,
                    style: {
                        color: "red",
                    },
                    action: {
                        label: "Undo",
                        onClick: () => console.log("Undo"),
                    },
                })
            }


        } catch (error) {
            console.log("error deleting library student", error)
            const errorMessage = process.env.NODE_ENV === "development" ? error instanceof Error ? error.message : "Internal Server Error" : "Failed to delete student";
            toast(errorMessage, {
                duration: 2500,
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            })
        }
    }


    return { addLibraryStudent, updateLibraryStudent, getLibraryStudent, deleteLibraryStudent }

}