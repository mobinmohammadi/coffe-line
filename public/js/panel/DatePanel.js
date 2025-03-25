let lastProducts = [
  {
    id: 1,
    name: "قهوه برزیلی تانزانیا",
    img: "../../public/products/p1.png",
    price: "202000",
    status: "Success",
    count: 1,
  },
  {
    id: 2,
    name: "نسکافه ایرانی ",
    img: "../../public/products/p1.png",
    price: "125000",
    status: "Unsuccess",
    count: 1,
  },
  {
    id: 3,
    name: "قهوه ترکی التونسا",
    img: "../../public/products/p1.png",
    price: "287000",
    status: "Unuccess",
    count: 1,
  },
];

let allPrudactsOrders = [
  {
    id: 1,
    name: "قهوه برزیلی تانزانیا",
    img: "../../public/products/p1.png",
    price: "202000",
    status: "Success",
    count: 1,
  },
  {
    id: 2,
    name: "نسکافه ایرانی ",
    img: "../../public/products/p3.png",
    price: "125000",
    status: "Unsuccess",
    count: 1,
  },
  {
    id: 3,
    name: "قهوه ایسلندی مقدار 250 گرم خط دوم اسم ",
    img: "../../public/products/p2.png",
    price: "287000",
    status: "Unuccess",
    count: 1,
  },
  {
    id: 4,
    name: "قهوه ترکی التونسا",
    img: "../../public/products/p1.png",
    price: "287000",
    status: "Unuccess",
    count: 1,
  },
  {
    id: 5,
    name: "قهوه ایرانی مقدار 280 گرم خط دوم اسم",
    img: "../../public/products/p5.png",
    price: "287000",
    status: "Unuccess",
    count: 1,
  },
  {
    id: 6,
    name: "قهوه برزیلی مقدار 500 گرم خط دوم اسم ",
    img: "../../public/products/p2.png",
    price: "287000",
    status: "Unuccess",
    count: 1,
  },
  {
    id: 7,
    name: "قهوه نیوزلندی مقدار 201 گرم خط دوم اسم ",
    img: "../../public/products/p4.png",
    price: "287000",
    status: "Unuccess",
    count: 1,
  },
  {
    id: 8,
    name: "قهوه فرانسه مقدار 600 گرم خط دوم اسم ",
    img: "../../public/products/p8.png",
    price: "287000",
    status: "Unuccess",
    count: 1,
  },
];

let dataTicketUserPanel = [
  {
    id: 1,
    title: "ببخشید سفارش من کی به دستم میرسه؟",
    whiteAnswers: "1",
    status: "0",
    time: "1402/02/07",
    hourse: "10:31",
    answers: [
      {
        id: 1,
        nameCreator: "آروین علیالی",
        answerText:
          "لطفا کد پیگیری سفارش مورد نظر را ارسال کنید تا در اسرع وقت پیگیری شود🙌",
        time: "1403/07/26",
        hourse: "10:22",
      },
    ],
  },
  {
    id: 2,
    title: "سلام از بابت کالا هاتون ممنونم",
    whiteAnswers: "1",
    status: "1",
    time: "1403/07/26",
    hourse: "12:12",
    answers: [
      {
        id: 1,
        nameCreator: "مبین محمدی",
        answerText: "لطف دارین مشتری با محبت ❤",
        time: "1403/07/26",
        hourse: "10:22",
        imgCreator : "./public/imgs/1.jpg"
      },
    ],
  },
  {
    id: 3,
    title: "سلام تخفیفات بلاک فرایدی کی آغاز میشه؟",
    status: "0",
    whiteAnswers: "0",
    time: "1403/08/30",
    hourse: "12:21",

    answers: [
      {
        id: 1,
        nameCreator: "آروین علیالی",
        time: "1403/09/01",
        answerText: "سلام تاریخ   1404/06/08 ",
        hourse: "08:12",
      },
    ],
    time: "1403/08/31",
  },
  {
    id: 4,
    title: "از این کالا موجود درید؟",
    whiteAnswers: "1",
    status: "1",
    time: "1402/02/07",
    hourse: "09:52",
  },
  {
    id: 5,
    title: "ممنون از پشتبانیتون❤",
    whiteAnswers: "0",
    status: "0",
    time: "1403/01/26",
    hourse: "16:24",
    answers: [
      {
        id: 1,
        nameCreator: "مبین محمدی",
        answerText: "در خدمتیم",
        time: "1403/01/26",
        hourse: "16:50",
        imgCreator : "./public/imgs/1.jpg"
      },
    ],
  },
  {
    id: 6,
    title: "سلام می خوام با شما همکاری کنم.شرایط چیه؟",
    whiteAnswers: "1",
    status: "1",
    time: "1402/05/30",
    hourse: "15:30",
  },
  {
    id: 7,
    title: "شعبه اتون تون فقط در ارومیه است؟",
    status: "1",
    whiteAnswers: "0",
    time: "1402/04/04",
    hourse: "10:24",
    answers: [
      {
        id: 1,
        nameCreator: "آروین علیالی",
        answerText: "بله",
        time: "1402/04/05",
        hourse: "06:32",
      },
    ],
  },
];

export { lastProducts, dataTicketUserPanel, allPrudactsOrders };
