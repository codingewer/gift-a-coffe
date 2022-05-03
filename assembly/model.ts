import { context, math, PersistentUnorderedMap, u128 } from "near-sdk-as";

export const coffes = new PersistentUnorderedMap<u32, Coffe>("todos");


//we created a coffee class here
@nearBindgen
export class Coffe {
    id: u32;
    message: string
    reciever: string;
    giftGivers: Array<string>;
    totalCoffe: u64;
    totalAmount:u128;

    //here we have created a constructor that only takes the message variable.
    constructor(message: string) {
        this.id = math.hash32<string>(message); //we hash the id by message
        this.message = message; //define message as entered data
        this.giftGivers = [];// initial value
        this.totalCoffe = 0;//initial value
        this.reciever = context.sender; //we defined the receiver
    }
    
    //process to create a new coffee request
    static insert(message: string): Coffe {
        const coffe = new Coffe(message); // create new coffe  request 
        coffes.set(coffe.id, coffe); //save coffe request
        return coffe;
    }
    
    //process to find by id
    static findById(id: u32): Coffe {
        return coffes.getSome(id); //find coffe by id
    }

    //process that calls coffee requests taking into account the initial value and the limit
    static find(offset: u32, limit: u32): Coffe[] {
        return coffes.values(offset, offset + limit); // get coffe requests
      }


    //The process that finds the coffee request and makes donations
    static findByIdAndGiftACoffe(id: u32): Coffe {
        const coffe = Coffe.findById(id); // get by id
        coffe.giftGivers.push(context.sender); //add the sender to gift givers
        coffe.totalAmount = u128.add(coffe.totalAmount, context.attachedDeposit) //receive donation
        coffe.totalCoffe = coffe.totalCoffe + 1; //add 1 to the number of coffee givers
        assert(coffe.reciever != context.sender, 'You can not gift yourself  be a fox:) :(');//verify that the request is not its own
        coffes.set(id, coffe); // update to last status
        return coffe;
    }
 //process that finds and deletes by id
    static deleteById(id: u32): void {

        const coffe = this.findById(id); //find by id

        assert(coffe.reciever != context.sender, 'You can not delete this Coffe :('); //verify ownership
        coffes.delete(id); // delete coffe request
    }

}
