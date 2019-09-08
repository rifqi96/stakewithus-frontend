import mixin from '@/helpers';
import ValidatorsService from '@/services/ValidatorsService';

export default {
  namespaced: true,
  state: {
    validators: [],
    tableData: {
      headers: [
        {
          text: 'Validator Address',
          align: 'left',
          sortable: false,
          value: 'address',
        },
        {
          text: 'Proposer Priority',
          sortable: true,
          value: 'proposerPriority',
        },
        {
          text: 'Voting Power',
          sortable: true,
          value: 'votingPower',
        },
        {
          text: 'Public Key (type : value)',
          sortable: false,
          width: 20,
          value: 'pubKey',
        }
      ],
      items: [],
    },
  },
  getters: {
    validators: state => state.validators,
    tableData: state => state.tableData,
  },
  actions: {
    setValidators({ commit }, validators) {
      commit('setValidators', validators);
    },
    async fetchValidators({ commit }) {
      try {
        const res = await ValidatorsService.getAll();
        const validators = res.data;
        commit('setValidators', validators);
        commit('setTableDataItems', validators);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
  },
  mutations: {
    setValidators(state, validators) {
      state.validators = validators;
    },
    setTableDataItems(state, validators) {
      // Bail early
      if (!validators.length)
        return;
      const tableDataItems = validators.map(validator => {
        const votingPower = validator.VotingPowers[0].value || null;
        const proposerPriority = validator.proposerPriority || null;
        const pubKey = `${validator.pubKey.type} : ${validator.pubKey.value}`;

        validator.votingPower = mixin.methods.formatNum(votingPower, 0);
        validator.proposerPriority = mixin.methods.formatNum(proposerPriority, 0);
        validator.pubKey = pubKey;

        return validator;
      });

      state.tableData.items = tableDataItems;
    },
  },
};