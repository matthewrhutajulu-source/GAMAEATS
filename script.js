/* =========================================================================
   CLEAN SVG ICONS
   ========================================================================= */
const ICONS = {
  padang:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16a8 8 0 0 1-16 0Z"/><path d="M7 12c0-2.5 2-4 5-4s5 1.5 5 4"/><path d="M9 5v2M12 4v3M15 5v2"/></svg>`,
  rice:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13h18a9 9 0 0 1-18 0Z"/><path d="M5 13c1-4 4-6 7-6s6 2 7 6"/><path d="M9 21h6"/></svg>`,
  pizza:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 3 20c5.5 2.5 12.5 2.5 18 0L12 2Z"/><path d="M4.6 16.8c4.8 1.8 10 1.8 14.8 0"/><circle cx="12" cy="11" r="1"/><circle cx="10" cy="15" r="1"/><circle cx="14.5" cy="14.5" r="1"/></svg>`,
  noodles: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16a8 8 0 0 1-16 0Z"/><path d="M3 6l18-2M3 9l18-1"/><path d="M8 9v3M12 8.5V12M16 8v4"/></svg>`,
  chicken: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.5a5 5 0 0 1 4 8.5l-4.5 4.5a3.5 3.5 0 0 1-5-5l4.5-4.5a5 5 0 0 1 1-3.5Z"/><path d="m9.5 14.5-4 4a1.5 1.5 0 1 1-2-2l4-4"/></svg>`,
  coffee:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v3M10 2v3M14 2v3"/></svg>`,
  camera:  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3"/></svg>`
};

/* =========================================================================
   CATEGORIES & RESTAURANTS DATABASE
   ========================================================================= */
