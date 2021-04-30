class PubSub {

  constructor(){
      this.subscriptions = {}
      /*
      {
          'foo': {
              122: func,
              231: func
          },
          'foo2': {
          }
      }
      */
  }

  subscribe(eventId, callback){
    const subscribeId = parseInt(Math.random()*1000);
    let subscriptionsEvent = this.subscriptions[eventId];
    if(!subscriptionsEvent) {
      subscriptionsEvent = {
                [subscribeId]: callback
            }
    } else {
        subscriptionsEvent[subscribeId] = callback;
    }
    this.subscriptions[eventId] = subscriptionsEvent;
    return subscribeId;
  }

  publish(eventId, data) {
    const subscriptionsEvent = this.subscriptions[eventId]
    if (subscriptionsEvent) {
        for (const i in subscriptionsEvent) {
            subscriptionsEvent[i](data);
        }
    }
    else {
        //no subscribers
    }
  }

  unsubscribe(subscribeId) {
    for (const i in this.subscriptions) {
        if (this.subscriptions[i][subscribeId]) {
            delete this.subscriptions[i][subscribeId];
            break;
        }
    }
  }

}

const pubSub = new PubSub()
pubSub.subscribe('foo', data => console.log("foo::1::", data))
const id = pubSub.subscribe('foo', data => {
    console.log("foo::2::", data)
    pubSub.unsubscribe(id)
})

pubSub.publish('foo', 'bar::1')
pubSub.publish('foo', 'bar::2')

/**
 * foo::1:: bar::1
 * foo::2:: bar::1
 * foo::1:: bar::2
 */