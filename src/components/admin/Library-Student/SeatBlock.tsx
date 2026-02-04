import { toast } from "sonner";
import { useState } from "react";
import { submitHandler } from "./action";
import useLibraryStudent from "@/hooks/useLibraryStudent";
import { LibraryStudentAlert, LibraryStudentDialog } from "@/components";

type Student = {
  _id: string;
  name: string;
  father_name: string;
  shift: string;
  seat: string;
  joining_date?: string;
  is_hidden: boolean;
};

type Block = {
  block: string;
  students: Student[];
};

type SeatBlockProps = {
  blocks: Block[];
};


export default function SeatBlock({ blocks }: SeatBlockProps) {
  // console.log(blocks)
  const [id, setId] = useState('')
  const { updateLibraryStudent } = useLibraryStudent()

  const updateStudent = async (formData: FormData) => {
    const result = submitHandler(formData)
    // console.log(id)
    if (result.success && result.data && id) {

      await updateLibraryStudent(id, result?.data)

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

  return (

    <div className="space-y-8">
      {blocks?.map((block) => (

        <section key={block.block} className="w-full rounded-2xl border border-gray-100 bg-white shadow-sm">
          {/* BLOCK HEADER */}
          <div className="rounded-t-2xl bg-[#f7f8ff] px-4 py-3 text-lg font-semibold text-gray-800">
            Block {block.block}
          </div>

          {/* ================= MOBILE VIEW ================= */}
          <div className="space-y-3 border-t border-gray-100 px-4 py-3 md:hidden">
            {block.students.map((s) => (
              <div
                key={s._id}
                className="flex flex-col gap-2 rounded-xl bg-[#f7f8ff] p-3 shadow-[0_8px_20px_rgba(0,0,0,0.03)]">

                <div>
                  <p className="text-sm font-semibold text-gray-900"> {s.name}</p>
                  <p className="text-xs text-gray-500">Father: {s.father_name}</p>
                  <th className="font-medium text-sm text-gray-900">Seat : {s.seat} </th>
                </div>

                <div className="text-xs text-gray-600">
                  Shift:{" "} <span className="font-medium text-gray-900">{s.shift}</span>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-2 pt-2" onClick={() => setId(s._id)}>

                  <LibraryStudentDialog label="update" triggerClassName="h-8 rounded-full border-indigo-200 bg-white px-4 text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition" student={s} submitHandler={updateStudent} />

                  <LibraryStudentAlert
                    triggerClassName="h-8 px-3 rounded-full text-red-600 hover:bg-red-50"
                    studentId={s._id}
                    block={s.seat[0]}
                  />
                </div>
              </div>
            ))}

            {block.students.length === 0 && (
              <p className="py-3 text-center text-xs text-gray-400">
                No students in this block.
              </p>
            )}
          </div>

          {/* ================= DESKTOP TABLE ================= */}
          <div className="hidden border-t border-gray-100 md:block">
            <div className="overflow-x-auto">
              <table className="w-full table-fixed border-collapse bg-white text-sm">
                <thead className="bg-[#f7f8fc] text-xs uppercase tracking-wide text-gray-500">
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
                      className={`transition hover:bg-[#f5f5ff] ${idx % 2 === 0 ? "bg-white" : "bg-[#fafbff]"
                        }`}>

                      <td className="px-5 py-3 font-medium text-gray-700">{s.name}</td>
                      <td className="px-5 py-3 text-gray-700">{s.father_name}</td>
                      <td className="px-5 py-3 text-gray-700">{s.seat || "-"}</td>
                      <td className="px-5 py-3 text-gray-700">{s.shift}</td>
                      <td className="px-5 py-3 text-gray-700">{s.joining_date ? new Date(s.joining_date).toDateString() : "-"}
                      </td>

                      {/* ACTIONS */}
                      <td className="px-5 py-3">
                        <div className="flex gap-2" onClick={() => setId(s._id)}>
                          <LibraryStudentDialog
                            student={s}
                            label="update"
                            submitHandler={updateStudent}
                            triggerClassName="h-8 rounded-full border-indigo-200 bg-white px-4 text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition"
                          />
                          <LibraryStudentAlert
                            triggerClassName="h-8 px-3 rounded-full text-red-600 hover:bg-red-50"
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
    </div>
  );
}
