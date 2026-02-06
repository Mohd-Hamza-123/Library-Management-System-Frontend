import React from "react";
import { StudentTableMobile } from "..";
import type { Student } from "@/types/models.type";

type StudentBlock = {
    block: string;
    students: Student[];
};

export default function StudentListMobile({ data }: { data : StudentBlock[] }) {
    
    return (
        <div className="md:hidden">
            <div className="flex flex-col gap-5 my-4">
                {data.length > 0 && data?.map((entity: StudentBlock) => (
                    <div
                        key={entity.block}
                        className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                        {/* Block Header */}
                        <div className="bg-indigo-50 px-4 py-3 border-b border-indigo-100">
                            <h2 className="text-sm font-semibold text-indigo-700">
                                Block : {entity.block}
                            </h2>
                        </div>

                        {/* Students */}
                        <div className="flex flex-col gap-4">
                            {entity.students.map((student: Student) => (
                                <div key={student._id} className="p-4">
                                    {/* Name & Father */}
                                    <div className="mb-3">
                                        <h3 className="text-base font-semibold text-gray-900">
                                            {student.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Father Name :  {student.father_name}
                                        </p>
                                    </div>

                                    {/* Chips */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                                            Seat {student.seat || "-"}
                                        </span>

                                        <span
                                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium capitalize
                                        ${student.shift === "morning"
                                                    ? "bg-green-100 text-green-700"
                                                    : student.shift === "evening"
                                                        ? "bg-purple-100 text-purple-700"
                                                        : "bg-indigo-100 text-indigo-700"
                                                }`}
                                        >
                                            {student.shift}
                                        </span>
                                    </div>

                                    {/* Footer */}
                                    <div className="text-xs text-gray-400">
                                        Joined{" "}
                                        {student.joining_date
                                            ? new Date(student.joining_date).toDateString()
                                            : "-"}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {data.length === 0 && <StudentTableMobile />}
        </div>
    );
}
