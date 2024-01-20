import { ProjectItem } from "./project-item"

const items = [
    { image: '/house.jpeg', label: 'House for Resale', content: 'This property, ideal for resale, boasts an initial investment of R$ 200,000 with a projected resale value of R$ 250,000, yielding a potential ROI of 25%. The house features a renovated exterior, a well-lit and modern interior, and unique amenities, making it a lucrative option for investors.' },
    { image: '/apartment.jpeg', label: 'Short-Term Rental Apartment', content: 'An excellent opportunity for short-term rental, this apartment requires an initial investment of R$ 150,000. With an estimated monthly rental income of R$ 2,000, the potential ROI stands at 16.67%. The apartment offers a well-decorated, furnished interior and attractive amenities.' },
    { image: '/beach.jpeg', label: 'Residential Development Beach House', content: 'Situated as a beachfront property, this residence requires an initial investment of R$ 300,000. The estimated value after development is R$ 500,000, resulting in a substantial potential ROI of 66.67%. The beach house features a charming exterior, a coastal-themed interior.' },
]

export const Project = () => {
    return (
        <div className="flex flex-col justify-center w-full">
            <div className="md:px-20 px-10 py-8">
                <p className="text-neutral-800 font-semibold text-md">
                    Fifteen years of experience in real estate, excellent customer service and a commitment to work hard, listen and follow through.
                    <span className="text-neutral-500 font-normal text-md ml-2">
                        We provide quality service to build relatioships with clients and, more importantly, maintain those relationships by communicating effectively.
                    </span>
                </p>
            </div>

            <div className="md:px-8 px-4 py-8 gap-4 bg-slate-900 flex flex-col items-center">
                <p className="w-full md:text-left text-center text-white lg:text-lg text-xl">Projects</p>
                <div className="mt-8 md:place-items-baseline place-items-center grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {items.map((i) => (
                        <ProjectItem key={i.label} data={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}