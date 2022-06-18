import { ReactNode } from "react";

export default function Layout({children}:{children?:ReactNode}){
    return(
        <section>
            <main>
                {children}
            </main>
        </section>
    )
}