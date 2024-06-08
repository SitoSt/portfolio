import { IconProps } from '../interfaces'

export const Icon = ({ name, size }: IconProps) => {
    return (
        <img src={`/imgs/svg/${name}.svg`} alt={name} style={{ width: size }} />
    )
}