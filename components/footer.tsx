import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/samo.thai.73?_rdc=1&_rdr#',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sovannthai887/?igsh=bGQ3NW55MTlocWhz&utm_source=qr#',
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sros-thai-b491b42ab/',
    icon: Linkedin,
  },
];

const contactRows = [
  { label: 'Phone', value: '+855 12 345 678', icon: Phone },
  { label: 'Email', value: 'info@siemreapexplore.com', icon: Mail },
  { label: 'Address', value: 'Pub Street Area, Siem Reap, Cambodia', icon: MapPin },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-5 pb-[calc(env(safe-area-inset-bottom)_+_6rem)] pt-12 md:px-8 md:pb-16 md:pt-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-background ring-1 ring-border/60">
                <img src="/images/logo.png" alt="" className="h-full w-full object-cover" />
              </span>
              <span className="text-[15px] font-semibold tracking-[-0.01em] text-foreground">
                Cambodia Explore
              </span>
            </div>

            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted-foreground">
              Discover the magnificent temples of Angkor and the cultural heart of Cambodia.
              Experience the ancient wonders and vibrant local life of Siem Reap with expert
              guidance.
            </p>

            <div className="mt-5 flex gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  asChild
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-border/60 text-muted-foreground transition-colors hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <nav>
            <h2 className="text-[13px] font-semibold text-foreground">Quick links</h2>
            <ul className="mt-4 flex flex-col">
              <li>
                <Link
                  href="/#home"
                  className="flex min-h-[2.5rem] items-center text-[14px] text-muted-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#places"
                  className="flex min-h-[2.5rem] items-center text-[14px] text-muted-foreground transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
                >
                  Places
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[13px] font-semibold text-foreground">Contact</h2>
            <dl className="mt-4 flex flex-col gap-3.5">
              {contactRows.map((row) => (
                <div key={row.label} className="flex items-start gap-3">
                  <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <dt className="text-[12px] text-muted-foreground">{row.label}</dt>
                    <dd className="text-[14px] font-medium leading-snug">{row.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <Separator className="my-10 bg-border/60" />

        <div className="flex flex-col items-center justify-between gap-3 text-[13px] text-muted-foreground sm:flex-row">
          <p>© 2024 DER TAM ME. All rights reserved.</p>
          <a
            href="https://sovannthai.vercel.app/"
            className="inline-flex min-h-[2.5rem] items-center transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <span>HE Sovannthai</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
