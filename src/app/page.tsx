// File: app/page.tsx
"use client";
import { Toaster, toast } from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaHome, FaUser, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        toast.success('Form submitted successfully!');
        form.reset();
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        toast.error('Submission failed. Please try again.');
      });
  };

  return (
    <main className="bg-white text-gray-800 relative border-4 border-black rounded-xl shadow-xl">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Top-right Navigation */}
      <div className={`fixed top-0 right-0 w-full z-50 px-4 sm:px-6 md:px-10 py-6 flex justify-end flex-wrap gap-4 text-blue-700 text-base border-b transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-sm border-black' : 'bg-transparent border-transparent'}`}>        
        <a href="#hero" title="Home" className="hover:text-blue-300 flex items-center gap-1 text-white"><FaHome /> Home</a>
        <a href="#about" title="About" className="hover:text-blue-300 flex items-center gap-1 text-white"><FaUser /> About</a>
        <a href="#faq" title="FAQ" className="hover:text-blue-300 flex items-center gap-1 text-white"><FaQuestionCircle /> FAQ</a>
        <a href="#contact" title="Contact" className="hover:text-blue-300 flex items-center gap-1 text-white"><FaEnvelope /> Contact</a>
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center pt-32 px-4 text-center" style={{ backgroundImage: "url('/water.jpg')" }}>
        <h1 className="text-4xl text-top-center sm:text-5xl md:text-6xl font-serif drop-shadow-lg leading-tight">Psychological Care for Change,</h1>
        <h1 className="text-4xl text-top-center sm:text-5xl md:text-6xl font-serif drop-shadow-lg leading-tight">Insight, and Well-Being</h1>
        <h2 className="text-xl sm:text-2xl mt-4 italic drop-shadow">Offering expert therapy and a safe space to grow</h2>
        <a href="#contact">
          <button className="mt-6 px-8 sm:px-12 py-3 sm:py-4 bg-[#66a3a3] hover:bg-[#5c9292] text-white rounded-full shadow-lg text-xl sm:text-2xl transition-all duration-300"> Book a Free Consult </button>
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="my-10 max-w-[95%] mx-auto py-10 px-4 sm:px-6 md:px-10 grid md:grid-cols-2 gap-6 items-center bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-blue-800 tracking-wide font-serif">About Dr. Serena Blake</h2>
          <p className="mb-4 text-base sm:text-lg leading-relaxed">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care.
          </p>
          <p className="text-base sm:text-lg">Whether you meet in person or virtually, Dr. Blake is committed to creating a safe, supportive space for you to thrive.</p>
        </div>
        <div>
          <Image src="/dr.jpg" alt="Dr. Serena Blake" width={450} height={500} className="rounded-xl shadow-lg w-full h-auto" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-10 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 text-blue-800 tracking-wide font-serif">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[95%] mx-auto">
          {[
            "Stress",
            "conseling",
            "trauma"
          ].map((img, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image
                src={i === 2 ? "/recovery.png" : `/${img}.png`}
                alt="Service"
                width={500}
                height={300}
                className="w-full h-[200px] sm:h-[250px] object-cover"
              />
              <div className="p-4 sm:p-5">
                {i === 0 ? (
                  <Link href="/services/stress">
                    <h3 className="text-xl sm:text-2xl mb-2 text-gray-800 font-serif cursor-pointer hover:underline">Anxiety & Stress Management</h3>
                  </Link>
                ) : (
                  <Link href={i === 1 ? "/services/Relational" : "#"}>
                    <h3 className="text-xl sm:text-2xl mb-2 text-gray-800 font-serif">{i === 1 ? "Relationship Counseling" : "Trauma Recovery"}</h3>
                  </Link>
                )}
                <p className="text-sm sm:text-base text-gray-700">
                  {i === 0
                    ? "Support for managing anxiety, reducing stress, and building resilience using proven therapeutic strategies."
                    : i === 1
                    ? "Guidance for couples and individuals navigating communication, intimacy, and connection challenges."
                    : "Healing support for past trauma with compassion-focused therapy and a safe therapeutic relationship."}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-16"></div> {/* Extra space after services section */}
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-[90%] mx-auto py-10 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 text-blue-800 tracking-wide font-serif">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {["Do you accept insurance?", "Are online sessions available?", "What are the session fees?"].map((q, i) => (
            <details key={i} className="bg-white p-5 rounded-lg shadow-md">
              <summary className="cursor-pointer font-semibold text-lg">{q}</summary>
              <p className="mt-2 text-gray-700 text-sm sm:text-base">
                {i === 0
                  ? "No, but a superbill is provided for self-submission."
                  : i === 1
                  ? "Yes—all virtual sessions are via Zoom."
                  : "$200 for individual sessions, $240 for couples sessions."}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-100 py-10 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-8 text-blue-800 tracking-wide font-serif">Get in Touch</h2>
        <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto space-y-4 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          {["Name", "Phone", "Email"].map((label, i) => (
            <div key={i}>
              <label className="block font-semibold mb-1 text-base">{label}</label>
              <input name={label.toLowerCase()} className="w-full border border-gray-300 rounded-lg p-3" type={label === "Email" ? "email" : label === "Phone" ? "tel" : "text"} required />
            </div>
          ))}
          <div>
            <label className="block font-semibold mb-1 text-base">What brings you here?</label>
            <textarea name="message" className="w-full border border-gray-300 rounded-lg p-3" required></textarea>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-base">Preferred time to reach you</label>
            <input name="preferredTime" className="w-full border border-gray-300 rounded-lg p-3" type="text" required />
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" name="consent" className="mt-1" required />
            <label className="text-sm sm:text-base">I agree to be contacted</label>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 text-base sm:text-lg font-semibold">Submit</button>
        </form>
      </section>
    </main>
  );
}