const CATEGORIES = [
  {
    name: "Padang",
    icon: ICONS.padang,
    tag: "Rendang, gulai, sambal ijo",
    photo: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/890f4e26-ef85-48ad-83bd-190333ed28b4_Go-Biz_20250124_143834.jpeg",
    bg: "#043b5c",
    restaurants: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bzeXEH3Dxn5LNEPEtn8MOQtN4Byx_o1QCrLhF_5I_bnlPEVCCjrAtJxE&s=10",
        name: "Padang Djuang",
        price: "Rp 0-25,000",
        location: "Jl. Pogung Kidul No.8A, Pogung Kidul, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        hours: "07:00-21:00",
        popular: "",
        notes: "",
        map: "https://www.google.com/maps/place/Padang+Djuang+-+Pogung/@-7.7622426,110.3753559,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a585254f418e1:0x6d9a271bd78fc1aa!8m2!3d-7.7622426!4d110.3753559!16s%2Fg%2F1pzr_74yx?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        img: "https://lh3.googleusercontent.com/grass-cs/AABkmLcmZkdewtZwiceomrEfe-NOya5zf-AMP_vFfOdrwKGtWdJWeJoGIkI5gG-AunJSM0JqqzwWYH5qW1y96CDdZN6Xi4HSgFGZU1B-p9PP5ntGWoWhrfLlKcyPealafpqMDTgPuyd_=w426-h240-k-no",
        name: "Rumah Makan Padang Sabana Murah 3 UGM",
        price: "Rp 1 - 25.000",
        location: "Gg. Swakarya, Kocoran, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        hours: "Sampai 22.00",
        popular: "",
        notes: "",
        map: "https://www.google.com/maps/place/Rumah+Makan+Padang+Sabana+Murah+3+UGM/@-7.7648278,110.38174,992m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e7a59b27c697f51:0xd7a55772a2bf67f1!8m2!3d-7.7648278!4d110.38174!16s%2Fg%2F11gfb4xd6v!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        img: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R7O5o9w_9WJ60WNjRvm5hWUNbTrGgJhcqsimLaWdlka3HXx99DOYTNo3uHVooze167ZdGSLt94Z0L6T_VSIbn-b016dsAR8GArJPz8D9beq1XjQIz5xDuXOQ7t39H-4Dk6ZwBq7A=s1360-w1360-h1020-rw",
        name: "Rumah Makan Padang Pergaulan",
        price: "Rp 14.000 - 50.000",
        location: "Jl. Naga No.24A, Karang Wuni, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        hours: "10.00 - 20.00",
        popular: "Nasi Rames Ayam Balado",
        notes: "Di harga yang ditawarkan, porsinya terbilang cukup banyak dengan potongan ayam dada. Rasanya juga masih medok dan khas.",
        map: "maps.app.goo.gl/p2j92rSMzgbnf86MA"
      }
    ]
  },
  {
    name: "Rice",
    icon: ICONS.rice,
    tag: "Nasi campur, fried rice, rice bowls",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFvOL7n6iqusOsLMF9iS5L9U4Pjfx1XEsBbxXPDQGnRT3wMSftcvx5mA&s=10",
    bg: "#1d5c4f",
    restaurants: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnu5aal9DKkfcwYOos4yaCF9VldgDfSrAr2gZtSP47YPG5OXfx4db1NqK&s=10",
        name: "Nasi Goreng Klebengan",
        price: "Rp 8,000-25,000",
        location: "Klebengan UGM, Jl. Gambir No.17, Karang Gayam, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        hours: "",
        popular: "",
        notes: "",
        map: "https://maps.app.goo.gl/UFLczNTqvQK2XQHE9"
      },
      {
        img: "https://lh3.googleusercontent.com/grass-cs/AABkmLfgNFQsxxWquFvaUak7UlpKZRMyZGiZ5TekL-NX8h1Cum4gXCLoqtnyS9EumhmdVgA8kpwLOOhA8q1hSSaYVsCk-wTffFCSpUlrYP0HGzBn2Cu_UGF47HALF88cMSK_Tf0fmO_4=w408-h544-k-no",
        name: "Sambel Cowek Karanggayam",
        price: "Rp 9.000 - 27.000",
        location: "Jl. Sendok No.119c, Manggung, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        hours: "",
        popular: "Nasi Udang Sambel Matah",
        notes: "Harganya relatif murah, cocok buat kumpul-kumpul atau nugas bareng. Tepungnya digoreng golden brown",
        map: "https://www.google.com/maps/place/Sambel+Cowek+Karanggayamm/@-7.7630138,110.3876779,124m/data=!3m1!1e3!4m6!3m5!1s0x2e7a59d6b80b4bfd:0x40602dee9eeead16!8m2!3d-7.7628586!4d110.3880142!16s%2Fg%2F11j1l41pmp!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSW7vwHQk7Q9rek3XnNWcIGrxgn8DHiIJc9x72hbZkXtFZMRrwhKt016E&s=10",
        name: "Nasi Balap Cucun",
        price: "Rp 15,000-20,000",
        location: "Srinindita 14, Jl. Kaliurang No.KM 5, Pogung Kidul, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        hours: "24/7",
        popular: "Porsi Jumbo",
        notes: "",
        map: "https://www.google.com/maps/place/Nasi+Balap+Cucun/@-7.7615867,110.378581,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a59c1b5227fb9:0xc53f8cdcd39b37f8!8m2!3d-7.7615867!4d110.378581!16s%2Fg%2F11v0jr1l1x?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  {
    name: "Pizza",
    icon: ICONS.pizza,
    tag: "Slices, personal pans, pasta",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGlRzdvQIFZQM3uIe4Gu_k6uQCFIVj14NH51m-Kg7o-AUW1biOrUyxOs&s=10",
    bg: "#7a3b24",
    restaurants: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-V523rITBVPhLnPHq99YVcXFtlhK05e-06nWOOOX4A&s=10",
        name: "Pizza Lebar",
        price: "Rp 1 - 25.000",
        location: "Ruko Nirwana, Jalan baru lembah UGM, Karang Malang Blok E 1, RT 06 RW 02, Caturtunggal, Depok, Sleman, Yogyakarta 55281",
        hours: "",
        popular: "",
        notes: "",
        map: "https://www.google.com/maps?client=opera-gx&udm&fvr=1&pvq=Cg0vZy8xMXkweHFma3Q1IhEKC3BpenphIGxlYmFyEAIYA4kBcVjeTyOTiBM&lqi=CgtwaXp6YSBsZWJhckiljpvLg72AgAhaGRAAEAEYABgBIgtwaXp6YSBsZWJhcjICaWSSARBwaXp6YV9yZXN0YXVyYW50&vet=10CAAQoqAOahcKEwjAnZ6zj4qYAxUAAAAAHQAAAAAQGg..i&cs=0&um=1&ie=UTF-8&fb=1&gl=id&sa=X&ftid=0x2e7a59001597452d:0x138893234fde5871"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWGwDTt7-CouaLeeq3RYRAi6xuh3FdwtX8P3yltKbsDG9cZTxuL883SPmm&s=10",
        name: "Panties Pizza Gejayan",
        price: "Rp 16.000 - 38.000",
        location: "Jl. Affandi No.18A, Karang Gayam, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        hours: "11.00 - 21.30",
        popular: "Pizzaderman",
        notes: "",
        map: "https://www.google.com/maps/place/Panties+Pizza+Jogja+Gejayan/data=!4m2!3m1!1s0x0:0xa346d5ecb9e8d73e?sa=X&ved=1t:2428&ictx=111"
      },
      {
        img: "https://lh3.googleusercontent.com/grass-cs/AABkmLdy3SHJNBKTmRo4chwdBlIbXwcsuBeUryXJllk0DEhC5amJIJtGTEhMXKmAqid_2xDceshxJGUKYLLbpnmsjco_00V_bwnwzi8qwr9Om4cAa0dURQMB46PhqwvegCI9NeYubuCV=s1360-w1360-h1020-rw",
        name: "FAVOR Patisserie Pizzeria & Eatery",
        price: "Rp 25.000 - 80.000",
        location: "Jl. C. Simanjuntak No.36a, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223",
        hours: "",
        popular: "Neopolitan Pepperoni Pizza",
        notes: "Selain menjual berbagai varian pizza, restoran ini juga menawarkan menu sampingan seperti pasta, rice bowl, burger, dan masih banyak lagi.",
        map: "https://maps.app.goo.gl/QGScT7f1auV7S4ij6"
      }
    ]
  },
  {
    name: "Noodles",
    icon: ICONS.noodles,
    tag: "Mie ayam, bakso, ramen",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUD8uK1haMzlVPq5yEG4jUGQzXFYMFsgpgxRAuDehtA&s=10",
    bg: "#5b4636",
    restaurants: [
      {
        img: "https://lh3.googleusercontent.com/grass-cs/AABkmLdhrlT818j0f-OZ7KIfK_el4SrNW_tqUPA6G4Kkcz3lrctQ20aFhasZ4A6NidQwbmjjNlHmC1p-YB5ud4Xd6H0q1ESQ6XO1maoQgAcdPBfVOueFy_VQJnnsDrUC02tt6oclNkhB=w408-h544-k-no",
        name: "Mie Doyok Gejayan",
        price: "Rp 11.000 - 44.000",
        location: "Jl. Affandi, Soropadan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        hours: "",
        popular: "Chili Oil Kwetiau",
        notes: "Mie nya enak, ada berbagai varian rasa yang unik.",
        map: "https://maps.app.goo.gl/Ui59jU4cHTdZ5TZd6"
      },
      {
        img: "https://lh3.googleusercontent.com/grass-cs/AABkmLdGyzE_6lcRh3xuaICWUOqJxg1gYAehycEBvQJjFk5NWnh6xJxHe5WNUkr-zODAzccaq7JrDLPIsski8JWa6GTsOgWIv_TgmxLUX5Ha6jBu-vrO4JKvujuBeXYOvZXvr364UCjnXdH4vCw=w408-h544-k-no",
        name: "Mie Sapi Jaya UNY",
        price: "Rp 13.000 - 25.000",
        location: "Gg. Anyelir No.3b, Karang Gayam, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        hours: "",
        popular: "Mi Sapi Iris",
        notes: "Untuk tekstur mi karetnya enak banget. Rasa bumbunya juga umami. Porsi pas dan pelayanannya oke, ga perlu nunggu lama.",
        map: "https://maps.app.goo.gl/ynYzBrXmbAFdtdng9"
      },
      {
        img: "https://lh3.googleusercontent.com/grass-cs/AABkmLcO_uD62Q1qMl-x806kcF5B21n2sJEj6AwGZoREh1Aaxk1Xea2z4Lt3_AVG1yTkaU3YDBDxGmKrLD__IGWLiPA-JPdIHY7lGKmUt2J4pZJU6oL_wCenAsg5XovYs58E8UBibdX6w-tMWlx9=w408-h305-k-no",
        name: "Mie Gacoan Gejayan",
        price: "Rp 12.000 - 30.000",
        location: "Jl. Affandi No.9, Karang Gayam, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        hours: "",
        popular: "Mie Gacoan lvl.5",
        notes: "Terkenal karena mie nya memiliki rasa pedas yang gurih dan nikmat.",
        map: "https://maps.app.goo.gl/cQbUj2f1au49sKr99"
      }
    ]
  },
  {
    name: "Fried chicken",
    icon: ICONS.chicken,
    tag: "Geprek, crispy, ayam bakar",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgHmjfcC0_xzxi_15jSVbkTcUKHwqA70S4bSAf67DPA&s=10",
    bg: "#7d4b12",
    restaurants: [
      {
        img: "https://lh3.googleusercontent.com/grass-cs/AABkmLdmkmHGq71iWFN66MTI6H87JH4XmOWPWo6ZA4OYuBqZAv23QBqlvtGxEC_J68G8yn929UrgGpyIUxAdBtORxIDVxAWnzD4OqzQWTHL3iVvnplHAmz1MQRmY4xQ8ozI2XteT_Nl--g=w408-h725-k-no",
        name: "Ayam Geprek Bu Rini Klebengan",
        price: "Rp 1 - 25.000",
        location: "Jl. Manggis No.CT.8, Karang Wuni, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        hours: "Sampai 00.00",
        popular: "",
        notes: "",
        map: "https://maps.app.goo.gl/MzmgMCxzvzZ9QCRU7"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJfljMSbtkzGppEAqOtTJ-Yfk_qoArNLhQUjZbnypMIhQ8qVImK68upRQ&s=10",
        name: "Maverick Chicken n Coffee",
        price: "Rp 17,000 - 30,000",
        location: "Km 5, Jalan Kaliurang, Tawangsari CT 2 Blk. A No.3, Kocoran, Caturtunggal, Depok, Sleman Regency, Special Region of Yogyakarta 55281",
        hours: "24/7",
        popular: "",
        notes: "",
        map: "https://www.google.com/maps/place/Maverick+Chicken+n+Coffee/@-7.7645773,110.3819766,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a590010e806e9:0x115c01c29128f1d6!8m2!3d-7.7645773!4d110.3819766!16s%2Fg%2F11ml9g57v2?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/3414f5f7-8dc6-42bf-b6b3-b0a53cc688df_Go-Biz_20240130_201232.jpeg",
        name: "LOS CIKEN - Jakal",
        price: "Rp 25.000 - 50.000",
        location: "Jl. Kaliurang Gg. Kinanti No.10 KM 4,5, Kocoran, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        hours: "Sampai 22.00",
        popular: "",
        notes: "",
        map: "https://www.google.com/maps?sca_esv=8528aeba63dde0f5&client=opera-gx&hs=7S0&udm&fvr=1&pvq=Cg0vZy8xMXZ6NHZiNTUxIg8KCUxPUyBDSUtFThACGAOJAdIdayCS8Shp&lqi=CglMT1MgQ0lLRU5IoamUzfi6gIAIWhcQABABGAAYASIJbG9zIGNpa2VuMgJpZJIBEmNoaWNrZW5fcmVzdGF1cmFudJoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQydHdWVTFIWTNkaVJWSlJWMWhPTkZFd2VIWmFibVJTVVdwQ1dVMXJSUkFC-gEECAAQPA&vet=10CAAQoqAOahcKEwiIvvGfj4qYAxUAAAAAHQAAAAAQBw..i&cs=0&um=1&ie=UTF-8&fb=1&gl=id&sa=X&ftid=0x2e7a59aa38831aa5:0x6928f192206b1dd2"
      }
    ]
  },
  {
    name: "Coffee & snacks",
    icon: ICONS.coffee,
    tag: "Kopi susu, toast, gorengan",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhvBEv2KhqZCZTDzehq9Ay8_LAOyTgdaeerDa0GNVmgLQsOhnE8L-ffs&s=10",
    bg: "#2e2a25",
    restaurants: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bafK_kSChOU9Ihz_QhCXmfk-MlrPQqPDpANK1Ekhbg&s=10",
        name: "JUMPSTART",
        price: "Rp 7,000-15,000",
        location: "Around UGM",
        hours: "24/7",
        popular: "",
        notes: "",
        map: ""
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPBserPKWLHZlkh56NOhfWL5i4wtcPaF9skDR4qFUEVRLZj_Unnc5cwEt&s=10",
        name: "Sembilan Coffee House",
        price: "Rp 18.000 - 25.000",
        location: "Jl. Pogung Kidul, Pogung Kidul, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        hours: "",
        popular: "Fruit Boom",
        notes: "Kopi filter dan espressonya unik, cocok untuk eksplorasi bagi pecinta kopi. Menu manis selain kopi hitamnya juga ga kalah banyak. Suasananya juga nyaman",
        map: "https://maps.app.goo.gl/2F5L3MFvS6R3q5Kj9"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhvBEv2KhqZCZTDzehq9Ay8_LAOyTgdaeerDa0GNVmgLQsOhnE8L-ffs&s=10",
        name: "Curio Roastery Coffee Project",
        price: "Rp 18.000 - 35.000",
        location: "Jl. Flamboyan, Karang Gayam, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        hours: "",
        popular: "Creamy White",
        notes: "Rasa kopi yang ditawarkan memang berjodoh dengan berbagai pilihan roti yang disediakan. Biji kopinya segar karena diproses langsung. Ada banyak varain beans utuh yang dijual juga.",
        map: "https://maps.app.goo.gl/tg83ii4ggNa9Sg7dA"
      }
    ]
  }
];

