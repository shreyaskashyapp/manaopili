'use client'

export function PDFHeader() {
  return (
    <div 
      className="w-full h-[150px] text-white px-10 py-6"
      style={{
        background: 'linear-gradient(90deg, #0328fa 0%, #0328fa 40%, #000000 70%, #000000 100%)',
        backgroundSize: 'cover'
      }}
    >
      <div className="space-y-2">
        <h1 className="text-xl font-light tracking-wide">{`Mana'o Pili LLC`}</h1>
        <h2 className="text-4xl leading-tight font-semibold max-w-3xl">
        ServiceNow Technology Workflows (Tx) - Results
        </h2>
      </div>
    </div>
  )
}
