export class Specie {

    // Modelo para razas
    constructor(
        public name: string,
        public language: string,
        public classification: string,
        // tslint:disable-next-line: variable-name
        public average_height: string,
        public designation: string,
        // tslint:disable-next-line: variable-name
        public average_lifespan: string,
    ) {}
}
