// File: app/services/anxiety-stress/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function AnxietyStressPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-serif text-blue-900 mb-4 leading-snug">Anxiety & Stress Management</h1>
          <p className="text-lg sm:text-xl italic text-gray-700">
            Navigate life&#39;s pressures with tools that build resilience and calm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <div>
            <Image
              src="/Stress.png"
              alt="Stress relief illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto max-h-[300px] object-cover"
            />
          </div>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <p>
              At times, stress and anxiety can feel overwhelming. Our personalized therapy sessions provide a safe space to explore your feelings, identify triggers, and learn effective coping strategies.
            </p>
            <p>
              Whether it&#39;s work pressure, personal struggles, or a racing mind, Dr. Serena Blake will guide you through techniques like mindfulness, cognitive-behavioral therapy, and relaxation practices to help you regain control.
            </p>
            <p>
              Sessions are available both in-person and online. Your journey to peace of mind begins here.
            </p>
          </div>
        </div>

        <div className="h-16"></div> {/* Additional space after service section */}

        <div className="text-center">
          <Link href="/">
            <button className="mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md text-base sm:text-lg transition duration-300">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