/* =========================================================================
   APP RENDERING & INTERACTIONS
   ========================================================================= */
const topSemiPaths = Array.from({ length: 8 }, (_, i) => {
  const r = 24 + i * 13;
  return `<path d="M 0 ${135 - r} L 8 ${135 - r} A ${r} ${r} 0 0 1 8 ${135 + r} L 0 ${135 + r}"/>`;
}).join("");
document.getElementById("geoTopLeft").innerHTML = topSemiPaths;
document.getElementById("geoTopRight").innerHTML = `<g transform="translate(180,0) scale(-1,1)">${topSemiPaths}</g>`;

const botArchPaths = Array.from({ length: 8 }, (_, i) => {
  const inset = 12 + i * 11;
  const r = 120 - inset;
  return `<path d="M ${inset} 420 L ${inset} 145 A ${r} ${r} 0 0 1 ${240 - inset} 145 L ${240 - inset} 420"/>`;
}).join("");
document.getElementById("geoBotLeft").innerHTML = botArchPaths;
document.getElementById("geoBotRight").innerHTML = botArchPaths;

const home = document.getElementById("home");
const foods = document.getElementById("foods");
const cats = document.getElementById("cats");

home.addEventListener("pointermove", (e) => {
  home.style.setProperty("--px", (e.clientX / innerWidth * 2 - 1).toFixed(3));
  home.style.setProperty("--py", (e.clientY / innerHeight * 2 - 1).toFixed(3));
});

