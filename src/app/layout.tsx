import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { theme } from '@/theme/themes'

const font = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body className={font.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
