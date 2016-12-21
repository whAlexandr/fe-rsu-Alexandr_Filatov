function View(model, controller) {
    this.model = model;
    this.control = controller;
    this.addAButton = document.querySelector(".add-book__button");
    this.addInput = document.querySelector(".add-book__submit");
    this.addesc = document.querySelector(".add-book__esc");
    this.focusElem = null;
}


View.prototype.newBook = function () {

    var book = {};
    book.urlAddress = document.querySelector(".add-book__cover").value;
    book.name = document.querySelector(".add-book__name").value;
    book.author = "by " + document.querySelector(".add-book__author").value;
    book.rating = document.querySelector(".add-book__rating").value;
    book.key = "";


    this.model.addBook(book);
    this.model.newNotification({
        phase: "You add ",
        name: document.querySelector(".add-book__name").value,
        author: document.querySelector(".add-book__author").value,
        fhilterlist: "",
        refrefhtime: 0
    });
}

var rangeInput = document.getElementById("rangeinput");
var rangeOut = document.getElementById("rangeout");
rangeInput.addEventListener('mouseup', function () {
    rangeout.innerHTML = this.value;
});

View.prototype.createBook = function (book) {
    var that = this;
    var bookBlock = document.querySelector(".books-shedul__list");

    var bookCase = document.createElement("li");
    bookCase.className = "books-shedul__item";

    var bookElem = document.createElement("ul");
    bookElem.className = "books-shedul__book";
    bookCase.appendChild(bookElem);

    if (book.name === "Empty") {

        var bookEmpty = document.createElement("li");
        bookEmpty.className = "books-shedul__empty";
        bookElem.appendChild(bookEmpty);

    } else {

        var bookPartCover = document.createElement("li");
        bookPartCover.className = "books-shedul__book-part";
        bookElem.appendChild(bookPartCover);
        var bookCover = document.createElement("img");
        bookCover.setAttribute("src", book.urlAddress);
        bookCover.setAttribute("alt", "book cover");
        bookCover.className = "books-shedul--image";
        bookPartCover.appendChild(bookCover);
        bookCover.addEventListener("click", function () {
            document.querySelector(".add-book__new-list").style.display = "flex";

            document.querySelector(".add-book__most-read-title").addEventListener(
                "click", function () {
                    document.getElementsByClassName("category-lists__item")[0
                        ].className = "category-lists__item category-lists__select";
                    document.querySelector(".add-book__new-list").style.display = "none";
                    book.key = "Most Read Title";
                    that.model.newNotification({
                        phase: "You add",
                        name: book.name,
                        author: book.author,
                        fhilterlist: "Most Read Title",
                        refrefhtime: 0
                    });
                    that.refresh();

                });

            document.querySelector(".add-book__best-of-list").addEventListener(
                "click", function () {
                    document.getElementsByClassName("category-lists__item")[1
                        ].className = "category-lists__item category-lists__select";
                    document.querySelector(".add-book__new-list").style.display = "none";
                    book.key = "Best Of List";
                    that.model.newNotification({
                        phase: "You add",
                        name: book.name,
                        author: book.author,
                        fhilterlist: "Best Of List",
                        refrefhtime: 0
                    });
                    that.refresh();
                });
            document.querySelector(".add-book__non-fiction").addEventListener(
                "click", function () {
                    document.getElementsByClassName("category-lists__item")[3
                        ].className = "category-lists__item category-lists__select";
                    document.querySelector(".add-book__new-list").style.display = "none";
                    book.key = "Non Fiction";
                    that.model.newNotification({
                        phase: "You add",
                        name: book.name,
                        author: book.author,
                        fhilterlist: "Non Fiction",
                        refrefhtime: 0
                    });
                    that.refresh();
                });

            document.querySelector(".add-book__classic-novels").addEventListener(
                "click", function () {
                    document.getElementsByClassName("category-lists__item")[2
                        ].className = "category-lists__item category-lists__select";
                    document.querySelector(".add-book__new-list").style.display = "none";
                    book.key = "Classic Novels";
                    that.model.newNotification({
                        phase: "You add",
                        name: book.name,
                        author: book.author,
                        fhilterlist: "Classic Novels",
                        refrefhtime: 0
                    });
                    that.refresh();
                });


            document.querySelector(".add-book__default").addEventListener(
                "click", function () {
                    document.getElementsByClassName("category-lists__item")[3
                        ].className = "category-lists__item category-lists__select";
                    document.querySelector(".add-book__new-list").style.display = "none";
                    book.key = "";
                    that.model.newNotification({
                        phase: "You add",
                        name: book.name,
                        author: book.author,
                        fhilterlist: "default",
                        refrefhtime: 0
                    });
                    that.refresh();
                });

        })

        var bookPartName = document.createElement("li");
        bookPartName.className = "books-shedul__book-part";
        bookElem.appendChild(bookPartName);

        var bookName = document.createElement("span");
        bookName.className = "books-shedul--name";
        bookName.innerHTML = book.name;
        bookPartName.appendChild(bookName);

        var booknewAuthor = document.createElement("li");
        booknewAuthor.className = 'books-shedul__book-part';
        bookElem.appendChild(booknewAuthor);

        var bookAuthor = document.createElement("span");
        bookAuthor.className = "books-shedul--author";
        bookAuthor.innerHTML = book.author;
        booknewAuthor.appendChild(bookAuthor);

        var bookPartRating = document.createElement("li");
        bookPartRating.className = "books-shedul__book-part books-shedul--stars";
        bookElem.appendChild(bookPartRating);

        for (var i = 0; i < 5; i++) {
            var bookRating = document.createElement("i");
            bookRating.addEventListener("click", function () {
                for (var i = 0;
                     i < document.getElementsByClassName("books-shedul--stars").length;
                     i++) {
                    for (var z = 0; z < 5; z++) {
                        if (this === document.getElementsByClassName("books-shedul--stars")[i
                                ].getElementsByClassName("fa")[z]) {
                            that.model.newNotification({
                                phase: "",
                                name: that.model.books[that.model.books.length - (1 + i)].name,
                                author: z + 1,
                                fhilterlist: "",
                                refrefhtime: 0
                            });
                            for (var g = 0; g < 5; g++) {
                                if (g <= z) {
                                    document.getElementsByClassName("books-shedul--stars")[i
                                        ].getElementsByClassName("fa")[g
                                        ].className = "fa fa-star";
                                } else {
                                    document.getElementsByClassName("books-shedul--stars")[i
                                        ].getElementsByClassName("fa")[g
                                        ].className = "fa fa-star-o";
                                }
                            }
                        }
                    }
                }
            });
            if (i < book.rating) {
                bookRating.className = "fa fa-star";
            } else {
                bookRating.className = "fa fa-star-o";
            }
            bookPartRating.appendChild(bookRating);
        }
    }
    bookBlock.appendChild(bookCase);
}

