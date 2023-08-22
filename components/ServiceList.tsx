import { Service, ServiceCategory } from "@/lib/types";

export default function ServiceList({ serviceList, highlightedService }: { serviceList: ServiceCategory[]; highlightedService: string }) {
    const scrollToSection = (title: string) => {
        const formattedAnchor = '#'+title.split(' ').join('-');
        const section = document.getElementById(formattedAnchor);
        section?.scrollIntoView()
    }
    return (
        <div className="absolute top-0 left-0 right-0 list-container">
            {serviceList && serviceList.map(({ title, anchor, services }) => (
                <ul key={`${title} list item`}>
                    <li className={`${highlightedService === anchor ? 'text-fuchsia-400 ': ''}`}><button onClick={()=>{scrollToSection(title)}}><h2 >{title}</h2></button></li>
                    {
                        services && services.map((service: Service) => (
                            <li key={`${service.title} list item`} className={`${highlightedService === service.anchor ? 'text-fuchsia-400 ': ''}`}><button onClick={()=>{scrollToSection(service.title)}}><h3 key={`${service.title}`}>{service.title}</h3></button></li>
                        ))
                    }
                </ul>))}
        </div>
    )
}