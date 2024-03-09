import uuid from "react-uuid";

const news = [
    {description: "Новость 1", src: "", link: "#"},
    {description: "Новость 2", src: "", link: "#"},
    {description: "Новость 3", src: "", link: "#"},
    {description: "Новость 4", src: "", link: "#"},
    {description: "Новость 5", src: "", link: "#"},
    {description: "Новость 6", src: "", link: "#"},
    {description: "Новость 7", src: "", link: "#"},
];

const currentcy = [
    {curr: "USD MOEX", value: "64,55"},
    {curr: "EUR MOEX", value: "70,86"},
    {curr: "НЕФТЬ", value: "64,90"},
];

// Создает блок новостей
export const News = () => {
    return (
        <div className="news-block">
            <ul className="news-block_items">
                {news.map( (item => {
                    return (
                        <li className="news-block_item" key={uuid}>{item.src}<a href={item.link}>{item.description}</a></li>
                    )
                }) )}
            </ul>
            <ul className="news-block_currency">
                {currentcy.map( item  => {
                    return (
                        <li className="news-block_currency-item">{item.curr} {item.value}</li>
                    )
                })}
            </ul>
        </div>
    )
}