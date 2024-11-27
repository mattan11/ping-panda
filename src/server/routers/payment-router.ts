import { createCheckoutSession } from "@/lib/stripe"
import { router } from "../__internals/router"
import { privateProcedure } from "../procedures"
import { db } from "@/db"

export const paymentRouter = router({
  createCheckoutSession: privateProcedure.mutation(async ({ c, ctx }) => {
    const { user } = ctx

    //stripe
    // const session = await createCheckoutSession({
    //   userEmail: user.email,
    //   userId: user.id,
    // })

    //database
    await db.user.update({
      where: { id: user.id },
      data: { plan: "PRO" },
    })

    return c.json({
      url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
    })
  }),

  getUserPlan: privateProcedure.query(async ({ c, ctx }) => {
    const { user } = ctx
    return c.json({ plan: user.plan })
  }),
})