const detailRow = (label, val) => `<dt>${label}</dt><dd>${val || '<span class="blank">Pending update</span>'}</dd>`;
const mapUrl = (u) => !u ? "" : /^https?:\/\//i.test(u) ? u : "https://" + u;
const initials = (n) => (n || "?").split(/\s+/).map((w) => w[0]).filter((ch) => ch && /[A-Za-z]/.test(ch)).slice(0, 2).map((ch) => ch.toUpperCase()).join("") || "?";

const renderRestaurant = (r, idx) => `
  <article class="pl">
    <div class="pl-head">
      <h3 class="pl-title"><span class="pl-no">${String(idx + 1).padStart(2, "0")}</span>${r.name || `Restaurant ${idx + 1}`}</h3>
      <span class="pl-badge">${r.price || "Price pending"}</span>
    </div>
    <div class="pl-row">
      <${r.map ? "a" : "div"} class="ph ${r.img ? "has-img" : ""}" ${r.map ? `href="${mapUrl(r.map)}" target="_blank" rel="noopener" aria-label="Open ${r.name || `Restaurant ${idx + 1}`} in Google Maps"` : ""}>
        <span class="ph-mono" aria-hidden="true">${initials(r.name)}</span>
        <img onerror="this.remove()" src="${r.img}" alt="${r.name || `Restaurant ${idx + 1}`} photo">
      </${r.map ? "a" : "div"}>
      <div class="pl-meta">
        <div class="meta-line"><strong>Location</strong><p class="${r.location ? "" : "blank"}">${r.location || "Campus area pending"}</p></div>
        <button class="more-btn" type="button" aria-expanded="false">More details <i class="chev"></i></button>
        <div class="more"><div class="inner">
          <dl>${detailRow("Hours", r.hours)}${detailRow("Popular", r.popular)}${detailRow("Notes", r.notes)}</dl>
          ${r.map ? `<a class="pill" href="${mapUrl(r.map)}" target="_blank" rel="noopener">Open in Maps</a>` : ""}
        </div></div>
      </div>
    </div>
  </article>`;

