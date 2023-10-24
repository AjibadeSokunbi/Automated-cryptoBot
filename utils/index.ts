
import { useCallback, useState } from 'react';
import ellipseNum from "./ellipseNum";
import { EntityData } from "./entityData3";

export const makeWalletAddress = (_str: string | null, start = 20, end = 4) => {
  if (_str && _str.length > 0) {
    const str_address =
      _str.substring(0, start) +
      "..." +
      _str.substring(_str.length - end, _str.length);
    return str_address;
  } else {
    return " "; // Return a default value or a message when the input is null or empty
  }
};


export function hasDateExpired(validUntil: string): boolean {
  const currentDate = new Date();
  const expirationDate = new Date(validUntil);

  // Compare the current date with the expiration date
  return currentDate > expirationDate;
}
export function getAddressName(walletAddress: string): string {
  const entity = EntityData.find(item => item.address.toLowerCase() === walletAddress.toLowerCase());
  return entity ? entity.name : 'Unknown Address';
}


export function timeAgo(unixTimestamp: number): string {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeDifference = currentTime - unixTimestamp;

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    min: 60
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(timeDifference / seconds);
    if (interval >= 1) {
      return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
    }
  }

  return 'Just now';
}



export function toChecksumAddress(address: string): boolean {
  const ethereumAddressRegex = /^(0x)?[0-9a-f]{40}$/i;
  address = address.trim();
  if (!ethereumAddressRegex.test(address)) {
    return false; // Return null or throw an error, depending on your use case
  }
  return true;
}



type StringArray = string[];

export function isNumber(input: any): boolean {
  return typeof input === 'number' && !isNaN(input);
}

export function isValidEmail(input: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\[^\s@]+$/;
  return emailRegex.test(input);
}


export const useCenteredTree = () => {
  const [translate, setTranslate] = useState({ x: 43.00625, y: 0 });
  const containerRef: any = useCallback((containerElem: any) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);
  return [translate, containerRef];
};



export function retrieveArrayFromLocalStorage(key: string): StringArray | null {
  const storedData = localStorage.getItem(key);

  if (storedData) {
    try {
      const parsedArray = JSON.parse(storedData) as StringArray;
      return parsedArray;
    } catch (error) {
      console.error("Error parsing stored data:", error);
      return null;
    }
  }

  return null;
}




export function siNumber(num: number, options?: Intl.NumberFormatOptions) {
  if (!num) return 0;

  const O = Intl.NumberFormat("en", { notation: "compact", ...options });
  return O.format(Number(num || 0));
};

export function toFixedNum(num: number | string, fix?: number | { breakPoint: number; lessFix: number; greaterFix: number }): number {
  if (!num) return 0;

  num = Number(num);

  if (String(num).includes(".")) {
    let fix_num: number;

    if (typeof fix === "object") {
      const { breakPoint, lessFix, greaterFix } = fix;
      if (num < breakPoint) {
        fix_num = Number(Number(num).toFixed(lessFix));
      } else {
        fix_num = Number(Number(num).toFixed(greaterFix));
      }
    } else {
      fix_num = Number(Number(num).toFixed(fix));
    }

    return fix_num;
  }

  return num;
};

function sign(value: number): number | boolean {
  value = Number(value);
  return value ? (value >= 0 ? 1 : -1) : 0;
}

export function isPositive(value: number): boolean {
  value = Number(value);
  return sign(value) ? value > 0 : 1 / value === Infinity;
}
const ellipseNumWithDots = (num: number | string): string => {
  if (!num) return "0";
  const numValue: number = Number(num);

  if (numValue * 10000 < 1) {
    const original_num: string = numValue.toFixed(40);
    const end: string = Number(original_num)
      .toExponential()
      .slice(0, Math.min(3, Number(original_num).toExponential().indexOf("e")))
      .replace(".", "");

    return "0.0..00" + end;
  }

  return numValue.toString();
};


export function formatCurrency(value: number): string {
  // Use toLocaleString to format the number as currency
  const formattedValue = value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });


  return formattedValue.replace('$', '$');
}




export function fixNum(num: number, fix: number, withCommas = false, ellipseDots = false): string | JSX.Element {
  if (!num) return '0';
  num = Number(num);

  if (
    num.toString().includes('e') ||
    (Number(num) < 0.0001 && isPositive(Number(num)))
  ) {
    return ellipseDots ? ellipseNumWithDots(num) : ellipseNum(num);
  }

  if (String(num).includes('.')) {
    num = Number(Number(num).toFixed(fix));
  }

  if (num > 1 && withCommas) {
    return num.toLocaleString();
  }

  return num.toString();
};

export function formatPrice(num: number | undefined | null, decimalPlaces: number = 2): string {
  // Check if the number is undefined, null, or not a valid number
  if (num === undefined || num === null || isNaN(num)) {
    return '0';
  }

  // Convert the number to a string and remove leading/trailing zeros
  const numStr = num.toString().replace(/^0+|0+$/g, '');

  // Check if the number has more than 5 digits
  if (numStr.replace('.', '').length > 5) {
    // Convert to scientific notation
    const exponent = Math.floor(Math.log10(Math.abs(num)));
    const mantissa = num / Math.pow(10, exponent);

    // Format the number with the desired decimal places
    return `${mantissa.toFixed(decimalPlaces)}e${exponent}`;
  } else {
    // If the number has 5 or fewer digits, return it as is with the desired decimal places
    return num.toFixed(decimalPlaces);
  }
}




export function formatNumber(inputNumber: number): string {
  // Check if the number is longer than 5 digits
  if (Math.abs(inputNumber) >= 100000) {
    // Use toFixed to format the number with a fixed number of decimal places
    return inputNumber.toFixed(6);
  } else {
    // Use toLocaleString to format the number with locale-specific formatting
    return inputNumber.toLocaleString(undefined, { maximumFractionDigits: 6 });
  }
}

export function convertUnixToHuman(timestamp: number) {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeDifference = currentTime - Math.floor(timestamp / 1000);

  if (timeDifference < 60) {
    return 'Just now';
  } else if (timeDifference < 3600) {
    const minutes = Math.floor(timeDifference / 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < 86400) {
    const hours = Math.floor(timeDifference / 3600);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(timeDifference / 86400);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
}