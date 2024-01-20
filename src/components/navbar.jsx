import { MobileMenu } from "./mobile-menu"

const navbarOptions = ["Services", "About", "Projects", "Testimonials"]

export const Navbar = () => {
    return (
        <div className="bg-white flex justify-between py-4 px-4 md:px-8 items-center">
            <p className="text-neutral-800 font-semibold text-lg">Real Trust</p>
            <MobileMenu data={navbarOptions} />
            <ul className="md:flex gap-6 hidden">
                {navbarOptions.map((o) => (
                    <li key={o} className={`
                        text-sm
                        font-semibold
                        cursor-pointer
                        text-neutral-500
                        hover:text-blue-500 transition-all
                    `} >
                        {o}
                    </li>
                ))}
            </ul>

            <button
                className="
                    hidden
                    md:block
                    text-sm
                    border-2
                    outline-none
                    px-4
                    py-1
                    rounded-full
                    border-solid
                    border-neutral-800
                    hover:bg-blue-500
                    hover:border-transparent
                    hover:text-white
                    transition-all
                    bg-white text-neutral-800 font-normal
            ">
                Contact
            </button>
        </div >
    )
}