const customTheme = {
    'code[class*="language-"]': {
      color: '#d4d4d4',
      background: 'transparent',
      fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
      fontSize: '1em',
      lineHeight: '1.5',
      direction: 'ltr',
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      tabSize: '4',
      hyphens: 'none',
    },
    'pre[class*="language-"]': {
      color: '#d4d4d4',
      background: 'white',
      fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
      fontSize: '1em',
      lineHeight: '1.5',
      direction: 'ltr',
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      tabSize: '4',
      hyphens: 'none',
      padding: '1em',
      margin: '.5em 0',
      overflow: 'auto',
      borderRadius: '0.3em',
    },
    'span.token.tag': {
      color: '#569CD6', // Cor para as tags HTML
    },
    'span.token.attr-name': {
      color: '#9CDCFE', // Cor para os nomes dos atributos
    },
    'span.token.attr-value': {
      color: '#CE9178', // Cor para os valores dos atributos
    },
    'span.token.punctuation': {
      color: '#D4D4D4', // Cor para a pontuação
    },
    // Adicione mais estilos conforme necessário
  };
  
  export default customTheme;
  