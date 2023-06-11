import Footer from '@/components/footer'
import Header from '@/components/header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <Footer />
    </main>
  )
}
