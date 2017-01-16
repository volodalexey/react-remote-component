class Ajax {

  constructor() {
    this.active_requests = [];
  }

  load(url) {
    let promise = this.active_requests.find(ar => ar.__url === url);
    if (!promise) {
      promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.__url = url;
        this.active_requests.push(xhr);
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Accept', '*/*');
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            let index = this.active_requests.indexOf(xhr);
            if (index > -1) {
              this.active_requests.splice(index, 1);
            }
            let message = xhr.responseText;
            if (xhr.status === 0) {
              reject('Connection error!')
            } else if (xhr.status >= 200 && xhr.status < 300) {
              resolve(message);
            } else {
              reject(message);
            }
          }
        };
        xhr.send();
      });
    }

    return promise;
  }
}

export default new Ajax();