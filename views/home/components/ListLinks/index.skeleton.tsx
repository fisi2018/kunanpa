export const ListLinksSkeleton = () => {
    return (
        <aside className="flex flex-col gap-4 w-full">
            <div className="rounded-md h-6 w-20 bg-gray-300 animate-pulse"></div>
            <ul className="flex flex-col gap-4">
                <li className="flex flex-col gap-4">
                    <ul className=" flex flex-col gap-4">
                        <li className="rounded-md h-4 w-28 bg-gray-300 animate-pulse"></li>
                        <li className="rounded-md h-4 w-28 bg-gray-300 animate-pulse"></li>
                        <li className="rounded-md h-4 w-28 bg-gray-300 animate-pulse"></li>
                        <li className="rounded-md h-4 w-28 bg-gray-300 animate-pulse"></li>
                        <li className="rounded-md h-4 w-28 bg-gray-300 animate-pulse"></li>
                    </ul>
                    <div className=" bg-gray-100 h-8 w-32 animate-pulse  rounded-lg"></div>
                </li>
            </ul>
        </aside>
    )
}
