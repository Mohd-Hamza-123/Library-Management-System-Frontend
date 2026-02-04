// "use client"

import React from "react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,

} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoadingButton } from ".."
// import { useAppDispatch, useAppSelector } from "@/lib/hooks"
// import { setDialogClose, setDialogOpen } from "@/lib/features/booleanSlice"

type Student = {
    _id: string;
    name: string;
    father_name: string;
    shift: string;
    seat?: string;
    joining_date?: string;
    is_hidden: boolean;
};

interface LibraryStudentDialogProps {
    triggerClassName?: string;
    label: string;
    submitHandler?: (formData: FormData) => void;
    student?: Student;
}

export default function LibraryStudentDialog({ triggerClassName = "", label, submitHandler, student }: LibraryStudentDialogProps) {

    // const dispatch = useAppDispatch()
    // const isDialogOpen = useAppSelector((state) => state.booleanSlice.isDialogOpen)

    return (
        <Dialog
            // open={isDialogOpen}
            // onOpenChange={(open) => {
            //     if (open) dispatch(setDialogOpen())
            //     else dispatch(setDialogClose())
            // }}
        >

            <DialogTrigger asChild>
                <Button
                    // onClick={() => dispatch(setDialogOpen())}
                    variant="outline"
                    className={triggerClassName}>
                    {label}
                </Button>
            </DialogTrigger>

            {/* Responsive dialog */}
            <DialogContent
                className="w-[95vw] max-w-md max-h-[90dvh] overflow-y-auto p-4 sm:p-6">
                <DialogHeader className="space-y-1">
                    <DialogTitle>Library Student</DialogTitle>
                </DialogHeader>

                <form className="mt-4 space-y-4" action={submitHandler}>
                    {/* Student Name */}
                    <div className="grid gap-2">
                        <Label htmlFor="name">Student Name</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Enter student name"
                            required
                            defaultValue={student?.name}
                        />
                    </div>

                    {/* Father Name */}
                    <div className="grid gap-2">
                        <Label htmlFor="father_name">Father Name</Label>
                        <Input
                            id="father_name"
                            name="father_name"
                            placeholder="Enter father name"
                            required
                            defaultValue={student?.father_name}
                        />
                    </div>

                    {/* Seat */}
                    <div className="grid gap-2">
                        <Label htmlFor="seat">Seat</Label>
                        <Input
                            id="seat"
                            name="seat"
                            placeholder="e.g. A12"
                            required
                            defaultValue={student?.seat}
                        />
                    </div>

                    {/* Shift */}
                    <div className="grid gap-2">
                        <Label>Shift</Label>
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-2">
                                <input
                                    id="shift-morning"
                                    type="radio"
                                    name="shift"
                                    value="morning"
                                    className="h-4 w-4"
                                    required
                                    defaultChecked={student?.shift === "morning"}
                                />
                                <Label htmlFor="shift-morning" className="font-normal">
                                    Morning
                                </Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    id="shift-evening"
                                    type="radio"
                                    name="shift"
                                    value="evening"
                                    className="h-4 w-4"
                                    defaultChecked={student?.shift === "evening"}
                                />
                                <Label htmlFor="shift-evening" className="font-normal">
                                    Evening
                                </Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    id="shift-both"
                                    type="radio"
                                    name="shift"
                                    value="both"
                                    className="h-4 w-4"
                                    defaultChecked={student?.shift === "both"}
                                />
                                <Label htmlFor="shift-both" className="font-normal">
                                    Both
                                </Label>
                            </div>
                        </div>
                    </div>

                    {/* Joining Date */}
                    <div className="grid gap-2">
                        <Label htmlFor="joining_date">Joining Date</Label>
                        <Input
                            id="joining_date"
                            name="joining_date"
                            type="date"
                            required
                            defaultValue={student?.joining_date ? new Date(student.joining_date).toISOString().split('T')[0] : ''}
                        />
                    </div>

                    {/* Visibility */}
                    <div className="flex items-center justify-between rounded-md border px-3 py-2">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium">Visibility</span>
                            <span className="text-xs text-muted-foreground">
                                Hide this student from the list
                            </span>
                        </div>
                        <input
                            id="is_hidden"
                            name="is_hidden"
                            type="checkbox"
                            className="h-4 w-4 rounded border"
                            defaultChecked={student?.is_hidden}
                        />
                    </div>

                    {/* Footer: full-width buttons on mobile, right-aligned on larger screens */}
                    <DialogFooter
                        className="mt-2 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                        <DialogClose asChild>
                            <Button
                                // onClick={() => dispatch(setDialogClose())}
                                variant="outline"
                                type="button"
                                className="w-full sm:w-auto">
                                Cancel
                            </Button>
                        </DialogClose>
                        <LoadingButton content="save" />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
