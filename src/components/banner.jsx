import { ExternalLink } from "lucide-react"

export const Banner = () => {
    return <div className="relative w-full h-[300px] md:h-[400px] z-50">
        <img
            src="/banner-house.jpg"
            alt="banner"
            className="object-cover w-full h-full z-50"
        />
        <button className="hover:bg-blue-500 hover:border-transparent text-md font-normal transition-all border-2 border-white py-2 px-4 backdrop-blur-lg text-sm text-white rounded-full absolute flex items-center gap-4 bottom-8 left-8">
            <p>Why Choose Us?</p> <ExternalLink className="h-4 w-4" />
        </button>
    </div>
}