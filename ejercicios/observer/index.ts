interface Observer {
  update: (data: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
  observers: Observer[] = [];

  constructor() {
    const el: HTMLInputElement | any = document.querySelector("#value")
    el.addEventListener('input', () => {
      this.notify(el.value);
    })
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex(obs => {
      return obs === observer
    })

    this.observers.splice(index, 1);
  }

  notify(data: any) {
    this.observers.forEach(observer => observer.update(data));
  }
}
class PriceDisplay implements Observer {
  private el: HTMLElement | any;

  constructor() {
    this.el = document.querySelector("#price");
  }

  update(data: any) {
    this.el.innerText = data;
  }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();


const Subscribe: HTMLButtonElement | any = document.querySelector("#Subscribe")
Subscribe.addEventListener("click", () => value.subscribe(display));

const Unsubscribe: HTMLButtonElement | any = document.querySelector("#Unsubscribe")
Unsubscribe.addEventListener("click", () => value.unsubscribe(display));