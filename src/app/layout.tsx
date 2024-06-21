//             _@@@@@g__          __g@@@@@_
//            @@      "B@p,    ,o@B"      Q@
//           j@          "@@__@@"          @@
//           @@            ]@@[            @@
//           @@          _@@ `@@_          @@
//           !@,        g@"_____@g         @|
//            @@~g@@@@@@BBBBBBBBBB@@@@@@gag@
//       _g@@B4@,    j@"          '@g    `@P8@@g_
//    _@@>     0@   @@    __~~__    @@   @@     "B@a
//  _@P         @@_@W   ,@@@@@@@@_   %@_g@         \@L
//  @F           @@P    @@@@@@@@@@    t@@           |@,
//  @@          ,@@g    @@@@@@@@@@    j@@,          g@
//   \@g_       @W @@   `@@@@@@@@'   g@ V@       _o@P
//     '0@@___ @@   Q@     """"     @@   @@ ___@@B"
//         '<0@@@gg__@@L___________@@__gg@@@B>"
//            @W   '""<@@BBBBBBBB@@>"""   [@
//           |@         t@_    _@P         @1
//           @@           @@__@@           @@
//           @@            2@@[            @@
//           [@          _@B'`Q@_          @N
//            @@_    __@@P      <@@__    ,@@
//             "8@@@@P"            "4@@@@B"

import { Roboto } from 'next/font/google'
import structure from '@/resume.json'

// == TypeScript ==
import type { Metadata } from 'next'
import type { Structure } from '@/type'

// == CSS ==
import '@/app/globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '400'], display: 'auto' })

const {
  basics: { label, firstname, lastname }
} = structure satisfies Structure

export const metadata: Metadata = {
  title: `${firstname} ${lastname} - ${label}`,
  manifest: 'manifest.json',
  icons: { icon: './favicon.ico' }
}

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="fr">
    <body className={roboto.className}>{children}</body>
  </html>
)

export default RootLayout
