document.querySelector('.ajax-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    let parsedData = {};
    for(let name of formData) {
      if (typeof(parsedData[name[0]]) == "undefined") {
        let tempdata = formData.getAll(name[0]);
        if (tempdata.length > 1) {
          parsedData[name[0]] = tempdata;
        } else {
          parsedData[name[0]] = tempdata[0];
        }
      }
    }

    let options = {};
    switch (this.method.toLowerCase()) {
      case 'post':
        options.body = JSON.stringify(parsedData);
      case 'get':
        options.method = this.method;
        options.headers = {'Content-Type': 'application/json'};
      break;
    }

    fetch(this.action, options).then(r => r.json()).then(data => {
      console.log(data);
    });
});
