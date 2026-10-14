import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileActionToolbar from '@/components/layout/MobileActionToolbar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pb-16 lg:pb-0">{children}</main>
      <Footer />
      <MobileActionToolbar />
    </>
  )
}
