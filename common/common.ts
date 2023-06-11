class CommonUtil {

  static formatString = (str: string, ...val: string[]) => {
    for (let index = 0; index < val.length; index++) {
      do {
        str = str.replace(`{${index}}`, val[index]);
      } while (str.includes(`{${index}}`))
    }
    return str;
  }

  static getRandomDate = (from: Date, to: Date) => {
    const fromTime = from.getTime()
    const toTime = to.getTime()
    return new Date(fromTime + Math.random() * (toTime - fromTime))
  }

  static getRandomBirthDate = () => {
    const fromTime = new Date('01/01/1950').getTime()
    const toTime = new Date('01/12/2005').getTime()
    return new Date(fromTime + Math.random() * (toTime - fromTime));
  }

  static getRandomNumber = (maxNumber: number) => {
    return Math.floor(Math.random() * (maxNumber));
  }

  static getListRandomNumber = (maxNumber: number) => {
    let listRandomNumber: Array<number> = new Array<number>();
    const totalListRandom = Math.floor(Math.random() * (maxNumber));
    while (listRandomNumber.length <= totalListRandom) {
      listRandomNumber.push(Math.floor(Math.random() * (maxNumber)));
      listRandomNumber = listRandomNumber.filter((value, index) => listRandomNumber.indexOf(value) === index);
    }
    return listRandomNumber;
  }

  static convertISODate = (isoDate: string) => {
    const dateObj = new Date(isoDate);
    return `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getDate().toString().padStart(2, '0')}`;
  }

  static convertToISODate = (date: any) => {
    const dateObj = new Date(date);
    return dateObj.toISOString();
  }


  static convertTimeStringToTimestamp(timeString: string) {
    return Date.parse(timeString);
  }

  static splitName(fullName: string): [string, string] {
    const parts = fullName.trim().split(/\s+/);
    const lastName = parts.pop();
    const firstName = parts.join(' ') || '';
    return [firstName, lastName || ''];
  }

  static isValidTime(timeStr: string): boolean {
    const timeRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})([+-]\d{2}):(\d{2})$/;
    return timeRegex.test(timeStr.trim());
  }

  static getNumberFromString(text: string): number {
    return parseInt(text.replace(/\D/g, ""));
  }

  static splitDateToDayMonthYear(formatDate: Date) {
    if (!formatDate) {
      return { day: '', month: '', year: '' };
    }
    const day = formatDate.getDay() + 1;
    const month = formatDate.getMonth() + 1;
    const year = formatDate.getFullYear();
    return { day: day, month: month, year: year };
  }

}

export default CommonUtil