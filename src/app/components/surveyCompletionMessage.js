'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"

export default function SurveyCompletionMessage() {
    const [open, setOpen] = useState(true)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Thank You</DialogTitle>
                    <DialogDescription>
                        Thank you for considering Mana’o Pili.Your survey results will be sent to your email within 48 hours.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}