const lookYa = [
    {title: "Заголовок 1", description: "Описание 1", link: "#", src: ""},
    {title: "Заголовок 2", description: "Описание 2", link: "#", src: ""},
    {title: "Заголовок 3", description: "Описание 3", link: "#", src: ""},
];

export const LookAtYa = () => {
    const index = +Math.floor(Math.random() * lookYa.length);
    return (
        <div className="loolAtYa-block">
            <img className="loolAtYa-img" src={lookYa[index].src} />
            <h4 className="loolAtYa-title"><a href={lookYa[index].link}>{lookYa[index].title}</a></h4>
            <p className="loolAtYa-description">{lookYa[index].description}</p>
        </div>
    )
};