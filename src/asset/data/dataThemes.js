/**
 * dataStyle: [
      "--layout-bg: #3d3d3d", // khi kéo suống dưới
      "--player-bg: #3d3d3d", // màu thanh phát nhạc 
      "--primary-bg: #3d3d3d", // màu bảng chọn giao diện
      "--purple-primary: #3d3d3d", // màu nút, hiện tại đang chọn
      "--box-hot-item-bg: rgba(255, 0, 234, 0.3)", // 
      "--box-hot-item-bg-hover: rgba(255, 0, 234, 0.3)", //
      "--link-text-hover: #ffd966", // màu các tùy chọn như: cá nhân, top chat, radio .... 
      "--text-item-hover: #f44336", // màu lựa chọn hiện tại
   ],
 */

export const themes = [
   {
      title: "Chủ Đề Mặc Định",
      items: [
         {
            name: "XONE",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/xone-thumbn.jpg",
            dataTheme: "dark",
            bgImg: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/xone-bg.jpg",
            bgPlaying: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1//images/theme/xone-miniplayer.jpg",
            bgHeader: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1//images/theme/xone-header.jpg",
            dataStyle: [
               "--purple-primary: #D1AB00",
               "--primary-bg: #363636",
               "--progressbar-active-bg: #d7cb1f",
               "--link-text-hover: #E5BB00",
               "--miniplayer-bg-img: url('https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/xone-miniplayer.jpg')",
               "--header-bg-img: url('https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/xone-header.jpg')",
            ],
         }, {
            name: "Zing Music Awards",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/zma.jpg",
            dataTheme: "blue",
            bgImg: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/zma.svg",
            bgPlaying: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-player/zma.png",
            bgHeader: false,
            dataStyle: [
               "--layout-bg: #37075d",
               "--primary-bg: #4B1178",
               "--queue-player-popup-bg: #5d218c",
               "--purple-primary: #ed2b91",
               "--link-text-hover: #fe63da",
               "--sidebar-popup-bg: #572f90",
               "--linear-gradient-bg: linear-gradient(to bottom, #740091, #2d1a4c)",
               "--miniplayer-bg-img: url('https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-player/zma.png')",
            ],
         }, {
            name: "Tháp Eiffel",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/eiffel.jpg",
            dataTheme: "dark",
            bgImg: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/eiffel.jpg",
            bgPlaying: false,
            bgHeader: false,
            dataStyle: ["--layout-bg: #282828", "--primary-bg: #3d3d3d"],
         },
      ],
   },
   {
     title: "Mobile",
     items: [
         { 
            name: "test",
            itemS: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZ72_q9Mjon9s8t2wBBsNgQ0L3epVFTEoag&usqp=CAU",
            dataTheme: "blue",
            bgImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZ72_q9Mjon9s8t2wBBsNgQ0L3epVFTEoag&usqp=CAU",
            bgPlaying: false, 
            bgHeader: false,
            dataStyle: false,
         }
     ]
   },
   {
      title: "Phong Cảnh Anime",
      items: [
         { 
            name: "Đường phố về đêm",
            itemS: "https://img6.thuthuatphanmem.vn/uploads/2022/02/25/background-duong-pho-anime-full-hd_081737938.jpeg",
            dataTheme: "blue",
            bgImg: "https://img6.thuthuatphanmem.vn/uploads/2022/02/25/background-duong-pho-anime-full-hd_081737938.jpeg",
            bgPlaying: false, 
            bgHeader: false,
            dataStyle: false,
         }, {
            name: "keping genshin",
            itemS: "https://gamelandvn.com/wp-content/uploads/anh/2020/11/keqing-thumbnail.jpg",
            dataTheme: "blue",
            bgImg: "https://cdn.discordapp.com/attachments/765620139126554644/826026547746963506/image0.gif",
            bgPlaying: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1//images/theme/xone-header.jpg",
            bgHeader: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1//images/theme/xone-header.jpg",
            dataStyle: false,
         }
      ],
   },
   {
      title: "Màu Tối",
      items: [
         {
            name: "Tối",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/dark.jpg",
            dataTheme: "dark",
            bgImg: false,
            bgPlaying: false,
            bgHeader: false,
            dataStyle: false,
         }, {
            name: "Tím",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/purple.jpg",
            dataTheme: "purple",
            bgImg: false,
            bgPlaying: false,
            bgHeader: false,
            dataStyle: false,
         }, {
            name: "Xanh Đậm",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/blue-light.jpg",
            dataTheme: "blue",
            bgImg: false,
            bgPlaying: false,
            bgHeader: false,
            dataStyle: false,
         }, {
            name: "Xanh Biển",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/blue.jpg",
            dataTheme: "blue-light",
            bgImg: false,
            bgPlaying: false,
            bgHeader: false,
            dataStyle: false,
         }, {
            name: "Xanh Lá",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/green.jpg",
            dataTheme: "blue-light",
            bgImg: false,
            bgPlaying: false,
            bgHeader: false,
            dataStyle: false,
         }, {
            name: "Nâu",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/brown.jpg",
            dataTheme: "brown",
            bgImg: false,
            bgPlaying: false,
            bgHeader: false,
            dataStyle: false,
         }, {
            name: "Hồng",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/pink.jpg",
            dataTheme: "pink",
            bgImg: false,
            bgPlaying: false,
            bgHeader: false,
            dataStyle: false,
         }, {
            name: "Đỏ",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/red.jpg",
            dataTheme: "red",
            bgImg: false,
            bgPlaying: false,
            bgHeader: false,
            dataStyle: false,
         },
      ],
   },
   {
      title: "Màu Sáng",
      items: [
         {
            name: "Sáng",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/light.jpg",
            dataTheme: "light",
            bgImg: false,
            bgPlaying: false,
            bgHeader: false,
            dataStyle: false,
         }, {
            name: "Xám",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/gray.jpg",
            dataTheme: "gray",
            bgImg: false,
            bgPlaying: false,
            bgHeader: false,
            dataStyle: false,
         }, {
            name: "Xanh Nhạt",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/green-light.jpg",
            dataTheme: "green-light",
            bgImg: false,
            bgPlaying: false,
            bgHeader: false,
            dataStyle: false,
         }, {
            name: "Hồng Cánh Sen",
            itemS: "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/pink-light.jpg",
            dataTheme: "pink-light",
            bgImg: false,
            bgPlaying: false,
            bgHeader: false,
            dataStyle: false,
         },
      ],
   },
];