'use client'

import { PDFHeader } from './pdf-header'
import { PDFFooter } from './pdf-footer'

export default function PdfWrapper({ children }) {
  return (
    <div className="bg-white">
      <PDFHeader />
      <div className="p-6">
        {children}
      </div>
      <PDFFooter />
    </div>
  )
}

