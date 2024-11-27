import { ColumnDef } from "@tanstack/react-table"
import { Event } from "@prisma/client"
import { TableCell, TableRow } from "@/components/ui/table"

export const TableLoading = ({ columns }: { columns: ColumnDef<Event>[] }) => {
  return [...Array(5)].map((_, rowIndex) => (
    <TableRow key={rowIndex}>
      {columns.map((_, cellIndex) => (
        <TableCell key={cellIndex}>
          <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
        </TableCell>
      ))}
    </TableRow>
  ))
}
