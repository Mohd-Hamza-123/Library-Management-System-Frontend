"use client";

import React, { useState } from "react";
import Link from "next/link";

type Student = {
  id: number;
  name: string;
  fatherName: string;
  shift: string;
  seat: string;
};

// Dummy data – replace later with MongoDB data
const initialA: Student[] = [
  { id: 1, name: "Hamza Khan", fatherName: "Mohd Khan", shift: "Morning", seat: "A-12" },
  { id: 2, name: "Ayesha Fatima", fatherName: "Imran Ali", shift: "Evening", seat: "A-07" },
];

const initialB: Student[] = [
  { id: 3, name: "Rahul Sharma", fatherName: "Vikram Sharma", shift: "Morning", seat: "B-03" },
];

const initialC: Student[] = [
  { id: 4, name: "Sameer Ali", fatherName: "Imran Ali", shift: "Evening", seat: "C-05" },
];

const initialD: Student[] = [
  { id: 5, name: "Noor Fatima", fatherName: "Javed Ali", shift: "Morning", seat: "D-01" },
];

type SeatBlockProps = {
  seatLabel: string;
  students: Student[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

function SeatBlock({ seatLabel, students, onEdit, onDelete }: SeatBlockProps) {
  return (
    <section className="mb-6 w-full rounded-2xl border border-gray-100 bg-white shadow-sm">
      {/* Block header */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-5">
        <h3 className="text-sm font-semibold text-gray-800">
          Seat Block {seatLabel}
        </h3>
        <span className="text-xs text-gray-400">Total: {students.length}</span>
      </div>

      {/* MOBILE: cards */}
      <div className="border-t border-gray-100 px-4 py-3 space-y-3 md:hidden">
        {students.map((s) => (
          <div
            key={s.id}
            className="rounded-xl bg-[#f7f8ff] p-3 flex flex-col gap-2 shadow-[0_8px_20px_rgba(0,0,0,0.03)]"
          >
            <div>
              <p className="text-sm font-semibold text-gray-900">{s.name}</p>
              <p className="text-xs text-gray-500">Father: {s.fatherName}</p>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>
                Shift: <span className="font-medium text-gray-900">{s.shift}</span>
              </span>
              <span>
                Seat: <span className="font-semibold text-gray-900">{s.seat}</span>
              </span>
            </div>

            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => onEdit(s.id)}
                className="rounded-full border border-[#e0ddff] px-3 py-1 text-xs font-medium text-[#5b3fff] transition hover:bg-[#5b3fff] hover:text-white"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(s.id)}
                className="rounded-full border border-red-100 px-3 py-1 text-xs font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {students.length === 0 && (
          <p className="py-3 text-center text-xs text-gray-400">
            No students in this block.
          </p>
        )}
      </div>

      {/* DESKTOP/TABLET: full-width table */}
      <div className="hidden border-t border-gray-100 md:block">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-white text-sm">
            <thead className="bg-[#f7f8fc] text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-5 py-3 text-left">Name</th>
                <th className="px-5 py-3 text-left">Father Name</th>
                <th className="px-5 py-3 text-left">Shift</th>
                <th className="px-5 py-3 text-left whitespace-nowrap w-[100px]">
                  Seat
                </th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, idx) => (
                <tr
                  key={s.id}
                  className={`text-gray-700 transition hover:bg-[#f5f5ff] ${
                    idx % 2 === 0 ? "bg-white" : "bg-[#fafbff]"
                  }`}
                >
                  <td className="px-5 py-3 font-medium">{s.name}</td>
                  <td className="px-5 py-3">{s.fatherName}</td>
                  <td className="px-5 py-3">{s.shift}</td>
                  <td className="px-5 py-3 font-semibold whitespace-nowrap">
                    {s.seat}
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => onEdit(s.id)}
                        className="rounded-full border border-[#e0ddff] px-3 py-1 text-xs font-medium text-[#5b3fff] shadow-sm transition hover:bg-[#5b3fff] hover:text-white"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(s.id)}
                        className="rounded-full border border-red-100 px-3 py-1 text-xs font-medium text-red-500 shadow-sm transition hover:bg-red-500 hover:text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {students.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
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
  );
}

export default function LibraryStudentPage() {
  const [studentsA, setStudentsA] = useState<Student[]>(initialA);
  const [studentsB, setStudentsB] = useState<Student[]>(initialB);
  const [studentsC, setStudentsC] = useState<Student[]>(initialC);
  const [studentsD, setStudentsD] = useState<Student[]>(initialD);

  const handleDelete = (
    id: number,
    setFn: React.Dispatch<React.SetStateAction<Student[]>>
  ) => {
    if (!confirm("Are you sure you want to delete this student?")) return;
    setFn((prev) => prev.filter((s) => s.id !== id));
  };

  const handleEdit = (id: number) => {
    console.log("Edit student id:", id);
    // later: router.push(`/admin/library-student/${id}/edit`)
  };

  return (
    <main className="bg-[#f5f7fb] px-3 py-5 sm:px-5 lg:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Page header */}
        <header className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 md:text-2xl">
              Library Students
            </h1>
            <p className="text-sm text-gray-500">
              Add, edit & view library students.
            </p>
          </div>

          <Link
            href="/admin/library-student/new"
            className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-[#5b3fff] px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#4a32d1]"
          >
            + Add Student
          </Link>
        </header>

        {/* Stacked seat blocks */}
        <SeatBlock
          seatLabel="A"
          students={studentsA}
          onEdit={handleEdit}
          onDelete={(id) => handleDelete(id, setStudentsA)}
        />
        <SeatBlock
          seatLabel="B"
          students={studentsB}
          onEdit={handleEdit}
          onDelete={(id) => handleDelete(id, setStudentsB)}
        />
        <SeatBlock
          seatLabel="C"
          students={studentsC}
          onEdit={handleEdit}
          onDelete={(id) => handleDelete(id, setStudentsC)}
        />
        <SeatBlock
          seatLabel="D"
          students={studentsD}
          onEdit={handleEdit}
          onDelete={(id) => handleDelete(id, setStudentsD)}
        />
      </div>
    </main>
  );
}
