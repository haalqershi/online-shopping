
export interface AuthResponse{
    email: string;
    idToken: string;
    refreshToken: string;
    expiresIn: number;
    localId: string;
    kind: string;
}