View.prototype.createNotifications = function (notification) {
    var bookHistory = document.querySelector(".books-shedul__list");
    if (notification.name === "Empty") {
        var bookEmpty = document.createElement("li");
        bookEmpty.className = "books-shedul__empty";
        bookHistory.appendChild(bookEmpty);

    } else {

        var bookCase = document.createElement("li");
        bookCase.className = "books-shedul__item";

        var bookElem = document.createElement("ul");
        bookElem.className = "books-shedul__book";
        bookCase.appendChild(bookElem);

        var bookHistoryElem = document.createElement("li");
        bookHistoryElem.className = "history-list__block";
        bookElem.appendChild(bookHistoryElem);

        var notifyIcon = document.createElement("i");
        notifyIcon.className = "fa fa-clock-o history-list__page-icon";
        bookHistoryElem.appendChild(notifyIcon);

        var notifyphase = document.createElement("span");
        notifyphase.className = "history-list__value";
        notifyphase.innerHTML = "" + notification.phase + " ";
        bookHistoryElem.appendChild(notifyphase);

        var notifyName = document.createElement("a");
        notifyName.className = "history-list__highlight";
        notifyName.setAttribute("href", "#");
        notifyName.innerHTML = notification.name + " ";
        bookHistoryElem.appendChild(notifyName);

        if (notification.author !== "") {

            var notifyBy = document.createElement("span");
            notifyBy.className = "history-list__value";
            notifyBy.innerHTML = "by ";
            bookHistoryElem.appendChild(notifyBy);

            var notifyAuthor = document.createElement("a");
            notifyAuthor.className = "history-list__highlight";
            notifyAuthor.setAttribute("href", "#");
            notifyAuthor.innerHTML = notification.author + " ";
            bookHistoryElem.appendChild(notifyAuthor);

            if (notification.fhilterlist !== "") {

                var notifyTo = document.createElement("span");
                notifyTo.className = "history-list__value";
                notifyTo.innerHTML = "to your ";
                bookHistoryElem.appendChild(notifyTo);

                var notifyfhilterlist = document.createElement("a");
                notifyfhilterlist.className = "history-list__highlight";
                notifyfhilterlist.setAttribute("href", "#");
                notifyfhilterlist.innerHTML = notification.fhilterlist + " ";
                bookHistoryElem.appendChild(notifyfhilterlist);
            }
        }

        var notifyTime = document.createElement("li");
        notifyTime.className = "history-list__block";

        var notifyTimeValue = document.createElement("span");
        notifyTimeValue.className = "history-list__value";
        notifyTimeValue.innerHTML = "" + notification.refrefhtime + " minutes ago";
        notifyTime.appendChild(notifyTimeValue);


        bookHistory.appendChild(bookCase);
        bookHistoryElem.appendChild(notifyTime);
    }
}

