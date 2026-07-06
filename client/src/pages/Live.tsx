/**
 * Live Information Page
 * Displays upcoming live events with minimalist design
 */
import { Link } from "wouter";

export default function Live() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex gap-8 text-sm">
            <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
            <Link href="/live" className="font-semibold">Live</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container max-w-5xl mx-auto px-4 py-24">
        <h1 className="text-6xl font-serif font-semibold mb-24 leading-tight">Live<br />Information</h1>

        {/* Live Event Card */}
        <div className="border-l-4 border-foreground pl-12 py-12 max-w-2xl">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-6 font-light">Upcoming Event</p>
          <h2 className="text-5xl font-serif font-semibold mb-8 leading-tight">save the august 20</h2>
          <p className="text-base text-muted-foreground leading-relaxed font-light">
            Details coming soon.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-32">
        <div className="container max-w-5xl mx-auto px-4 py-12 text-center text-xs text-muted-foreground tracking-widest">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-8">
              <a href="https://x.com/takada_yoichi" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                Twitter
              </a>
              <a href="https://www.instagram.com/yoichitakada_?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                Instagram
              </a>
            </div>
            <p>© YOICHI TAKADA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
