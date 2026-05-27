// components/TeamCarousel.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, User } from "lucide-react"

const team = [
  { 
    name: "Danielle Vitória", 
    role: "Presidente", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.34.26-XTCI54iUpQErSbmHcGU4qPQVtdSWLT.jpeg",
    position: "top" 
  },
  { 
    name: "Vívian Emanuelly", 
    role: "Vice-Presidente", 
    image: "/images/WhatsApp Image 2026-05-24 at 16.38.48.jpeg",
    position: "center" 
  },
  { 
    name: "Maria Clara Sousa", 
    role: "Diretora de Projetos", 
    image: "/images/WhatsApp Image 2026-05-25 at 10.20.36.jpeg",
    position: "top" 
  },
  { 
    name: "Ana Vitória", 
    role: "Diretora de Marketing", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.27.08%20%281%29-0QgY4CsfJPCZ5Vj0LoLEfjmpGu789Q.jpeg",
    position: "center" 
  },
  { 
    name: "Quérem Hapuque", 
    role: "Auxiliar de Marketing", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.27.09%20%283%29-SlZK17GTI6mfwu831EM99CyTI8n7TU.jpeg",
    position: "top" 
  },
  { 
    name: "Luis Gustavo", 
    role: "Diretor Financeiro", 
    image: "/images/WhatsApp Image 2026-05-25 at 10.41.42.jpeg",
    position: "top" 
  },
  { 
    name: "Vanessa Krysna", 
    role: "Assistente Financeiro", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.27.09%20%281%29-fZJ1O0Dm4cQJooxA0jRFO0MVV2ZwLo.jpeg",
    position: "center" 
  },
  { 
    name: "Jeremias Rodrigues", 
    role: "Diretor de Comunicação", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.27.09%20%282%29-yROtC9HUfckOv4I2xhwH31VSitgG6O.jpeg",
    position: "top" 
  },
  { 
    name :"Josnayra Rayane",
    role: "Secretaria Geral",
    image: "/images/WhatsApp Image 2026-05-25 at 10.51.38.jpeg",
    position: "top"
  },
  {
    name: "Sena Santos", 
    role: "Diretor Administrativa", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.27.09-7mkil78j9YoV5YSgf7tqi47Nd6eezV.jpeg",
    position: "center" 
  },
  { 
    name: "Cleidivane Lima", 
    role: "Diretora Acadêmica", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.27.08-Nj3eyjak4nbjXJFjD25FW5GzdjPUkb.jpeg",
    position: "center" 
  },
  { 
    name: "Janaína Félix", 
    role: "Professora Orientadora", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-24%20at%2015.48.27-jXLaZ3OQukjbMx4qswMb85XR4ml0Zl.jpeg",
    position: "top" 
  },
]

export function TeamCarousel() {
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