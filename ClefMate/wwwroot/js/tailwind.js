tailwind.config = {
    theme: {
      extend: {
        colors: {
  'clef-banner-bg': '#FFF8EE',
  'clef-primary': '#6F0F79',
  'clef-secondry': '#e4f4f1',
 'clef-heading': '#465761',
 'clef-paragraph': '#666666',
 'clef-dark': '#244c5a',
 'clef-black': '#000000',
 'clef-footer': '#244c5a',
 'clef-footer-text': '#6c868f',
 'clef-white': '#fff',
 'clef-bg': '#f9f9fc',
 'clef-gradient': 'linear-gradient(to left bottom, #64b0ae, #4eb0c4, #4eadd9, #6da6e7, #9a9be9)',
 'clef-gray': '#EDF5FF',
 'clef-boxshadow-primary': '1px 4px 20px -2px rgba(0, 0, 0, 0.1)',
 'clef-boxshadow-secondry': '0 20px 50px rgba(0, 0, 0, 0.1)',
 'clef-boxshadow-regular': ' 0px 2px 12px 0px #e7e7e7',
 'clef-boxshadow-extra': ' 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
 'gradient': 'linear-gradient(to left bottom, #64b0ae, #4eb0c4, #4eadd9, #6da6e7, #9a9be9)',
        },
      animation:{
      'back-in-up': 'backInUp 1s 1',
             },
keyframes: {
  backInUp: {
    "0%": { transform: "translateY(1200px) scale(0.7)", opacity: 0.7 },
    "80%": { transform: "translateY(0px) scale(0.7)", opacity: 0.7 },
    "100%": { transform: "scale(1)", opacity: 1 }
  }
}    
      }
    }
  }
  