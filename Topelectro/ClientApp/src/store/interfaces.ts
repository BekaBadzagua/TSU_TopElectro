export interface Product {
    Id: number;
    Name: string;
    Price: number;
    SQ: string;
    Colors: string;
    Materials: string;
    MoreInfo: string;
    Picture: string;
    Date: string;
}

export interface ProductState {
    list: Product[] | undefined
    latest: Product[] | undefined
    isLoading: boolean
    error: any
}

export interface Category {
    Id: number
    Name: string
    Description: string
    Descriptor: string
    Picture: string
}
export interface ShortCategory {
    Id: number
    Name: string
}


export interface CategoryState {
    list: Category[] | undefined
    shortList: ShortCategory[] | undefined
    isLoading: boolean
    error: any
}

export interface Vacancy {
    Id: number
    Date: string;
    Position: string;
    location: string;
    EmploymentForm: string;
    WorkHours: string;
    RestPeriod: string;
    Salary: string;
    Description: string;
    DetailedDescription: string;
}
export interface VacancyState {
    list: Vacancy[] | undefined
    isLoading: boolean
    error: any
}