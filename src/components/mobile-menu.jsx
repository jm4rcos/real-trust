import { Menu, X } from "lucide-react"
import { useState } from "react"

export const MobileMenu = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="block md:hidden">
            {!isOpen ?
                (<Menu onClick={() => setIsOpen(true)} className="h-6 w-6 cursor-pointer text-slate-900" />)
                :
                (<X onClick={() => setIsOpen(false)} className="h-6 w-6 cursor-pointer text-slate-900" />)}
            {isOpen && (
                <div className="backdrop-blur-md absolute flex flex-col gap-4  items-center w-full pb-8 max-h-[250px] z-100 bg-transparent left-0">
                    {data.map((i) => (
                        <p key={i} className="hover:text-blue-500 transition-all text-lg cursor-pointer">{i}</p>
                    ))}
                </div>
            )}
        </div>
    )
}