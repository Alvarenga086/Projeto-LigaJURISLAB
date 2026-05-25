"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, BookOpen, Users, ExternalLink, MapPin, Clock, FileText, Scale, GraduationCap, Award, ChevronLeft, ChevronRight, Mail, Instagram, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"

const events = [
  {
    title: "Sistemática de Marcação de Vade Mecum para a 2ª Fase da OAB",
    date: "27 de Maio de 2026",
    time: "19:00 - 21:30",
    link: "https://www.sympla.com.br/evento/sistematica-de-marcacao-de-vade-mecum-para-a-2-fase-da-oab/3422302?share_id=copiarlink",
    status: "upcoming"
  }
]

const resources = [
  {
    title: "Processo Seletivo Simplificado",
    description: "Faça parte da nossa liga acadêmica! Inscreva-se no processo seletivo.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeAq1LCn462zwtQW-has10jDs16Nhk9q0NNjMCjFuEWQiMJPA/viewform?pli=1",
    icon: FileText,
    cta: "Inscreva-se"
  },
  {
    title: "Biblioteca Jurídica",
    description: "Acesse nossa coleção de livros e materiais de estudo em Direito.",
    link: "https://drive.google.com/drive/folders/1-dJqjX6afgajGh32yIZ7p_9QCE3ZyVYm",
    icon: BookOpen,
    cta: "Acessar Biblioteca"
  }
]

const team = [
  { 
    name: "Presidente", 
    role: "Presidência", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.34.26-XTCI54iUpQErSbmHcGU4qPQVtdSWLT.jpeg",
    position: "top" 
  },
  { 
    name: "Vice-Presidente", 
    role: "Vice-Presidência", 
    image: "/images/WhatsApp Image 2026-05-24 at 16.38.48.jpeg",
    position: "center" 
  },
  { 
    name: "Diretora de Projeto", 
    role: "Projetos", 
    image: "/images/WhatsApp Image 2026-05-25 at 10.20.36.jpeg",
    position: "top" 
  },
  { 
    name: "Diretora de Marketing", 
    role: "Marketing", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.27.08%20%281%29-0QgY4CsfJPCZ5Vj0LoLEfjmpGu789Q.jpeg",
    position: "center" 
  },
  { 
    name: "Auxiliar de Marketing", 
    role: "Marketing", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.27.09%20%283%29-SlZK17GTI6mfwu831EM99CyTI8n7TU.jpeg",
    position: "top" 
  },
  { 
    name: "Diretor Financeiro", 
    role: "Tesouraria ", 
    image: "/images/WhatsApp Image 2026-05-25 at 10.41.42.jpeg",
    position: "top" 
  },
  { 
    name: "Auxiliar Financeira", 
    role: "Tesouraria ", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.27.09%20%281%29-fZJ1O0Dm4cQJooxA0jRFO0MVV2ZwLo.jpeg",
    position: "center" 
  },
  { 
    name: "Diretor de Comunicação", 
    role: "Comunicação", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.27.09%20%282%29-yROtC9HUfckOv4I2xhwH31VSitgG6O.jpeg",
    position: "top" 
  },
  { 
    name: "Diretor Administrativa", 
    role: "Administrativo", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.27.09-7mkil78j9YoV5YSgf7tqi47Nd6eezV.jpeg",
    position: "center" 
  },
  { 
    name: "Diretora Acadêmica", 
    role: "Acadêmico", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.27.08-Nj3eyjak4nbjXJFjD25FW5GzdjPUkb.jpeg",
    position: "center" 
  },
  { 
    name: "Professora Orientadora", 
    role: "Orientação", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.48.27-jXLaZ3OQukjbMx4qswMb85XR4ml0Zl.jpeg",
    position: "top" 
  },
]

