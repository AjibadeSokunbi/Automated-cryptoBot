import ellipseNum from "./ellipseNum";
import { EntityData } from "./entityData3";
import { TokenBalance } from "./types";

export let typingTimeout: NodeJS.Timeout | null = null;
export let fetchingTimeout: NodeJS.Timeout | null = null;


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




export function timeAgo(unixTimestamp: number): string {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeDifference = currentTime - unixTimestamp;

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    min: 60,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(timeDifference / seconds);
    if (interval >= 1) {
      return `${interval} ${unit}${interval > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
}

export function formatCurrency2(value: number): string {
  // Use toLocaleString to format the number as currency
  const formattedValue = value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedValue.replace("$", "$");
}
export const KEY: string = process.env.REACT_APP_GRAPHQL as string;
export function formatNumber(input: number): string {
  const decimalPlaces = (input.toString().split(".")[1] || "").length;

  if (decimalPlaces > 2) {
    // Convert the number to scientific notation with 2 decimal places
    return input.toExponential(2);
  } else {
    // Round the number to two decimal places
    return input.toFixed(2);
  }
}

export function getAddressName2(walletAddress: string): string {
  const entity = EntityData.find(
    (item) => item.address.toLowerCase() === walletAddress.toLowerCase()
  );
  return entity ? entity.name : "Unknown Address";
}

export const makeWalletAddress2 = (
  _str: string | null,
  start = 20,
  end = 4
) => {
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

export function siNumber(num: number, options?: Intl.NumberFormatOptions) {
  if (!num) return 0;

  const O = Intl.NumberFormat("en", { notation: "compact", ...options });
  return O.format(Number(num || 0));
}

export function toFixedNum(
  num: number | string,
  fix?: number | { breakPoint: number; lessFix: number; greaterFix: number }
): number {
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
}

export function isScientificNotation(input: string): boolean {
  // Regular expression pattern for scientific notation
  const scientificNotationPattern = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)$/;

  // Test the input string against the pattern
  return scientificNotationPattern.test(input);
}

export const findTokenBalance = (
  balances: TokenBalance[],
  tokenAddress: string
) => {
  const tokenBalance = balances.find(
    (balance) => balance.token_address === tokenAddress
  );
  return tokenBalance ? tokenBalance.balance : 0;
};

export const findTokenBalanceS = (balances: TokenBalance[], symbol: string) => {
  const tokenBalance = balances.find((balance) => balance.symbol === symbol);
  return tokenBalance ? tokenBalance.balance : "0";
};
export const metabotURL = process.env.NEXT_PUBLIC_METABOT_URL as string;
export const key = process.env.NEXT_PUBLIC_METABOT_API_KEY;
export function extractErrorMessage(errorString: string): string {
  // Regular expressions to extract error messages
  const insufficientFundsRegex: RegExp =
    /insufficient funds for intrinsic transaction cost/g;
  const estimateGasRegex: RegExp =
    /cannot estimate gas; transaction may fail or may require manual gas limit/g;

  // Check if the error string contains the desired error messages
  const isInsufficientFunds: boolean = insufficientFundsRegex.test(errorString);
  const isEstimateGas: boolean = estimateGasRegex.test(errorString);

  // Extract and return the specific error message
  if (isInsufficientFunds) {
    return "insufficient funds for intrinsic transaction cost";
  } else if (isEstimateGas) {
    return "cannot estimate gas; transaction may fail or may require manual gas limit";
  } else {
    return "Error message not recognized";
  }
}

export function checkScientificNotation(numAsString: string): string {
  // Check if the number is in scientific notation

  if (numAsString.includes("e") || numAsString.includes("E")) {
    return Number(numAsString).toFixed(7).toString(); // If the number is in scientific notation, return '0.000'
  } else {
    return numAsString; // If not in scientific notation, return the number as it is
  }
}

const headers = new Headers({
  "x-api-key": process.env.TRADEVIEWER_API as string,
  "Content-Type": "application/json",
});

export const requestOptions: RequestInit = {
  headers,
};

export function shortenWord(word: string, maxLength: number): string {
  if (word?.length > maxLength) {
    return word.substring(0, maxLength) + "."; // Shorten and add "..."
  }
  return word; // Return the original word if it's within the maximum length
}
export function fixNum(
  num: number,
  fix: number,
  withCommas = false,
  ellipseDots = false
): string | any {
  if (!num) return "0";
  num = Number(num);

  if (
    num.toString().includes("e") ||
    (Number(num) < 0.0001 && isPositive(Number(num)))
  ) {
    return ellipseDots ? ellipseNumWithDots(num) : ellipseNum(num);
  }

  if (String(num).includes(".")) {
    num = Number(Number(num).toFixed(fix));
  }

  if (num > 1 && withCommas) {
    return num.toLocaleString();
  }

  return num.toString();
}

export function fixNum2(
  num: number,
  fix: number,
  withCommas = false,
  ellipseDots = false
): string | any {
  if (!num) return 0;
  num = Number(num);

  if (
    num.toString().includes("e") ||
    (Number(num) < 0.0001 && isPositive(Number(num)))
  ) {
    return ellipseDots ? ellipseNumWithDots(num) : ellipseNum(num);
  }

  if (String(num).includes(".")) {
    num = Number(Number(num).toFixed(fix));
  }

  if (num > 1 && withCommas) {
    return num.toLocaleString();
  }

  return num;
}

export function formatPrice(
  num: number | undefined | null,
  decimalPlaces: number = 2
): string {
  // Check if the number is undefined, null, or not a valid number
  if (num === undefined || num === null || isNaN(num)) {
    return "0";
  }

  // Convert the number to a string and remove leading/trailing zeros
  const numStr = num.toString().replace(/^0+|0+$/g, "");

  // Check if the number has more than 5 digits
  if (numStr.replace(".", "").length > 5) {
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
