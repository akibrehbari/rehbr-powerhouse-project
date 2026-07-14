import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="diag-stripes h-3 w-full" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              to="/"
              className="font-display text-5xl tracking-tight text-signal"
            >
              REHBR
            </Link>
            <p className="mt-4 max-w-md text-sm text-white/70">
              Supply chain management built for the long haul. Electronics,
              electrical, and automotive — moved with precision.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-signal">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-signal">About</Link></li>
              <li><Link to="/services" className="hover:text-signal">Services</Link></li>
              <li><Link to="/locations" className="hover:text-signal">Locations</Link></li>
              <li><Link to="/contact" className="hover:text-signal">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-signal">
              Head Office
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-signal" />
                <span>C 14/8, Satellite Town, Rawalpindi</span>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-signal" />
                <a href="mailto:aqibjaveed508@gmail.com" className="hover:text-signal">
                  aqibjaveed508@gmail.com
                </a>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-signal" />
                <a href="tel:+923468333522" className="hover:text-signal">
                  +92 346 8333522
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-widest text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Rehbr. All rights reserved.</p>
          <p>Supply chain — engineered.</p>
        </div>
      </div>
    </footer>
  );
}
