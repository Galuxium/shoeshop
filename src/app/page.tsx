// components/Hero.tsx
interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="bg-gradient-to-bottom from-indigo-50 to-purple-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl fw leading-tight text-white">{title}</h1>
        <p className="text-lg md:text-xl text-white mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <a 
          href={ctaLink}
          className="mt-8 block max-w-md px-6 py-3 text-white bg-gradient-to-r from-purple-600 to-indigo-50 rounded-lg hover:bg-gradient-to-r from-indigo-50 to-purple-600"
          >
          {ctaText}
        </a>
      </div>
    </section>
  )
}