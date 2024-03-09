const bunner = {
    img: "https://www.some-img.com",
    link: "#"
};

// Отображение банера
export const Bunner = () => {
    return (
        <div className="bunner">
            <a className="bunner-link" href={bunner.link}>
                <img className="bunner-img" src={bunner.img} alt="bunner" />
            </a>
        </div>
    )
}