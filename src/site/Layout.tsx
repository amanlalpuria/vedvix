import {useEffect, useRef, useState} from 'react';
import type {ReactNode} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {ArrowUp, ArrowUpRight, Github, Instagram, Linkedin, Menu, Twitter, X} from 'lucide-react';
import {Button, cn, VedvixLogo} from '../ui';
import {Link, navigate, usePath} from '../router';
import {trackContactClick} from './analytics';

const NAV = [
  {name: 'Work', href: '/work'},
  {name: 'Services', href: '/#services'},
  {name: 'Process', href: '/#process'},
  {name: 'About', href: '/#about'},
];

export const CONTACT = {
  email: 'hello@vedvix.in',
  phone: '+91 94606 88385',
  phoneHref: 'tel:+919460688385',
};

function Navbar() {
  const path = usePath();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6">
      <nav
        aria-label="Main"
        className={cn(
          'mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border px-4 transition-all duration-300 sm:px-6',
          scrolled
            ? 'border-vx-border bg-vx-bg/80 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        )}
      >
        <Link href="/" aria-label="Vedvix home" className="rounded-full text-vx-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vx-accent">
          <VedvixLogo size={26} animated />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = item.href === '/work' ? path.startsWith('/work') : false;
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active ? 'bg-white/[0.07] text-vx-text' : 'text-vx-text-muted hover:text-vx-text',
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Button
            as="a"
            href="/#contact"
            size="sm"
            rightIcon={<ArrowUpRight size={15} />}
            onClick={(e) => {
              e.preventDefault();
              trackContactClick('contact', 'navbar');
              navigate('/#contact');
            }}
          >
            Start a project
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-vx-text hover:bg-white/[0.06] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -8}}
            transition={{duration: 0.2}}
            className="mx-auto mt-2 max-w-7xl rounded-3xl border border-vx-border bg-vx-bg-raised/95 p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="block rounded-2xl px-4 py-3 text-lg font-medium text-vx-text hover:bg-white/[0.05]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
              onClick={() => trackContactClick('contact', 'mobile-navbar')}
              className="mt-3 flex h-12 items-center justify-center rounded-full bg-vx-accent font-medium text-white"
            >
              Start a project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const LEGAL = {
  privacy: {
    title: 'Privacy Policy',
    content: [
      'Last Updated: May 2026',
      'Vedvix ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy informs you about how we handle your personal data when you visit our website (https://vedvix.in) and tells you about your privacy rights.',
      '1. Information We Collect: We collect and process personal data that you voluntarily provide to us via our contact forms, including your name, email address, phone number, and project details. We also collect technical data such as IP addresses and browser information for analytical purposes.',
      '2. How We Use Your Information: We use your data to respond to your inquiries, provide our services, manage our relationship with you, and improve our website performance. We may also use your data to comply with legal obligations.',
      '3. Data Security: We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees and partners who have a business need to know.',
      '4. Your Rights: Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, or erasure of your personal data.',
      '5. Contact Us: If you have any questions about this Privacy Policy or our privacy practices, please contact us at legal@vedvix.in or hello@vedvix.in.',
    ],
  },
  terms: {
    title: 'Terms of Service',
    content: [
      'Last Updated: May 2026',
      'By accessing this website, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.',
      "1. Use License: Permission is granted to temporarily download one copy of the materials on Vedvix's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
      '2. Intellectual Property: The content, local design, and technical architectures on this website are the intellectual property of Vedvix and are protected by applicable copyright and trademark law.',
      "3. Disclaimer: The materials on Vedvix's website are provided on an 'as is' basis. Vedvix makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability or fitness for a particular purpose.",
      "4. Limitations: In no event shall Vedvix or its suppliers be liable for any damages arising out of the use or inability to use the materials on Vedvix's website, even if Vedvix has been notified of the possibility of such damage.",
      '5. Governing Law: These terms and conditions are governed by and construed in accordance with the laws of Rajasthan, India, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.',
    ],
  },
} as const;

function LegalDialog({kind, onClose}: {kind: keyof typeof LEGAL; onClose: () => void}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previous?.focus();
    };
  }, [onClose]);

  const doc = LEGAL[kind];
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className="fixed inset-0 z-[100] grid place-items-center bg-vx-bg/85 p-4 backdrop-blur-lg"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      onClick={onClose}
    >
      <motion.div
        initial={{y: 16, scale: 0.98}}
        animate={{y: 0, scale: 1}}
        exit={{y: 16, scale: 0.98}}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-vx-border bg-vx-bg-raised"
      >
        <div className="flex items-center justify-between border-b border-vx-border px-6 py-5">
          <h2 id="legal-title" className="font-grotesk text-xl font-bold">{doc.title}</h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-10 w-10 place-items-center rounded-full border border-vx-border hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vx-accent"
          >
            <X size={18} />
          </button>
        </div>
        <div className="space-y-5 overflow-y-auto px-6 py-6 custom-scrollbar">
          {doc.content.map((p) => (
            <p key={p} className="leading-relaxed text-vx-text-muted">{p}</p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

const SOCIALS = [
  {label: 'LinkedIn', href: 'https://linkedin.com/company/vedvix', icon: Linkedin},
  {label: 'Twitter', href: 'https://twitter.com/vedvix', icon: Twitter},
  {label: 'GitHub', href: 'https://github.com/vedvix', icon: Github},
  {label: 'Instagram', href: 'https://instagram.com/vedvix', icon: Instagram},
];

function Footer() {
  const [legal, setLegal] = useState<keyof typeof LEGAL | null>(null);

  return (
    <footer className="relative border-t border-vx-border px-6 pb-10 pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <VedvixLogo size={28} className="text-vx-text" />
            <p className="mt-6 max-w-sm leading-relaxed text-vx-text-muted">
              A product studio from Jaipur, building AI apps, SaaS platforms and marketplaces for founders worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({label, href, icon: Icon}) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Vedvix on ${label}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-vx-border text-vx-text-muted transition-colors hover:border-vx-accent hover:bg-vx-accent hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-vx-text-subtle">Studio</h3>
            <ul className="mt-5 space-y-3">
              {[...NAV, {name: 'Contact', href: '/#contact'}].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-vx-text-muted transition-colors hover:text-vx-text">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-vx-text-subtle">Services</h3>
            <ul className="mt-5 space-y-3 text-vx-text-muted">
              {['AI Development', 'SaaS Platforms', 'Marketplaces', 'Mobile Apps', 'Cloud & DevOps'].map((s) => (
                <li key={s}>
                  <Link href="/#services" className="transition-colors hover:text-vx-text">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-vx-text-subtle">Office</h3>
            <address className="mt-5 not-italic leading-relaxed text-vx-text-muted">
              Vedvix, Plot 24 East Shyam Vihar, Charan Nadi
              <br />
              Murlipura, Jaipur, Rajasthan 302039, India
            </address>
            <p className="mt-3 text-sm text-vx-text-subtle">
              Proprietor: <span className="text-vx-text-muted">Deepanshi Gaur</span>
            </p>
            <a href={`mailto:${CONTACT.email}`} className="mt-4 block font-medium text-vx-text hover:text-vx-accent-soft">{CONTACT.email}</a>
            <a href={CONTACT.phoneHref} className="mt-1 block font-medium text-vx-text hover:text-vx-accent-soft">{CONTACT.phone}</a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-vx-border pt-8 text-sm text-vx-text-subtle md:flex-row">
          <p>© {new Date().getFullYear()} Vedvix. All rights reserved.</p>
          <div className="flex gap-6">
            <button type="button" onClick={() => setLegal('privacy')} className="hover:text-vx-text">Privacy Policy</button>
            <button type="button" onClick={() => setLegal('terms')} className="hover:text-vx-text">Terms of Service</button>
          </div>
          <p>Made with precision by engineers who ship.</p>
        </div>
      </div>
      <AnimatePresence>{legal && <LegalDialog kind={legal} onClose={() => setLegal(null)} />}</AnimatePresence>
    </footer>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{opacity: 0, y: 12}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 12}}
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-vx-border bg-vx-bg-raised/90 text-vx-text shadow-vx-card backdrop-blur hover:border-vx-accent hover:bg-vx-accent"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function Layout({children}: {children: ReactNode}) {
  return (
    <div className="relative min-h-screen bg-vx-bg font-sans text-vx-text selection:bg-vx-accent selection:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-vx-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="-mt-[76px]">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
