import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Code2,
  Rocket,
  Workflow,
  Sparkles,
  Gauge,
  Headphones,
  Layers,
  ShieldCheck,
  Quote,
  Plus,
  Minus,
  MessageCircle,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { useState } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP =
  "https://wa.me/5500000000000?text=" +
  encodeURIComponent(
    "Olá Phlavio! Vim pelo seu site e quero solicitar um orçamento.",
  );

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <Services />
      <Stages />
      <WhyMe />
      <Testimonials />
      <Portfolio />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="size-8 rounded-lg bg-gradient-primary shadow-glow grid place-items-center">
            <Code2 className="size-4 text-white" />
          </span>
          <span>phlavio<span className="text-gradient">.dev</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
          <a href="#solucoes" className="hover:text-foreground transition">Soluções</a>
          <a href="#portfolio" className="hover:text-foreground transition">Portfólio</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-white shadow-glow hover:opacity-95 transition"
        >
          Orçamento
          <ArrowRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_12px] shadow-accent" />
            Disponível para novos projetos
          </div>
          <h1 className="mt-6 font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Sites e automações que{" "}
            <span className="text-gradient">transformam visitantes em clientes.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Desenvolvo sites profissionais, landing pages de alta conversão e
            automações sob medida para empresas que querem crescer no digital —
            com estratégia, não só design bonito.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 font-medium text-white shadow-glow hover:opacity-95 transition"
            >
              Solicitar Orçamento
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border surface px-6 py-3.5 font-medium hover:border-accent/60 transition"
            >
              Ver Portfólio
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "+7 anos", v: "de experiência" },
              { k: "2018", v: "desenvolvendo software" },
              { k: "100%", v: "sob medida" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-2xl md:text-3xl font-bold">{s.k}</dt>
                <dd className="text-xs md:text-sm text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-glow">
            <img
              src={heroPortrait}
              alt="Phlavio Allves — desenvolvedor de sites e automações"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl surface/80 backdrop-blur-md border border-border p-4 flex items-center gap-3">
              <div className="size-10 rounded-full bg-gradient-primary grid place-items-center text-white font-display font-bold">
                P
              </div>
              <div className="text-sm">
                <p className="font-display font-semibold">Phlavio Allves</p>
                <p className="text-muted-foreground text-xs">Desenvolvedor Full-Stack · desde 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Layers,
    title: "Sites Institucionais",
    desc: "Presença digital sólida, rápida e responsiva para fortalecer sua marca e transmitir credibilidade.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "Páginas de alta conversão pensadas para transformar tráfego em clientes qualificados.",
  },
  {
    icon: Workflow,
    title: "Automações",
    desc: "Integrações e fluxos que eliminam trabalho manual e liberam tempo do seu time.",
  },
  {
    icon: Code2,
    title: "Sistemas Personalizados",
    desc: "Softwares sob medida para automatizar processos únicos do seu negócio.",
  },
];

function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções digitais completas"
          subtitle="Do design ao deploy — construídas para gerar resultados mensuráveis."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border surface p-6 hover:border-accent/60 transition"
            >
              <div className="size-11 rounded-xl bg-gradient-primary grid place-items-center text-white shadow-glow">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stages = [
  {
    n: "01",
    title: "Fortaleça sua marca",
    desc: "Um site institucional profissional que transmite autoridade desde o primeiro clique.",
  },
  {
    n: "02",
    title: "Capte mais clientes",
    desc: "Landing pages otimizadas para SEO e conversão em campanhas pagas e orgânicas.",
  },
  {
    n: "03",
    title: "Automatize processos",
    desc: "Fluxos automáticos que reduzem tarefas manuais e escalam seu atendimento.",
  },
  {
    n: "04",
    title: "Aumente suas conversões",
    desc: "Testes, análise de dados e iteração contínua para maximizar resultados.",
  },
  {
    n: "05",
    title: "Expanda no digital",
    desc: "Integrações com CRM, WhatsApp, pagamentos e todas as ferramentas do seu negócio.",
  },
];

function Stages() {
  return (
    <section id="solucoes" className="relative py-24 md:py-32 surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Soluções por etapa"
          title="Um plano para cada momento do seu negócio"
          subtitle="Onde quer que você esteja, existe uma solução digital certa para o próximo passo."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stages.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-border surface p-6 hover:border-accent/60 transition"
            >
              <span className="font-display text-4xl font-bold text-gradient">{s.n}</span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Sparkles, title: "Desenvolvimento personalizado", desc: "Nada de template pronto. Cada linha de código pensada para o seu objetivo." },
  { icon: Gauge, title: "Performance obsessiva", desc: "Sites rápidos, otimizados para Core Web Vitals e Google." },
  { icon: ShieldCheck, title: "Tecnologias modernas", desc: "Stack atual, segura e preparada para escalar com o seu negócio." },
  { icon: Headphones, title: "Suporte pós-entrega", desc: "Acompanhamento próximo após o lançamento para garantir o sucesso." },
];