function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, team.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {team.map((member, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="text-center group">
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-[#c9a227]/30 group-hover:border-[#c9a227] transition-colors">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover ${member.position === 'top' ? 'object-top' : 'object-center'}`}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#0f1829] flex items-center justify-center">
                      <User className="w-12 h-12 text-[#c9a227]/50" />
                    </div>
                  )}
                </div>
                <h3 className="text-[#f5f5f0] font-semibold text-base">{member.name}</h3>
                <p className="text-[#c9a227] text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-[#c9a227] rounded-full flex items-center justify-center text-[#1a2744] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#b8922a] transition-colors z-10"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentIndex >= maxIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-[#c9a227] rounded-full flex items-center justify-center text-[#1a2744] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#b8922a] transition-colors z-10"
        aria-label="Próximo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#c9a227]' : 'bg-[#c9a227]/30'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a2744]/95 backdrop-blur-sm border-b border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/images/jurislab-logo.jpeg"
                alt="JURISLAB Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-[#c9a227] font-bold text-lg tracking-wide">JURISLAB</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#sobre" className="text-[#f5f5f0] hover:text-[#c9a227] transition-colors text-sm">Sobre</Link>
              <Link href="#eventos" className="text-[#f5f5f0] hover:text-[#c9a227] transition-colors text-sm">Eventos</Link>
              <Link href="#recursos" className="text-[#f5f5f0] hover:text-[#c9a227] transition-colors text-sm">Recursos</Link>
              <Link href="#equipe" className="text-[#f5f5f0] hover:text-[#c9a227] transition-colors text-sm">Equipe</Link>
              <Link href="#contato" className="text-[#f5f5f0] hover:text-[#c9a227] transition-colors text-sm">Contato</Link>
              <Button asChild size="sm" className="bg-[#722f37] hover:bg-[#8b3a45] text-[#f5f5f0]">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeAq1LCn462zwtQW-has10jDs16Nhk9q0NNjMCjFuEWQiMJPA/viewform?pli=1" target="_blank">
                  Junte-se a Nós
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a2744] via-[#1a2744] to-[#0f1829] pt-16">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#c9a227]/20 rounded-full blur-2xl" />
              <Image
                src="/images/jurislab-logo.jpeg"
                alt="JURISLAB - Liga Acadêmica de Direito"
                width={200}
                height={200}
                className="relative rounded-full shadow-2xl border-4 border-[#c9a227]/30"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-[#722f37]">JURIS</span>
            <span className="text-[#1a2744] bg-[#c9a227] px-2">LAB</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#c9a227] mb-4 font-medium">
            Liga Acadêmica de Direito
          </p>
          
          <p className="text-lg text-[#f5f5f0]/80 mb-8 max-w-2xl mx-auto">
            Promovendo conhecimento, pesquisa e extensão jurídica
          </p>
          
          <div className="flex items-center justify-center gap-2 text-[#f5f5f0]/60 mb-12">
            <MapPin className="w-5 h-5" />
            <span>Faculdade UNIP | Teresina-PI</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#c9a227] hover:bg-[#b8922a] text-[#1a2744] font-semibold px-8">
              <Link href="#eventos">
                <Calendar className="w-5 h-5 mr-2" />
                Próximos Eventos
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227]/10">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeAq1LCn462zwtQW-has10jDs16Nhk9q0NNjMCjFuEWQiMJPA/viewform?pli=1" target="_blank">
                <Users className="w-5 h-5 mr-2" />
                Processo Seletivo
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#c9a227]/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#c9a227]/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#722f37] font-medium text-sm tracking-widest uppercase">Sobre Nós</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-2">Quem Somos</h2>
            <div className="w-24 h-1 bg-[#c9a227] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-[#1a2744] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-[#c9a227]" />
                </div>
                <CardTitle className="text-[#1a2744]">Conhecimento Jurídico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#1a2744]/70 text-center">
                  Promovemos o estudo aprofundado do Direito através de debates, seminários e grupos de estudo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-[#722f37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-[#f5f5f0]" />
                </div>
                <CardTitle className="text-[#1a2744]">Pesquisa Acadêmica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#1a2744]/70 text-center">
                  Incentivamos a produção científica e a participação em eventos acadêmicos nacionais.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-[#c9a227] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#1a2744]" />
                </div>
                <CardTitle className="text-[#1a2744]">Extensão Jurídica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#1a2744]/70 text-center">
                  Desenvolvemos projetos que aproximam a comunidade acadêmica da sociedade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="eventos" className="py-24 bg-[#1a2744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a227] font-medium text-sm tracking-widest uppercase">Agenda</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mt-2">Próximos Eventos</h2>
            <div className="w-24 h-1 bg-[#722f37] mx-auto mt-4" />
          </div>

          <div className="grid gap-6 max-w-3xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="bg-[#0f1829] border border-[#c9a227]/20 hover:border-[#c9a227]/50 transition-colors overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-[#722f37] p-6 md:w-48 flex flex-col items-center justify-center text-center">
                    <Calendar className="w-8 h-8 text-[#f5f5f0] mb-2" />
                    <span className="text-[#f5f5f0] font-bold text-lg">{event.date}</span>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold text-[#f5f5f0] mb-3">{event.title}</h3>
                    <div className="flex items-center gap-2 text-[#c9a227] mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <Button asChild className="bg-[#c9a227] hover:bg-[#b8922a] text-[#1a2744]">
                      <Link href={event.link} target="_blank" rel="noopener noreferrer">
                        Inscreva-se
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-center text-[#f5f5f0]/60 mt-8 text-sm">
            * Novos eventos são adicionados semanalmente. Fique atento às nossas redes sociais!
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section id="recursos" className="py-24 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#722f37] font-medium text-sm tracking-widest uppercase">Recursos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-2">Materiais e Oportunidades</h2>
            <div className="w-24 h-1 bg-[#c9a227] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#1a2744] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#722f37] transition-colors">
                    <resource.icon className="w-7 h-7 text-[#c9a227]" />
                  </div>
                  <CardTitle className="text-[#1a2744]">{resource.title}</CardTitle>
                  <CardDescription className="text-[#1a2744]/70">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-[#722f37] hover:bg-[#8b3a45] text-[#f5f5f0]">
                    <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                      {resource.cta}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-24 bg-[#1a2744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a227] font-medium text-sm tracking-widest uppercase">Nossa Equipe</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mt-2">Diretoria JURISLAB</h2>
            <div className="w-24 h-1 bg-[#722f37] mx-auto mt-4" />
          </div>

          <div className="px-8">
            <TeamCarousel />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[#722f37] font-medium text-sm tracking-widest uppercase">Fale Conosco</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-2">Entre em Contato</h2>
            <div className="w-24 h-1 bg-[#c9a227] mx-auto mt-4" />
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <Link 
              href="mailto:ligajurislab@gmail.com" 
              className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 w-full md:w-auto"
            >
              <div className="w-14 h-14 bg-[#1a2744] rounded-full flex items-center justify-center">
                <Mail className="w-7 h-7 text-[#c9a227]" />
              </div>
              <div>
                <p className="text-[#1a2744]/60 text-sm">E-mail</p>
                <p className="text-[#1a2744] font-semibold">ligajurislab@gmail.com</p>
              </div>
            </Link>

            <Link 
              href="https://www.instagram.com/liga.juris_lab" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 w-full md:w-auto"
            >
              <div className="w-14 h-14 bg-[#722f37] rounded-full flex items-center justify-center">
                <Instagram className="w-7 h-7 text-[#f5f5f0]" />
              </div>
              <div>
                <p className="text-[#1a2744]/60 text-sm">Instagram</p>
                <p className="text-[#1a2744] font-semibold">@liga.juris_lab</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#722f37] to-[#8b3a45]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4">
            Faça Parte da JURISLAB
          </h2>
          <p className="text-[#f5f5f0]/80 mb-8 text-lg">
            Inscreva-se no nosso processo seletivo e contribua para o desenvolvimento do conhecimento jurídico
          </p>
          <Button asChild size="lg" className="bg-[#c9a227] hover:bg-[#b8922a] text-[#1a2744] font-semibold px-10">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeAq1LCn462zwtQW-has10jDs16Nhk9q0NNjMCjFuEWQiMJPA/viewform?pli=1" target="_blank">
              Inscreva-se Agora
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1829] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/jurislab-logo.jpeg"
                alt="JURISLAB Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <span className="text-[#c9a227] font-bold text-lg">JURISLAB</span>
                <p className="text-[#f5f5f0]/60 text-sm">Liga Acadêmica de Direito</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Link href="mailto:ligajurislab@gmail.com" className="text-[#f5f5f0]/60 hover:text-[#c9a227] transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/liga.juris_lab" target="_blank" rel="noopener noreferrer" className="text-[#f5f5f0]/60 hover:text-[#c9a227] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center gap-2 text-[#f5f5f0]/60 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Faculdade UNIP | Teresina-PI</span>
            </div>
          </div>

          <div className="border-t border-[#f5f5f0]/10 mt-8 pt-8 text-center">
            <p className="text-[#f5f5f0]/40 text-sm">
              © 2025 JURISLAB. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
