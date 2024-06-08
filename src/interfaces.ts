export interface ProjectModel {
    name: string;
    imgUrl: string;
    resumen: string[];
    url?: string;
    skillsImgUrl: string[];
    GitHubUrl?: string;
}

export interface IconProps {
    name: string
    size: number
}

export interface BadgeProps {
    text: string
    icon?: string
}