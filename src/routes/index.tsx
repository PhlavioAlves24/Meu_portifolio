import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  X,
  Sparkles,
  Figma,
  Code2,
  Layers,
  ShoppingBag,
  Globe,
  Palette,
  MousePointer2,
  Instagram,
  Github,
  MessageCircle,
  Play,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import phlavioPhoto from "@/assets/phlavio.jpg?url";
import projectAVideo from "@/assets/project-a.mp4?url";
import projectBVideo from "@/assets/project-b.mp4?url";
import projectCVideo from "@/assets/project-c.mp4?url";
import logoUrl from "@/assets/logo.png?url";

const PHOTO = phlavioPhoto;
const VIDEO_A = projectAVideo;
const VIDEO_B = projectBVideo;
const VIDEO_C = projectCVideo;
const LOGO = logoUrl;

const EMAIL = "thinkingincode5@gmail.com";
const WHATSAPP =
  "https://wa.me/558173146238?text=" +
  encodeURIComponent("Olá Phlavio! Vim pelo seu portfólio e quero um orçamento.");
const GITHUB = "https://github.com/PhlavioAlves24";
const INSTAGRAM = "https://www.instagram.com/thinkingincode.inc/";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-brown-deep">
      <AmbientBackground />
      <CustomCursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Stats />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Ambient background — organic blurred shapes + subtle grain       */
/* ---------------------------------------------------------------- */
function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -420]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden surface-off">
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -left-32 h-[46rem] w-[46rem] rounded-full blur-3xl opacity-70"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_30%,#F4EFE8,transparent_60%)]" />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] -right-40 h-[38rem] w-[38rem] rounded-full blur-3xl opacity-60"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_50%_50%,#ECECEC,transparent_65%)]" />
      </motion.div>
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[75%] left-[20%] h-[32rem] w-[32rem] rounded-full blur-3xl opacity-50"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_50%_50%,#E9DFD1,transparent_60%)]" />
      </motion.div>
      <div className="absolute inset-0 noise-bg opacity-[0.18] mix-blend-multiply" />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Custom magnetic cursor                                            */