cats.innerHTML = CATEGORIES.map((c, i) => `
  <article class="cat" style="background:${c.bg}; --accent:${c.bg}">
    ${c.photo ? `<img class="cat-bg" src="${c.photo}" alt="" aria-hidden="true" onerror="this.remove()">` : ""}
    <button class="cat-h" type="button" aria-expanded="false" aria-controls="p${i}" title="${c.name} — ${c.tag}">
      <span class="cat-top"><span class="back-cue">← All</span><span class="cat-no">${String(i + 1).padStart(2, "0")}</span><span class="ce">${c.icon}</span></span>
      <span class="cat-label"><span class="cn">${c.name}</span><span class="cat-tag">${c.tag}</span></span>
    </button>
    <div class="panel" id="p${i}"><div class="list">${c.restaurants.map(renderRestaurant).join("")}</div></div>
  </article>`).join("");

const closeAllCats = () => {
  cats.classList.remove("has-open");
  [...cats.children].forEach((cat) => {
    cat.classList.remove("open");
    cat.querySelector(":scope > .cat-h").setAttribute("aria-expanded", "false");
  });
};

const openCat = (target) => {
  [...cats.children].forEach((cat) => {
    const active = cat === target;
    cat.classList.toggle("open", active);
    cat.querySelector(":scope > .cat-h").setAttribute("aria-expanded", active);
  });
  cats.classList.add("has-open");
  const panel = target.querySelector(".panel");
  if (panel) panel.scrollTop = 0;
};

