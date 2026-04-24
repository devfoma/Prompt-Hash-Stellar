import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import MyPrompts from "@/pages/sell/MyPrompts";
import { useWalletBalance } from "@/hooks/useWalletBalance";
import { useWallet } from "@/hooks/useWallet";
import { Loader2, Wallet } from "lucide-react";

export default function ProfilePage() {
  const { xlm, isLoading: balanceLoading } = useWalletBalance();
  const { address } = useWallet();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_30%),linear-gradient(180deg,_#020617,_#0f172a_45%,_#020617)] text-white">
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-[0_32px_120px_-64px_rgba(16,185,129,0.45)]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">
              Wallet profile
            </p>
            <h1 className="text-4xl font-semibold">My prompt licenses</h1>
            <p className="max-w-xl text-sm leading-7 text-slate-300">
              Manage listings you created and reopen prompts you purchased. This
              page reads directly from the Stellar contract and uses the unlock API
              only when you request the decrypted plaintext.
            </p>
          </div>

          {address && (
            <div className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm min-w-[300px]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Wallet size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Active Wallet
                  </p>
                  <p className="font-mono text-sm text-slate-200">
                    {address.slice(0, 6)}...{address.slice(-6)}
                  </p>
                </div>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Balance
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">
                    {balanceLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      xlm
                    )}
                  </span>
                  <span className="text-sm font-medium text-emerald-400">XLM</span>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="mt-10">
          <MyPrompts />
        </section>
      </main>
      <Footer />
    </div>
  );
}
