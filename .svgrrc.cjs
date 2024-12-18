module.exports = {
  replaceAttrValues: {
    '#000': '{props.fill}', // #000인 svg는 fill prop으로 동적으로 변경 가능
    '#000000': '{props.fill}',
    '#fff': '{props.fill}', // #fff인 svg는 fill prop으로 동적으로 변경 가능
    '#ffffff': '{props.fill}',
  },
};
