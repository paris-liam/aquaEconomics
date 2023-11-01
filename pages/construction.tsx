import { Header } from "@/components/header";
import { Logo } from "@/lib/svgs/Logo";




export default function Construction() {

    return (
        <div className="font-bold text-3xl w-full h-75vh flex flex-col m-auto justify-center items-center gap-6">
            <Logo className='mb-4 w-80 h-36'></Logo>
            <h1 className="text-5xl mb-3">In the planning and design phase </h1>
            <h2>Coming Soon</h2>
            <h2 className="text-aqua-green underline hover:text-aqua-blue"><a href='mailto:info@aquaeconomics.com'>info@aquaeconomics.com</a></h2>
        </div>
    )
} 