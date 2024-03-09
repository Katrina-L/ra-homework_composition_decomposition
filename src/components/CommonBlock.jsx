//  Создает компонент информационного блока
export const CommonBlocks = ({title, children}) => {
    return (
        <div className="common-block">
            <h3 className="block-name">{title}</h3>
            {children}
        </div>
        
    )
}