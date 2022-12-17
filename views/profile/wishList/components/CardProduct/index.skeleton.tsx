export const CardProductSkeleton = () => {
    return (
        <div className="grid grid-cols-3 w-1/2 animate-pulse gap-4 ">
            <div className="bg-gray-200 rounded-lg w-full h-60"></div>
            <div className="flex flex-col justify-around ">
                <div className="w-full h-4 rounded-lg bg-blue-gray-200 "></div>
                <div className="w-full h-4 rounded-lg bg-blue-gray-200 "></div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-full h-16 rounded-lg bg-blue-gray-300"></div>
            </div>
        </div>
    )
}
