import { Typography } from '@material-tailwind/react'

export default function TableHead() {
    return (
        <thead>
            <tr className="text-sm bg-gray-100 text-gray-800 2xl:text-lg dark:text-gray-400 dark:divide-gray-600 font-semibold divide-x">
                <th className="py-4 px-2">
                    <Typography
                        className="uppercase text-gray-500"
                        variant="h6"
                    >
                        ID
                    </Typography>
                </th>
                <th className="py-4 px-2">
                    <Typography
                        className="uppercase text-gray-500 "
                        variant="h6"
                    >
                        PEDIDO
                    </Typography>
                </th>
                <th className="py-4 px-2">
                    <Typography
                        className="uppercase text-gray-500"
                        variant="h6"
                    >
                        ESTADO
                    </Typography>
                </th>
                <th className="py-4 px-2">
                    <Typography
                        className="uppercase text-gray-500"
                        variant="h6"
                    >
                        Fecha
                    </Typography>
                </th>
                <th className="py-4 px-2">
                    <Typography
                        className="uppercase text-gray-500"
                        variant="h6"
                    >
                        Total
                    </Typography>
                </th>
                <th className="py-4 px-2">
                    <Typography
                        className="uppercase text-gray-500"
                        variant="h6"
                    >
                        Acciones
                    </Typography>
                </th>
            </tr>
        </thead>
    )
}
