import { toast } from "sonner";
import { LibraryStudentSchema } from "@/lib/validation/libraryStudentSchema";

export default function useLibraryStudent() {

    const addLibraryStudent = async (data: LibraryStudentSchema) => {
        try {
            const response = await fetch("/api/library-student/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const student = await response.json();
            console.log(student);
            if (student.success) {
                toast("Student added successfully", {
                    duration: 2500,
                    action: {
                        label: "Undo",
                        onClick: () => console.log("Undo"),
                    },
                })
            } else {
                throw new Error(student.error || "Failed to add student");
            }
        } catch (error : unknown) {
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

    return { addLibraryStudent }
}