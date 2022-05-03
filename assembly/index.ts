import { Coffe} from "./model"; // import coffe structure in the model file 

//functions to call processes
export function create(message: string): Coffe {
    return Coffe.insert(message);
}

export function gift(id: u32): Coffe {
    return Coffe.findByIdAndGiftACoffe(id);
}

export function getById(id: u32): Coffe {
    return Coffe.findById(id);
}

export function get(offset: u32, limit: u32): Coffe[]  { // the value it should return
    return Coffe.find(offset, limit); // return Coffe[]
}

export function del(id: u32): void {
    Coffe.deleteById(id); //returns nothing here
}
