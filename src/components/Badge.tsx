import './css/badge.css'
import { BadgeProps } from '../interfaces'
import { Icon } from './Icon'

export const Badge = ({ text, icon }: BadgeProps) => {
    return (
        <div className='badge-container'>
            {icon &&
                <Icon name={icon} size={20} />
            }
            <p className='badge-text' >
                {text}
            </p>
        </div>
    )
}