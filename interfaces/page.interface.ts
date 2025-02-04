export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export interface Advantage {
    _id: string;
    title: string;
    description: string;
}

export interface HhDate {
    _id: string;
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updateAt: Date;
}

export interface TopPageModel {
    tags: string[];
    _id: string;
    secondCategory: string
    alias: string;
    title: string;
    category: string;
    seoText: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: number;
    advantages: Advantage[];
    createdAt: Date;
    updatedAt: Date;
    hh: HhDate;
}
