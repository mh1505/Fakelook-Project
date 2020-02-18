export interface Post {
    //id: number;
    photo: string;
    latitude: number;
    longitude: number;
    text?: string;
    date: Date;
    userId: number;
}