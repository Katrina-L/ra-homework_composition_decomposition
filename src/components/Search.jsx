const quickLinkSearch = [
    {name: "Видео", link: "#"},
    {name: "Картинки", link: "#"},
    {name: "Новости", link: "#"},
    {name: "Карты", link: "#"},
    {name: "Маркет", link: "#"},
    {name: "Переводчик", link: "#"},
    {name: "Эфир", link: "#"},
    {name: "ещё", link: "#"},
];

//  Отрисовка меню и поискового поля с кнопкой
export const YandexSearch = () => {
    return (
        <div className="block-yandex">
            <ul className="quick-link-search">
                {quickLinkSearch.map( item => {
                    return (
                        <li className="quick-link-search_item" key={item.name}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    )
                } )}
            </ul>
            <div className="yandex-search">
                <img className="logo" src="../img/yandex.png" alt="" />
                <label className="yandex-search-block">
                    <input className="input-field" type="text" />
                    <button className="search-btn" type="button">Найти</button>
                </label>            
            </div>
        </div>
    )
}