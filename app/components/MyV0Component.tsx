/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qHgdGHmrFqJ
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div key="1" className="relative w-full max-w-md mx-auto p-5 rounded-lg shadow-md overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 transform rotate-45" />
      <div className="absolute inset-0 flex flex-wrap content-center justify-center bg-black">
        <svg
          className=" w-2 h-2 text-black opacity-10"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        </svg>
        <svg
          className=" w-2 h-2 text-black opacity-10 ml-10 mt-10"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        </svg>
        <svg
          className=" w-2 h-2 text-black opacity-10 ml-20 mt-20"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        </svg>
        <svg
          className=" w-2 h-2 text-black opacity-10 ml-30 mt-30"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        </svg>
      </div>
      <div className="relative bg-white dark:bg-coolGray-800 p-5 rounded-lg">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">Guest Book</h1>
          <p className="text-gray-500 dark:text-gray-300">We would love to hear from you!</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="guest-name">Your Name</Label>
            <Input id="guest-name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-2" />
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

