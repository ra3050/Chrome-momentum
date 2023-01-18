const quotes = [
    {
        quote: "이 악물고 노력할 필요없다. 물 흘러가듯 그냥, 그냥 하는거다",
        author: "unknown",
    },
    {
        quote: "용은 자신이 난 곳을 돌아보지 않는다. 저 개천에 이무기는 용이되길 포기하고 자기가 난 곳을 돌보는구나",
        author: "unknown",
    },
    {
        quote: "Carpe diem, Guam Minimum credula postero",
        author: "Haratius",
    },
    {
        quote: "이 악물고 노력할 필요없다. 물 흘러가듯 그냥, 그냥 하는거다",
        author: "unknown",
    },
    {
        quote: "용은 자신이 난 곳을 돌아보지 않는다. 저 개천에 이무기는 용이되길 포기하고 자기가 난 곳을 돌보는구나",
        author: "unknown",
    },
    {
        quote: "Carpe diem, Guam Minimum credula postero",
        author: "Haratius",
    },
    {
        quote: "이 악물고 노력할 필요없다. 물 흘러가듯 그냥, 그냥 하는거다",
        author: "unknown",
    },
    {
        quote: "용은 자신이 난 곳을 돌아보지 않는다. 저 개천에 이무기는 용이되길 포기하고 자기가 난 곳을 돌보는구나",
        author: "unknown",
    },
    {
        quote: "Carpe diem, Guam Minimum credula postero",
        author: "Haratius",
    },
    {
        quote: "이 악물고 노력할 필요없다. 물 흘러가듯 그냥, 그냥 하는거다",
        author: "unknown",
    },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author} -`;