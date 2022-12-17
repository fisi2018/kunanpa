export const ProductDetailsSectionSkeleton = () => {
    return (
        <div className="flex gap-4 pt-4">
            <div className="bg-gray-100 w-[600px] h-[600px] animate-pulse rounded-lg"></div>
            <div className="flex flex-col gap-2">
                <div className="bg-gray-100 h-12 w-40 animate-pulse rounded-lg"></div>
                <div className="bg-gray-100 h-4 w-72 animate-pulse rounded-lg"></div>
                <div className="bg-gray-100 h-4 w-72 animate-pulse rounded-lg"></div>
                <div className="bg-gray-100 h-4 w-72 animate-pulse rounded-lg"></div>
                <div className="bg-gray-100 h-4 w-72 animate-pulse rounded-lg"></div>
            </div>
        </div>
    )
}
