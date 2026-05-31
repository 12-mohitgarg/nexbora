import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, HelpCircle, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { COMPANY } from '../lib/constants';

const contactCards = [
  { title: 'Email Support', val: COMPANY.email, icon: Mail, color: 'text-sky-600 bg-sky-50 border-sky-100' },
  { title: 'Phone Support', val: COMPANY.phone, icon: Phone, color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
  { title: 'Office Location', val: COMPANY.address, icon: MapPin, color: 'text-violet-600 bg-violet-50 border-violet-100' },
];

export default function Contact() {
  return (
    <div className="bg-slate-50 overflow-hidden">
      <section className="relative bg-white py-20">
        <div className="absolute inset-0 premium-grid opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">Contact</p>
            <h1 className="mt-4 text-4xl lg:text-6xl font-black tracking-tight text-slate-950">
              Talk to {COMPANY.name}.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Reach out for internship enrollment, college partnerships, certificate verification, or technical support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08 }}
            className="premium-card relative z-10 rounded-lg border border-slate-200 bg-slate-950 p-7 text-white shadow-xl shadow-slate-200"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-sky-500 text-white">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black">NexBora Support Desk</h2>
                <p className="text-sm text-slate-300">Student and institution assistance</p>
              </div>
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {['Enrollment', 'LMS Help', 'Certificates'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 + i * 0.06 }}
                  className="rounded-md border border-white/10 bg-white/10 p-4 text-sm font-bold backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {contactCards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="premium-card rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80"
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-md border ${item.color}`}>
                    <item.icon size={22} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-500">{item.title}</p>
                    <p className="mt-1 break-words text-lg font-black text-slate-950">{item.val}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="premium-card rounded-lg border border-slate-800 bg-slate-950 p-7 text-white">
              <HelpCircle className="h-9 w-9 text-sky-300" />
              <h3 className="mt-5 text-2xl font-black">Quick Help</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Include your full name, college, registered email, and issue type so the team can respond faster.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="premium-card rounded-lg border border-slate-200 bg-white p-6 lg:p-10 shadow-sm"
            >
              <div className="mb-8">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">Message</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Send your query</h2>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label>Full name *</Label>
                    <Input placeholder="Enter your full name" className="h-12 rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email address *</Label>
                    <Input type="email" placeholder="name@example.com" className="h-12 rounded-md" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Reason</Label>
                  <select className="h-12 w-full rounded-md border border-slate-200 bg-white px-3 font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500">
                    <option>Program Enrollment</option>
                    <option>Technical Track Query</option>
                    <option>College Partnership</option>
                    <option>Certification Verification</option>
                    <option>Payment or LMS Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Message *</Label>
                  <textarea
                    rows={6}
                    placeholder="Write your message here"
                    className="w-full resize-none rounded-md border border-slate-200 bg-white p-4 font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <Button className="premium-button h-12 rounded-md bg-slate-950 px-6 font-bold text-white hover:bg-sky-600">
                  Submit Query
                  <Send size={18} />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
