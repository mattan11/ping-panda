import { Card } from "@/components/ui/card"
import { BarChart } from "lucide-react"
import { useMemo } from "react"
import { isAfter, isToday, startOfMonth, startOfWeek } from "date-fns"
import { DeliveryStatus } from "@prisma/client"
import { JsonValue } from "type-fest"

type Props = {
  data:
    | {
        events: {
          name: string
          id: string
          userId: string
          createdAt: Date
          updatedAt: Date
          formattedMessage: string
          fields: JsonValue
          deliveryStatus: DeliveryStatus
          eventCategoryId: string | null
        }[]
        eventsCount: number
        uniqueFieldCount: number
      }
    | undefined
  activeTab: "today" | "week" | "month"
}

export const NumericFieldSumCards = ({ data, activeTab }: Props) => {
  const numericFieldSums = useMemo(() => {
    if (!data?.events || data.events.length === 0) return {}

    const sums: Record<
      string,
      {
        total: number
        thisWeek: number
        thisMonth: number
        today: number
      }
    > = {}

    const now = new Date()
    const weekStart = startOfWeek(now, { weekStartsOn: 1 })
    const monthStart = startOfMonth(now)

    data.events.forEach((event) => {
      const eventDate = event.createdAt

      Object.entries(event.fields as object).forEach(([field, value]) => {
        if (typeof value === "number") {
          if (!sums[field]) {
            sums[field] = { total: 0, thisWeek: 0, thisMonth: 0, today: 0 }
          }

          sums[field].total += value

          if (
            isAfter(eventDate, weekStart) ||
            eventDate.getTime() === weekStart.getTime()
          ) {
            sums[field].thisWeek += value
          }

          if (
            isAfter(eventDate, monthStart) ||
            eventDate.getTime() === monthStart.getTime()
          ) {
            sums[field].thisMonth += value
          }

          if (isToday(eventDate)) {
            sums[field].today += value
          }
        }
      })
    })

    return sums
  }, [data?.events])

  if (Object.keys(numericFieldSums).length === 0) return null

  return Object.entries(numericFieldSums).map(([field, sums]) => {
    const relevantSum =
      activeTab === "today"
        ? sums.today
        : activeTab === "week"
          ? sums.thisWeek
          : sums.thisMonth

    return (
      <Card key={field}>
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <p className="text-sm/6 font-medium">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </p>
          <BarChart className="size-4 text-muted-foreground" />
        </div>

        <div>
          <p className="text-2xl font-bold">{relevantSum.toFixed(2)}</p>
          <p className="text-xs/5 text-muted-foreground">
            {activeTab === "today"
              ? "today"
              : activeTab === "week"
                ? "this week"
                : "this month"}
          </p>
        </div>
      </Card>
    )
  })
}
