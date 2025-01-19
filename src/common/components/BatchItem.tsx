"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface BatchItemProps {
  batchCode: string;
  batchName: string;
  totalStudents: number;
}

export default function BatchItem({
  batchCode,
  batchName,
  totalStudents,
}: BatchItemProps) {
  const router = useRouter();
  const location = usePathname();

  // Mapping for batch names
  const batchNameMap: { [key: string]: string } = {
    cs: "Computer Science",
    hu: "Humanities",
    co: "Commerce",
    bio: "Biology Science",
  };

  // Convert batchName using mapping or use the original
  const fullBatchName = batchNameMap[batchName] || batchName;

  return (
    <div className="flex flex-col bg-white p-4 rounded-lg border border-azure-100 gap-5 h-auto">
      <div className="flex flex-row items-center gap-4">
        <span className="text-2xl font-semibold text-azure-600 uppercase">
          {batchCode}
        </span>
        <div className="w-[1px] h-[2rem] bg-gray-400"></div>
        <span className="text-base font-normal text-gray-700">
          {fullBatchName}
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className="text-gray-800">Total students:</span>
        <span className="text-xl font-semibold text-azure-600">
          {totalStudents}
        </span>
      </div>
      <div className="h-[1px] w-full bg-gray-300"></div>
      {location === "/dashboard/batches" ? (
        <div className="w-full flex flex-col space-y-2">
          <button
            onClick={() =>
              router.push(
                `/dashboard/batches/stats/${batchCode}`
              )
            }
            className="bg-azure-600 w-full text-white font-medium p-2 rounded-md"
          >
            View Attendance Stats
          </button>
          {/* <button
            onClick={() =>
              router.push(
                `/dashboard/attendance/${batchCode}/mark-attendance/custom-date`
              )
            }
            className="bg-azure-50 w-full text-azure-600 font-medium p-2 rounded-md"
          >
            Date Chart
          </button> */}
        </div>
      ) : (
        <div className="w-full flex flex-col space-y-2">
          <button
            onClick={() =>
              router.push(
                `/dashboard/attendance/${batchCode}/mark-attendance/today`
              )
            }
            className="bg-azure-600 w-full text-white font-medium p-2 rounded-md"
          >
            Mark Today's Attendance
          </button>
          <button
            onClick={() =>
              router.push(
                `/dashboard/attendance/${batchCode}/mark-attendance/custom-date`
              )
            }
            className="bg-azure-50 w-full text-azure-600 font-medium p-2 rounded-md"
          >
            Custom Date
          </button>
        </div>
      )}
    </div>
  );
}
