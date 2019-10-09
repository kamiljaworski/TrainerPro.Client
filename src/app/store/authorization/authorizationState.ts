export interface AuthorizationState {
    loggedIn: boolean,
    token?: string | null,
    username: string | null
}