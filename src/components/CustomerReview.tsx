import Image from "next/image"
import { Star } from "lucide-react"
import { Icons } from "@/components/icons"

interface CustomerReviewProps {
  name: string
  username: string
  avatarSrc: string
  review: string
}

const CustomerReview = ({
  name,
  username,
  avatarSrc,
  review,
}: CustomerReviewProps) => {
  return (
    <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-[2rem]">
      <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
        <Star className="size-5 text-brand-600 fill-brand-600" />
        <Star className="size-5 text-brand-600 fill-brand-600" />
        <Star className="size-5 text-brand-600 fill-brand-600" />
        <Star className="size-5 text-brand-600 fill-brand-600" />
        <Star className="size-5 text-brand-600 fill-brand-600" />
      </div>

      <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
        {review}
      </p>

      <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
        <Image
          src={avatarSrc}
          className="rounded-full object-cover"
          alt={`${name} Avatar`}
          width={48}
          height={48}
        />
        <div className="flex flex-col items-center sm:items-start">
          <p className="font-semibold flex items-center">
            {name}
            <Icons.verificationBadge className="size-4 inline-block ml-1.5" />
          </p>
          <p className="text-sm text-gray-600">@{username}</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerReview
