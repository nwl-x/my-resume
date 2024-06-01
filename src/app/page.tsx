// import { lazy, Suspense } from 'react'

// const Resume = lazy(() => import('@/components/resume/Resume'))

// const Home = () => (
//   <Suspense fallback={<div>Loading...</div>}>
//     <Resume />
//   </Suspense>
// )

import Resume from '@/components/resume/Resume'

const Home = () => <Resume />

export default Home
