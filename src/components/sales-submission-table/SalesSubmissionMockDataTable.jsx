import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockSalesSubmissionTableData } from "@/lib/data";
import { SalesSubmissionTableColumns } from "./SalesSubmissionTableColDef";

export function SalesSubmissionMockData() {
  const table = useReactTable({
    data: mockSalesSubmissionTableData,
    columns: SalesSubmissionTableColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="flex w-[350px] grow flex-col overflow-hidden lg:w-full">
      <Table className="h-full rounded-[8px] border bg-white">
        <TableHeader className="border bg-[#F9FAFB]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="cursor-pointer">
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="h-16 w-[189px] border py-2 text-left"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="h-full w-full">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="cursor-pointer border text-left"
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="px-4 py-4 text-left">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-left">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
