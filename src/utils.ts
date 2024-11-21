import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const reviews = [
  {
    name: "Freya Larsson",
    username: "itsfreya",
    avatarSrc: "/user-2.png",
    review:
      "PingPanda has been a game-changer for me. I've been using it for two months now and seeing sales pop up in real-time is super satisfying.",
  },
  {
    name: "Kai Durant",
    username: "kdurant_",
    avatarSrc: "/user-1.png",
    review:
      "PingPanda's been paying off for our SaaS. Nice to have simple way to see how we're doing day-to-day. Definitely makes our lives easier.",
  },
]
