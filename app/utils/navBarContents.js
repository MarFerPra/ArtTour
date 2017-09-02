import colors from './colors';

const mappedContent = (path, history) => {

  switch (path) {
    case '/':
      return {
        left: {},
        center:  { text: 'ART TOUR', style: { color: colors.white } },
        right: {}
      };
    case '/code':
      return {
        left: {},
        center:  { text: 'Code Entry', style: { color: colors.white } },
        right: {}
      };
    case '/info':
    return {
      left: {},
      center: { text: 'Piece Information', style: { color: colors.white } },
      right: {}
    };
    default:
      return {
        left: {},
        center: {},
        right: {}
      }
    }
}



const mapContent = (path, history) => {
  return mappedContent(path, history);
}

export default mapContent;
