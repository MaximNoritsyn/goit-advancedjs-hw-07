
class Key {
    private signature: string;

    constructor() {
        this.signature = Math.random().toString(36);
    }

    getSignature() {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    getKey() {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[];

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('Person came in');
        } else {
            console.log('The door is closed');
        }
    }

    abstract openDoor(key: Key): void;

}

class MyHouse extends House {
    constructor(key: Key) {
        super();
        this.door = false;
        this.key = key;
        this.tenants = [];
    }

    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('The door is open');
        } else {
            console.log('The key does not fit');
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};