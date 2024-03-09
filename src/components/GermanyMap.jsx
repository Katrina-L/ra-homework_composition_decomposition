import uuid from "react-uuid";

const germanyMap = [
    {title: "расписание", link: "#"}
];

//  Создает блок Карта Германии
export const GermanyMap = () => {
    return (
        <ul className="block-items">
            {germanyMap.map( item => {
                return (
                    <li className="block-item" key={uuid}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                )
            } )}
        </ul>
    )
}
