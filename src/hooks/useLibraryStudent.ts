import { toast } from "sonner";
import { LibraryStudentSchema } from "@/lib/validation/libraryStudentSchema";

export default function useLibraryStudent() {

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
                body: JSON.stringify({ ...data, id }),
            })
            const student = await update.json()
            if (student.success) {
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
        try {
            const response = await fetch(`/api/library-student/get-all?seat=${seat}&pageParam=${pageParam}`, {
                method: "GET",
            })
            const student = await response.json()
            if (student.success) {
                // console.log(student)
                return { data: student.data, nextCursor: student.nextCursor }
            } else {
                throw new Error(student.error || "Failed to get student");
            }
        } catch (error: unknown) {
            console.log("error getting library student", error)
            const errorMessage = process.env.NODE_ENV === "development" ? error instanceof Error ? error.message : "Internal Server Error" : "Failed to get student";
            toast(errorMessage, {
                duration: 2500,
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            })
        }
    }


    return { addLibraryStudent, updateLibraryStudent, getLibraryStudent }

}