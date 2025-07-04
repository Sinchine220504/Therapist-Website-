// File: app/services/relationship-counseling/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function RelationshipCounselingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-white text-gray-800 py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-serif text-pink-900 mb-4 leading-snug">Relationship Counseling</h1>
          <p className="text-lg sm:text-xl italic text-gray-700">
            Build stronger, healthier relationships with open communication and mutual understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <div>
            <Image
              src="/couples.jpg"
              alt="Couples counseling illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto max-h-[300px] object-cover"
            />
          </div>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <p>
              Every relationship faces challenges. Whether you're a couple navigating communication issues, trust concerns, or life transitions — or an individual reflecting on relationship patterns — therapy can offer clarity and growth.
            </p>
            <p>
              Dr. Serena Blake creates a nonjudgmental space where both partners are heard and understood. With a blend of emotionally focused therapy and practical tools, you’ll work together to restore connection and foster emotional safety.
            </p>
            <p>
              Let’s begin your path toward deeper connection, empathy, and trust.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/">
            <button className="mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-md text-base sm:text-lg transition duration-300">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
