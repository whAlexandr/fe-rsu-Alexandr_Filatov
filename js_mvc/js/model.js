function Model() {
    this.books = [


        {
            name: "Empty",
            key: ""
        },
        {
            name: "Empty",
            key: ""
        },
        {
            name: "Empty",
            key: ""
        },
        {
            name: "Empty",
            key: ""
        },
        {
            name: "Empty",
            key: ""
        },
        {
            name: "Empty",
            key: ""
        },
        {
            name: "Empty",
            key: ""
        },
        {
            urlAddress : "style/img/10.png",
            name : "Vegetables Cookbook",
            author : "by Matthew Biggs", 
            rating : 5,
            key: ""
        },
        {
            urlAddress : "style/img/9.png",
            name : "Jamie's Italy",
            author : "by Jamie Oliver", 
            rating : 5,
            key: ""
        },
        {
            urlAddress : "style/img/8.png",
            name : "Jamie Does",
            author : "by Jamie Oliver", 
            rating : 4,
            key: ""
        },
        {
            urlAddress : "style/img/7.png",
            name : "Suneeta Vaswani",
            author : "by Geeta Devi", 
            rating : 5,
            key: ""
        },
        {
            urlAddress : "style/img/6.png",
            name : "Cook Like an Italian",
            author : "by Chrissy Gower", 
            rating : 2,
            key: ""
        },
        {
            urlAddress : "style/img/5.png",
            name : "Paleo Slow Cooking",
            author : "by Chrissy Gower", 
            rating : 5,
            key: ""
        },
        {
            urlAddress : "style/img/4.png",
            name : "Inexpensive Family Meals",
            author : "by Simon Holst", 
            rating : 5,
            key: ""
        },
        {
            urlAddress : "style/img/3.png",
            name : "Jamie's Kitchen",
            author : "by Jamie Oliver", 
            rating : 3,
            key: ""
        },
        {
            urlAddress : "style/img/2.png",
            name : "Cakes & Bakes",
            author : "by Sanjeev Kapoor", 
            rating : 4,
            key: ""
        },
        {
            urlAddress : "style/img/1.png",
            name : "Jewels of Nizam",
            author : "by Geeta Devi", 
            rating : 3,
            key: ""
        },
    ];
    this.notifications = [
        {
            name: "Empty"
        },
        {
            name: "Empty"
        },
        {
            name: "Empty"
        },
        {
            name: "Empty"
        },
        {
            name: "Empty"
        },
        {
            name: "Empty"
        },
        {
            name: "Empty"
        }


    ];
    this.onAddBook = new Event();
    this.onDelBook = new Event();
    this.onNewNotification = new Event();
}

Model.prototype.addBook = function(book) {
    this.books.push(book);
    this.onAddBook.notify(this.books);
}

Model.prototype.newNotification = function(notification) {
    this.notifications.push(notification);
    this.onNewNotification.notify(this.notifications);
}