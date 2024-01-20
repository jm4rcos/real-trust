export const Header = () => {
    return (
        <div className="md:gap-x-2 gap-4 md:px-8 px-4 w-full flex lg:flex-row flex-col lg:py-14 py-8 md:justify-between justify-start">
            <p className="lg:text-5xl text-4xl lg:max-w-[60%] max-w-full">
                Maximizing Your Home's Value,
                Exceeding Expectations.
            </p>

            <div className="text-sm flex flex-col text-neutral-500 md:border-0 lg:border-l-4 pl-2 border-slate-200">
                <p>Not your Average Realtor</p>
                <p>Real Trust has an eye for seeing a property's potential,</p>
                <p>coordinating design, and efectively</p>
                <p>marketing to get homeowners top dollar on their sale.</p>
            </div>
        </div>
    )
}