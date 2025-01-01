'use client'

export function PDFFooter() {
  return (
    <div className="bg-black text-white p-4 w-full absolute bottom-0">
      <div className="text-center">
        <p className="mb-2">© {new Date().getFullYear()} Mana&apos;o Pili LLC. All rights reserved.</p>
        <p className="text-gray-400 text-sm">
          This assessment report is confidential and intended solely for the use of the individual or entity to whom it is addressed.
        </p>
      </div>
    </div>
  )
}
