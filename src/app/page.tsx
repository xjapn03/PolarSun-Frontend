'use client'

import Image from "next/image";
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import useLenis from './hooks/useLenis'

export default function Home() {
  useLenis()
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!imageRef.current) return

    // Animación al hacer scroll: rota y escala suavemente
    gsap.fromTo(
      imageRef.current,
      { rotateY: 0, scale: 1 },
      {
        rotateY: 360,
        scale: 1.3,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
        ease: 'power2.inOut',
      }
    )
  }, [])

  return (
    <main className="min-h-screen pt-24">
      <section className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Explora tu estilo con PolarSun
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Gafas de sol diseñadas para destacar.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition">
          Comprar ahora
        </button>

        <div className="mt-16">
        <Image
          ref={imageRef}
          src="/glasses.png" // asegúrate de que la imagen esté en /public
          alt="Gafas de sol"
          width={256} // equivalente a w-64
          height={256}
          className="mx-auto"
        />
      </div>

      </section>
    </main>
  )
}

