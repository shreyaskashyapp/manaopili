'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SurveyCompletionMessage() {
    const [open, setOpen] = useState(true)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-xl sm:rounded-2xl mx-auto border border-black bg-gradient-to-br from-[#141414] to-black backdrop-blur-sm shadow-2xl h-auto">
                <div className="flex flex-col items-center text-center space-y-6 py-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-700/10 border border-[#455CFF]">
                        <CheckCircle className="w-8 h-8 text-[#455CFF]" />
                    </div>
                    <DialogTitle className="text-[#455CFF] font-semibold text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight">
                        Form Submitted Successfully
                    </DialogTitle>
                    <DialogDescription className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto px-2">
                        Thank you for considering Mana&apos;o Pili. Survey results are typically shared via email within 48 hours of submission.
                    </DialogDescription>
                </div>
                <DialogFooter className="pt-4 border-t border-zinc-700">
                    <Link href="/survey-list">
                        <Button
                            type="button"
                            className="w-full sm:w-auto min-w-[120px] bg-zinc-800 hover:bg-[#455CFF] border border-black text-gray-100 transition-colors duration-200"
                        >
                            Close
                        </Button>
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}