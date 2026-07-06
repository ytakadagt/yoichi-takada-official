/**
 * Home Page - Minimalist Artist Portfolio
 * Design: White background, black text, generous whitespace
 * Focus: Artist presence through photography and clear hierarchy
 */
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex gap-8 text-sm">
            <Link href="/" className="font-semibold">Home</Link>
            <Link href="/live" className="hover:opacity-70 transition-opacity">Live</Link>
          </div>
        </div>
      </nav>

      {/* Hero Title Section */}
      <section className="container max-w-6xl mx-auto px-4 pt-16 pb-12">
        <h1 className="text-8xl font-serif font-semibold leading-tight tracking-tight">
          Yoichi Takada
        </h1>
      </section>

      {/* Hero Section - Asymmetric Layout */}
      <main>
        <section className="container max-w-6xl mx-auto px-4 pb-24 grid grid-cols-12 gap-12 items-start">
          {/* Left: Artist Photo */}
          <div className="col-span-5 flex justify-start pt-8">
            <img
              src="/manus-storage/artist-portrait_6ca320e6.png"
              alt="Yoichi Takada, contemporary artist"
              className="w-full aspect-[3/4] object-cover grayscale"
            />
          </div>

          {/* Right: Title & Info */}
          <div className="col-span-7 flex flex-col justify-start gap-12 pt-12">
            <div>
              <div className="w-16 h-px bg-foreground mb-8"></div>
              <p className="text-base text-muted-foreground leading-relaxed max-w-xl font-light">
                2006年生まれ、作曲家・ギタリスト。2022年よりAnnoyzにて活動。その傍ら、光分解や零進法 (band set) でのサポートも行った。2026年7月にAnnoyz活動休止後、ソロ活動開始。
              </p>
            </div>

            {/* CTA */}
            <Link href="/live" className="inline-block">
              <button className="px-0 py-0 text-sm font-sans font-semibold tracking-widest uppercase text-foreground hover:opacity-60 transition-opacity border-b-2 border-foreground pb-2">
                View Live Information
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-32">
        <div className="container max-w-5xl mx-auto px-4 py-12 text-center text-xs text-muted-foreground tracking-widest">
          <p>© YOICHI TAKADA</p>
        </div>
      </footer>
    </div>
  );
}
