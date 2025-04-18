'use client'

export function PDFHeader() {
  return (
    <div
      className="w-full h-full text-white px-10 py-10 bg-gradient-to-br from-neutral-900 via-[#455CFF] to-zinc-700">
      <div className="space-y-1">
        <h1 className="text-xl font-light tracking-wide">{`Mana'o Pili LLC`}</h1>
        <h2 className="text-4xl leading-tight font-semibold max-w-3xl">
          ServiceNow Technology Workflows (Tx) - Results
        </h2>
      </div>
    </div>
  )
}
