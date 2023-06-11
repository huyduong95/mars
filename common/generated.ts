import Slot from "../resources/model/slot";

class Generated {

    static path = "../resources/data/";
    static departingFileName = "departing.json"
    static returningFileName = "returning.json"

    static getDepartingListValue = (): Array<Slot> => {
        const lstDepartingList: Array<Slot> = require(this.path + this.departingFileName);
        return lstDepartingList;
    }

    static getReturningListValue = (): Array<Slot> => {
        const lstReturingList: Array<Slot> = require(this.path + this.returningFileName);
        return lstReturingList;
    }

    static getRandomDigit(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getRandomDigits(length: number): number[] {
        return Array.from({ length }, () => this.getRandomDigit(0, 9));
    }

    static generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
    }

    static getRandomPromotionalCode = () => {
        let discountPercentage: number = this.getRandomDigit(1, 9)
        const randomDigits = this.getRandomDigits(2);
        const calculatedDigit = (randomDigits[0] + randomDigits[1] + discountPercentage) % 10;
        const checkDigit = `${randomDigits.join('')}${calculatedDigit}`;
        const promotionalCode = `${this.generateRandomString(2)}${discountPercentage}-${this.generateRandomString(3)}-${checkDigit}`;
        return { promotionalCode, discountPercentage: discountPercentage * 10 };
    }

    // try to by-pass the able to apply TC
    static getAvailablePromotionalCode = () => {
        let discountPercentage: number = this.getRandomDigit(1, 3)
        const randomDigits = [this.getRandomDigit(1, 3), this.getRandomDigit(1, 3)]
        const calculatedDigit = (randomDigits[0] + randomDigits[1] + discountPercentage) % 10;
        const checkDigit = `${randomDigits.join('')}${calculatedDigit}`;
        const promotionalCode = `${this.generateRandomString(2)}${discountPercentage}-${this.generateRandomString(3)}-${checkDigit}`;
        return { promotionalCode, discountPercentage: discountPercentage * 10 };
    }

}

export default Generated