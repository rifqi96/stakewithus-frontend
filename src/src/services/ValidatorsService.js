import axios from '@/plugins/axios';

export default {
  /**
   * Get all validators
   * @returns {Promise}
   */
  getAll() {
    return axios.get('/validators');
  },
};