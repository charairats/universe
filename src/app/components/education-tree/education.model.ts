export interface Education {
    degree: string;
    institution: string;
    duration: string;
}

export type TimelineItem = {
    key: string;
    edu: Education;
    sizeClass: string;
    borderClass: string;
    glowClass: string;
};