View.prototype.createSaidNotification = function (notification) {
    var notifyBlock = document.querySelector(".history-list");

    var notifyCase = document.createElement("li");
    notifyCase.className = "history-list__item";

    var notifyIcon = document.createElement("i");
    notifyIcon.className = "fa fa-clock-o history-list__icon";
    notifyCase.appendChild(notifyIcon);

    var notifyphase = document.createElement("span");
    notifyphase.className = "history-list__value";
    notifyphase.innerHTML = "" + notification.phase + " ";
    notifyCase.appendChild(notifyphase);

    var notifyName = document.createElement("a");
    notifyName.className = "history-list__highlight";
    notifyName.setAttribute("href", "#");
    notifyName.innerHTML = notification.name + " ";
    notifyCase.appendChild(notifyName);

    if (notification.author !== "") {

        var notifyBy = document.createElement("span");
        notifyBy.className = "history-list__value";
        notifyBy.innerHTML = "by ";
        notifyCase.appendChild(notifyBy);

        var notifyAuthor = document.createElement("a");
        notifyAuthor.className = "history-list__highlight";
        notifyAuthor.setAttribute("href", "#");
        notifyAuthor.innerHTML = notification.author + " ";
        notifyCase.appendChild(notifyAuthor);

        if (notification.fhilterlist !== "") {

            var notifyTo = document.createElement("span");
            notifyTo.className = "history-list__value";
            notifyTo.innerHTML = "to your ";
            notifyCase.appendChild(notifyTo);

            var notifyfhilterlist = document.createElement("a");
            notifyfhilterlist.className = "history-list__highlight";
            notifyfhilterlist.setAttribute("href", "#");
            notifyfhilterlist.innerHTML = notification.fhilterlist;
            notifyCase.appendChild(notifyfhilterlist);

        }
    }

    var notifyTime = document.createElement("li");
    notifyTime.className = "history-list__time";

    var notifyTimeValue = document.createElement("span");
    notifyTimeValue.className = "history-list__value";
    notifyTimeValue.innerHTML = "" + notification.refrefhtime + " minutes ago";
    notifyTime.appendChild(notifyTimeValue);

    notifyBlock.appendChild(notifyCase);
    notifyBlock.appendChild(notifyTime);
}

View.prototype.refresh = function () {
    document.querySelector(".books-shedul__list").innerHTML = "";
    for (var b = this.model.books.length - 1; b >= 0; b--) {
        if (this.model.books[b].key === "") {
            this.createBook(this.model.books[b]);
        }
    }
}

View.prototype.refreshNotify = function () {
    document.querySelector(".history-list").innerHTML = "";
    if (this.model.notifications.length > 3) {
        for (var i = this.model.notifications.length - 1;
             i >= this.model.notifications.length - 3; i--) {
            this.createSaidNotification(this.model.notifications[i]);
        }
    } else {
        for (var b = this.model.notifications.length - 1; b >= 0; b--) {
            this.createSaidNotification(this.model.notifications[b]);
        }
    }
}

View.prototype.showHistory = function () {
    document.querySelector(".books-shedul__list").innerHTML = "";
    for (var b = this.model.notifications.length - 1; b >= 0; b--) {
        this.createNotifications(this.model.notifications[b]);
    }
}

