import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  ClipboardCheck,
  CreditCard,
  FileBadge,
  Mail,
  MapPin,
  Phone,
  PlayCircle,
  Sparkles,
  Users,
} from "lucide-react";
import { COMPANY } from "../lib/constants";

export default function Home() {
  const features = [
    {
      title: "Simple Enrollment",
      desc: "A guided registration flow for students, colleges, departments, subjects, and internship domains.",
      icon: ClipboardCheck,
      color: "text-sky-600 bg-sky-50 border-sky-100",
    },
    {
      title: "Secure Payments",
      desc: "Razorpay-powered fee collection with downloadable receipts and clean payment records.",
      icon: CreditCard,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Learning Dashboard",
      desc: "Track classes, videos, assignments, completion status, and learning hours from one place.",
      icon: BarChart3,
      color: "text-violet-600 bg-violet-50 border-violet-100",
    },
    {
      title: "Live Training",
      desc: "Structured mentorship, live sessions, and domain-specific practical learning support.",
      icon: PlayCircle,
      color: "text-rose-600 bg-rose-50 border-rose-100",
    },
    {
      title: "Course Materials",
      desc: "Organized videos, PPTs, and study resources for internship-ready technical and non-technical tracks.",
      icon: BookOpen,
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
    {
      title: "Documents & Certificates",
      desc: "Offer letters, receipts, certificates, and reports generated directly from student profiles.",
      icon: FileBadge,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Kumar",
      role: "B.Tech Student",
      type: "Student",
      review: "NexBora helped me understand the complete internship workflow with live projects and clear tasks.",
    },
    {
      name: "Priya Sharma",
      role: "MBA Student",
      type: "Student",
      review: "The training sessions were practical, and the dashboard made progress easy to follow.",
    },
    {
      name: "Aman Raj",
      role: "BCA Student",
      type: "Student",
      review: "A clean platform for learning, certification support, and internship documentation.",
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "College Professor",
      type: "Teacher",
      review: "Useful for colleges that need structured internship tracking and student support.",
    },
    {
      name: "Anjali Sinha",
      role: "Training Mentor",
      type: "Teacher",
      review: "The LMS and student workflow are simple enough for repeated academic batches.",
    },
    {
      name: "Ravi Sir",
      role: "Placement Trainer",
      type: "Teacher",
      review: "Students get a professional internship experience with documentation in one place.",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const filteredTestimonials =
    activeFilter === "All" ? testimonials : testimonials.filter((item) => item.type === activeFilter);

  return (
    <div className="bg-white text-slate-950 overflow-hidden">
      <section className="relative bg-slate-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
          alt="Students and mentors collaborating in a training session"
          className="absolute inset-0 h-full w-full object-cover opacity-35 scale-105 motion-safe:animate-[premium-zoom_18s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,6,23,0.92),rgba(15,23,42,0.72),rgba(14,116,144,0.35))]" />
        <div className="absolute inset-0 premium-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-96px)] py-16 lg:py-24 flex items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-100 backdrop-blur"
            >
              <BadgeCheck className="h-4 w-4 text-emerald-300" />
              UGC-aligned internship training platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.03]"
            >
              {COMPANY.name}
              <span className="block bg-gradient-to-r from-sky-200 via-emerald-200 to-amber-100 bg-clip-text text-transparent">
                for industry-ready internships.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-200"
            >
              Manage student enrollment, live learning, payments, assignments, progress, and certification through one
              polished academic workflow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-9 flex flex-col sm:flex-row gap-3"
            >
              <Link to="/register" className="premium-button inline-flex h-14 items-center justify-center gap-2 rounded-md bg-sky-500 px-7 py-4 font-bold text-white shadow-lg shadow-sky-950/30 transition hover:bg-sky-400">
                Register Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/features" className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10">
                Explore Platform
              </Link>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                ["10K+", "Students"],
                ["120", "Training Hours"],
                ["13+", "Domains"],
                ["24/7", "Support"],
              ].map(([value, label], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32 + index * 0.06 }}
                  className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/15"
                >
                  <p className="text-2xl font-black">{value}</p>
                  <p className="mt-1 text-sm text-slate-300">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">Platform</p>
              <h2 className="mt-3 text-3xl lg:text-5xl font-black tracking-tight">Everything needed to run internship batches.</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Built for students, colleges, mentors, and admins who need a reliable training and documentation system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                key={item.title}
                className="premium-card rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-md border ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-600">Workflow</p>
            <h2 className="mt-3 text-3xl lg:text-5xl font-black tracking-tight">From registration to certificate, every step stays traceable.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              NexBora keeps the internship journey organized for batches, academic teams, and students.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/register" className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-6 py-3 font-bold text-white hover:bg-slate-800">
                Start Enrollment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-6 py-3 font-bold text-slate-800 hover:bg-white">
                Talk to Support
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="premium-card rounded-lg border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/80"
          >
            {[
              ["01", "Register", "Create a student profile with academic and domain details."],
              ["02", "Enroll", "Complete payment and unlock the learning dashboard."],
              ["03", "Learn", "Attend sessions, view videos, and complete assignments."],
              ["04", "Certify", "Download offer letters, reports, receipts, and certificates."],
            ].map(([step, title, desc], index) => (
              <div key={title} className={`flex gap-5 p-5 ${index !== 3 ? "border-b border-slate-100" : ""}`}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sky-50 text-sm font-black text-sky-700">
                  {step}
                </div>
                <div>
                  <h3 className="font-black text-slate-950">{title}</h3>
                  <p className="mt-1 text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-600">Trust</p>
              <h2 className="mt-3 text-3xl lg:text-5xl font-black tracking-tight">What students and mentors say.</h2>
            </div>
            <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
              {["All", "Student", "Teacher"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-md px-5 py-2 text-sm font-bold transition ${
                    activeFilter === filter ? "bg-white text-slate-950 shadow-sm" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {filter === "All" ? "All" : `${filter}s`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTestimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className="premium-card rounded-lg border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex gap-1 text-amber-400" aria-label="Five star rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Sparkles key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 leading-7 text-slate-700">"{item.review}"</p>
                <div className="mt-7 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-950 font-black text-white">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-black">{item.name}</h3>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </div>
                  </div>
                  <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{item.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div className="absolute inset-x-4 -top-16 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-300">Support</p>
            <h2 className="mt-3 text-3xl lg:text-5xl font-black tracking-tight">Need help with enrollment or certification?</h2>
            <p className="mt-4 text-slate-300">Our support team can help students, colleges, and mentors move quickly.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <a href={`mailto:${COMPANY.email}`} className="rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
              <Mail className="h-5 w-5 text-sky-300" />
              <p className="mt-3 font-bold">{COMPANY.email}</p>
            </a>
            <a href={COMPANY.phoneHref} className="rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
              <Phone className="h-5 w-5 text-emerald-300" />
              <p className="mt-3 font-bold">{COMPANY.phone}</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-950 text-lg font-black text-white">N</div>
                <div>
                  <h2 className="text-2xl font-black">{COMPANY.shortName}</h2>
                  <p className="text-sm text-slate-500">Technologies</p>
                </div>
              </div>
              <p className="mt-5 max-w-md leading-7 text-slate-600">
                Internship training, LMS workflows, payment records, and certificates for academic programs.
              </p>
            </div>

            <div>
              <h3 className="font-black">Platform</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li><Link to="/features" className="hover:text-slate-950">Features</Link></li>
                <li><Link to="/register" className="hover:text-slate-950">For Students</Link></li>
                <li><Link to="/contact" className="hover:text-slate-950">For Colleges</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-black">Support</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li><Link to="/about" className="hover:text-slate-950">About</Link></li>
                <li><Link to="/contact" className="hover:text-slate-950">Contact</Link></li>
                <li>Certificates</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black">Contact</h3>
              <div className="mt-4 space-y-3 text-slate-600">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> {COMPANY.email}</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {COMPANY.phone}</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {COMPANY.address}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {COMPANY.name}. All rights reserved.</p>
            <p className="flex items-center gap-2"><Users className="h-4 w-4" /> 20,000+ students supported</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
