export const CardProductSkeleton = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col gap-4">
            <div className="bg-gray-100 h-40 w-full animate-pulse rounded-lg"></div>
            <div className="flex flex-col gap-2">
                <div className="bg-gray-100 h-4 w-40 animate-pulse rounded-lg"></div>
                <div className="bg-gray-100 h-4 w-40 animate-pulse rounded-lg"></div>
                <div className="bg-gray-100 h-4 w-40 animate-pulse rounded-lg"></div>
                <div className="bg-gray-100 h-4 w-40 animate-pulse rounded-lg"></div>
                <div className="bg-gray-100 h-4 w-40 animate-pulse rounded-lg"></div>
            </div>
        </div>
    )
}