cats.onclick = (e) => {
  const catBtn = e.target.closest(".cat-h");
  if (catBtn) {
    const box = catBtn.parentElement;
    box.classList.contains("open") ? closeAllCats() : openCat(box);
    return;
  }
  const moreBtn = e.target.closest(".more-btn");
  if (moreBtn) {
    const card = moreBtn.closest(".pl");
    const isOpen = !card.classList.contains("open");
    card.classList.toggle("open", isOpen);
    moreBtn.setAttribute("aria-expanded", isOpen);
  }
};

addEventListener("keydown", (e) => { if (e.key === "Escape" && cats.classList.contains("has-open")) closeAllCats(); });

/* =========================================================================
   AUDIO SYSTEM
   ========================================================================= */
const AUDIO_FILES = {
  home:       "Anthem.mp3",
  loading:    "AKu.mp3",
  categories: "",
  press:      "",
};
const AUDIO_VOLUME = 0.5;
const AUDIO_LOOP = { home: true, loading: false, categories: true };

let audioMuted = false;
try { audioMuted = localStorage.getItem("gamaeatsMuted") === "1"; } catch (e) {}

const tracks = {};
for (const name in AUDIO_FILES) {
  if (!AUDIO_FILES[name] || name === "press") continue;
  const a = new Audio(AUDIO_FILES[name]);
  a.loop = AUDIO_LOOP[name];
  a.volume = AUDIO_VOLUME;
  a.preload = "auto";
  a.muted = audioMuted;
  tracks[name] = a;
}

