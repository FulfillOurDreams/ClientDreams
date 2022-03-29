const prizesArray = [
    {
        name: "חדר ילדים",
        image: "./images/room.jpg",
        description: "ארון, מיטה, שידה",
        price: 20
    },
    {
        name: "פאה",
        image: "./images/68.jpg",
        description: "פאת קסטם",
        price: 20
    },
    {
        name: "מזגן  ",
        image: "./images/air.jpg",
        description: "מזגן של חברת אלקטרה",
        price: 20
    },
    {
        name: "עגלת תינוק",
        image: "./images/bogabo.jpg",
        description: "עגלת שכיבה לתינוק",
        price: 20
    },
    {
        name: "מצלמה איכותית",
        image: "./images/camara.jpg",
        description: "מצלמת קנון איכותית",
        price: 10
    },
    {
        name: "1000₪ באושר עד",
        image: "./images/osherAd.jpg",
        description: "שובר כספי לרשת אושר עד",
        price: 10
    },
    {
        name: "1000₪ בחנות  בגדי ילדים ",
        image: "./images/shoping.jpg",
        description: "שובר כספי בחנות בגדי ילדים לפי בחירה",
        price: 10
    },
    {
        name: "1000₪ בבת של מלך",
        image: "./images/batMelech.png",
        description: "שובר כספי לרשת בת מלך",
        price: 10
    },
    {
        name: "ערכת פליימוביל",
        image: "./images/play.png",
        description: "בית בובות ענק",
        price: 5
    },
    {
        name: "סט מצעים",
        image: "./images/sleep.jpg",
        description: "זוג מצעים מפואר",
        price: 5
    },
    {
        name: "אופניים חשמליות",
        image: "./images/bycle.jpg",
        description: "אופניים חשמליות ממרכז האופניים",
        price: 5
    },
    {
        name: "מחשב נייד",
        image: "./images/pcomputer.jpg",
        description: "מחשב נייד קומפקטי",
        price: 5
    }
];

export async function addItems() {
    for (let i = 0; i < prizesArray.length; i++)
        await fetch('http://localhost:4500/item', { method: "POST", body: JSON.stringify(prizesArray[i]),headers:{'Content-Type':'application/json'} }).catch(err=>{console.log(err)})
}