class FavoriteYoutubeChannel {
  constructor(subscription) {
    this.subscription = subscription;
  }

  uploadNewVideo(title) {
    this.subscription.notify(`new video: ${title}`);
  }
}

class Subscription {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unSubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(message) {
    this.observers.forEach((observer) => {
      observer(message);
    });
  }
}

// observers
const subscriber1 = (data) => {
  console.log(data);
};

const subscriber2 = (data) => {
  console.log(data);
};

const subscription = new Subscription();
const favoriteYoutubeChannel = new FavoriteYoutubeChannel(subscription);

// subscribe
subscription.subscribe(subscriber1);
subscription.subscribe(subscriber2);

// event trigger
favoriteYoutubeChannel.uploadNewVideo('Silicon Valley');

// unsubscribe
subscription.unSubscribe(subscriber2);

// event trigger
favoriteYoutubeChannel.uploadNewVideo('Start Up');