let wantedTrack = null;
function playTrack(name) {
  wantedTrack = name;
  for (const n in tracks) if (n !== name) { tracks[n].pause(); tracks[n].currentTime = 0; }
  if (tracks[name]) tracks[name].play().catch(() => {});
}

const unlockAudio = () => { if (wantedTrack) playTrack(wantedTrack); };
addEventListener("pointerdown", unlockAudio, { once: true });
addEventListener("keydown", unlockAudio, { once: true });

const pressSfx = AUDIO_FILES.press ? new Audio(AUDIO_FILES.press) : null;
if (pressSfx) { pressSfx.preload = "auto"; pressSfx.volume = AUDIO_VOLUME; pressSfx.muted = audioMuted; }
function playPress() {
  if (!pressSfx) return;
  try { pressSfx.currentTime = 0; } catch (e) {}
  pressSfx.play().catch(() => {});
}
addEventListener("click", (e) => {
  if (e.target.closest && e.target.closest(".cat-h, .browse-btn, .pill, .logo")) playPress();
});

const soundBtn = document.getElementById("soundBtn");
function updateSoundBtn() {
  soundBtn.classList.toggle("is-muted", audioMuted);
  soundBtn.setAttribute("aria-pressed", audioMuted);
  soundBtn.setAttribute("aria-label", audioMuted ? "Unmute sound" : "Mute sound");
}
soundBtn.addEventListener("click", () => {
  audioMuted = !audioMuted;
  for (const n in tracks) tracks[n].muted = audioMuted;
  if (pressSfx) pressSfx.muted = audioMuted;
  try { localStorage.setItem("gamaeatsMuted", audioMuted ? "1" : "0"); } catch (e) {}
  updateSoundBtn();
});
updateSoundBtn();

const volumeSlider = document.getElementById("volumeSlider");
volumeSlider.value = AUDIO_VOLUME * 100;
try {
  const savedVol = localStorage.getItem("gamaeatsVolume");
  if (savedVol !== null) volumeSlider.value = savedVol;
} catch (e) {}

function applyVolume() {
  for (const n in tracks) tracks[n].volume = volumeSlider.value / 100;
  if (pressSfx) pressSfx.volume = volumeSlider.value / 100;
}
volumeSlider.addEventListener("input", () => {
  applyVolume();
  try { localStorage.setItem("gamaeatsVolume", volumeSlider.value); } catch (e) {}
});
applyVolume();

/* =========================================================================
   PAGE SWITCHING + LOADING SCREEN
   ========================================================================= */
const WIPE_MS = 800;
const HOLD_MS = 900;
const LOADER_ON_BACK = true;
const loader = document.getElementById("loader");
let showingFoods = location.hash === "#foods";
let busy = false;

function applyView(isFoods) {
  showingFoods = isFoods;
  home.hidden = isFoods;
  foods.hidden = !isFoods;
  scrollTo(0, 0);
  if (isFoods) closeAllCats();
}

function revealView() {
  const v = showingFoods ? foods : home;
  v.classList.remove("view-in");
  void v.offsetWidth;
  v.classList.add("view-in");
  setTimeout(() => v.classList.remove("view-in"), 900);
}

function route() {
  if (busy) return;
  const isFoods = location.hash === "#foods";
  if (isFoods === showingFoods) return;
  if (!isFoods && !LOADER_ON_BACK) { applyView(false); playTrack("home"); return; }
  busy = true;
  loader.style.setProperty("--load-ms", (WIPE_MS + 140 + HOLD_MS) + "ms");
  loader.classList.add("show");
  playTrack("loading");
  setTimeout(() => {
    applyView(isFoods);
    setTimeout(() => {
      loader.classList.add("leaving");
      playTrack(isFoods ? "categories" : "home");
      revealView();
      setTimeout(() => {
        loader.classList.add("reset");
        loader.classList.remove("show", "leaving");
        void loader.offsetWidth;
        loader.classList.remove("reset");
        busy = false;
        route();
      }, WIPE_MS + 160);
    }, HOLD_MS);
  }, WIPE_MS + 160);
}
addEventListener("hashchange", route);
applyView(showingFoods);
playTrack(showingFoods ? "categories" : "home");