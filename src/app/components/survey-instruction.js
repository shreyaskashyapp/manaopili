'use client'
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { checkIfMobile } from "@/lib/utils"
import { CircleHelp } from "lucide-react"
import { useState } from "react"


export default function SurveyInstructions({ data }) {
    const [open, setOpen] = useState(true)

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className="flex gap-2 text-gray-300 border items-center border-zinc-800 rounded-full hover:bg-indigo-700/90 bg-[#141414] p-2 md:px-4 h-full">
                    {checkIfMobile()
                    ?
                     <CircleHelp/>
                     :
                     (
                        <>                            
                        Open instructions <CircleHelp/>
                        </>)}
                </DialogTrigger>
                <DialogContent className="container flex flex-col gap-2 p-2 px-4 mx-auto border border-zinc-800 bg-[#0a0a0a] overflow-y-auto h-auto max-h-full ">
                    <DialogTitle className="text-gray-100 md:max-w-2xl font-semibold max-w-sm sm:max-w-md text-xl md:text-2xl mx-auto text-center tracking-wide">
                        {data?.info?.title}
                    </DialogTitle> 
                    <DialogDescription className="text-gray-400 text-sm text-center">
                        {data?.info?.description}
                    </DialogDescription>

                    <div className="gap-2 flex flex-col ">
                        {
                            data?.scores?.map((item, index) => (
                                <div key={index} className="w-full h-full border border-zinc-800 hover:bg-indigo-700/10   bg-[#0a0a0a]  rounded-xl ">
                                    <div className="p-2">
                                        <h2 className="text-[#455CFF] text-lg font-normal">{item.level} - <span className="text-gray-300 text-lg">{item.title}</span></h2>
                                        <p className="text-gray-400 text-xs" >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col justify-center text-left gap-3">
                        <p className="text-gray-300 md:text-base text-sm ">
                            Provide seperate scores for:
                        </p>
                        <ul className="flex flex-col w-full gap-3 ">
                            {data?.bulletPoints?.map((item, index) => (
                                <li key={index} className="flex flex-1 text-gray-400 text-sm">
                                    <span className=" text-[#455CFF] text-normal">{item.title} </span> : {item.description}
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-300 text-sm  italic">
                            Leave blank if a module does not apply.
                        </p>
                    </div>
                    <DialogFooter className="flex items-center">
                        <DialogClose asChild>
                            <Button type="submit" className="border border-zinc-600 hover:bg-indigo-700/90">
                                Take survey
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}


    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                            {
                                data?.scores?.map((item, index) => (
                                    <div key={index} className="p-4 rounded-md border border-gray-700 hover:border-[#455CFF] transition-all duration-300 bg-[#1f1f1f]">
                                                <div className="flex items-center mb-2">
                                                    <div className="w-8 h-8 rounded-full bg-[#455CFF] flex items-center justify-center text-white font-bold mr-2">
                                                        {item.level}
                                                    </div>
                                                    <h3 className="font-medium text-white">{item.title}</h3>
                                                </div>
                                                <p className="text-gray-400 text-sm">{item.description}</p>
                                            </div>
                        ))
                        }
                    </div> */}