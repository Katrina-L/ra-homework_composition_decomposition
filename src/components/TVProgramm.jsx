import uuid from "react-uuid";

const tvProgramm = [
    {time: "02:00", title: "ТНТ. Best", channel: "ТНТ"},
    {time: "02:15", title: "Джинглики", channel: "Карусель"},
    {time: "02:25", title: "Наедине со всеми", channel: "Первый"},
];

//  Создает блок программы передач
export const TVProgramm = () => {
    return (
        <ul className="block-items">
            {tvProgramm.map( item => {
                return (
                    <li className="block-item" key={uuid}>{item.time} {item.title} {item.channel}</li>                    
                )
            } )}
        </ul>
    )
}