import React from "react";
import { LibraryStudentTableSkeleton } from "..";
import type { Student } from "@/types/models.type";

type StudentBlock = {
    block: string;
    students: Student[];
};


export default function StudentListDesktop({ data }: { data: StudentBlock[] }) {

    return (
        <section className="md:flex flex-col gap-5 py-8 hidden">
            {data && data.map((entity: StudentBlock) => (
                <div
                    key={entity.block}
                    className="hidden sm:block rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                    {/* Block Header */}
                    <div className="flex items-center justify-between px-5 py-4 bg-indigo-50 border-b border-indigo-100">
                        <h3 className="text-sm font-semibold text-indigo-700 tracking-wide"> Block : {entity.block}</h3>
                    </div>

                    {/* Table */}
                    <table className="hidden sm:table w-full text-sm border-collapse">
                        <thead className="bg-indigo-600 text-white text-xs uppercase tracking-wider">
                            <tr>
                                <th className="px-5 py-3 text-left font-semibold">Name</th>
                                <th className="px-5 py-3 text-left font-semibold">Father Name</th>
                                <th className="px-5 py-3 text-left font-semibold">Seat</th>
                                <th className="px-5 py-3 text-left font-semibold">Shift</th>
                                <th className="px-5 py-3 text-left font-semibold">Joining Date</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            {entity?.students?.map((student: Student, idx: number) => (
                                <tr
                                    key={student._id}
                                    className={`${idx % 2 === 0 ? "bg-white" : "bg-indigo-50/40"}hover:bg-indigo-50 transition-colors`}>
                                    <td className="px-5 py-3 font-medium text-gray-800"> {student.name} </td>

                                    <td className="px-5 py-3 text-gray-600"> {student.father_name} </td>

                                    <td className="px-5 py-3">
                                        <span className="inline-flex items-center rounded-md bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-700">
                                            {student.seat}
                                        </span>
                                    </td>

                                    <td className="px-5 py-3 capitalize">
                                        <span
                                            className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium
                                            ${student.shift === "morning"
                                                    ? "bg-green-100 text-green-700"
                                                    : student.shift === "evening"
                                                        ? "bg-purple-100 text-purple-700"
                                                        : "bg-indigo-100 text-indigo-700"
                                                }`}
                                        >
                                            {student.shift}
                                        </span>
                                    </td>

                                    <td className="px-5 py-3 text-gray-500">
                                        {student.joining_date
                                            ? new Date(student.joining_date).toDateString()
                                            : "-"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
            {data.length === 0 && <LibraryStudentTableSkeleton />}
        </section>
    );
}
