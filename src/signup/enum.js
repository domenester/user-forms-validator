const userEnum = {
  INPUT_NAME: {
    label: 'Nome',
    type: 'string',
    field: 'input',
    length: {
      min: 2,
      max: 20,
    },
  },
  INPUT_LASTNAME: {
    label: 'Sobrenome',
    type: 'string',
    field: 'input',
    length: {
      min: 2,
      max: 20,
    },
  },
  INPUT_BIRTH: {
    label: 'Data de Nascimento',
    type: 'date',
    field: 'input',
  },
  INPUT_EMAIL: {
    label: 'E-mail',
    type: 'string',
    field: 'input',
    data: {
      subType: 'email',
    },
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
