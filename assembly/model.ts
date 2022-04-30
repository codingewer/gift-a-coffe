import { context, math, PersistentUnorderedMap, u128 } from "near-sdk-as";

export const coffes = new PersistentUnorderedMap<u32, Coffe>("todos");


@nearBindgen
export class Coffe {
    id: u32;
    message: string
    reciever: string;
    giftGivers: Array<string>;
    totalCoffe: u64;
    totalAmount:u128;

    constructor(message: string) {
        this.id = math.hash32<string>(message);
        this.message = message;
        this.giftGivers = [];
        this.totalCoffe = 0;
        this.totalAmount = context.attachedDeposit;
        this.reciever = context.sender;
    }

    static insert(message: string): Coffe {
        const coffe = new Coffe(message);
        coffes.set(coffe.id, coffe);
        return coffe;
    }

    static findById(id: u32): Coffe {
        return coffes.getSome(id);
    }

    static find(offset: u32, limit: u32): Coffe[] {
        return coffes.values(offset, offset + limit);
      }


    static findByIdAndGiftACoffe(id: u32): Coffe {

        const coffe = Coffe.findById(id);

        coffe.giftGivers.push(context.sender);
        coffe.totalAmount = u128.add(coffe.totalAmount, context.attachedDeposit)
        coffe.totalCoffe = coffe.totalCoffe + 1;
        assert(coffe.reciever != context.sender, 'You can not gift yourself  be a fox:) :(');
        coffes.set(id, coffe);
        return coffe;
    }

    static deleteById(id: u32): void {

        const coffe = this.findById(id);

        assert(coffe.reciever != context.sender, 'You can not delete this Coffe :(');
        coffes.delete(id);
    }

}