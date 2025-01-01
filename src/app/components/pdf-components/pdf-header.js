'use client'

export function PDFHeader({ generatedDate = new Date().toLocaleDateString() }) {
  return (
    <div className="bg-[#1a237e] text-white p-6 w-full">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold mb-4">Mana&apos;o Pili LLC</h1>
          <h2 className="text-xl">ServiceNow CSM Implementation Assessment Report</h2>
        </div>
        <div className="text-sm">
          Generated: {generatedDate}
        </div>
      </div>
    </div>
  )
}

