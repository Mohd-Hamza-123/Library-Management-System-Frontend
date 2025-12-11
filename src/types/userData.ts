export type UserData = {
    name: string;
    readonly email: string;
    readonly id: string;
    readonly emailVerified: boolean;
    createdAt : string;
    updatedAt : string;
    readonly role : string;
    readonly phoneNo? : number;
    image? : string;
}