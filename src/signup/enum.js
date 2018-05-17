const userEnum = {
  INPUT_NAME: {
    label: 'Nome',
  },
};

const physicalUserEnum = {
  ...userEnum,
  INPUT_CPF: {
    label: 'CPF',
  },
};

export default {
  userEnum,
  physicalUserEnum,
};
