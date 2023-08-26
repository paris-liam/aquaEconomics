import { Service, ServiceCategory } from "@/lib/types";

export default function ServiceList({ serviceList, highlightedService }: { serviceList: ServiceCategory[]; highlightedService: string }) {
    const scrollToSection = (title: string) => {
        const formattedAnchor = title.split(' ').join('-');
        const section = document.getElementById(formattedAnchor);
        section?.scrollIntoView()
    }
    return (
        <div className="list-container pr-5 border-r-2 w-full h-full">
            {serviceList && serviceList.map(({ title, anchor, services }) => (<>
                <button className={` p-1 my-3 text-lg font-bold border border-aqua-green hover:bg-aqua-green hover:text-white ${highlightedService === anchor ? 'bg-aqua-green text-white': 'bg-none text-aqua-green'}`} onClick={()=>{scrollToSection(title)}}><h2 >{title}</h2></button>
                <ul key={`${title} list-item `} className="list-disc text-aqua-blue mx-3">
                    {
                        services && services.map((service: Service) => (
                            <li key={`${service.title} list item`} className="group" ><button className="w-full" onClick={()=>{scrollToSection(service.title)}}><h3 className={` max-w-max p-1 text-left font-bold group-hover:bg-aqua-blue group-hover:text-white ${highlightedService === service.anchor ? 'bg-aqua-blue text-white': 'bg-none text-aqua-blue'}`} key={`${service.title}`}>{service.title}</h3></button></li>
                        ))
                    }
                </ul></>))}
        </div>
    )
}