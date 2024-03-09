import { CommonBlocks } from "./CommonBlock";
import { News } from "./News";
import { LookAtYa } from "./LookAtYandex";

//  Создает новостной блок в верхней части экрана
export const Newsblock = (title) => {
    return (
        <section className="common-news-block">
            {<CommonBlocks title="Сегодня в СМИ"><News /></CommonBlocks> ||
            <CommonBlocks title="в Германии"><News /></CommonBlocks> ||
            <CommonBlocks title="Рекомендуем"><News /></CommonBlocks>}
            <CommonBlocks><LookAtYa /></CommonBlocks>
        </section>
    )
}