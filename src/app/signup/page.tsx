import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="w-full min-h-screen bg-brand-bg flex items-center justify-center p-6 py-12">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col relative border border-black/5">
        
        {/* Header */}
        <div className="bg-brand-maroon text-white p-8 pb-6 relative">
          <Link href="/" className="absolute top-4 right-4 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </Link>
          <h2 className="text-2xl font-serif mb-1">Join Us</h2>
          <p className="text-[11px] text-white/80 tracking-wide">Create your account today</p>
        </div>

        {/* Form */}
        <div className="p-8 pt-6 bg-[#FEFDF9]">
          <form className="space-y-4">
            <div>
              <label className="block text-[9px] uppercase font-bold tracking-widest text-brand-text mb-1.5 ml-1">Full Name</label>
              <input type="text" placeholder="Samar" className="w-full bg-[#EEF2FF] border border-black/5 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
            </div>

            <div>
              <label className="block text-[9px] uppercase font-bold tracking-widest text-brand-text mb-1.5 ml-1">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full bg-[#F5EFE6] border border-black/5 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
            </div>

            <div>
              <label className="block text-[9px] uppercase font-bold tracking-widest text-brand-text mb-1.5 ml-1">Phone</label>
              <input type="tel" placeholder="12345" className="w-full bg-[#F5EFE6] border border-black/5 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
            </div>
            
            <div>
              <label className="block text-[9px] uppercase font-bold tracking-widest text-brand-text mb-1.5 ml-1">Password</label>
              <input type="password" placeholder="Min. 8 characters" className="w-full bg-[#F5EFE6] border border-black/5 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
            </div>

            <div>
              <label className="block text-[9px] uppercase font-bold tracking-widest text-brand-text mb-1.5 ml-1">Confirm Password</label>
              <input type="password" placeholder="Repeat password" className="w-full bg-[#F5EFE6] border border-black/5 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
            </div>

            <div className="pt-4">
              <button className="w-full bg-brand-gold text-brand-maroon py-3 rounded-md text-xs font-bold tracking-widest uppercase hover:bg-brand-gold-light transition-colors shadow-sm">
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-[10px] text-brand-text-light">
            Already have an account? <Link href="/login" className="font-bold text-brand-maroon hover:underline">Sign In</Link>
          </div>

          <div className="mt-6 flex items-center gap-4 before:h-px before:flex-1 before:bg-black/5 after:h-px after:flex-1 after:bg-black/5">
            <span className="text-[10px] text-brand-text-light lowercase italic font-serif">or</span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="border border-black/10 bg-white rounded-md py-2.5 text-[10px] font-bold flex items-center justify-center gap-2 hover:bg-black/5 transition-colors">
              Google
            </button>
            <button className="border border-black/10 bg-white rounded-md py-2.5 text-[10px] font-bold flex items-center justify-center gap-2 hover:bg-black/5 transition-colors">
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
