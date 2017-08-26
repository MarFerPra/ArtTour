import colors from './colors';

const mappedContent = (path, history) => {

  switch (path) {
    case '/':
      return {
        left: {},
        center:  { text: 'ArtTour', style: { color: colors.white } },
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
      left: {
        icon: 'md-arrow-back',
        color: colors.white,
        type: 'ionicon',
        onPress: () => history.push('/code')
      },
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
