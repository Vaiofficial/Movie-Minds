"use client"

import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children}) {
 return (
    // this will use system darkmode. like if we are using system darkmode or lightmode , so this setting will use that one.
    <ThemeProvider enableSystem={true} attribute='class'> 
        {children}
    </ThemeProvider>
  )
}
