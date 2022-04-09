// const { url } = require("inspector");

module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#16b2c3',
          'secondary': '#8518a3',
        },
      },
    ],
  },
  content: ["./index.html"],
  theme: {
    screens: {
      'laptop' : '1200px',
    },
    colors: {
      'primary': '#16b2c3',
      'secondary': '#8518a3',
      'dark-bg': '#202124',
      'white': '#ffffff',
    },
    extend: {
      backgroundImage: {
        'img1' : "url('https://desque.sfo3.cdn.digitaloceanspaces.com/desque/img1.jpg')",
        'img2' : "url('https://desque.sfo3.cdn.digitaloceanspaces.com/desque/img2.jpg')",
        'img3' : "url('https://desque.sfo3.cdn.digitaloceanspaces.com/desque/img3.jpg')",
        'img4' : "url('https://desque.sfo3.cdn.digitaloceanspaces.com/desque/img4.jpg')",
        'img5' : "url('https://desque.sfo3.cdn.digitaloceanspaces.com/desque/img5.jpg')",
        'img6' : "url('https://desque.sfo3.cdn.digitaloceanspaces.com/desque/img6.jpg')",
        'clogo1' : 'https://desque.sfo3.cdn.digitaloceanspaces.com/desque/clogo1.jpg',
        'clogo2' : 'https://desque.sfo3.cdn.digitaloceanspaces.com/desque/clogo2.jpg',
        'clogo3' : 'https://desque.sfo3.cdn.digitaloceanspaces.com/desque/clogo3.jpg',
        'clogo4' : 'https://desque.sfo3.cdn.digitaloceanspaces.com/desque/clogo4.jpg',
        'clogo5' : 'https://desque.sfo3.cdn.digitaloceanspaces.com/desque/clogo5.jpg',
        'clogo6' : 'https://desque.sfo3.cdn.digitaloceanspaces.com/desque/clogo6.jpg',
        'office-img' : "url('https://desque.sfo3.cdn.digitaloceanspaces.com/desque/mario-gogh-VBLHICVh-lI-unsplash.jpg')",
      }
    },
  },
  // plugins: [require("daisyui")],
}
