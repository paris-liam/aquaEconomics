import { Service, ServiceCategory } from "@/lib/types";

export default function ServiceList({ serviceList, highlightedService }: { serviceList: ServiceCategory[]; highlightedService: string }) {
    const scrollToSection = (title: string) => {
        const formattedAnchor = title.split(' ').join('-');
        const section = document.getElementById(formattedAnchor);
        section?.scrollIntoView()
    }
    return (
        <div className="list-container">
            {serviceList && serviceList.map(({ title, anchor, services }) => (
                <ul key={`${title} list item`} className="max-w-max	">
                    <li className={` p-1 font-bold border border-aqua-green ${highlightedService === anchor ? 'bg-aqua-green text-white': 'bg-none text-aqua-green'}`}><button onClick={()=>{scrollToSection(title)}}><h2 >{title}</h2></button></li>
                    {
                        services && services.map((service: Service) => (
                            <li key={`${service.title} list item`} className={`font-bold ${highlightedService === service.anchor ? 'bg-aqua-blue text-white': 'bg-none text-aqua-blue'}`}><button onClick={()=>{scrollToSection(service.title)}}><h3 key={`${service.title}`}>{service.title}</h3></button></li>
                        ))
                    }
                </ul>))}
        </div>
    )
}