function WhyMe() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-sm font-medium text-accent uppercase tracking-widest">
            Por que trabalhar comigo
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">
            Código que respeita o seu <span className="text-gradient">tempo e o seu negócio.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Desde 2018 desenvolvo soluções digitais focadas no que importa:
            performance real, experiência do usuário impecável e conversão.
            Sem promessas vazias — só resultado.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border surface p-6">
              <div className="size-11 rounded-xl bg-gradient-primary grid place-items-center text-white shadow-glow">
                <r.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-display font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Entrega técnica impecável e uma visão estratégica rara. O site novo já refletiu em mais orçamentos na primeira semana.",
    name: "Cliente institucional",
    role: "Escritório de advocacia",
  },
  {
    quote:
      "Automatizou processos que consumiam horas do meu dia. Ganhei tempo e o atendimento ficou muito mais profissional.",
    name: "Cliente PME",
    role: "Clínica de estética",
  },
  {
    quote:
      "Landing page que conversa com o público certo. A taxa de conversão da campanha subiu de forma consistente.",
    name: "Cliente digital",
    role: "Prestação de serviços",
  },
];

function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que dizem sobre o trabalho"
          subtitle="Feedback de clientes reais que confiaram no processo."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-border surface p-7 flex flex-col justify-between"
            >
              <Quote className="size-6 text-accent" />
              <blockquote className="mt-5 text-foreground/90 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <p className="font-display font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    img: project1,
    tag: "Sistema Web",
    title: "Painel administrativo sob medida",
    desc: "Aplicação interna com autenticação, dashboards e gestão de dados em tempo real.",
  },
  {
    img: project2,
    tag: "Landing Page",
    title: "Página de conversão para e-commerce",
    desc: "Layout focado em captura de leads com integração ao WhatsApp e analytics.",
  },
  {
    img: project3,
    tag: "Automação",
    title: "Fluxo de automação de atendimento",
    desc: "Integração entre formulário, CRM e disparos automáticos por e-mail e WhatsApp.",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos entregues"
          subtitle="Uma amostra da qualidade técnica e visual dos trabalhos desenvolvidos."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl overflow-hidden border border-border surface hover:border-accent/60 transition"
            >
              <div className="aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-accent uppercase tracking-widest">
                  {p.tag}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Como sei que o site realmente vai atender às necessidades da minha empresa?",
    a: "Cada projeto é desenvolvido de forma personalizada, com base nos objetivos do seu negócio. Antes do desenvolvimento, alinhamos todas as funcionalidades, design e expectativas para entregar uma solução adequada às suas necessidades.",
  },
  {
    q: "Qual é o prazo médio de entrega?",
    a: "O prazo varia conforme o escopo. Landing pages costumam ficar prontas em poucos dias; sites institucionais e sistemas mais robustos são combinados no orçamento inicial com cronograma claro.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Trabalho com entrada + parcelas por etapas ou pagamento único conforme o projeto. Tudo é combinado por escrito antes do início.",
  },
  {
    q: "Vocês oferecem suporte após a entrega?",
    a: "Sim. Todo projeto inclui acompanhamento pós-entrega para ajustes e correções, e ofereço planos de manutenção contínua sob demanda.",
  },
  {
    q: "Posso pedir alterações durante o desenvolvimento?",
    a: "Sim. O processo prevê revisões em pontos específicos. Alterações significativas fora do escopo original são conversadas de forma transparente.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 md:py-32 surface/40">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Dúvidas comuns"
          subtitle="As respostas rápidas para começar seu projeto com tranquilidade."
        />
        <div className="mt-12 divide-y divide-border rounded-2xl border border-border surface">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:text-accent transition"
                >
                  <span className="font-display font-medium">{f.q}</span>
                  {isOpen ? (
                    <Minus className="size-5 text-accent shrink-0" />
                  ) : (
                    <Plus className="size-5 text-muted-foreground shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-primary p-10 md:p-16 text-center shadow-glow">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
              Pronto para o próximo passo do seu negócio?
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Me chame no WhatsApp e conte seu projeto. Respondo pessoalmente e
              já saímos do zero com um plano claro.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 font-medium text-foreground hover:opacity-95 transition"
            >
              <MessageCircle className="size-5 text-accent" />
              Falar no WhatsApp
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-2 font-display font-bold">
          <span className="size-8 rounded-lg bg-gradient-primary grid place-items-center">
            <Code2 className="size-4 text-white" />
          </span>
          phlavio<span className="text-gradient">.dev</span>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Phlavio Allves da Silva Junior. Todos os direitos reservados.
        </p>
        <div className="flex items-center justify-center md:justify-end gap-3">
          {[
            { icon: Instagram, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Github, href: "#" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="size-10 grid place-items-center rounded-full border border-border surface hover:border-accent/60 hover:text-accent transition"
              aria-label="social"
            >
              <s.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-gradient-primary shadow-glow grid place-items-center text-white hover:scale-105 transition"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium text-accent uppercase tracking-widest">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>
    </div>
  );
}
