import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import useLibraryStudent from "@/hooks/useLibraryStudent"

export default function LibraryStudentAlert({
    triggerClassName = "",
    studentId,
    block }: { triggerClassName?: string, studentId: string, block: string }) {

    const { deleteLibraryStudent } = useLibraryStudent();

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className={triggerClassName} >delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure you want to delete this student?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. The student will be permanently removed.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteLibraryStudent(studentId, block)}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
