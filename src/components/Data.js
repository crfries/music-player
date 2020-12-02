import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Serendipity",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      artist: "Philanthrope",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10249",
      color: ["#383b26", "#aa3b33"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Ful Off",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/c85a5f6166a48001820ba3dc7e1da639281e00b3-1024x1024.jpg",
      artist: "Nokiaa, Nofeels",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8888",
      color: ["#c2bfac", "#fed39e"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Slim Bobby",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      artist: "Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10448",
      color: ["#437abc", "#ea7496"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "The End",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/f9ad13db0a7c6e6a086a3a17a15ff92cd69b2d7e-1024x1024.jpg",
      artist: "Philanthrope, Fujitsu",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8518",
      color: ["#000000", "#bababa"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Flushing the Stairs",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",
      artist: "Leavv",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9917",
      color: ["#559362", "#acb17d"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
