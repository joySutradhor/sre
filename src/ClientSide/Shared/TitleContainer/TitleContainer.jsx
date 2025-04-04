/* eslint-disable react/prop-types */
const TitleContainer = ({ title, className, handler = () => {} }) => {
    return (
        <p className={`${className}`} onClick={handler}>
            {title}
        </p>
    )
}

export default TitleContainer
