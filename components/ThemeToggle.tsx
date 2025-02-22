"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'lucide-react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
	<button
	onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
	className="rounded-lg p-2 hover:bg-accent"
  >
	{theme === "dark" ? (
	  <SunIcon className="h-6 w-6" />
	) : (
	  <MoonIcon className="h-6 w-6" />
	)}
  </button>
  )
}



