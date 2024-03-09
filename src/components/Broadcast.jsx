import uuid from "react-uuid";

const broadcast = [
    {title: "Управление как искусство", channel: "Успех"},
    {title: "Ночь. Мир в это время", channel: "earthTV"},
    {title: "Андрей Вознесенский", channel: "Совершенно секретно"},
];

//  Создает блок эфирного вещания
export const Broadcast = () => {
    return (
        <ul className="block-items">
            {broadcast.map( item => {
                return (
                    <li className="block-item" key={uuid}>{item.title} {item.channel}</li>
                )
            } )}
        </ul>
    )
}