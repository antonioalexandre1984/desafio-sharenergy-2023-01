export interface User {
    picture: { large: string | undefined; };
    name: { first: string; last: string; };
    login: {
        username: string;
    };
    email: boolean;
    dob: { date: string; };
    location: { city: string; state: string; postcode: string; };
    phone: string;

}