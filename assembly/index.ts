import { Coffe} from "./model";
export function create(message: string): Coffe {
    return Coffe.insert(message);
}

export function gift(id: u32): Coffe {
    return Coffe.findByIdAndGiftACoffe(id);
}

export function getById(id: u32): Coffe {
    return Coffe.findById(id);
}

export function get(offset: u32, limit: u32): Coffe[] {
    return Coffe.find(offset, limit);
}

export function del(id: u32): void {
    Coffe.deleteById(id);
}
