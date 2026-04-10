export interface CarModel {
    id: string;
    marca: string;
    modelo: string;
    slugMarca: string;
    slugModelo: string;
    tipo: string; // Sedán, Hatchback, SUV, Pick-up
    precioMensualEstimado: number; // en COP
    imagenReferencia: string;
}

export const colombiaTopCars: CarModel[] = [
    {
        id: "chevrolet-onix",
        marca: "Chevrolet",
        modelo: "Onix",
        slugMarca: "chevrolet",
        slugModelo: "onix",
        tipo: "Sedán/Hatchback",
        precioMensualEstimado: 145000,
        imagenReferencia: "/images/blog/cover_auto.png", // Usaremos un placeholder seguro por ahora
    },
    {
        id: "renault-duster",
        marca: "Renault",
        modelo: "Duster",
        slugMarca: "renault",
        slugModelo: "duster",
        tipo: "SUV",
        precioMensualEstimado: 185000,
        imagenReferencia: "/images/blog/cover_auto.png",
    },
    {
        id: "mazda-cx-30",
        marca: "Mazda",
        modelo: "CX-30",
        slugMarca: "mazda",
        slugModelo: "cx-30",
        tipo: "SUV",
        precioMensualEstimado: 220000,
        imagenReferencia: "/images/blog/cover_auto.png",
    },
    {
        id: "kia-picanto",
        marca: "Kia",
        modelo: "Picanto",
        slugMarca: "kia",
        slugModelo: "picanto",
        tipo: "Hatchback",
        precioMensualEstimado: 120000,
        imagenReferencia: "/images/blog/cover_auto.png",
    },
    {
        id: "toyota-hilux",
        marca: "Toyota",
        modelo: "Hilux",
        slugMarca: "toyota",
        slugModelo: "hilux",
        tipo: "Pick-up",
        precioMensualEstimado: 310000,
        imagenReferencia: "/images/blog/cover_auto.png",
    },
    {
        id: "suzuki-swift",
        marca: "Suzuki",
        modelo: "Swift",
        slugMarca: "suzuki",
        slugModelo: "swift",
        tipo: "Hatchback",
        precioMensualEstimado: 125000,
        imagenReferencia: "/images/blog/cover_auto.png",
    },
    {
        id: "chevrolet-tracker",
        marca: "Chevrolet",
        modelo: "Tracker",
        slugMarca: "chevrolet",
        slugModelo: "tracker",
        tipo: "SUV",
        precioMensualEstimado: 175000,
        imagenReferencia: "/images/blog/cover_auto.png",
    },
    {
        id: "renault-stepway",
        marca: "Renault",
        modelo: "Stepway",
        slugMarca: "renault",
        slugModelo: "stepway",
        tipo: "Crossover",
        precioMensualEstimado: 140000,
        imagenReferencia: "/images/blog/cover_auto.png",
    },
    {
        id: "mazda-2",
        marca: "Mazda",
        modelo: "2",
        slugMarca: "mazda",
        slugModelo: "2",
        tipo: "Sedán/Hatchback",
        precioMensualEstimado: 160000,
        imagenReferencia: "/images/blog/cover_auto.png",
    },
    {
        id: "nissan-frontier",
        marca: "Nissan",
        modelo: "Frontier",
        slugMarca: "nissan",
        slugModelo: "frontier",
        tipo: "Pick-up",
        precioMensualEstimado: 295000,
        imagenReferencia: "/images/blog/cover_auto.png",
    }
];

export function getCarBySlugs(brandSlug: string, modelSlug: string): CarModel | undefined {
    return colombiaTopCars.find(
        (car) => car.slugMarca === brandSlug && car.slugModelo === modelSlug
    );
}

export function getAllCarSlugs() {
    return colombiaTopCars.map((car) => ({
        marca: car.slugMarca,
        modelo: car.slugModelo,
    }));
}
