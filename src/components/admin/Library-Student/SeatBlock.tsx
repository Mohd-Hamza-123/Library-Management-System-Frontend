import { toast } from "sonner";
import { useState } from "react";
import { submitHandler } from "./action";
import type { Student } from "@/types/models.type";
import useLibraryStudent from "@/hooks/useLibraryStudent";
import { LibraryStudentAlert, LibraryStudentDialog, LibraryStudentTableSkeleton } from "@/components";

type Block = {
  block: string;
  students: Student[];
};

type SeatBlockProps = {
  studentBlocks: Block[];
};

export default function SeatBlock({ studentBlocks }: SeatBlockProps) {
  console.log(studentBlocks)
  const [id, setId] = useState("");
  const { updateLibraryStudent } = useLibraryStudent();

  const updateStudent = async (formData: FormData) => {
    const result = submitHandler(formData);

    if (result.success && result.data && id) {
      await updateLibraryStudent(id, result.data);
    } else {
      toast(result?.message, {
        duration: 5000,
        style: { color: "red" },
      });
    }
  };

  return (
    <div className="space-y-8">
      {studentBlocks.length > 0 && studentBlocks?.map((block) => (
        <section
          key={block.block}
          className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* ================= BLOCK HEADER ================= */}
          <div className="bg-indigo-50 px-5 py-3 text-sm font-semibold text-indigo-700">Block {block.block}
          </div>

          {/* ================= MOBILE VIEW ================= */}
          <div className="space-y-3 border-t border-gray-100 px-4 py-3 md:hidden">
            {block.students.map((s) => (
              <div
                key={s._id}
                className="flex flex-col gap-2 rounded-xl border border-indigo-100 bg-indigo-50/40 p-4 shadow-sm">
                {/* Name + Father */}
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {s.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Father: {s.father_name}
                  </p>
                  <p className="mt-1 text-sm font-medium text-indigo-700">Seat : {s.seat}</p>
                </div>

                {/* Shift */}
                <div className="text-xs text-gray-600">
                  Shift:{" "}
                  <span className="inline-flex rounded-full bg-indigo-100 px-2 py-0.5 font-medium capitalize text-indigo-700">
                    {s.shift}
                  </span>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-2 pt-2" onClick={() => setId(s._id)}>
                  <LibraryStudentDialog
                    label="update"
                    student={s}
                    submitHandler={updateStudent}
                    triggerClassName="h-8 rounded-full border border-indigo-200 bg-white px-4 text-sm text-indigo-600 hover:bg-indigo-50 transition"
                  />

                  <LibraryStudentAlert
                    triggerClassName="h-8 rounded-full px-4 text-sm text-red-600 hover:bg-red-50 transition"
                    studentId={s._id}
                    block={s.seat[0]}
                  />
                </div>
              </div>
            ))}

            {block.students.length === 0 && (
              <p className="py-4 text-center text-xs text-gray-400">
                No students in this block.
              </p>
            )}
          </div>

          {/* ================= DESKTOP TABLE ================= */}
          <div className="hidden border-t border-gray-100 md:block">
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-collapse text-sm">
                <thead className="bg-indigo-600 text-xs uppercase tracking-wide text-white">
                  <tr>
                    <th className="px-5 py-3 text-left">Name</th>
                    <th className="px-5 py-3 text-left">Father Name</th>
                    <th className="px-5 py-3 text-left">Seat</th>
                    <th className="px-5 py-3 text-left">Shift</th>
                    <th className="px-5 py-3 text-left">Joining Date</th>
                    <th className="px-5 py-3 text-left">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {block.students.map((s, idx) => (
                    <tr
                      key={s._id}
                      className={`transition ${idx % 2 === 0 ? "bg-white" : "bg-indigo-50/40"
                        } hover:bg-indigo-50`}>
                      <td className="px-5 py-3 font-medium text-gray-800">
                        {s.name}
                      </td>
                      <td className="px-5 py-3 text-gray-700">
                        {s.father_name}
                      </td>
                      <td className="px-5 py-3 text-gray-700">
                        {s.seat || "-"}
                      </td>
                      <td className="px-5 py-3">
                        <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium capitalize text-indigo-700">
                          {s.shift}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-gray-600">
                        {s.joining_date
                          ? new Date(s.joining_date).toDateString()
                          : "-"}
                      </td>

                      {/* ACTIONS */}
                      <td className="px-5 py-3">
                        <div
                          className="flex gap-2"
                          onClick={() => setId(s._id)}
                        >
                          <LibraryStudentDialog
                            label="update"
                            student={s}
                            submitHandler={updateStudent}
                            triggerClassName="h-8 rounded-full border border-indigo-200 bg-white px-4 text-indigo-600 hover:bg-indigo-50 transition"
                          />
                          <LibraryStudentAlert
                            triggerClassName="h-8 rounded-full px-4 text-red-600 hover:bg-red-50 transition"
                            studentId={s._id}
                            block={s.seat[0]}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}

                  {block.students.length === 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-5 py-6 text-center text-sm text-gray-400"
                      >
                        No students in this block.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}
      {studentBlocks.length === 0 && <LibraryStudentTableSkeleton/>}
    </div>
  );
}
