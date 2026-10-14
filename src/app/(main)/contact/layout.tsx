import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Shree Maruti Nandan Properties in Bulandshahr',
  description:
    'Contact Shree Maruti Nandan Properties in Bulandshahr. Call Manoj Kumar Tyagi and Ashish Chaudhary at +91 9997837133 or visit our office at Shop No. 375, T.P. Nagar Gol Chakkar for property consultations.',
  alternates: {
    canonical: 'https://shreemarutinandanproperties.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
