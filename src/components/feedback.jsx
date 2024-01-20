import { ChevronRight } from "lucide-react"

const feedbacks = [
    { name: "Sarah Johnson", content: "Incredible team! We found our dream home with their help. Dedicated and attentive professionals.", bg: true },
    { name: "John Smith", content: "Total transparency! From start to finish, the experience was smooth. Highly recommended!" },
    { name: "Emily Davis", content: "Personalized service that makes a difference. They truly understood what we were looking for. We are very satisfied!" },
    { name: "Michael Anderson", content: "Efficiency and reliability! Closing the deal with them was easy and fast. We are extremely happy with our new property.", bg: true },
]

export const Feedback = () => {
    return (
        <div className="my-4 bg-white gap-4 w-full px-4 md:px-8 flex flex-col items-center">
            <p className="text-xl font-medium text-neutral-800">
                What our clients are saying about Real Trust
            </p>
            <div className="md:px-0 px-16 grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {feedbacks.map((f) => (
                    <div key={f.name} className={`border-2 border-slate-300 rounded-md flex flex-col justify-between gap-2 p-2 md:max-w-[220px] max-w-full ${f.bg ? 'bg-slate-100' : ''}`}>
                        <div>
                            <p className="text-md font-semibold text-neutral-800">
                                {f.name}
                            </p>
                            <p className="text-sm font-normal text-neutral-500">
                                {f.content}
                            </p>
                        </div>
                        <button className="flex items-center hover:ml-4 transition-all hover:text-blue-500 text-sm text-neutral-400">
                            <p>Learn more</p>
                            <ChevronRight className="mt-0.5 h-4 w-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}