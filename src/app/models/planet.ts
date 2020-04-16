export class Planet {

    // Modelo para las naves
    constructor(
        public name: string,
        // tslint:disable-next-line: variable-name
        public rotation_period: string,
        // tslint:disable-next-line: variable-name
        public orbital_period: string,
        public diameter: string,
        public climate: string,
        public gravity: string,
    ) {}
}
