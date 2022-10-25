/* road map img data */
var screenSizeIosGroup = {
    col: [
        {key:"device", width:"20%", title:"모델(디바이스)", th_align:"center",  td_align:"center"},
        {key:"width", width:"20%", title:"폭(px)", th_align:"center", td_align:"center"},
        {key:"height", width:"20%", title:"이(px)", th_align:"center", td_align:"center"},
        {key:"deviceWidth", width:"20%", title:"장치 폭", th_align:"center", td_align:"center"},
        {key:"ratio", width:"20%", title:"비율", th_align:"center", td_align:"center"},
    ],
    ios : [
        {device:"Apple iPhone 8 Plus", width:"1080", height:"1920", deviceWidth:"1080", ratio:"16 : 9"},
        {device:"Apple iPhone 7 Plus", width:"1080", height:"1920", deviceWidth:"1080", ratio:"9 : 16"},
        {device:"Apple iPhone XR", width:"828", height:"1792", deviceWidth:"828", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone XS", width:"1125", height:"2436", deviceWidth:"1125", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone SE", width:"640", height:"1136", deviceWidth:"640", ratio:"16 : 9"},
        {device:"Apple iPhone XS Max", width:"1242", height:"2688", deviceWidth:"1242", ratio:"19 . 5 : 9"},
        {device:"Apple iPad Pro", width:"2732", height:"2048", deviceWidth:"2732", ratio:"3 : 4"},
        {device:"Apple iPhone 6 Plus", width:"1080", height:"1920", deviceWidth:"1080", ratio:"9 : 16"},
        {device:"Apple iPad Mini", width:"768", height:"1024", deviceWidth:"768", ratio:"3 : 4"},
        {device:"Apple iPhone 5 (5c,5s)", width:"640", height:"1136", deviceWidth:"320", ratio:"40 : 71"},
        {device:"Apple iPad Air", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPhone 4 (4, 4s)", width:"640", height:"960", deviceWidth:"320", ratio:"2 : 3"},
        {device:"Apple iPad Air 2", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPad Mini 4", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPad Mini 2", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPhone 3GS", width:"320", height:"480", deviceWidth:"320", ratio:"2 : 3"},
        {device:"Apple iPhone 8", width:"750", height:"1334", deviceWidth:"750", ratio:"16 : 9"},
        {device:"Apple iPhone X", width:"1125", height:"2436", deviceWidth:"1125", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 11", width:"828", height:"1792", deviceWidth:"828", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 11 Pro", width:"1125", height:"2436", deviceWidth:"1125", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 11 Pro Max", width:"1242", height:"2688", deviceWidth:"1242", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 6", width:"750", height:"1334", deviceWidth:"750", ratio:"9 : 16"},
        {device:"Apple iPhone 6s", width:"750", height:"1334", deviceWidth:"750", ratio:"9 : 16"},
        {device:"Apple iPhone 7", width:"750", height:"1334", deviceWidth:"750", ratio:"9 : 16"},
        {device:"Apple iPhone SE", width:"750", height:"1334", deviceWidth:"750", ratio:"16 : 9"},
        {device:"Apple iPad 10.2 (2020)", width:"2160", height:"1620", deviceWidth:"2160", ratio:"3 : 4"},
        {device:"Apple iPad Pro 11", width:"2388", height:"1668", deviceWidth:"2388", ratio:"10 : 7"},
        {device:"Apple iPad Pro 12.9", width:"2732", height:"2048", deviceWidth:"2732", ratio:"4 : 3"},
        {device:"Apple iPad Mini (2019)", width:"2048", height:"1536", deviceWidth:"2048", ratio:"4 : 3"},
        {device:"Apple iPad Pro 10.5", width:"2224", height:"1668", deviceWidth:"2224", ratio:"4 : 3"},
        {device:"Apple iPhone 12", width:"1170", height:"2532", deviceWidth:"1170", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 12 Mini", width:"1080", height:"2340", deviceWidth:"1080", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 12 Pro", width:"1170", height:"2532", deviceWidth:"1170", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 12 Pro Max", width:"1284", height:"2778", deviceWidth:"1284", ratio:"19 . 5 : 9"},
        {device:"Apple iPad Air (2019)", width:"2224", height:"1668", deviceWidth:"2224", ratio:"3 : 4"},
        {device:"Apple iPad Air (2020)", width:"2360", height:"1640", deviceWidth:"2360", ratio:"16 : 23"},
        {device:"Apple iPad 1 & 2", width:"768", height:"1024", deviceWidth:"768", ratio:"3 : 4"},
        {device:"Apple iPad 3 & 4", width:"1536", height:"2048", deviceWidth:"768", ratio:"3 : 4"},
    ],
    android : [
        {device:"Apple iPhone 8 Plus", width:"1080", height:"1920", deviceWidth:"1080", ratio:"16 : 9"},
        {device:"Apple iPhone 7 Plus", width:"1080", height:"1920", deviceWidth:"1080", ratio:"9 : 16"},
        {device:"Apple iPhone XR", width:"828", height:"1792", deviceWidth:"828", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone XS", width:"1125", height:"2436", deviceWidth:"1125", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone SE", width:"640", height:"1136", deviceWidth:"640", ratio:"16 : 9"},
        {device:"Apple iPhone XS Max", width:"1242", height:"2688", deviceWidth:"1242", ratio:"19 . 5 : 9"},
        {device:"Apple iPad Pro", width:"2732", height:"2048", deviceWidth:"2732", ratio:"3 : 4"},
        {device:"Apple iPhone 6 Plus", width:"1080", height:"1920", deviceWidth:"1080", ratio:"9 : 16"},
        {device:"Apple iPad Mini", width:"768", height:"1024", deviceWidth:"768", ratio:"3 : 4"},
        {device:"Apple iPhone 5 (5c,5s)", width:"640", height:"1136", deviceWidth:"320", ratio:"40 : 71"},
        {device:"Apple iPad Air", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPhone 4 (4, 4s)", width:"640", height:"960", deviceWidth:"320", ratio:"2 : 3"},
        {device:"Apple iPad Air 2", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPad Mini 4", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPad Mini 2", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPhone 3GS", width:"320", height:"480", deviceWidth:"320", ratio:"2 : 3"},
        {device:"Apple iPhone 8", width:"750", height:"1334", deviceWidth:"750", ratio:"16 : 9"},
        {device:"Apple iPhone X", width:"1125", height:"2436", deviceWidth:"1125", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 11", width:"828", height:"1792", deviceWidth:"828", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 11 Pro", width:"1125", height:"2436", deviceWidth:"1125", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 11 Pro Max", width:"1242", height:"2688", deviceWidth:"1242", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 6", width:"750", height:"1334", deviceWidth:"750", ratio:"9 : 16"},
        {device:"Apple iPhone 6s", width:"750", height:"1334", deviceWidth:"750", ratio:"9 : 16"},
        {device:"Apple iPhone 7", width:"750", height:"1334", deviceWidth:"750", ratio:"9 : 16"},
        {device:"Apple iPhone SE", width:"750", height:"1334", deviceWidth:"750", ratio:"16 : 9"},
        {device:"Apple iPad 10.2 (2020)", width:"2160", height:"1620", deviceWidth:"2160", ratio:"3 : 4"},
        {device:"Apple iPad Pro 11", width:"2388", height:"1668", deviceWidth:"2388", ratio:"10 : 7"},
        {device:"Apple iPad Pro 12.9", width:"2732", height:"2048", deviceWidth:"2732", ratio:"4 : 3"},
        {device:"Apple iPad Mini (2019)", width:"2048", height:"1536", deviceWidth:"2048", ratio:"4 : 3"},
        {device:"Apple iPad Pro 10.5", width:"2224", height:"1668", deviceWidth:"2224", ratio:"4 : 3"},
        {device:"Apple iPhone 12", width:"1170", height:"2532", deviceWidth:"1170", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 12 Mini", width:"1080", height:"2340", deviceWidth:"1080", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 12 Pro", width:"1170", height:"2532", deviceWidth:"1170", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 12 Pro Max", width:"1284", height:"2778", deviceWidth:"1284", ratio:"19 . 5 : 9"},
        {device:"Apple iPad Air (2019)", width:"2224", height:"1668", deviceWidth:"2224", ratio:"3 : 4"},
        {device:"Apple iPad Air (2020)", width:"2360", height:"1640", deviceWidth:"2360", ratio:"16 : 23"},
        {device:"Apple iPad 1 & 2", width:"768", height:"1024", deviceWidth:"768", ratio:"3 : 4"},
        {device:"Apple iPad 3 & 4", width:"1536", height:"2048", deviceWidth:"768", ratio:"3 : 4"},
    ],
    blackberry : [
        {device:"Apple iPhone 8 Plus", width:"1080", height:"1920", deviceWidth:"1080", ratio:"16 : 9"},
        {device:"Apple iPhone 7 Plus", width:"1080", height:"1920", deviceWidth:"1080", ratio:"9 : 16"},
        {device:"Apple iPhone XR", width:"828", height:"1792", deviceWidth:"828", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone XS", width:"1125", height:"2436", deviceWidth:"1125", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone SE", width:"640", height:"1136", deviceWidth:"640", ratio:"16 : 9"},
        {device:"Apple iPhone XS Max", width:"1242", height:"2688", deviceWidth:"1242", ratio:"19 . 5 : 9"},
        {device:"Apple iPad Pro", width:"2732", height:"2048", deviceWidth:"2732", ratio:"3 : 4"},
        {device:"Apple iPhone 6 Plus", width:"1080", height:"1920", deviceWidth:"1080", ratio:"9 : 16"},
        {device:"Apple iPad Mini", width:"768", height:"1024", deviceWidth:"768", ratio:"3 : 4"},
        {device:"Apple iPhone 5 (5c,5s)", width:"640", height:"1136", deviceWidth:"320", ratio:"40 : 71"},
        {device:"Apple iPad Air", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPhone 4 (4, 4s)", width:"640", height:"960", deviceWidth:"320", ratio:"2 : 3"},
        {device:"Apple iPad Air 2", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPad Mini 4", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPad Mini 2", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPhone 3GS", width:"320", height:"480", deviceWidth:"320", ratio:"2 : 3"},
        {device:"Apple iPhone 8", width:"750", height:"1334", deviceWidth:"750", ratio:"16 : 9"},
        {device:"Apple iPhone X", width:"1125", height:"2436", deviceWidth:"1125", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 11", width:"828", height:"1792", deviceWidth:"828", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 11 Pro", width:"1125", height:"2436", deviceWidth:"1125", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 11 Pro Max", width:"1242", height:"2688", deviceWidth:"1242", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 6", width:"750", height:"1334", deviceWidth:"750", ratio:"9 : 16"},
        {device:"Apple iPhone 6s", width:"750", height:"1334", deviceWidth:"750", ratio:"9 : 16"},
        {device:"Apple iPhone 7", width:"750", height:"1334", deviceWidth:"750", ratio:"9 : 16"},
        {device:"Apple iPhone SE", width:"750", height:"1334", deviceWidth:"750", ratio:"16 : 9"},
        {device:"Apple iPad 10.2 (2020)", width:"2160", height:"1620", deviceWidth:"2160", ratio:"3 : 4"},
        {device:"Apple iPad Pro 11", width:"2388", height:"1668", deviceWidth:"2388", ratio:"10 : 7"},
        {device:"Apple iPad Pro 12.9", width:"2732", height:"2048", deviceWidth:"2732", ratio:"4 : 3"},
        {device:"Apple iPad Mini (2019)", width:"2048", height:"1536", deviceWidth:"2048", ratio:"4 : 3"},
        {device:"Apple iPad Pro 10.5", width:"2224", height:"1668", deviceWidth:"2224", ratio:"4 : 3"},
        {device:"Apple iPhone 12", width:"1170", height:"2532", deviceWidth:"1170", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 12 Mini", width:"1080", height:"2340", deviceWidth:"1080", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 12 Pro", width:"1170", height:"2532", deviceWidth:"1170", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 12 Pro Max", width:"1284", height:"2778", deviceWidth:"1284", ratio:"19 . 5 : 9"},
        {device:"Apple iPad Air (2019)", width:"2224", height:"1668", deviceWidth:"2224", ratio:"3 : 4"},
        {device:"Apple iPad Air (2020)", width:"2360", height:"1640", deviceWidth:"2360", ratio:"16 : 23"},
        {device:"Apple iPad 1 & 2", width:"768", height:"1024", deviceWidth:"768", ratio:"3 : 4"},
        {device:"Apple iPad 3 & 4", width:"1536", height:"2048", deviceWidth:"768", ratio:"3 : 4"},
    ],
    osx : [
        {device:"Apple iPhone 8 Plus", width:"1080", height:"1920", deviceWidth:"1080", ratio:"16 : 9"},
        {device:"Apple iPhone 7 Plus", width:"1080", height:"1920", deviceWidth:"1080", ratio:"9 : 16"},
        {device:"Apple iPhone XR", width:"828", height:"1792", deviceWidth:"828", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone XS", width:"1125", height:"2436", deviceWidth:"1125", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone SE", width:"640", height:"1136", deviceWidth:"640", ratio:"16 : 9"},
        {device:"Apple iPhone XS Max", width:"1242", height:"2688", deviceWidth:"1242", ratio:"19 . 5 : 9"},
        {device:"Apple iPad Pro", width:"2732", height:"2048", deviceWidth:"2732", ratio:"3 : 4"},
        {device:"Apple iPhone 6 Plus", width:"1080", height:"1920", deviceWidth:"1080", ratio:"9 : 16"},
        {device:"Apple iPad Mini", width:"768", height:"1024", deviceWidth:"768", ratio:"3 : 4"},
        {device:"Apple iPhone 5 (5c,5s)", width:"640", height:"1136", deviceWidth:"320", ratio:"40 : 71"},
        {device:"Apple iPad Air", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPhone 4 (4, 4s)", width:"640", height:"960", deviceWidth:"320", ratio:"2 : 3"},
        {device:"Apple iPad Air 2", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPad Mini 4", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPad Mini 2", width:"2048", height:"1536", deviceWidth:"2048", ratio:"3 : 4"},
        {device:"Apple iPhone 3GS", width:"320", height:"480", deviceWidth:"320", ratio:"2 : 3"},
        {device:"Apple iPhone 8", width:"750", height:"1334", deviceWidth:"750", ratio:"16 : 9"},
        {device:"Apple iPhone X", width:"1125", height:"2436", deviceWidth:"1125", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 11", width:"828", height:"1792", deviceWidth:"828", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 11 Pro", width:"1125", height:"2436", deviceWidth:"1125", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 11 Pro Max", width:"1242", height:"2688", deviceWidth:"1242", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 6", width:"750", height:"1334", deviceWidth:"750", ratio:"9 : 16"},
        {device:"Apple iPhone 6s", width:"750", height:"1334", deviceWidth:"750", ratio:"9 : 16"},
        {device:"Apple iPhone 7", width:"750", height:"1334", deviceWidth:"750", ratio:"9 : 16"},
        {device:"Apple iPhone SE", width:"750", height:"1334", deviceWidth:"750", ratio:"16 : 9"},
        {device:"Apple iPad 10.2 (2020)", width:"2160", height:"1620", deviceWidth:"2160", ratio:"3 : 4"},
        {device:"Apple iPad Pro 11", width:"2388", height:"1668", deviceWidth:"2388", ratio:"10 : 7"},
        {device:"Apple iPad Pro 12.9", width:"2732", height:"2048", deviceWidth:"2732", ratio:"4 : 3"},
        {device:"Apple iPad Mini (2019)", width:"2048", height:"1536", deviceWidth:"2048", ratio:"4 : 3"},
        {device:"Apple iPad Pro 10.5", width:"2224", height:"1668", deviceWidth:"2224", ratio:"4 : 3"},
        {device:"Apple iPhone 12", width:"1170", height:"2532", deviceWidth:"1170", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 12 Mini", width:"1080", height:"2340", deviceWidth:"1080", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 12 Pro", width:"1170", height:"2532", deviceWidth:"1170", ratio:"19 . 5 : 9"},
        {device:"Apple iPhone 12 Pro Max", width:"1284", height:"2778", deviceWidth:"1284", ratio:"19 . 5 : 9"},
        {device:"Apple iPad Air (2019)", width:"2224", height:"1668", deviceWidth:"2224", ratio:"3 : 4"},
        {device:"Apple iPad Air (2020)", width:"2360", height:"1640", deviceWidth:"2360", ratio:"16 : 23"},
        {device:"Apple iPad 1 & 2", width:"768", height:"1024", deviceWidth:"768", ratio:"3 : 4"},
        {device:"Apple iPad 3 & 4", width:"1536", height:"2048", deviceWidth:"768", ratio:"3 : 4"},
    ],
    window : [
        {device:"Apple iPhone 8 Plus", width:"1080", height:"1920", deviceWidth:"1080", ratio:"16 : 9"},
    ]

}



































