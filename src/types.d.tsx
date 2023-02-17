export declare module charactersNamespace {

    export interface Origin {
        name: string;
        url: string;
    }

    export interface Location {
        name: string;
        url: string;
    }

    export interface iCharacters {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: Origin;
        location: Location;
        image: string;
        episode: string[];
        url: string;
        created: Date;
    }

}

export declare module detailNamespace {

    export interface Origin {
        name: string;
        url: string;
    }

    export interface Location {
        name: string;
        url: string;
    }

    export interface iDetails {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: Origin;
        location: Location;
        image: string;
        episode: string[];
        url: string;
        created: Date;
    }

}