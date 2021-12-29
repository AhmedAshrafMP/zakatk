const { default: axios } = require("axios");

interface GoldPrices {
  gold: number;
  silver: number;
  gThreshold: number;
  sThreshold: number;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function getGoldPrices(currency: string): Promise<GoldPrices> {
  try {
    const instance = axios.create({
      headers: {
        Host: "data-asg.goldprice.org",
        Cookie: " lagrange_session=97891f5a-d308-4c6a-97e3-1681aae9faa9",
        Accept: "application/json",
        "User-Agent": "PostmanRuntime/7.26.8",
      },
    });

    const resp = await instance.get(
      "https://data-asg.goldprice.org/dbXRates/" + currency
    );
    const goldGramPrice = resp.data.items[0].xauPrice / 31.1;
    const silverGramPrice = resp.data.items[0].xagPrice / 28.3495;
    console.log("respose", resp.data.items[0]);

    return {
      gold: goldGramPrice,
      silver: silverGramPrice,
      gThreshold: goldGramPrice * 85,
      sThreshold: silverGramPrice * 595,
    };
  } catch (error) {
    return {
      gold: 0,
      silver: 0,
      gThreshold: 0,
      sThreshold: 0,
    };
  }
}
