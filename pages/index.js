export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f1724] to-[#02040a] text-[#e6eef8] flex items-start justify-center py-12">
      <div className="max-w-3xl w-full bg-[#0b1220] p-8 rounded-2xl shadow-2xl border border-white/5">
        <h1 className="text-3xl font-semibold mb-2">Soap's Rēsh-1</h1>
        <p className="text-indigo-200 font-semibold mb-3">CLASSIFIED INFORMATION</p>

        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 bg-white/2 rounded mb-4 text-[#bfcfea]">
          FOUNDATION SECURE NETWORK
        </blockquote>

        <p className="mb-4 text-[#cfe0ff]">Accessing Rēsh-1 ("Seat of Consciousness") declassified operations database...</p>

        <section className="mb-4">
          <label className="block text-sm text-[#94a3b8] mb-2">SECURITY CLEARANCE CODE</label>
          <div className="flex gap-3">
            <input id="code" className="flex-1 px-3 py-2 rounded-md bg-transparent border border-white/5 outline-none" placeholder="Insert credentials" />
            <button
              onClick={() => {
                const v = document.getElementById('code').value.trim()
                if (!v) return alert('Insert credentials.')
                alert('Authentication attempt recorded (demo).')
              }}
              className="px-4 py-2 rounded-md font-semibold bg-indigo-300 text-[#07102a]"
            >
              AUTHENTICATE
            </button>
          </div>
          <p className="text-sm text-[#94a3b8] mt-2">
            Contact RAISA for password assistance — <strong>[LEVEL 4 CLEARANCE REQUIRED]</strong>
          </p>
        </section>

        <div className="bg-white/5 p-3 rounded mb-4 text-[#ffdede] font-semibold">
          UNAUTHORIZED ACCESS IS A VIOLATION OF FOUNDATION PROTOCOL — VIOLATORS WILL BE SUBJECT TO IMMEDIATE TERMINATION
        </div>

        <p className="mb-3">
          <a className="text-indigo-300 font-semibold" href="https://discord.gg" target="_blank" rel="noreferrer">
            Join the Rēsh-1 Discord Server
          </a>
        </p>

        <hr className="border-white/6 mb-4" />

        <h2 className="text-lg mb-2">DOCUMENT CREATOR INFORMATION</h2>
        <ul className="text-[#94a3b8] list-disc list-inside space-y-1">
          <li>
            Discord: <code className="bg-white/3 px-2 py-0.5 rounded">twoea</code>
          </li>
          <li>
            Roblox: <code className="bg-white/3 px-2 py-0.5 rounded">MrCheese4125</code>
          </li>
          <li>
            SCP Roleplay: <code className="bg-white/3 px-2 py-0.5 rounded">Soap</code> — Rēsh-1 Overseer
          </li>
        </ul>
      </div>
    </main>
  )
}
