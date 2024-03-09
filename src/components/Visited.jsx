import uuid from "react-uuid";

const visited = [
    {title: "Недвижимость", link: "#", description: "о сталинках"},
    {title: "Маркет", link: "#", description: "люстры и светильники"},
    {title: "Авто.ру", link: "#", description: "привод 4x4 до 500 000"},
]

export const Visited = () => {
    return (
        <ul className="block-items">
            {visited.reverse().map( item => {
                return (
                    <li className="block-item" key={uuid}>
                        <a href={item.link}>
                            {item.title} - {item.description}
                        </a>
                    </li>
                )
            } )}
        </ul>
        
    )
}