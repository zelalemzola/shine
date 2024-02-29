"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"



export default function DataTable({
  columns,
  data,
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel:getPaginationRowModel(),
  })

  return (
    <div>

    <div className="rounded-md border">
      <Table key="table" className="rounded-md border text-white bg-yellow-500">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="text-white">
                    {header.isPlaceholder
                     ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="hover:bg-black hover:text-white hover:font-bold"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
    
    <div className="flex items-center justify-end space-x-2 py-4">
      <Button
      variant="mine"
     
      size="sm"
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
      >

      Previous</Button>
      <Button
      variant="mine"
       
      size="sm"
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
      >

      Next</Button>
      
    </div>
    
    </div>
  )
}