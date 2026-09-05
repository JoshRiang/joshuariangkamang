export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-blue-400 animate-spin" />
        <p className="text-sm text-white/40 font-mono">loading…</p>
      </div>
    </div>
  );
}
