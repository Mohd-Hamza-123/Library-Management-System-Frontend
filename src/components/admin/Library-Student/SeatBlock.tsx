import { LibraryStudentAlert, LibraryStudentDialog } from "@/components";

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
  blocks: Block[];
};


export default function SeatBlock({ blocks }: SeatBlockProps) {
  console.log(blocks)
  return (
    <div className="space-y-8">
      {blocks?.map((block: Block) => (
        <section
          key={block.block}
          className="mb-6 w-full rounded-2xl border border-gray-100 bg-white shadow-sm"
        >
          {/* BLOCK HEADER */}
          <div className="px-4 py-3 font-semibold text-lg text-gray-800 bg-[#f7f8ff] rounded-t-2xl">
            Block {block.block}
          </div>

          {/* MOBILE VIEW */}
          <div className="border-t border-gray-100 px-4 py-3 space-y-3 md:hidden">
            {block.students.map((s: any) => (
              <div
                key={s._id}
                className="rounded-xl bg-[#f7f8ff] p-3 flex flex-col gap-2 shadow-[0_8px_20px_rgba(0,0,0,0.03)]"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-900">{s.name}</p>
                  <p className="text-xs text-gray-500">
                    Father: {s.father_name}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>
                    Shift:{" "}
                    <span className="font-medium text-gray-900">{s.shift}</span>
                  </span>
                </div>
              </div>
            ))}

            {block.students.length === 0 && (
              <p className="py-3 text-center text-xs text-gray-400">
                No students in this block.
              </p>
            )}
          </div>

          {/* DESKTOP TABLE */}
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
                  </tr>
                </thead>

                <tbody>
                  {block.students.map((s: any, idx: any) => (
                    <tr
                      key={s._id}
                      className={`text-gray-700 transition hover:bg-[#f5f5ff] ${idx % 2 === 0 ? "bg-white" : "bg-[#fafbff]"
                        }`}
                    >
                      <td className="px-5 py-3 font-medium">{s.name}</td>
                      <td className="px-5 py-3">{s.father_name}</td>
                      <td className="px-5 py-3">{s.seat}</td>
                      <td className="px-5 py-3">{s.shift}</td>
                      <td className="px-5 py-3">
                        {s.joining_date
                          ? new Date(s.joining_date).toDateString()
                          : "-"}
                      </td>
                    </tr>
                  ))}

                  {block.students.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
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
