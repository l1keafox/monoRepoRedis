import './globals.css'
import { ReactQueryProvider } from './_components/ReactQueryProvider'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body className='w-full h-full bg-slate-800 text-slate-100'>{children}</body>
      </ReactQueryProvider>
    </html>
  )
}
