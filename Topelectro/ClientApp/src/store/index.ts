import * as Interfaces from './interfaces'
import * as Product from './reducers/Product'
import * as Category from './reducers/Category'
import * as Vacancy from './reducers/Vacancy'

// The top-level state object
export interface ApplicationState {
    products: Interfaces.ProductState | undefined,
    categories:Interfaces.CategoryState | undefined,
    vacancies: Interfaces.VacancyState | undefined
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    products: Product.reducer,
    categories: Category.reducer,
    vacancies: Vacancy.reducer,
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
