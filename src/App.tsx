import { Suspense, lazy, useState } from 'react'
import { FloatingContactButtons } from './components/layout/FloatingContactButtons'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Section } from './components/layout/Section'
import { SeoHead } from './components/seo/SeoHead'
import { About } from './sections/About'
import { Hero } from './sections/Hero'
import type { SectionId } from './types'

const Services = lazy(() =>
  import('./sections/Services').then((mod) => ({ default: mod.Services })),
)
const WhyChooseUs = lazy(() =>
  import('./sections/WhyChooseUs').then((mod) => ({ default: mod.WhyChooseUs })),
)
const Process = lazy(() =>
  import('./sections/Process').then((mod) => ({ default: mod.Process })),
)
const Location = lazy(() =>
  import('./sections/Location').then((mod) => ({ default: mod.Location })),
)
const FAQ = lazy(() =>
  import('./sections/FAQ').then((mod) => ({ default: mod.FAQ })),
)
const Contact = lazy(() =>
  import('./sections/Contact').then((mod) => ({ default: mod.Contact })),
)

interface SectionFallbackProps {
  id: SectionId
  surface: 'white' | 'offwhite' | 'forest'
  ariaLabel: string
}

function SectionFallback({ id, surface, ariaLabel }: SectionFallbackProps) {
  return (
    <Section id={id} surface={surface} ariaLabel={ariaLabel}>
      <div className="min-h-[14rem]" aria-hidden="true" />
    </Section>
  )
}

export function App() {
  const [selectedPestProblem, setSelectedPestProblem] = useState('')

  return (
    <>
      <SeoHead />

      <div className="min-h-screen bg-offwhite text-charcoal">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-2.5 focus:font-heading focus:text-sm focus:font-semibold focus:text-lime focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content">
          <Hero />
          <About />
          <Suspense
            fallback={
              <SectionFallback
                id="services"
                surface="offwhite"
                ariaLabel="Pest control services"
              />
            }
          >
            <Services onSelectService={setSelectedPestProblem} />
          </Suspense>
          <Suspense
            fallback={
              <SectionFallback
                id="why-us"
                surface="white"
                ariaLabel="Why contact ANSWER PEST CONTROL SERVICE"
              />
            }
          >
            <WhyChooseUs />
          </Suspense>
          <Suspense
            fallback={
              <SectionFallback
                id="process"
                surface="offwhite"
                ariaLabel="How to get started with ANSWER PEST CONTROL SERVICE"
              />
            }
          >
            <Process />
          </Suspense>
          <Suspense
            fallback={
              <SectionFallback
                id="location"
                surface="white"
                ariaLabel="Location of ANSWER PEST CONTROL SERVICE"
              />
            }
          >
            <Location />
          </Suspense>
          <Suspense
            fallback={
              <SectionFallback
                id="faq"
                surface="offwhite"
                ariaLabel="Frequently Asked Questions"
              />
            }
          >
            <FAQ />
          </Suspense>
          <Suspense
            fallback={
              <SectionFallback
                id="contact"
                surface="forest"
                ariaLabel="Contact ANSWER PEST CONTROL SERVICE"
              />
            }
          >
            <Contact
              selectedPestProblem={selectedPestProblem}
              onPestProblemChange={setSelectedPestProblem}
            />
          </Suspense>
        </main>

        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  )
}

export default App
