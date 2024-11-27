import { ColumnDef } from "@tanstack/react-table"
import { Event } from "@prisma/client"
import { TableCell, TableRow } from "@/components/ui/table"

export const TableNoResults = (props: { columns: ColumnDef<Event>[] }) => {
  return (
    <TableRow>
      <TableCell colSpan={props.columns.length} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  )
}
