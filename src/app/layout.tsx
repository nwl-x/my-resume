import { FC } from 'react'

// == CSS ==
import '@/app/main.css'

const RootLayout: FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="fr" className="font-display" suppressHydrationWarning>
    <body className="print:m-0 print:max-h-[29.7cm] print:max-w-[21cm] print:p-0">{children}</body>
  </html>
)

export default RootLayout