/* ---------------------------------------------------------------- */
function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [variant, setVariant] = useState<"default" | "hover" | "media">("default");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("[data-cursor='media']")) setVariant("media");
      else if (t.closest("a, button, [data-cursor='hover']")) setVariant("hover");
      else setVariant("default");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  const size = variant === "media" ? 88 : variant === "hover" ? 56 : 14;
  const label = variant === "media" ? "PLAY" : "";

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
    >
      <motion.div
        animate={{ width: size, height: size, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-brown-deep text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--off-white)] mix-blend-difference flex items-center justify-center"
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/* Nav                                                               */
/* ---------------------------------------------------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 text-brown-deep">
          <img src={LOGO} alt="Phlavio Alves" className="h-8 w-8 rounded-full object-cover ring-1 ring-black/10" />
          <span className="text-sm font-semibold tracking-tight" translate="no">Phlavio Alves</span>
        </a>
        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#about" className="hover:text-brown-soft transition">Sobre</a>
          <a href="#projects" className="hover:text-brown-soft transition">Projetos</a>
          <a href="#process" className="hover:text-brown-soft transition">Processo</a>
          <a href="#contact" className="hover:text-brown-soft transition">Contato</a>
        </div>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-brown-deep px-4 py-2 text-xs font-medium text-[color:var(--off-white)] hover:bg-brown-soft transition-colors"
        >
          Orçamento
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </nav>
    </motion.header>
  );
}

/* ---------------------------------------------------------------- */
/* Hero                                                               */
/* ---------------------------------------------------------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const title = "Design que respira.";
  const words = title.split(" ");

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] px-6 pt-32 pb-24 md:px-10 md:pb-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6">
        {/* Photo */}
        <div className="relative col-span-12 order-2 md:col-span-5 md:order-1 md:col-start-1">
          <motion.div
            style={{ y: photoY, scale: photoScale }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto aspect-[4/5] w-full max-w-md"
            >
              <div className="absolute -inset-6 rounded-[42px] bg-[radial-gradient(circle_at_30%_30%,#F4EFE8,transparent_70%)] blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[36px] shadow-soft ring-1 ring-black/5">
                <motion.img
                  src={PHOTO}
                  alt="Phlavio Alves"
                  className="mask-organic h-full w-full object-cover"
                  initial={{ scale: 1.15, filter: "blur(20px)" }}
                  animate={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Text */}
        <motion.div
          style={{ y: titleY }}
          className="col-span-12 order-1 flex flex-col justify-center md:col-span-7 md:order-2 md:pl-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full glass px-3 py-1 text-xs text-brown-soft"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brown-soft opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brown-soft" />
            </span>
            Portfólio · 2026
          </motion.div>

          <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] text-brown-deep">
            {words.map((w, wi) => (
              <span key={wi} className="mr-4 inline-block">
                {w.split("").map((ch, ci) => (
                  <motion.span
                    key={ci}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.3 + (wi * 4 + ci) * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                    style={{ willChange: "transform" }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="italic text-brown-soft"
            >
              Código que converte.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-6 max-w-lg text-base text-brown-deep/70 md:text-lg"
          >
            Sou <b translate="no">Phlavio Alves</b>, designer e desenvolvedor. Crio sites autorais,
            landing pages de alta conversão e experiências digitais que fazem
            marcas parecerem grandes — desde o primeiro pixel.
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton href="#projects" primary>
              Ver projetos
            </MagneticButton>
            <MagneticButton href={WHATSAPP} external>
              Solicitar orçamento
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingChip({
  children,
  className = "",
  delay = 0,
  icon,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  icon?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute z-10 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
        className="glass shadow-soft flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-brown-deep"
      >
        {icon}
        {children}
      </motion.div>
    </motion.div>
  );
}

function MagneticButton({
  children,
  href,
  primary = false,
  external = false,
}: {
  children: ReactNode;
  href: string;
  primary?: boolean;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium overflow-hidden ${
        primary
          ? "bg-brown-deep text-[color:var(--off-white)]"
          : "border border-brown/40 text-brown-deep hover:bg-brown-deep hover:text-[color:var(--off-white)] transition-colors"
      }`}
    >
      <span className="relative z-10">{children}</span>
      <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      {primary && (
        <span className="absolute inset-0 -z-0 bg-brown-soft opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}
    </motion.a>
  );
}

/* ---------------------------------------------------------------- */
/* Marquee — technologies                                             */
/* ---------------------------------------------------------------- */
function Marquee() {
  const items = [
    "React", "Next.js", "TypeScript", "Tailwind", "Figma", "Framer",
    "GSAP", "WordPress", "Shopify", "Node.js", "Supabase", "Motion",
  ];
  const [paused, setPaused] = useState(false);
  return (
    <section
      className="relative z-20 mt-8 bg-[var(--off-white)] py-8 sm:mt-0 sm:py-12 md:py-14 marquee-mask"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: paused ? undefined : ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 gap-6 pr-6 sm:gap-10 sm:pr-10 md:gap-14 md:pr-14"
        >
          {[...items, ...items].map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-sm sm:text-base md:text-2xl lg:text-3xl text-brown-deep/85"
            >
              {t} <span className="text-brown-soft">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* About — floating specialties                                       */
/* ---------------------------------------------------------------- */
function About() {
  const specialties = [
    { icon: <Palette className="h-4 w-4" />, label: "UI Design" },
    { icon: <MousePointer2 className="h-4 w-4" />, label: "UX Design" },
    { icon: <Sparkles className="h-4 w-4" />, label: "Landing Pages" },
    { icon: <Globe className="h-4 w-4" />, label: "Sites Institucionais" },
    { icon: <ShoppingBag className="h-4 w-4" />, label: "E-commerce" },
    { icon: <Layers className="h-4 w-4" />, label: "WordPress" },
    { icon: <Code2 className="h-4 w-4" />, label: "React" },
    { icon: <Figma className="h-4 w-4" />, label: "Desenvolvimento Web" },
  ];

  return (
    <section id="about" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5 md:col-start-2">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-brown-soft">
              — Sobre
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1] text-brown-deep">
              Um estúdio de <br />
              <span className="italic text-brown-soft">um só</span> ⁠—⁠ obsessivo
              com detalhes.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-brown-deep/70">
              Trabalho com marcas que se recusam a parecer com todo mundo.
              Combino direção de arte, UI moderna e código performático para
              entregar sites que geram credibilidade — e clientes.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2">
            {specialties.map((s, i) => (
              <motion.span
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-brown-deep shadow-soft"
              >
                {s.icon} {s.label}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 md:col-start-8">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-soft"
          >
            <img src={PHOTO} alt="Phlavio Alves retrato" decoding="async" fetchPriority="high" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="glass rounded-2xl p-4">
                <div className="text-[10px] uppercase tracking-[0.3em] text-brown-soft">Founder</div>
                <div className="mt-1 font-display text-2xl text-brown-deep" translate="no">
                  Phlavio Alves da Silva Jr.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Projects — video cards, tilt, modal                                */
/* ---------------------------------------------------------------- */
type Project = {
  id: string;
  video: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  year: string;
};

const PROJECTS: Project[] = [
  {
    id: "p1",
    video: VIDEO_A,
    title: "Nova Studio — Landing Page",
    category: "Landing Page",
    description:
      "Landing page premium para estúdio de branding, focada em conversão. Copy afiada, animações sob medida e integração com CRM.",
    stack: ["React", "Framer Motion", "Tailwind", "Vercel"],
    year: "2026",
  },
  {
    id: "p2",
    video: VIDEO_B,
    title: "Ateliê Ícaro — Site Institucional",
    category: "Institucional",
    description:
      "Site autoral para atelier de arquitetura. Direção de arte editorial, tipografia expressiva e navegação cinematográfica.",
    stack: ["Next.js", "GSAP", "Sanity", "TypeScript"],
    year: "2026",
  },
  {
    id: "p3",
    video: VIDEO_C,
    title: "Casa Praiã — E-commerce",
    category: "E-commerce",
    description:
      "Loja online com identidade sofisticada e checkout otimizado. Aumento de 42% na taxa de conversão nos primeiros 60 dias.",
    stack: ["Shopify", "Liquid", "React", "Klaviyo"],
    year: "2025",
  },
];

function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-10 lg:col-span-9">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-brown-soft">— Trabalhos selecionados</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-display text-5xl md:text-7xl leading-[0.95] text-brown-deep">
                Projetos <span className="italic text-brown-soft">recentes.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <p className="max-w-3xl text-base leading-relaxed text-brown-deep/70 md:text-lg">
                  Cada projeto nasce de um objetivo claro: transformar cada visita em uma
                  conversa real sobre orçamento. Passe o mouse para ver o site em
                  movimento e clique para abrir o case completo.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-medium text-white hover:bg-[#1EBE57] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> Falar sobre o meu projeto
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => setOpen(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>{open && <ProjectModal project={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    ry.set(((cx / rect.width) - 0.5) * 10);
    rx.set(-((cy / rect.height) - 0.5) * 10);
  };

  // Asymmetric editorial layout
  const layouts = [
    "col-span-12 md:col-span-7 md:col-start-1",
    "col-span-12 md:col-span-4 md:col-start-9 md:mt-24",
    "col-span-12 md:col-span-6 md:col-start-4",
  ];
  const aspects = ["aspect-[16/10]", "aspect-[3/4]", "aspect-[16/10]"];

  return (
    <motion.button
      ref={ref}
      data-cursor="media"
      onClick={onOpen}
      onMouseMove={handleMove}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
      className={`group relative block text-left ${layouts[index % layouts.length]}`}
    >
      <div className={`relative w-full overflow-hidden rounded-[28px] shadow-soft ring-1 ring-black/5 ${aspects[index % aspects.length]}`}>
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/20 via-transparent to-transparent opacity-70" />
        <motion.div
          className="absolute right-4 top-4 glass grid h-11 w-11 place-items-center rounded-full text-brown-deep"
          whileHover={{ scale: 1.1, rotate: 45 }}
        >
          <ArrowUpRight className="h-5 w-5" />
        </motion.div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4 px-1">
        <div>
          <div className="text-[10px] uppercase tracking-[0.28em] text-brown-soft">
            {project.category} · {project.year}
          </div>
          <div className="mt-2 font-display text-2xl leading-[1.05] text-brown-deep md:text-3xl">
            {project.title}
          </div>
        </div>
        <span className="whitespace-nowrap text-xs text-brown-deep/60 group-hover:text-brown-deep transition-colors">
          Ver case →
        </span>
      </div>
    </motion.button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-brown-deep/40 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-6 overflow-hidden rounded-[32px] surface-off p-4 shadow-soft md:grid-cols-5 md:p-6"
      >
        <div className="md:col-span-3">
          <div className="relative aspect-video overflow-hidden rounded-[24px] ring-1 ring-black/5">
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col p-2 md:p-4">
          <span className="text-xs uppercase tracking-[0.3em] text-brown-soft">{project.category} · {project.year}</span>
          <h3 className="mt-3 font-display text-4xl leading-[1] text-brown-deep">{project.title}</h3>
          <p className="mt-4 text-sm text-brown-deep/70">{project.description}</p>

          <div className="mt-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-brown-soft">Stack</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="rounded-full surface-beige px-3 py-1 text-xs text-brown-deep">{s}</span>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-brown-deep px-5 py-2.5 text-xs font-medium text-[color:var(--off-white)]">
              <Play className="h-3.5 w-3.5" /> Ver projeto
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-brown/30 px-5 py-2.5 text-xs font-medium text-brown-deep hover:bg-brown-deep hover:text-[color:var(--off-white)] transition-colors">
              Solicitar orçamento <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <button
          aria-label="Fechar"
          onClick={onClose}
          className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-brown-deep text-[color:var(--off-white)] hover:bg-brown-soft transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/* Stats — animated counters                                          */
/* ---------------------------------------------------------------- */
function Stats() {
  const stats = [
    { value: 84, suffix: "+", label: "Projetos entregues" },
    { value: 42, suffix: "%", label: "Aumento médio em conversão" },
    { value: 7, suffix: " anos", label: "De experiência" },
    { value: 100, suffix: "%", label: "Clientes recomendam" },
  ];
  return (
    <section className="relative px-4 py-16 sm:px-6 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[24px] surface-beige p-6 sm:p-10 md:rounded-[32px] md:p-16">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Counter key={i} to={s.value} suffix={s.suffix} label={s.label} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({
  to,
  suffix,
  label,
  delay,
}: { to: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf = 0;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const duration = 1600;
      const startAt = performance.now() + delay * 1000;
      const tick = (t: number) => {
        const elapsed = Math.max(0, t - startAt);
        const p = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(eased * to));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    // Safety fallback so the number always animates on any device
    const fallback = window.setTimeout(run, 1500);

    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              run();
              io?.disconnect();
              break;
            }
          }
        },
        { threshold: 0.15 }
      );
      io.observe(node);
    }

    // If already visible on mount, start immediately
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) run();

    return () => {
      window.clearTimeout(fallback);
      io?.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="font-display text-4xl leading-none text-brown-deep sm:text-5xl md:text-6xl lg:text-7xl">
        {n}
        <span className="text-brown-soft">{suffix}</span>
      </div>
      <div className="mt-2 text-xs text-brown-deep/60 sm:mt-3 sm:text-sm">{label}</div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/* Process — timeline drawn on scroll                                 */
/* ---------------------------------------------------------------- */
function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { n: "01", title: "Descoberta", body: "Entendo seu negócio, público e objetivos. Alinhamos escopo e metas mensuráveis." },
    { n: "02", title: "Estratégia & UX", body: "Arquitetura de informação, fluxos e wireframes focados em conversão." },
    { n: "03", title: "Design de Interface", body: "Identidade visual autoral, tipografia expressiva e sistema de componentes." },
    { n: "04", title: "Desenvolvimento", body: "Código limpo, performance 90+ no Lighthouse e integrações que funcionam." },
    { n: "05", title: "Entrega & Evolução", body: "Publicação, treinamento e ciclo contínuo de otimização baseado em dados." },
  ];

  return (
    <section id="process" ref={ref} className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-brown-soft">— Como trabalho</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-display text-5xl md:text-7xl text-brown-deep">
              O <span className="italic text-brown-soft">processo.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Center line */}
          <div className="absolute left-3 top-0 h-full w-px bg-brown/20 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ height }}
            className="absolute left-3 top-0 w-px bg-brown-deep md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((s, i) => (
              <ProcessStep key={s.n} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: { n: string; title: string; body: string }; index: number }) {
  const isRight = index % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-16 ${isRight ? "md:[&>*:first-child]:col-start-2" : ""}`}
    >
      {/* Dot */}
      <div className="absolute left-3 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-brown-deep ring-4 ring-[color:var(--off-white)] md:left-1/2" />
      <div className={`${isRight ? "md:text-left md:pl-16" : "md:text-right md:pr-16"} pl-8 md:pl-0`}>
        <div className="text-xs uppercase tracking-[0.3em] text-brown-soft">{step.n}</div>
        <h3 className="mt-2 font-display text-3xl text-brown-deep md:text-4xl">{step.title}</h3>
        <p className="mt-3 text-sm text-brown-deep/70">{step.body}</p>
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/* Testimonials — 3D carousel                                         */
/* ---------------------------------------------------------------- */
const TESTIMONIALS = [
  {
    name: "Marina Costa",
    role: "Fundadora, Nova Studio",
    quote: "O Phlavio traduziu a alma da marca em um site que impressiona antes mesmo da primeira palavra ser lida. Dobramos leads em duas semanas.",
  },
  {
    name: "Rafael Ícaro",
    role: "Arquiteto, Ateliê Ícaro",
    quote: "Direção de arte impecável e execução técnica que raramente se vê no mesmo profissional. Um verdadeiro parceiro criativo.",
  },
  {
    name: "Dra. Camila Vale",
    role: "Diretora, Clínica Vale",
    quote: "Passamos a receber pacientes de outras cidades logo após o lançamento. O site nos posicionou como referência premium na região.",
  },
  {
    name: "Bruno Aragão",
    role: "CEO, Casa Praiã",
    quote: "Nosso e-commerce ganhou personalidade. A performance e o design elevaram o ticket médio em 27%.",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const n = TESTIMONIALS.length;
  const prev = () => setI((v) => (v - 1 + n) % n);
  const next = () => setI((v) => (v + 1) % n);

  return (
    <section className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <Reveal><span className="text-xs uppercase tracking-[0.3em] text-brown-soft">— Depoimentos</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-display text-5xl md:text-7xl text-brown-deep">
              Quem confiou <span className="italic text-brown-soft">recomenda.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative flex items-center justify-center h-[380px]">
          {TESTIMONIALS.map((t, idx) => {
            const offset = idx - i;
            const rel = ((offset + n + Math.floor(n / 2)) % n) - Math.floor(n / 2);
            return <TCard key={idx} t={t} rel={rel} />;
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={prev} className="grid h-11 w-11 place-items-center rounded-full border border-brown/30 text-brown-deep hover:bg-brown-deep hover:text-[color:var(--off-white)] transition-colors">
            <ArrowUpRight className="h-4 w-4 -rotate-[135deg]" />
          </button>
          <div className="text-xs text-brown-deep/60">
            {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </div>
          <button onClick={next} className="grid h-11 w-11 place-items-center rounded-full border border-brown/30 text-brown-deep hover:bg-brown-deep hover:text-[color:var(--off-white)] transition-colors">
            <ArrowUpRight className="h-4 w-4 rotate-45" />
          </button>
        </div>
      </div>
    </section>
  );
}

function TCard({ t, rel }: { t: (typeof TESTIMONIALS)[number]; rel: number }) {
  const abs = Math.abs(rel);
  const isCenter = rel === 0;
  return (
    <motion.div
      animate={{
        x: rel * 260,
        rotate: rel * -6,
        scale: isCenter ? 1 : 0.85,
        opacity: abs > 2 ? 0 : 1,
        filter: isCenter ? "blur(0px)" : "blur(3px)",
        zIndex: 10 - abs,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 26 }}
      className="absolute w-[min(90vw,440px)] rounded-[28px] surface-off p-8 shadow-soft ring-1 ring-black/5"
    >
      <div className="font-display text-6xl leading-none text-brown-soft">"</div>
      <p className="mt-2 font-display text-2xl leading-snug text-brown-deep">
        {t.quote}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full surface-beige text-xs font-semibold text-brown-deep">
          {t.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
        </div>
        <div>
          <div className="text-sm font-semibold text-brown-deep">{t.name}</div>
          <div className="text-xs text-brown-deep/60">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/* Final CTA                                                          */
/* ---------------------------------------------------------------- */
function FinalCTA() {
  return (
    <section id="contact" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-brown-deep p-12 md:p-24 text-center relative">
        <div className="absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-brown-soft/40 blur-3xl" />
        <Reveal>
          <span className="relative text-xs uppercase tracking-[0.3em] text-[color:var(--off-white)]/60">
            — Vamos criar juntos
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="relative mt-4 font-display text-5xl md:text-8xl leading-[0.95] text-[color:var(--off-white)]">
            Seu próximo site <br />
            <span className="italic text-[color:var(--beige)]">merece existir.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="relative mx-auto mt-6 max-w-xl text-[color:var(--off-white)]/70">
            Vagas limitadas por mês. Se você busca um site autoral que gera resultado, converse comigo.
          </p>
        </Reveal>
        <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-sm font-medium text-white hover:bg-[#1EBE57] transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--off-white)]/30 px-7 py-4 text-sm font-medium text-[color:var(--off-white)] hover:bg-[color:var(--off-white)]/10 transition-colors"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Footer                                                             */
/* ---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 border-t border-brown/10 pt-10">
        <div className="col-span-12 md:col-span-6">
          <div className="flex items-center gap-2">
            <img src={LOGO} alt="Phlavio Alves" loading="lazy" decoding="async" className="h-7 w-7 rounded-full object-cover ring-1 ring-black/10" />
            <span className="font-display text-xl text-brown-deep">Phlavio Alves</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-brown-deep/60">
            Design autoral e código performático para marcas que se recusam a parecer com todo mundo.
          </p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-[10px] uppercase tracking-[0.3em] text-brown-soft">Navegue</div>
          <ul className="mt-3 space-y-2 text-sm text-brown-deep/80">
            <li><a href="#about" className="hover:text-brown-soft">Sobre</a></li>
            <li><a href="#projects" className="hover:text-brown-soft">Projetos</a></li>
            <li><a href="#process" className="hover:text-brown-soft">Processo</a></li>
            <li><a href="#contact" className="hover:text-brown-soft">Contato</a></li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-[10px] uppercase tracking-[0.3em] text-brown-soft">Social</div>
          <ul className="mt-3 space-y-2 text-sm text-brown-deep/80">
            <li><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-brown-soft"><Instagram className="h-3.5 w-3.5" /> Instagram</a></li>
            <li><a href={GITHUB} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-brown-soft"><Github className="h-3.5 w-3.5" /> GitHub</a></li>
          </ul>
        </div>
        <div className="col-span-12 mt-8 flex flex-col items-start justify-between gap-3 border-t border-brown/10 pt-6 text-xs text-brown-deep/50 md:flex-row md:items-center">
          <div><span translate="no">© 2026 Phlavio Alves da Silva Junior</span> — Todos os direitos reservados.</div>
          <div>Feito com café ☕ em algum lugar do Brasil.</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------- */
/* Reveal helper                                                      */
/* ---------------------------------------------------------------- */
function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
