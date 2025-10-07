export interface Artist {
    id: number;
    name: string;
}

export interface Album {
    id: number;
    title: string;
}

export interface Track {
    id: number;
    title: string;
    duration: number;
    createdAt: string;
    updatedAt: string;
    fileId: number;
    artists: Artist[];
    albums: Album[];
}

export interface TracksResponse {
    tracks: Track[];
}