class ApiService {
  constructor(url) {
    this.url = url;
  }

  async fetchPosts() {
    try {
      const request = new Request(this.url, {
        method: "get",
      });
      return sendRequest(request);
    } catch (error) {
      console.log(console.error());
    }
  }

  async fetchTime(area, cityTime) {
    console.log(`${this.url}/${area}/${cityTime}`);
    try {
      const request = new Request(`${this.url}/${area}/${cityTime}`, {
        method: "get",
      });
      return sendRequest(request);
    } catch (error) {
      console.log(console.error());
    }
  }
}

async function sendRequest(request) {
  const response = await fetch(request);
  return await response.json();
}

export const apiService = new ApiService(
  "https://openexchangerates.org/api/latest.json?app_id=7ac3c53d982242239ff824ac7653218c"
);

export const currencyAPI = new ApiService(
  "https://api.exchangeratesapi.io/latest?base=RUB"
);

export const localTime = new Date();