View.prototype.init = function () {
    var that = this;
    that.refresh();
    that.refreshNotify();

    setInterval(function () {
        for (var i = 0; i < that.model.notifications.length; i++) {
            that.model.notifications[i].refrefhtime += 1;
        }
        that.refreshNotify();
    }, 60000);


    that.addAButton.addEventListener("click", function () {
        document.querySelector(".add-book_new").style.display = "flex";
        document.querySelector(".add-book__cover").value = "";
        document.querySelector(".add-book__name").value = "";
        document.querySelector(".add-book__author").value = "";
        document.querySelector(".add-book__rating").value = "";
    });

    that.addesc.addEventListener("click", function () {
        document.querySelector(".add-book_new").style.display = "none";
    });

    that.addInput.addEventListener("click", function () {
        document.querySelector(".add-book_new").style.display = "none";
        that.newBook();
    });

    document.querySelector(".filter__input").addEventListener("keyup", function () {
        var value = document.querySelector(".filter__input").value.toLowerCase();
        for (
            var i = 0; i < document.querySelectorAll(".books-shedul__item").length - 16; i++) {

            if (that.model.books[that.model.books.length - (1 + i)
                    ].name.toLowerCase().indexOf(value) < 0) {
                document.querySelectorAll(".books-shedul__item")[i].style.display = "none";
            } else if (that.model.books[that.model.books.length - (1 + i)
                    ].name.toLowerCase().indexOf(value) >= 0) {
                document.querySelectorAll(".books-shedul__item")[i].style.display = "flex";
            }

            if (that.model.books[that.model.books.length - (1 + i)
                    ].author.toLowerCase().indexOf(value) < 0) {
                document.querySelectorAll(".books-shedul__item")[i].style.display = "none";
            } else if (that.model.books[that.model.books.length - (1 + i)
                    ].author.toLowerCase().indexOf(value) >= 0) {
                document.querySelectorAll(".books-shedul__item")[i].style.display = "flex";
            }

        }
    });

    document.querySelector(".filter__input").addEventListener("blur", function () {
        if (document.querySelector(".filter__input").value !== "") {
            that.model.newNotification({
                phase: "You were searching",
                name: document.querySelector(".filter__input").value,
                author: "",
                fhilterlist: "",
                refrefhtime: 0
            });
        }
    });

    document.getElementsByClassName("filter__category")[0].addEventListener("click", function () {
        for (
            var z = 0; z < document.getElementsByClassName("filter__category").length - 1; z++) {
            document.getElementsByClassName("filter__category")[z].className = "filter__category";
        }
        this.className = "filter__category filter--select";
        for (
            var i = 0; i < document.querySelectorAll(".books-shedul__item").length - 16; i++) {
            if (that.model.books[that.model.books.length - (1 + i)
                    ].rating >= 0) {
                document.querySelectorAll(".books-shedul__item")[i].style.display = "flex";
            }
        }
        that.model.newNotification({
            phase: "You use filter",
            name: "All Books",
            author: "",
            fhilterlist: "",
            refrefhtime: 0
        });
    })

    document.getElementsByClassName("filter__category")[2].addEventListener("click", function () {
        for (
            var z = 0; z < document.getElementsByClassName("filter__category").length - 1; z++) {
            document.getElementsByClassName("filter__category")[z].className = "filter__category";
        }
        this.className = "filter__category filter--select";
        for (
            var i = 0; i < document.querySelectorAll(".books-shedul__item").length - 16; i++) {
            if (document.querySelectorAll(".books-shedul__item")[i
                    ].getElementsByClassName("fa")[4].matches(".fa-star")) {
                document.querySelectorAll(".books-shedul__item")[i].style.display = "flex";
            } else {
                document.querySelectorAll(".books-shedul__item")[i].style.display = "none";
            }
        }
        that.model.newNotification({
            phase: "You use filter",
            name: "Most Popular",
            author: "",
            fhilterlist: "",
            refrefhtime: 0
        });
    })


    document.getElementsByClassName("navigation__item")[1
        ].addEventListener("click", function () {
        for (var i = 0;
             i < document.getElementsByClassName("navigation__item").length;
             i++) {
            document.getElementsByClassName("navigation__item")[i
                ].className = "navigation__item";
        }
        document.querySelector(".main__content--value"
        ).innerHTML = "browse available books";
        this.className = "navigation__item navigation__active";
        that.refresh();
    });

    document.getElementsByClassName("navigation__item")[5
        ].addEventListener("click", function () {
        for (var i = 0;
             i < document.getElementsByClassName("navigation__item").length;
             i++) {
            document.getElementsByClassName("navigation__item")[i
                ].className = "navigation__item";
        }
        document.querySelector(".main__content--value"
        ).innerHTML = "History";
        this.className = "navigation__item navigation__active";
        that.showHistory();
    });

    document.getElementsByClassName("category-lists__item")[0
        ].addEventListener("click", function () {
        for (var i = 0;
             i < document.getElementsByClassName("category-lists__item").length;
             i++) {
            document.getElementsByClassName("category-lists__item")[i
                ].className = "category-lists__item";
        }
        this.className = "category-lists__item category-list__select";
        document.querySelector(".books-shedul__list").innerHTML = "";
        for (var b = that.model.books.length - 1; b >= 0; b--) {
            if (that.model.books[b].key === "Most Read Title" ||
                that.model.books[b].name === "Empty") {
                that.createBook(that.model.books[b]);
            }
        }
    });

    document.getElementsByClassName("category-lists__item")[1
        ].addEventListener("click", function () {
        for (var i = 0;
             i < document.getElementsByClassName("category-lists__item").length;
             i++) {
            document.getElementsByClassName("category-lists__item")[i
                ].className = "category-lists__item";
        }
        this.className = "category-lists__item category-list__select";
        document.querySelector(".books-shedul__list").innerHTML = "";
        for (var b = that.model.books.length - 1; b >= 0; b--) {
            if (that.model.books[b].key === "Best Of List" ||
                that.model.books[b].name === "Empty") {
                that.createBook(that.model.books[b]);
            }
        }
    });

    document.getElementsByClassName("category-lists__item")[2
        ].addEventListener("click", function () {
        for (var i = 0;
             i < document.getElementsByClassName("category-lists__item").length;
             i++) {
            document.getElementsByClassName("category-lists__item")[i
                ].className = "category-lists__item";
        }
        this.className = "category-lists__item category-list__select";
        document.querySelector(".books-shedul__list").innerHTML = "";
        for (var b = that.model.books.length - 1; b >= 0; b--) {
            if (that.model.books[b].key === "Classic Novels" ||
                that.model.books[b].name === "Empty") {
                that.createBook(that.model.books[b]);
            }
        }
    });

    document.getElementsByClassName("category-lists__item")[3
        ].addEventListener("click", function () {
        for (var i = 0;
             i < document.getElementsByClassName("category-lists__item").length;
             i++) {
            document.getElementsByClassName("category-lists__item")[i
                ].className = "category-lists__item";
        }
        this.className = "category-lists__item category-list__select";
        document.querySelector(".books-shedul__list").innerHTML = "";
        for (var b = that.model.books.length - 1; b >= 0; b--) {
            if (that.model.books[b].key === "Non Fiction" ||
                that.model.books[b].name === "Empty") {
                that.createBook(that.model.books[b]);
            }
        }
    });

    document.querySelector(".add-book__submit-for-new").addEventListener("click",
        function () {
            var itemLength = document.getElementsByClassName(
                "category-lists__item").length;
            var value = document.querySelector(".add-book__text-for-new").value;

            document.querySelector(".category-lists").innerHTML +=
                "<li class=\"category-lists__item\">" +
                "<i class=\"fa fa-circle category-list--icon-new" +
                " category-list__icon\"></i>" +
                "<a href=\"#\" class=\"category-lists__link\">" + value + "</a></li>";

            document.querySelector(".add-book__new-list").innerHTML +=
                "<input type=\"button\" class=\"add-book__" + value +
                "\" value=\"" + value + "\">";

            document.querySelector(".add-book__" + value).style.width = "33%";

            document.getElementsByClassName("category-lists__item")[itemLength
                ].addEventListener("click", function () {
                for (var i = 0;
                     i < document.getElementsByClassName("category-lists__item").length;
                     i++) {
                    document.getElementsByClassName("category-lists__item")[i
                        ].className = "category-lists__item";
                }
                this.className = "category-lists__item category-list__select";
                document.querySelector(".books-shedul__list").innerHTML = "";
                for (var b = that.model.books.length - 1; b >= 0; b--) {
                    if (that.model.books[b].key === document.querySelector(
                            ".add-book__text-for-new").value ||
                        that.model.books[b].name === "Empty") {
                        that.createBook(that.model.books[b]);
                    }
                }
            });
            document.querySelector(".add-book__text-for-new").value = "";
        });

    document.querySelector(".add-book__tag-esc").addEventListener("click",
        function () {
            document.querySelector(".add-book__new-list").style.display = "none";
        });

    that.model.onAddBook.subscribe(that.refresh.bind(that));
    that.model.onNewNotification.subscribe(that.refreshNotify.bind(that));
}




