export const ProjectItem = ({ data }) => {
    return (
        <div className="p-4 flex flex-col items-center bg-transparent rounded-md lg:max-w-[300px] md:max-w-full max-w-[350px] w-full">
            <img
                src={data.image}
                alt={data.label}
                className="object-cover rounded-md"
            />
            <p className=" text-slate-50 font-semibold mt-2 font-md ">{data.label}</p>
            <p className="text-slate-300 font-normal font-sm">{data.content}</p>
        </div>
    )
}