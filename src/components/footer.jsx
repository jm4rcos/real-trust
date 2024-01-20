const footerOpt = [
    { label: "Media", content: ["Facebook", "Linked In", "X (Twitter)"] },
    { label: "About Us", content: ["Who we are?", "Projects", "Pricing"] },
    { label: "Contact", content: ["(055) 099 44 33"] },
]

export const Footer = () => {
    return (
        <div className="gap-4 bg-slate-900 px-4 md:px-8 text-white py-8 flex md:items-start items-center md:flex-row flex-col justify-between w-full">
            <p className="font-semibold text-lg">Real Trust</p>
            <div className="flex gap-4">
                {footerOpt.map((opt) => (
                    <div key={opt.label} className="flex flex-col items-center">
                        <p className="text-md text-slate-100">{opt.label}</p>
                        <ul className="mt-2 flex flex-col justify-center items-center">
                            {opt.content.map((c) => (
                                <li key={c} className="cursor-pointer hover:text-blue-500 text-slate-300 text-sm font-normal ">{c}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}