import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
export default function Founders({team}){
    return(
        <div className="flex flex-col md:flex-row items-center justify-center gap-24 py-10">
                    {team.map((member, index) => (
                        <Card className="flex flex-col items-center bg-zinc-900  shadow-lg border-none " key={index}>
                            <CardContent className=" relative h-64 w-72 rounded-t-lg">
                                <Image src={member.imagePath} alt="Image Description" fill className="rounded-t-lg" />
                            </CardContent>
                            <CardHeader className="flex flex-col items-center">
                                <CardTitle className="text-gray-200 text-lg">{member.name}</CardTitle>
                                {member.titles.map((title, index) => (
                                    <CardDescription key={index} className="text-[#deff00]">{title}</CardDescription>
                                ))}
                            </CardHeader>
                        </Card>
                    ))}
                </div>
    )
}