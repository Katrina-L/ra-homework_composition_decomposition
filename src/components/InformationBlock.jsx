import { CommonBlocks } from "./CommonBlock";
import { WeatherInfo } from "./WeatherInfo";
import { Visited } from "./Visited";
import { GermanyMap } from "./GermanyMap";
import { TVProgramm } from "./TVProgramm";
import { Broadcast } from "./Broadcast";

//  Создает Информационный блок
export const InformationBlock = (title) => {
    return (
        <section className="information-block">
            <CommonBlocks title="Погода"><WeatherInfo /></CommonBlocks>
            <CommonBlocks title="Карта Германии"><GermanyMap /></CommonBlocks>
            <CommonBlocks title="Эфир"><Broadcast /></CommonBlocks>
            <CommonBlocks title="Посещаемые"><Visited /></CommonBlocks>
            <CommonBlocks title="Телепрограмма"><TVProgramm /></CommonBlocks>
        </section>
    )
}